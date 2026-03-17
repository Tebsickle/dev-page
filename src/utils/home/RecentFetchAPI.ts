import { config } from "../../config/config"

interface Commit {
  message: string
  url: string
  repo: string
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

function getProfileCacheKey(username: string, limit: number): string {
  return `profile/${username}/${limit}`
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
      repo: repo,
      author: {
        name: commit.commit.author.name,
      },
      date: commit.commit.author.date,
    }))
    .filter((commit: Commit) => commit.author.name !== 'github-actions[bot]')

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

export async function fetchAllProfileCommits(
  username: string,
  limit: number = 15
): Promise<CommitData> {
  const cacheKey = getProfileCacheKey(username, limit)

  // Check cache only if caching is enabled
  if (config.RECENT_FETCH_CACHING) {
    const cachedEntry = cache.get(cacheKey)
    if (cachedEntry && isCacheValid(cachedEntry.timestamp)) {
      return cachedEntry.data
    }
  }

  try {
    // Fetch user's public repositories sorted by recently updated
    const reposResponse = await fetch(
      `https://api.github.com/users/${username}/repos?type=public&sort=updated&per_page=100&direction=desc`
    )

    if (!reposResponse.ok) {
      const errorData = {
        commits: [],
        error: `Failed to fetch repositories: ${reposResponse.status}`,
      }
      if (config.RECENT_FETCH_CACHING) {
        cache.set(cacheKey, { data: errorData, timestamp: Date.now() })
      }
      return errorData
    }

    const repos = await reposResponse.json()

    // Fetch commits from each repository (main branch only)
    const allCommits: Commit[] = []

    for (const repo of repos) {
      try {
        const commitsResponse = await fetch(
          `https://api.github.com/repos/${username}/${repo.name}/commits?per_page=5`
        )

        if (commitsResponse.ok) {
          const commitsData = await commitsResponse.json()
          const commits = commitsData.map((commit: any) => ({
            message: commit.commit.message.split('\n')[0],
            url: commit.html_url,
            repo: repo.name,
            author: {
              name: commit.commit.author.name,
            },
            date: commit.commit.author.date,
          }))
          .filter((commit: Commit) => commit.author.name !== 'github-actions[bot]')
          allCommits.push(...commits)
        }
      } catch {
        // Skip this repo if commit fetch fails
        continue
      }
    }

    // Sort by date descending and return top N commits
    const sortedCommits = allCommits
      .sort(
        (a, b) =>
          new Date(b.date).getTime() - new Date(a.date).getTime()
      )
      .slice(0, limit)

    const commitData = { commits: sortedCommits }
    if (config.RECENT_FETCH_CACHING) {
      cache.set(cacheKey, { data: commitData, timestamp: Date.now() })
    }
    return commitData
  } catch (error) {
    const errorData = {
      commits: [],
      error: error instanceof Error ? error.message : 'Failed to fetch profile commits',
    }
    if (config.RECENT_FETCH_CACHING) {
      cache.set(cacheKey, { data: errorData, timestamp: Date.now() })
    }
    return errorData
  }
}
