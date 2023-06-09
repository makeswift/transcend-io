import { useRouter } from 'next/router'
import { Ref, forwardRef, useMemo, useState } from 'react'

import { Combobox } from '@headlessui/react'
import debounce from 'lodash.debounce'
import useSWR from 'swr'

import { Spinner } from '@/components/Spinner'
import { BlogSearchDocument, PostModelFilter, PostRecord } from '@/generated/dato'
import { Search } from '@/generated/icons'
import { client } from '@/lib/dato/client'
import { getCacheKey } from '@/lib/utils'

type Props = {
  className?: string
  label?: string
  placeholder?: string
  hideLabel?: boolean
}

export const BlogSearch = forwardRef(function BlogSearch(
  { className, label = 'Search', placeholder = 'Search', hideLabel }: Props,
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
            {data && data.allPosts.length > 0 ? (
              data.allPosts.map(post => (
                <Combobox.Option key={post.id} value={post} className="search-option">
                  {post.title}
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
