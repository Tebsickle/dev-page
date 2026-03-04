import { config } from "../../config/config"

interface Commit {
  message: string
  url: string
  author: {
    name: string
  }
  date: string
}

export interface CommitData {
  commits: Commit[]
  error?: string
}

interface CacheEntry {
  data: CommitData
  timestamp: number
}

const cache: Map<string, CacheEntry> = new Map()

function getCacheKey(owner: string, repo: string, limit: number): string {
  return `${owner}/${repo}/${limit}`
}

function isCacheValid(timestamp: number): boolean {
  return Date.now() - timestamp < config.RECENT_FETCH_CACHE_DURATION
}

export async function fetchRecentCommits(
  owner: string,
  repo: string,
  limit: number = 10
): Promise<CommitData> {
  const cacheKey = getCacheKey(owner, repo, limit)

  // Check cache only if caching is enabled
  if (config.RECENT_FETCH_CACHING) {
    const cachedEntry = cache.get(cacheKey)
    if (cachedEntry && isCacheValid(cachedEntry.timestamp)) {
      return cachedEntry.data
    }
  }

  try {
    const response = await fetch(
      `https://api.github.com/repos/${owner}/${repo}/commits?per_page=${limit}`
    )

    if (!response.ok) {
      const errorData = {
        commits: [],
        error: `GitHub API error: ${response.status}`,
      }
      if (config.RECENT_FETCH_CACHING) {
        cache.set(cacheKey, { data: errorData, timestamp: Date.now() })
      }
      return errorData
    }

    const data = await response.json()

    const commits: Commit[] = data.map((commit: any) => ({
      message: commit.commit.message.split('\n')[0], // Get first line of commit message
      url: commit.html_url,
      author: {
        name: commit.commit.author.name,
      },
      date: commit.commit.author.date,
    }))

    const commitData = { commits }
    if (config.RECENT_FETCH_CACHING) {
      cache.set(cacheKey, { data: commitData, timestamp: Date.now() })
    }
    return commitData
  } catch (error) {
    const errorData = {
      commits: [],
      error: error instanceof Error ? error.message : 'Failed to fetch commits',
    }
    if (config.RECENT_FETCH_CACHING) {
      cache.set(cacheKey, { data: errorData, timestamp: Date.now() })
    }
    return errorData
  }
}
