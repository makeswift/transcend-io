import { useRouter } from 'next/router'
import { Ref, forwardRef, useMemo, useState } from 'react'

import { Combobox } from '@headlessui/react'
import { ContentfulCollection } from 'contentful'
import debounce from 'lodash.debounce'
import useSWR from 'swr'

import { Spinner } from '@/components/Spinner'
import { IIntegration } from '@/generated/contentful'
import { Search } from '@/generated/icons'
import { getCacheKey } from '@/lib/utils'

type Props = {
  className?: string
  label?: string
  placeholder?: string
  hideLabel?: boolean
}

export const DEFAULT_PARAMS = { limit: 10, filter: '' }

export const IntegrationsSearch = forwardRef(function IntegrationsSearch(
  { className, label = 'Search', placeholder = 'Search', hideLabel }: Props,
  ref: Ref<HTMLDivElement>,
) {
  const router = useRouter()
  const [{ filter, limit }, setFilter] = useState(DEFAULT_PARAMS)
  const { data, isLoading } = useSWR(
    filter && getCacheKey('integrations/search', { filter, limit }),
    () => fetchIntegrationsSearch({ filter, limit }),
  )
  const debouncedSetFilter = useMemo(
    () => debounce((pattern: string) => setFilter(prev => ({ ...prev, filter: pattern })), 200),
    [],
  )

  return (
    <Combobox
      ref={ref}
      as="div"
      className={className}
      onChange={(item: IIntegration) => router.push(`/integrations/#`)}
    >
      <Combobox.Label className="search-label" hidden={hideLabel}>
        {label}
      </Combobox.Label>
      <div className="relative mt-2">
        <Combobox.Input
          className="search-input"
          onChange={e => debouncedSetFilter(e.currentTarget.value)}
          placeholder={placeholder}
        />
        <Combobox.Button className="search-icon">
          {isLoading ? (
            <Spinner className="text-gray-400" aria-hidden="true" />
          ) : (
            <Search className="text-gray-400" aria-hidden="true" />
          )}
        </Combobox.Button>
        {!isLoading && (
          <Combobox.Options className="search-options">
            {data && data.items.length > 0 ? (
              data.items.map(item => (
                <Combobox.Option key={item.sys.id} value={item} className="search-option">
                  {item.fields.title}
                </Combobox.Option>
              ))
            ) : (
              <div className="text-md py-4 text-center">No posts</div>
            )}
          </Combobox.Options>
        )}
      </div>
    </Combobox>
  )
})

export async function fetchIntegrationsSearch({ limit, filter } = DEFAULT_PARAMS): Promise<
  ContentfulCollection<IIntegration>
> {
  try {
    const results = await fetch(
      '/api/contentful/integrations?' +
        new URLSearchParams({
          limit: limit.toString(),
          filter,
        }),
    ).then(r => r.json())

    if (results.error) {
      throw new Error('Failed to fetch Integrations\n' + JSON.stringify(results.error, null, 2))
    }

    return results
  } catch (e: any) {
    throw new Error(e)
  }
}
