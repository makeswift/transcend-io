import { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'

import clsx from 'clsx'
import useSWR from 'swr'

import { fetchIntegrations } from '@/lib/contentful/fetchers'
import { DEFAULT_FEED_PARAMS, getCacheKey } from '@/lib/utils'

type Props = {
  className?: string
}

export function IntegrationsFeed({ className }: Props) {
  const [query, setQuery] = useState('')
  const [{ limit, skip, filter }, setParams] = useState(DEFAULT_FEED_PARAMS)
  const { data, isLoading } = useSWR(getCacheKey('integrations', { limit, skip, filter }), () =>
    fetchIntegrations({ limit, skip, filter }),
  )
  const [pages, setPages] = useState(
    data ? [...Array.from({ length: data.total / limit }).keys()] : [],
  )

  useDebounce(
    () => {
      setParams(p => ({ ...p, skip: 0, filter: query }))
    },
    200,
    [query],
  )

  useEffect(() => {
    if (!data?.total) return

    setPages([...Array.from({ length: data.total / limit }).keys()])
  }, [data?.total, limit])

  const currentIndex = skip / limit

  return (
    <div className={clsx(className, 'relative flex flex-col gap-4')}>
      <input
        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        value={query}
        onChange={e => setQuery(e.currentTarget.value)}
      />
      <div className="flex flex-wrap justify-center gap-8">
        {data
          ? data.items.map(({ fields, sys }) => (
              <div key={sys.id} className="w-[315px] rounded-lg border p-10">
                {fields.title}
              </div>
            ))
          : Array.from({ length: limit }).map((_, index) => <FeedItemSkeleton key={index} />)}
      </div>

      <nav className="sticky bottom-0 flex items-center justify-between border-t border-gray-200 px-4 sm:px-0">
        <div className="-mt-px flex w-0 flex-1">
          <a
            href="#"
            className="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Previous
          </a>
        </div>
        <div className="hidden md:-mt-px md:flex">
          {pages.slice(Math.max(0, currentIndex - 3), Math.max(currentIndex + 4, 7)).map(index => (
            <span
              key={index}
              onClick={() => setParams(p => ({ ...p, skip: index * limit }))}
              className={clsx(
                'inline-flex items-center border-t-2 px-4 pt-4 text-sm font-medium',
                skip / limit === index
                  ? 'border-indigo-500 text-indigo-600'
                  : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
              )}
            >
              {index + 1}
            </span>
          ))}
        </div>
        <div className="-mt-px flex w-0 flex-1 justify-end">
          <a
            href="#"
            className="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Next
          </a>
        </div>
      </nav>
    </div>
  )
}

function FeedItemSkeleton() {
  return (
    <div className="min-h-[150px] w-[315px] rounded-lg border border-gray-300 p-10 shadow">
      <div className="flex animate-pulse flex-col items-center justify-center">
        <div className="h-[50px] w-[50px] rounded-full bg-slate-700"></div>
        <div className="h-2 rounded bg-slate-700"></div>
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 h-2 rounded bg-slate-700"></div>
            <div className="col-span-1 h-2 rounded bg-slate-700"></div>
          </div>
          <div className="h-2 rounded bg-slate-700"></div>
        </div>
      </div>
    </div>
  )
}
