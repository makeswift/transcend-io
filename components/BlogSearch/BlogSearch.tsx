import { useRouter } from 'next/router'
import { Ref, forwardRef, useMemo, useState } from 'react'

import { Combobox } from '@headlessui/react'
import clsx from 'clsx'
import debounce from 'lodash.debounce'
import useSWR from 'swr'

import { BlogSearchDocument, PostModelFilter, PostRecord } from '@/generated/dato'
import { Search } from '@/generated/icons'
import { client } from '@/lib/dato/client'
import { getCacheKey } from '@/lib/utils'

type Props = {
  className?: string
  label?: string
  placeholder?: string
}

export const BlogSearch = forwardRef(function BlogSearch(
  { className, label = 'Search', placeholder = 'Search' }: Props,
  ref: Ref<HTMLDivElement>,
) {
  const router = useRouter()
  const [filter, setFilter] = useState<PostModelFilter | undefined>()
  const { data, isLoading } = useSWR(filter && getCacheKey('blog/search', { filter }), () =>
    client.request(BlogSearchDocument, { filter }),
  )
  const debouncedSetFilter = useMemo(
    () =>
      debounce(
        (pattern: string) => setFilter({ title: { matches: { pattern, caseSensitive: false } } }),
        200,
      ),
    [],
  )

  return (
    <Combobox
      ref={ref}
      as="div"
      className={className}
      onChange={(item: PostRecord) => router.push(`/blog/${item.slug}`)}
    >
      <Combobox.Label className="label text-xl font-bold">{label}</Combobox.Label>
      <div className="relative mt-1.5">
        <Combobox.Input
          className={clsx(
            'placeholder:text-md focus:border-indigo-500 focus:ring-indigo-500 flex h-10 w-full items-center rounded-full border border-black border-opacity-20 bg-white px-4 pr-10 text-lg shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 sm:text-sm',
          )}
          onChange={e => debouncedSetFilter(e.currentTarget.value)}
          displayValue={(item: PostRecord) => item.title}
          placeholder={placeholder}
        />
        <Combobox.Button className="absolute inset-y-0 right-3 flex items-center focus:outline-none">
          <Search className="text-gray-400" aria-hidden="true" />
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
                      'relative flex cursor-pointer select-none py-2 pl-3 pr-9',
                      active ? 'bg-blue-100 text-white' : 'text-gray-900',
                    )
                  }
                >
                  {({ selected }) => (
                    <span className={clsx('block truncate', selected && 'font-semibold')}>
                      {post.title}
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
