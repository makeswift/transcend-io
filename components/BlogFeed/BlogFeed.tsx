import Link from 'next/link'
import { Ref, forwardRef, useEffect, useState } from 'react'
import { Image } from 'react-datocms'

import clsx from 'clsx'
import useSWR from 'swr'

import { BlogFeedDocument, PostModelFilter } from '@/generated/dato'
import { client } from '@/lib/dato/client'
import { DEFAULT_FEED_PARAMS, getCacheKey } from '@/lib/utils'

import { Button } from '../Button'

type Props = {
  className?: string
}

export const DEFAULT_PARAMS = { limit: 20, skip: 0 }

export const BlogFeed = forwardRef(function BlogFeed(
  { className }: Props,
  ref: Ref<HTMLDivElement>,
) {
  const [{ limit, skip }, setParams] = useState(DEFAULT_PARAMS)
  const { data, isLoading } = useSWR(getCacheKey('blog/feed', { limit, skip }), () =>
    client.request(BlogFeedDocument, { limit, skip }),
  )
  const [items, setItems] = useState(data?.allPosts ?? [])
  const [total, setTotal] = useState(data?._allPostsMeta.count ?? 0)

  useEffect(() => {
    setItems(prev => [
      ...prev.slice(0, skip),
      ...(data?.allPosts ?? []),
      ...prev.slice(skip + limit),
    ])
  }, [data, limit, skip])

  useEffect(() => {
    setTotal(data?._allPostsMeta.count ?? 0)
  }, [data?._allPostsMeta.count])

  return (
    <div className={clsx(className, 'grid gap-12')} ref={ref}>
      <div className="grid grid-cols-12 gap-12">
        {items.map(post => (
          <Link key={post.id} className="group col-span-6 flex gap-8" href={`/blog${post.slug}`}>
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
      {items.length < total && (
        <div className="flex justify-center">
          <Button
            variant="outlined"
            onClick={() => {
              if (items.length < total) {
                setParams(prev => ({ ...prev, skip: prev.skip + prev.limit }))
              }
            }}
          >
            View more
          </Button>
        </div>
      )}
    </div>
  )
})
