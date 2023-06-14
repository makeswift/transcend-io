import { Ref, forwardRef } from 'react'
import { Image } from 'react-datocms/image'

import useSWR from 'swr'

import { Post } from '@/components/Post'
import { BlogFeaturedPostDocument } from '@/generated/dato'
import { client } from '@/lib/dato/client'
import { getCacheKey } from '@/lib/utils'

type Props = {
  className?: string
}

export const BlogFeaturedPost = forwardRef(function BlogFeaturedPost(
  { className }: Props,
  ref: Ref<HTMLAnchorElement>,
) {
  const { data } = useSWR(getCacheKey('blog/featured'), () =>
    client.request(BlogFeaturedPostDocument),
  )

  return (
    <Post
      ref={ref}
      className={className}
      link={{ href: `/blog${data?.post?.slug}` }}
      preHeading="Featured Article"
      heading={data?.post?.title}
      body={data?.post?.excerpt}
      date={data?.post?._publishedAt}
      readTime={data?.post?.readTime}
      image={
        data?.post?.hero?.responsiveImage && (
          <Image data={data.post.hero.responsiveImage} layout="fill" objectFit="cover" />
        )
      }
    />
  )
})
