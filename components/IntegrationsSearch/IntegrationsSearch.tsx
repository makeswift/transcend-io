import { useRouter } from 'next/router'
import { Ref, forwardRef, useMemo, useState } from 'react'

import { Combobox } from '@headlessui/react'
import clsx from 'clsx'
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

export const DEFAULT_PARAMS = { limit: 10, filter: '', order: 'fields.title' }

export const IntegrationsSearch = forwardRef(function IntegrationsSearch(
  { className, label = 'Search', placeholder = 'Search', hideLabel }: Props,
  ref: Ref<HTMLDivElement>,
) {
  const router = useRouter()
  const [{ filter, limit, order }, setFilter] = useState(DEFAULT_PARAMS)
  const { data, isLoading } = useSWR(
    filter && getCacheKey('integrations/search', { filter, limit, order }),
    () => fetchIntegrationsSearch({ filter, limit, order }),
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
      <Combobox.Label className="label text-xl font-bold" hidden={hideLabel}>
        {label}
      </Combobox.Label>
      <div className="relative mt-1.5">
        <Combobox.Input
          className={clsx(
            'placeholder:text-md focus:border-indigo-500 focus:ring-indigo-500 flex h-10 w-full items-center rounded-full border border-black border-opacity-20 bg-white px-4 pr-10 text-lg shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 sm:text-sm',
          )}
          onChange={e => debouncedSetFilter(e.currentTarget.value)}
          displayValue={(item: IIntegration) => item.fields.title ?? 'Untitled'}
          placeholder={placeholder}
        />
        <Combobox.Button className="absolute inset-y-0 right-3 flex items-center focus:outline-none">
          {isLoading ? (
            <Spinner className="text-gray-400" aria-hidden="true" />
          ) : (
            <Search className="text-gray-400" aria-hidden="true" />
          )}
        </Combobox.Button>
        {!isLoading && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data && data.items.length > 0 ? (
              data.items.map(item => (
                <Combobox.Option
                  key={item.sys.id}
                  value={item}
                  className={({ active }) =>
                    clsx(
                      'relative flex cursor-pointer select-none py-2 pl-3 pr-9',
                      active ? 'bg-blue-100 text-white' : 'text-gray-900',
                    )
                  }
                >
                  {({ selected }) => (
                    <span className={clsx('block truncate', selected && 'font-semibold')}>
                      {item.fields.title}
                    </span>
                  )}
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

export async function fetchIntegrationsSearch({ limit, filter, order } = DEFAULT_PARAMS): Promise<
  ContentfulCollection<IIntegration>
> {
  try {
    const results = await fetch(
      '/api/contentful/integrations?' +
        new URLSearchParams({
          limit: limit.toString(),
          filter,
          order,
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
