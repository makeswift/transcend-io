import { IIntegration } from "@/lib/generated/contentful"
import { EntryCollection, createClient } from "contentful"
import { strict } from "assert"
import { DEFAULT_FEED_PARAMS } from "./defaults"

strict(process.env.CONTENTFUL_SPACE_ID)
strict(process.env.CONTENTFUL_ACCESS_TOKEN)
strict(process.env.CONTENTFUL_ENVIRONMENT)

export const contentfulClient = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
})

export function getIntegrations({
  skip,
  order,
  limit,
  filter,
}: {
  skip: string | number
  limit: string | number
  order?: string
  filter?: string
} = DEFAULT_FEED_PARAMS): Promise<EntryCollection<IIntegration>> {
  return contentfulClient.getEntries<IIntegration>({
    content_type: "integration",
    limit,
    skip,
    include: 10,
    order,
    ...(filter ? { "fields.title[match]": filter } : {}),
  })
}
