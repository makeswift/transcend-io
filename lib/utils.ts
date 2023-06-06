export const DEFAULT_FEED_PARAMS = {
  limit: 30,
  skip: 0,
}

export function getCacheKey(base: string, params: Record<string, any> = {}) {
  return `${base}?${JSON.stringify(
    Object.entries(params)
      .sort((a, b) => (a[0] < b[0] ? -1 : 1))
      .filter(([, v]) => v != null),
  )}`
}
