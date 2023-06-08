import Link from 'next/link'
import { Ref, forwardRef, useEffect, useState } from 'react'
import { Image } from 'react-datocms'

import clsx from 'clsx'
import useSWR from 'swr'

import { BlogFeedDocument } from '@/generated/dato'
import { client } from '@/lib/dato/client'
import { getCacheKey } from '@/lib/utils'

import { Button } from '../Button'

type Props = {
  className?: string
}

export const DEFAULT_PARAMS = { limit: 8, skip: 0 }

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
    if (!data) return

    setTotal(data._allPostsMeta.count)
  }, [data])

  return (
    <div className={clsx(className, 'space-y-12')} ref={ref}>
      <div className="grid grid-cols-12 gap-y-12 md:gap-x-12">
        {items.map(post => (
          <Link
            key={post.id}
            className="group col-span-12 grid gap-8 sm:flex md:col-span-6"
            href={`/blog${post.slug}`}
          >
            <div className="relative h-[200px] w-full shrink-0 sm:h-[150px] sm:w-[200px] lg:h-[150px] lg:w-[250px] xl:h-[200px] xl:w-[300px]">
              {post.hero.responsiveImage && (
                <Image data={post.hero.responsiveImage} layout="fill" objectFit="cover" />
              )}
            </div>
            <div className="flex flex-col justify-between gap-4">
              <div className="space-y-3">
                <h3 className="line-clamp-3 text-xl font-bold group-hover:text-blue-100 md:line-clamp-3 lg:line-clamp-2">
                  {post.title}
                </h3>
                <p className="line-clamp-3 text-lg font-light md:hidden lg:block">{post.excerpt}</p>
              </div>
              <div className="flex text-gray-400">
                {post._publishedAt &&
                  `${new Date(post._publishedAt).toLocaleDateString('en-US', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })} • `}
                {post.readTime} min read
              </div>
            </div>
          </Link>
        ))}
      </div>
      {items.length < total && (
        <div className="flex justify-start">
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
