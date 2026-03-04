import { useEffect, useState } from 'react'
import { fetchRecentCommits } from '../../utils/home/RecentFetchAPI'
import { config } from '../../config/config'

interface Commit {
  message: string
  url: string
  author: {
    name: string
  }
  date: string
}

function formatCommitDate(dateString: string): string {
  const date = new Date(dateString)
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'Just now'
  if (diffMins < 60) return `${diffMins} minute${diffMins !== 1 ? 's' : ''} ago`
  if (diffHours < 24) return `${diffHours} hour${diffHours !== 1 ? 's' : ''} ago`
  if (diffDays < 7) return `${diffDays} day${diffDays !== 1 ? 's' : ''} ago`
  
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
}

export default function RecentFetch() {
  const [commits, setCommits] = useState<Commit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getCommits = async () => {
      setLoading(true)
      const result = await fetchRecentCommits('Tebsickle', 'dev-page', config.COMMIT_FETCH_COUNT)

      if (result.error) {
        setError(result.error)
      } else {
        setCommits(result.commits)
      }

      setLoading(false)
    }

    getCommits()
  }, [])

  if (loading) {
    return <div className="recent-fetch">Loading commits...</div>
  }

  if (error) {
    return <div className="recent-fetch error">Error: {error}</div>
  }

  if (commits.length === 0) {
    return <div className="recent-fetch">No commits found</div>
  }

  return (
    <div className="recent-fetch">
      {commits.map((commit, index) => (
        <div key={index} className="commit-item">
          <p className="commit-message">{commit.message}</p>
          <div className="commit-meta">
            <span className="commit-author">{commit.author.name}</span>
            <span className="commit-date">{formatCommitDate(commit.date)}</span>
          </div>
          <a href={commit.url} target="_blank" rel="noopener noreferrer" className="commit-link">
            View Commit →
          </a>
        </div>
      ))}
    </div>
  )
}
