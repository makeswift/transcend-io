import "@/lib/makeswift/components"

import { SWRConfig } from "swr"
import { GetStaticPropsContext } from "next/types"
import {
  Page as MakeswiftPage,
  PageProps as MakeswiftPageProps,
} from "@makeswift/runtime/next"

import { client } from "@/lib/makeswift/client"
import { getCacheKey, DEFAULT_FEED_PARAMS } from "@/lib/utils"
import { getIntegrations } from "@/lib/contentful/client"

export async function getStaticProps({
  previewData,
  preview,
}: GetStaticPropsContext<{ slug: string }, { makeswift: boolean }>) {
  const snapshot = await client.getPageSnapshot("/integrations", {
    preview: previewData?.makeswift == true,
  })

  if (snapshot == null) return { notFound: true }

  return {
    props: {
      snapshot,
      fallback: {
        [getCacheKey("integrations", DEFAULT_FEED_PARAMS)]:
          await getIntegrations(),
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
      <MakeswiftPage snapshot={snapshot} />
    </SWRConfig>
  )
}
