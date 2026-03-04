import '../styles/Blog.css'
import { Link } from 'react-router-dom'
import Navbar from "../components/Navbar";
import { parseMarkdownFrontmatter } from '../utils/blog/frontmatter'

const markdownFiles = import.meta.glob('../blog/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const posts = Object.entries(markdownFiles)
  .map(([path, markdown]) => {
    const slug = path.split('/').pop()?.replace('.md', '')
    if (!slug) return null

    const { frontmatter } = parseMarkdownFrontmatter(markdown)

    return {
      slug,
      title: frontmatter.title || slug,
      author: frontmatter.author || 'Unknown author',
      date: frontmatter.date || 'Unknown date',
    }
  })
  .filter((post): post is { slug: string; title: string; author: string; date: string } => Boolean(post))
  .sort((a, b) => a.slug.localeCompare(b.slug))

export default function Blog() {
  document.body.style.overflowY = "hidden";
  return (
    <>
      <Navbar highlight="blog" disabled="blog" />
      <div className="blog-content">
        <div className="blog-card blog-posts">
          <h1 className="blog-header">Developer Blog</h1>
          <div className="blog-list">
            {posts.length === 0 ? (
              <p style={{ textAlign: "center", padding: "2rem" }}>No posts found.</p>
            ) : (
              posts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-item">
                  <h3 className="blog-item-title">{post.title}</h3>
                  <div className="blog-item-meta">
                    <span className="blog-item-author">Author: {post.author}</span>
                    <span className="blog-item-date">{post.date}</span>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  )
}