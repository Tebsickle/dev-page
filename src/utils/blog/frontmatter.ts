export interface BlogFrontmatter {
	title?: string
	date?: string
	author?: string
}

export interface ParsedMarkdown {
	frontmatter: BlogFrontmatter
	content: string
}

export function parseMarkdownFrontmatter(markdown: string): ParsedMarkdown {
	const frontmatterRegex = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/
	const match = markdown.match(frontmatterRegex)

	if (!match) {
		return {
			frontmatter: {},
			content: markdown,
		}
	}

	const rawFrontmatter = match[1]
	const content = markdown.slice(match[0].length)
	const frontmatter: BlogFrontmatter = {}

	rawFrontmatter.split(/\r?\n/).forEach((line) => {
		const keyValueMatch = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/)
		if (!keyValueMatch) return

		const key = keyValueMatch[1]
		const value = keyValueMatch[2].trim().replace(/^['\"]|['\"]$/g, '')

		if (key === 'title' || key === 'date' || key === 'author') {
			frontmatter[key] = value
		}
	})

	return {
		frontmatter,
		content,
	}
}
