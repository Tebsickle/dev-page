import { useEffect, useRef } from 'react'
import * as three from 'three'

// Define the structure for each node in our particle network
interface Node {
	position: three.Vector3 // 3D position of the node
	velocity: three.Vector3 // Movement velocity for animation
	mesh: three.Mesh // The visual sphere representing the node
}

export default function Background() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		// Initialize the WebGL renderer with anti-aliasing and transparency
		const renderer = new three.WebGLRenderer({ canvas, antialias: true, alpha: true })
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

		// Create the scene that will hold all our 3D objects
		const scene = new three.Scene()

		// Set up camera with 60 degree field of view
		const camera = new three.PerspectiveCamera(60, 1, 0.1, 100)
		camera.position.z = 5 // Move camera back to see more nodes

		// Camera rotation configuration for circular orbit
		const CAMERA_RADIUS = 5 // Distance from center of scene
		const CAMERA_ROTATION_SPEED = 0.0010 // Speed of camera orbit (radians per frame)
		let cameraAngle = 0 // Current angle of camera rotation

		// Configuration for the particle network
		const NODE_COLOR = 0xa90046 // Primary color for nodes and connection lines
		const NODE_COLOR_ALT = 0x00d4ff // Alternate color for some nodes (cyan/blue)
		const NODE_COLOR_MIX = 0x7b1fa2 // Mixed color for connections between primary and alt nodes (purple)
		const ALT_COLOR_PROBABILITY = 0.3 // Probability (0-1) that a node uses the alternate color
		const NODE_COUNT = 100 // Total number of nodes to create
		const CONNECTION_DISTANCE = 2.2 // Maximum distance to draw connections between nodes
		const NODE_SIZE = 0.015 // Radius of each node sphere
		const MOVEMENT_SPEED = 0.3 // How fast nodes drift around
		const BOUNDARY = 4 // Keep nodes within this boundary

		// Array to store all node objects
		const nodes: Node[] = []

		// Create geometry and materials that will be reused for all nodes
		// Using shared geometry and materials improves performance
		const nodeGeometry = new three.SphereGeometry(NODE_SIZE, 16, 16)
		const nodeMaterial = new three.MeshBasicMaterial({ color: NODE_COLOR })
		const nodeMaterialAlt = new three.MeshBasicMaterial({ color: NODE_COLOR_ALT })

		// Generate all nodes with random positions and velocities
		for (let i = 0; i < NODE_COUNT; i++) {
			// Randomly choose which material to use based on probability
			const useAltColor = Math.random() < ALT_COLOR_PROBABILITY
			const material = useAltColor ? nodeMaterialAlt : nodeMaterial
			
			// Create a mesh (3D object) for this node
			const mesh = new three.Mesh(nodeGeometry, material)
			
			// Assign random position within the boundary
			const position = new three.Vector3(
				(Math.random() - 0.5) * BOUNDARY * 2,
				(Math.random() - 0.5) * BOUNDARY * 2,
				(Math.random() - 0.5) * BOUNDARY * 2
			)
			mesh.position.copy(position)
			
			// Assign random velocity for smooth drifting motion
			const velocity = new three.Vector3(
				(Math.random() - 0.5) * MOVEMENT_SPEED,
				(Math.random() - 0.5) * MOVEMENT_SPEED,
				(Math.random() - 0.5) * MOVEMENT_SPEED
			)
			
			// Add the node mesh to the scene
			scene.add(mesh)
			
			// Store the node data for later use
			nodes.push({ position, velocity, mesh })
		}

		// Create three separate line segment groups for different connection types
		// This allows us to color connections based on the nodes they connect
		
		// Lines connecting primary nodes to other primary nodes
		const linePrimaryGeometry = new three.BufferGeometry()
		const linePrimaryMaterial = new three.LineBasicMaterial({ 
			color: NODE_COLOR, 
			transparent: true,
			opacity: 0.3
		})
		const linePrimarySegments = new three.LineSegments(linePrimaryGeometry, linePrimaryMaterial)
		scene.add(linePrimarySegments)
		
		// Lines connecting alt nodes to other alt nodes
		const lineAltGeometry = new three.BufferGeometry()
		const lineAltMaterial = new three.LineBasicMaterial({ 
			color: NODE_COLOR_ALT, 
			transparent: true,
			opacity: 0.3
		})
		const lineAltSegments = new three.LineSegments(lineAltGeometry, lineAltMaterial)
		scene.add(lineAltSegments)
		
		// Lines connecting primary nodes to alt nodes (mixed)
		const lineMixGeometry = new three.BufferGeometry()
		const lineMixMaterial = new three.LineBasicMaterial({ 
			color: NODE_COLOR_MIX, 
			transparent: true,
			opacity: 0.3
		})
		const lineMixSegments = new three.LineSegments(lineMixGeometry, lineMixMaterial)
		scene.add(lineMixSegments)

		// Function to update all connection lines between nearby nodes
		const updateConnections = () => {
			// Separate arrays for different connection types
			const primaryPositions: number[] = [] // Primary to primary connections
			const altPositions: number[] = [] // Alt to alt connections
			const mixPositions: number[] = [] // Primary to alt connections
			
			// Check each pair of nodes to see if they should be connected
			for (let i = 0; i < nodes.length; i++) {
				for (let j = i + 1; j < nodes.length; j++) {
					const nodeA = nodes[i]
					const nodeB = nodes[j]
					
					// Calculate distance between the two nodes
					const distance = nodeA.position.distanceTo(nodeB.position)
					
					// If nodes are close enough, create a line between them
					if (distance < CONNECTION_DISTANCE) {
						// Determine the type of connection based on node materials
						const nodeAIsPrimary = nodeA.mesh.material === nodeMaterial
						const nodeBIsPrimary = nodeB.mesh.material === nodeMaterial
						
						// Choose which array to add this connection to
						let targetArray: number[]
						if (nodeAIsPrimary && nodeBIsPrimary) {
							// Both nodes are primary color
							targetArray = primaryPositions
						} else if (!nodeAIsPrimary && !nodeBIsPrimary) {
							// Both nodes are alt color
							targetArray = altPositions
						} else {
							// One primary, one alt - use mixed color
							targetArray = mixPositions
						}
						
						// Add the start point (node A position)
						targetArray.push(nodeA.position.x, nodeA.position.y, nodeA.position.z)
						// Add the end point (node B position)
						targetArray.push(nodeB.position.x, nodeB.position.y, nodeB.position.z)
					}
				}
			}
			
			// Update each line geometry with its respective positions
			linePrimaryGeometry.setAttribute(
				'position',
				new three.Float32BufferAttribute(primaryPositions, 3)
			)
			lineAltGeometry.setAttribute(
				'position',
				new three.Float32BufferAttribute(altPositions, 3)
			)
			lineMixGeometry.setAttribute(
				'position',
				new three.Float32BufferAttribute(mixPositions, 3)
			)
		}

		// Handle window resizing to keep canvas responsive
		const resize = () => {
			const { clientWidth, clientHeight } = canvas
			renderer.setSize(clientWidth, clientHeight, false)
			camera.aspect = clientWidth / Math.max(clientHeight, 1)
			camera.updateProjectionMatrix()
		}

		resize()
		window.addEventListener('resize', resize)

		// Animation loop - runs every frame
		let frameId = 0
		const animate = () => {
			// Rotate the camera around the scene in a circular orbit
			// This creates a parallax effect that reveals the 3D depth
			cameraAngle += CAMERA_ROTATION_SPEED
			camera.position.x = Math.cos(cameraAngle) * CAMERA_RADIUS
			camera.position.z = Math.sin(cameraAngle) * CAMERA_RADIUS
			// Keep camera always looking at the center of the scene
			camera.lookAt(0, 0, 0)

			// Update each node's position based on its velocity
			nodes.forEach(node => {
				// Move the node
				node.position.add(node.velocity.clone().multiplyScalar(0.01))
				
				// Bounce off boundaries - reverse velocity when hitting edges
				if (Math.abs(node.position.x) > BOUNDARY) {
					node.velocity.x *= -1
					// Clamp position to prevent nodes from escaping
					node.position.x = Math.sign(node.position.x) * BOUNDARY
				}
				if (Math.abs(node.position.y) > BOUNDARY) {
					node.velocity.y *= -1
					node.position.y = Math.sign(node.position.y) * BOUNDARY
				}
				if (Math.abs(node.position.z) > BOUNDARY) {
					node.velocity.z *= -1
					node.position.z = Math.sign(node.position.z) * BOUNDARY
				}
				
				// Update the visual mesh position to match the logical position
				node.mesh.position.copy(node.position)
			})
			
			// Recalculate which nodes should be connected
			updateConnections()
			
			// Render the scene from the camera's perspective
			renderer.render(scene, camera)
			
			// Schedule next frame
			frameId = requestAnimationFrame(animate)
		}

		animate()

		// Cleanup function - runs when component unmounts
		return () => {
			window.removeEventListener('resize', resize)
			cancelAnimationFrame(frameId)
			
			// Dispose of geometries and materials to free memory
			nodeGeometry.dispose()
			nodeMaterial.dispose()
			nodeMaterialAlt.dispose()
			linePrimaryGeometry.dispose()
			linePrimaryMaterial.dispose()
			lineAltGeometry.dispose()
			lineAltMaterial.dispose()
			lineMixGeometry.dispose()
			lineMixMaterial.dispose()
			renderer.dispose()
		}
	}, [])

	return <canvas ref={canvasRef} className="background-canvas" />
}
