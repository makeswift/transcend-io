import { strict } from 'assert'
import { EntryCollection, createClient } from 'contentful'

import { IIntegration } from '@/generated/contentful'

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
  limit,
  filter,
}: {
  skip: string | number
  limit: string | number
  filter?: string
}): Promise<EntryCollection<IIntegration>> {
  return contentfulClient.getEntries<IIntegration>({
    content_type: 'integration',
    limit,
    skip,
    include: 10,
    order: '-fields.isFeatured,fields.title',
    'fields.logoSquare': { exists: true },
    'fields.integrationStatus': 'ONLINE',
    ...(filter ? { 'fields.title[match]': filter } : {}),
  })
}

export const DEFAULT_PARAMS = { limit: 20, skip: 0 }
