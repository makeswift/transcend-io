import "@/lib/makeswift/components"

import {
  GetStaticPathsResult,
  GetStaticPropsContext,
  GetStaticPropsResult,
} from "next"

import {
  Page as MakeswiftPage,
  PageProps as MakeswiftPageProps,
} from "@makeswift/runtime/next"
import { client } from "@/lib/makeswift/client"

type ParsedUrlQuery = { path?: string[] }

export async function getStaticPaths(): Promise<
  GetStaticPathsResult<ParsedUrlQuery>
> {
  const pages = await client.getPages()

  return {
    paths: pages
      .filter((page) => page.path !== "/integrations")
      .map((page) => ({
        params: {
          path: page.path.split("/").filter((segment) => segment !== ""),
        },
      })),
    fallback: "blocking",
  }
}

type Props = MakeswiftPageProps

export async function getStaticProps(
  ctx: GetStaticPropsContext<ParsedUrlQuery>
): Promise<GetStaticPropsResult<Props>> {
  const path = "/" + (ctx.params?.path ?? []).join("/")
  const snapshot = await client.getPageSnapshot(path, {
    preview: ctx.preview,
  })

  if (snapshot == null) return { notFound: true }

  return { props: { snapshot } }
}

export default function Page({ snapshot }: Props) {
  return <MakeswiftPage snapshot={snapshot} />
}
