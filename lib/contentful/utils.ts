import { CONTENT_TYPE } from "@/lib/generated/contentful"
import { ContentTypeCollection, Field } from "contentful"
import { DEFAULT_FEED_PARAMS } from "./defaults"

type FieldMap = { id: string; name: string; path: string }

export function resolveFieldMappings(
  rootTypeId: string,
  contentTypes: ContentTypeCollection,
  filter: (field: Field) => boolean = () => true,
  path: { id: string; name: string }[] = [],
  mappings: FieldMap[] = []
): FieldMap[] {
  const rootType = contentTypes.items.find((ct) => ct.sys.id === rootTypeId)

  if (!rootType || path.length > 4) return mappings

  rootType.fields.forEach((field) => {
    const fieldId = field.id
    const linkedContentTypes = [
      ...new Set(
        field.validations?.flatMap(({ linkContentType }) =>
          Array.isArray(linkContentType) && linkContentType.length > 0
            ? linkContentType
            : []
        )
      ),
    ]

    if (field.type === "Link" && field.linkType === "Entry") {
      if (linkedContentTypes.length > 0) {
        linkedContentTypes.forEach((id) => {
          resolveFieldMappings(
            id,
            contentTypes,
            filter,
            [...path, { id: fieldId, name: field.name }],
            mappings
          )
        })
      } else {
        resolveFieldMappings(
          fieldId,
          contentTypes,
          filter,
          [...path, { id: fieldId, name: field.name }],
          mappings
        )
      }
    } else if (filter(field)) {
      mappings.push({
        id: [...path.map(({ id }) => id), field.id].join("."),
        name: [
          field.name,
          ...path
            .slice()
            .reverse()
            .map(({ name }) => name),
        ].join(" < "),
        path: `fields.${[...path.map(({ id }) => id), field.id].join(
          ".fields."
        )}`,
      })
    }
  })

  return mappings
}

export async function getContentTypeOptions({
  contentTypeId,
  filter,
  query,
}: {
  contentTypeId: CONTENT_TYPE
  filter?: (field: Field) => boolean
  query: string
}): Promise<{ id: string; label: string; value: string }[]> {
  const contentTypes: ContentTypeCollection = await fetch(
    "/api/contentful/content_types"
  ).then((r) => r.json())

  return resolveFieldMappings(contentTypeId, contentTypes, filter)
    .filter(({ name }) => name.toLowerCase().includes(query.toLowerCase()))
    .map(({ id, name, path }) => ({ id, label: name, value: path }))
}

export function getFeedCacheKey(
  type: string,
  { limit, skip, filter } = DEFAULT_FEED_PARAMS
) {
  return `/contentful/${type}?limit=${limit}&skip=${skip}&filter=${filter}`
}
