import Link from 'next/link'
import { Ref, forwardRef, useEffect, useState } from 'react'

import clsx from 'clsx'
import useSWR from 'swr'

import { BlogSearch } from '@/components/BlogSearch'
import { BlogPostsDocument, CategoriesDocument, PostModelFilter } from '@/generated/dato'
import { request } from '@/lib/dato/client'
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
  const { data: blogPostData, isLoading } = useSWR(
    getCacheKey('blog', { limit, skip, filter }),
    () => request(BlogPostsDocument, { limit, skip, filter }),
  )
  const { data: categoryData } = useSWR(getCacheKey('category'), () => request(CategoriesDocument))
  const total = blogPostData?._allPostsMeta.count ?? 0

  const [pages, setPages] = useState(
    blogPostData ? [...Array.from({ length: total / limit }).keys()] : [],
  )

  console.log({ categoryData, blogPostData })

  useEffect(() => {
    if (!total) return

    setPages([...Array.from({ length: total / limit }).keys()])
  }, [total, limit])

  const currentIndex = skip / limit

  return (
    <div className={clsx(className, 'relative flex flex-col gap-4')} ref={ref}>
      <BlogSearch />
      <div className="flex gap-4">
        {categoryData?.allCategories.map(category => (
          <Link key={category.id} href={`/blog${category.path}`}>
            {category.name}
          </Link>
        ))}
      </div>
      {blogPostData?.allPosts.map(post => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  )
})
