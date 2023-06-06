export const DEFAULT_FEED_PARAMS = {
  limit: 30,
  skip: 0,
  filter: "",
}

export function getCacheKey(
  base: string,
  params: Record<string, string | number | null | undefined | boolean> = {}
) {
  return `${base}?${new URLSearchParams(
    Object.entries(params).reduce(
      (acc, [key, value]) =>
        value == null
          ? acc
          : {
              ...acc,
              [key]: `${value}`,
            },
      {}
    )
  ).toString()}`
}
