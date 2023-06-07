import Link from 'next/link'
import { Ref, forwardRef, useEffect, useState } from 'react'
import { Image } from 'react-datocms'

import clsx from 'clsx'
import useSWR from 'swr'

import { BlogFeedDocument, PostModelFilter } from '@/generated/dato'
import { client } from '@/lib/dato/client'
import { DEFAULT_FEED_PARAMS, getCacheKey } from '@/lib/utils'

type Props = {
  className?: string
}

export const BlogFeed = forwardRef(function BlogFeed(
  { className }: Props,
  ref: Ref<HTMLDivElement>,
) {
  const [query, setQuery] = useState('')
  const [{ limit, skip }, setParams] = useState(DEFAULT_FEED_PARAMS)
  const [filter, setFilter] = useState<PostModelFilter | undefined>()
  const { data, isLoading } = useSWR(getCacheKey('blog/feed', { limit, skip, filter }), () =>
    client.request(BlogFeedDocument, { limit, skip, filter }),
  )
  const total = data?._allPostsMeta.count ?? 0

  const [pages, setPages] = useState(data ? [...Array.from({ length: total / limit }).keys()] : [])

  useEffect(() => {
    if (!total) return

    setPages([...Array.from({ length: total / limit }).keys()])
  }, [total, limit])

  const currentIndex = skip / limit

  return (
    <div className={clsx(className, 'grid grid-cols-12 gap-12')} ref={ref}>
      {data?.allPosts.map(post => (
        <Link key={post.id} className="group col-span-6 flex gap-8" href={`/blog/${post.slug}`}>
          {post.hero.responsiveImage && (
            <Image data={post.hero.responsiveImage} className="shrink-0 object-cover" />
          )}
          <div className="flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="line-clamp-2 text-xl font-bold group-hover:text-blue-100">
                {post.title}
              </h3>
              <p className="line-clamp-3 text-lg font-light">{post.excerpt}</p>
            </div>
            <div className="flex text-gray-400">
              {post._publishedAt &&
                new Date(post._publishedAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}{' '}
              • {post.readTime} min read
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
})
