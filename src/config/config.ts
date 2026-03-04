const isDev = import.meta.env.DEV

export const config = {
    // RecentFetch Settings
    RECENT_FETCH_CACHING: isDev ? false : true, // Set to false to disable caching
    RECENT_FETCH_CACHE_DURATION: 2 * 60 * 1000, // 2 minutes in milliseconds
    COMMIT_FETCH_COUNT: 10
}