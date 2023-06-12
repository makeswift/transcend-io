import { Ref, forwardRef } from 'react'
import { Image } from 'react-datocms/image'

import clsx from 'clsx'
import useSWR from 'swr'

import { BlogTopPostsDocument } from '@/generated/dato'
import { client } from '@/lib/dato/client'
import { getCacheKey } from '@/lib/utils'

import { Post } from '../Post'

type Props = {
  className?: string
}

export const BlogTopPosts = forwardRef(function BlogTopPosts(
  { className }: Props,
  ref: Ref<HTMLDivElement>,
) {
  const { data } = useSWR(getCacheKey('blog/top-posts'), () => client.request(BlogTopPostsDocument))

  return (
    <div ref={ref} className={clsx(className, 'grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-3')}>
      {data?.allPosts.map(post => (
        <Post
          key={post.id}
          orientation="vertical"
          link={{ href: `/blog${post.slug}` }}
          preHeading={post.specialPick}
          heading={post.title}
          body={post.excerpt}
          date={post._publishedAt}
          readTime={post.readTime}
          image={
            post.hero.responsiveImage && (
              <Image data={post.hero.responsiveImage} layout="fill" objectFit="cover" />
            )
          }
        />
      ))}
    </div>
  )
})
