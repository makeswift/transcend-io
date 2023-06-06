import Link from 'next/link'
import { useRouter } from 'next/router'
import { ComponentPropsWithoutRef, useState } from 'react'
import { useDebounce } from 'react-use'

import { Combobox } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import useSWR from 'swr'

import { BlogSearchDocument, PostModelFilter, PostRecord } from '@/generated/dato'
import { request } from '@/lib/dato/client'
import { getCacheKey } from '@/lib/utils'

import { Spinner } from '../Spinner'

type Props = {
  className?: string
}

export function BlogSearch({ className }: Props) {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState<PostModelFilter | undefined>()
  const { data, isLoading } = useSWR(getCacheKey('blog/search', { filter }), () =>
    request(BlogSearchDocument, { filter }),
  )
  const router = useRouter()

  useDebounce(
    () => setFilter({ title: { matches: { pattern: query, caseSensitive: false } } }),
    200,
    [query],
  )

  return (
    <Combobox
      as="div"
      className={className}
      onChange={(item: PostRecord) => router.push(`/blog/${item.slug}`)}
    >
      <Combobox.Label className="label">Search</Combobox.Label>
      <div className="relative mt-1.5">
        <Combobox.Input
          className={clsx(
            'w-full rounded-md border border-black border-opacity-20 bg-white px-4 py-3 pr-10 shadow-sm placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm',
          )}
          onChange={e => setQuery(e.currentTarget.value)}
          displayValue={(item: PostRecord) => item.title}
        />
        <Combobox.Button className="absolute inset-y-0 right-0 flex items-center rounded-r-md px-2 focus:outline-none">
          {isLoading ? (
            <Spinner className="text-black" />
          ) : (
            <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          )}
        </Combobox.Button>
        {!isLoading && (
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {data && data.allPosts.length > 0 ? (
              data.allPosts.map(post => (
                <Combobox.Option
                  key={post.id}
                  value={post}
                  className={({ active }) =>
                    clsx(
                      'relative flex cursor-default select-none py-2 pl-3 pr-9',
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                    )
                  }
                >
                  {({ active, selected }) => (
                    <>
                      <span className={clsx('block truncate', selected && 'font-semibold')}>
                        {post.title}
                      </span>

                      {selected && (
                        <span
                          className={clsx(
                            'absolute inset-y-0 right-0 flex items-center pr-4',
                            active ? 'text-white' : 'text-indigo-600',
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      )}
                    </>
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
}
