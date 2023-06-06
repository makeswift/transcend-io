import { ContentfulCollection } from "contentful"

import { DEFAULT_FEED_PARAMS } from "@/lib/utils"
import { IIntegration } from "@/generated/contentful"

export type PaginationParams = {
  limit: number
  skip: number
  order?: string
  filter?: string
}

export async function fetchIntegrations({
  limit,
  skip,
  order,
  filter,
}: PaginationParams = DEFAULT_FEED_PARAMS): Promise<
  ContentfulCollection<IIntegration>
> {
  try {
    const results = await fetch(
      "/api/contentful/integrations?" +
        new URLSearchParams({
          limit: limit.toString(),
          skip: skip.toString(),
          ...(order ? { order } : {}),
          ...(filter ? { filter } : {}),
        })
    ).then((r) => r.json())

    if (results.error) {
      throw new Error(
        "Failed to fetch Integrations\n" +
          JSON.stringify(results.error, null, 2)
      )
    }

    return results
  } catch (e: any) {
    throw new Error(e)
  }
}
