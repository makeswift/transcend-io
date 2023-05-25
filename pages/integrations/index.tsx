import "@/components/makeswift"

import { SWRConfig } from "swr"
import { GetStaticPropsContext } from "next/types"
import {
  Makeswift,
  Page as MakeswiftPage,
  PageProps as MakeswiftPageProps,
} from "@makeswift/runtime/next"
import { strict } from "assert"
import { getIntegrations } from "@/lib/contentful/client"
import { IIntegration } from "@/lib/generated/contentful"
import { getFeedCacheKey } from "@/lib/contentful/utils"

export async function getStaticProps({
  previewData,
  preview,
}: GetStaticPropsContext<{ slug: string }, { makeswift: boolean }>) {
  strict(process.env.MAKESWIFT_SITE_API_KEY)

  const makeswiftClient = new Makeswift(process.env.MAKESWIFT_SITE_API_KEY, {
    apiOrigin: process.env.MAKESWIFT_API_ORIGIN,
  })

  const snapshot = await makeswiftClient.getPageSnapshot("/integrations", {
    preview: previewData?.makeswift == true,
  })

  if (snapshot == null) return { notFound: true }

  const { items, total, limit } = await getIntegrations()

  return {
    props: {
      snapshot,
      fallback: { [getFeedCacheKey("integrations")]: { items, total, limit } },
      previewData: previewData?.makeswift == true,
      preview: preview ?? false,
    },
    revalidate: 1,
  }
}

type Props = {
  fallback: {
    string: {
      items: IIntegration[]
      total: number
      limit: number
    }
  }
} & MakeswiftPageProps

export default function Page({ snapshot, fallback }: Props) {
  return (
    <SWRConfig value={{ fallback }}>
      <MakeswiftPage snapshot={snapshot} />
    </SWRConfig>
  )
}
