import { GetStaticPropsContext } from 'next/types'

import { Page as MakeswiftPage, PageProps as MakeswiftPageProps } from '@makeswift/runtime/next'
import { SWRConfig } from 'swr'

import { BlogPostsDocument, CategoriesDocument } from '@/generated/dato'
import { request } from '@/lib/dato/client'
import { client as MakeswiftClient } from '@/lib/makeswift/client'
import '@/lib/makeswift/components'
import { runtime } from '@/lib/makeswift/runtime'
import { DEFAULT_FEED_PARAMS, getCacheKey } from '@/lib/utils'

export async function getStaticProps({
  previewData,
  preview,
}: GetStaticPropsContext<{ slug: string }, { makeswift: boolean }>) {
  const snapshot = await MakeswiftClient.getPageSnapshot('/blog', {
    preview: previewData?.makeswift == true,
  })

  if (snapshot == null) return { notFound: true }

  return {
    props: {
      snapshot,
      fallback: {
        [getCacheKey('blog/feed', DEFAULT_FEED_PARAMS)]: await request(
          BlogPostsDocument,
          DEFAULT_FEED_PARAMS,
        ),
        [getCacheKey('blog/categories')]: await request(CategoriesDocument),
      },
      previewData: previewData?.makeswift == true,
      preview: preview ?? false,
    },
    revalidate: 1,
  }
}

type Props = { fallback: { [key: string]: any } } & MakeswiftPageProps

export default function Page({ snapshot, fallback }: Props) {
  return (
    <SWRConfig value={{ fallback }}>
      <MakeswiftPage snapshot={snapshot} runtime={runtime} />
    </SWRConfig>
  )
}
