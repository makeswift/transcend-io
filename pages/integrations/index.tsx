import { GetStaticPropsContext } from 'next/types'

import { Page as MakeswiftPage, PageProps as MakeswiftPageProps } from '@makeswift/runtime/next'
import { SWRConfig } from 'swr'

import { DEFAULT_PARAMS } from '@/components/IntegrationsFeed'
import { getIntegrations } from '@/lib/contentful/client'
import { client } from '@/lib/makeswift/client'
import '@/lib/makeswift/components'
import { runtime } from '@/lib/makeswift/runtime'
import { getCacheKey } from '@/lib/utils'

export async function getStaticProps({
  previewData,
  preview,
}: GetStaticPropsContext<{ slug: string }, { makeswift: boolean }>) {
  const snapshot = await client.getPageSnapshot('/integrations', {
    preview: previewData?.makeswift == true,
  })

  if (snapshot == null) return { notFound: true }

  return {
    props: {
      snapshot,
      fallback: {
        [getCacheKey('integrations/feed', DEFAULT_PARAMS)]: await getIntegrations(DEFAULT_PARAMS),
      },
      previewData: previewData?.makeswift == true,
      preview: preview ?? false,
    },
    revalidate: 1,
  }
}

type Props = { fallback: { [key: string]: any } } & MakeswiftPageProps

export default function Integrations({ snapshot, fallback }: Props) {
  return (
    <SWRConfig value={{ fallback }}>
      <MakeswiftPage snapshot={snapshot} runtime={runtime} />
    </SWRConfig>
  )
}
