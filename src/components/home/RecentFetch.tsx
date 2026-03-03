import { useEffect, useState } from 'react'
import { fetchRecentCommits } from '../../utils/home/RecentFetchAPI'

interface Commit {
  message: string
  url: string
  author: {
    name: string
  }
  date: string
}

export default function RecentFetch() {
  const [commits, setCommits] = useState<Commit[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const getCommits = async () => {
      setLoading(true)
      const result = await fetchRecentCommits('Tebsickle', 'dev-page', 10)

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
          <a href={commit.url} target="_blank" rel="noopener noreferrer" className="commit-link">
            View Commit →
          </a>
        </div>
      ))}
    </div>
  )
}
