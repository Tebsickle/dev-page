import { useEffect, useRef } from 'react'
import * as three from 'three'

export default function Background() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		const canvas = canvasRef.current
		if (!canvas) return

		const renderer = new three.WebGLRenderer({ canvas, antialias: true, alpha: true })
		renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

		const scene = new three.Scene()

		const camera = new three.PerspectiveCamera(60, 1, 0.1, 100)
		camera.position.z = 3

		const geometry = new three.BoxGeometry(1, 1, 1)
		const material = new three.MeshStandardMaterial({ color: 0x7b1fa2 })
		const cube = new three.Mesh(geometry, material)
		scene.add(cube)

		const light = new three.DirectionalLight(0xffffff, 1)
		light.position.set(2, 2, 3)
		scene.add(light)

		const resize = () => {
			const { clientWidth, clientHeight } = canvas
			renderer.setSize(clientWidth, clientHeight, false)
			camera.aspect = clientWidth / Math.max(clientHeight, 1)
			camera.updateProjectionMatrix()
		}

		resize()
		window.addEventListener('resize', resize)

		let frameId = 0
		const animate = () => {
			cube.rotation.x += 0.01
			cube.rotation.y += 0.012
			renderer.render(scene, camera)
			frameId = requestAnimationFrame(animate)
		}

		animate()

		return () => {
			window.removeEventListener('resize', resize)
			cancelAnimationFrame(frameId)
			geometry.dispose()
			material.dispose()
			renderer.dispose()
		}
	}, [])

	return <canvas ref={canvasRef} className="background-canvas" />
}
