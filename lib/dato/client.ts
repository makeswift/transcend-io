import { TypedDocumentNode } from '@graphql-typed-document-node/core'
import { GraphQLClient } from 'graphql-request'
import { type RequestDocument, Variables, request as graphqlRequest } from 'graphql-request'

export const client = new GraphQLClient('https://graphql.datocms.com/', {
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_CMS_API_TOKEN}`,
    'X-Exclude-Invalid': 'true',
  },
})

export function request<TDocument = any>(
  document: RequestDocument | TypedDocumentNode<TDocument, Variables>,
  variables?: Variables,
) {
  return graphqlRequest<TDocument, Variables>('https://graphql.datocms.com/', document, variables, {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_DATO_CMS_API_TOKEN}`,
    'X-Exclude-Invalid': 'true',
  })
}
