export const DEFAULT_FEED_PARAMS = {
  limit: 30,
  skip: 0,
}

export function getCacheKey(base: string, params: Record<string, any> = {}) {
  return `${base}?${JSON.stringify(Object.entries(params).filter(([, v]) => v != null))}`
}
