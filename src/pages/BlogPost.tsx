import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import Navbar from '../components/Navbar'
import '../styles/Blog.css'
import '../styles/BlogPost.css'
import { parseMarkdownFrontmatter } from '../utils/blog/frontmatter'

const markdownModules = import.meta.glob('../blog/*.md', {
	query: '?raw',
	import: 'default',
}) as Record<string, () => Promise<string>>

export default function BlogPost() {
	const { slug = '' } = useParams()
	const [content, setContent] = useState('')
	const [title, setTitle] = useState(`${slug}.md`)
	const [author, setAuthor] = useState('Unknown author')
	const [date, setDate] = useState('Unknown date')
	const [status, setStatus] = useState<'loading' | 'ready' | 'not-found'>('loading')

	const moduleLoader = useMemo(() => {
		const target = `/${slug}.md`
		const entry = Object.entries(markdownModules).find(([path]) => path.endsWith(target))
		return entry?.[1]
	}, [slug])

	useEffect(() => {
		document.body.style.overflowY = 'hidden'

		if (!moduleLoader) {
			setStatus('not-found')
			setContent('')
			setTitle(`${slug}.md`)
			setAuthor('Unknown author')
			setDate('Unknown date')
			return
		}

		let isActive = true
		setStatus('loading')

		moduleLoader()
			.then((markdown) => {
				if (!isActive) return
				const parsed = parseMarkdownFrontmatter(markdown)
				setContent(parsed.content)
				setTitle(parsed.frontmatter.title || slug)
				setAuthor(parsed.frontmatter.author || 'Unknown author')
				setDate(parsed.frontmatter.date || 'Unknown date')
				setStatus('ready')
			})
			.catch(() => {
				if (!isActive) return
				setStatus('not-found')
				setContent('')
				setTitle(`${slug}.md`)
				setAuthor('Unknown author')
				setDate('Unknown date')
			})

		return () => {
			isActive = false
		}
	}, [moduleLoader])

	return (
		<>
			<Navbar highlight="blog" disabled="" />
			<div className="blog-content">
				<article className="blog-card blog-posts">
					<div className="blog-list blog-markdown">
						<h1 className="blog-header">{title}</h1>
						{status === 'ready' && (
							<div className="blog-post-meta">
								<span className="blog-post-author">Author: {author}</span>
								<span className="blog-post-date">{date}</span>
							</div>
						)}
						{status === 'loading' && <p>Loading post...</p>}
						{status === 'not-found' && (
							<>
								<p>Markdown file not found.</p>
								<Link to="/blog" className="blog-back-link">
									Back to all posts
								</Link>
							</>
						)}
						{status === 'ready' && (
							<ReactMarkdown>
								{content}
							</ReactMarkdown>
						)}
					</div>
				</article>
			</div>
		</>
	)
}
