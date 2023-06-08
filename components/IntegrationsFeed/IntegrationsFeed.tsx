import Image from 'next/image'
import Link from 'next/link'
import { Ref, forwardRef, useEffect, useState } from 'react'

import clsx from 'clsx'
import { ContentfulCollection } from 'contentful'
import useSWR from 'swr'

import { IIntegration } from '@/generated/contentful'
import { getCacheKey } from '@/lib/utils'

import { Button } from '../Button'

type Props = {
  className?: string
}

export const DEFAULT_PARAMS = {
  limit: 30,
  skip: 0,
}

export const IntegrationsFeed = forwardRef(function IntegrationsFeed(
  { className }: Props,
  ref: Ref<HTMLDivElement>,
) {
  const [{ limit, skip }, setParams] = useState(DEFAULT_PARAMS)
  const { data, isLoading } = useSWR(getCacheKey('integrations/feed', { skip, limit }), () =>
    fetchIntegrationsFeed({ skip, limit }),
  )
  const [items, setItems] = useState(data?.items ?? [])
  const [total, setTotal] = useState(data?.total ?? 0)

  useEffect(() => {
    setItems(prev => [...prev.slice(0, skip), ...(data?.items ?? []), ...prev.slice(skip + limit)])
  }, [data, limit, skip])

  useEffect(() => {
    if (!data) return

    setTotal(data.total)
  }, [data])

  return (
    <div className={clsx(className, 'space-y-12')} ref={ref}>
      <div className="flex flex-wrap items-stretch justify-evenly gap-12">
        {items
          .filter(item => item.fields.integrationStatus === 'ONLINE')
          .map(item => (
            <Link
              key={item.sys.id}
              className="flex min-h-[150px] w-[315px] cursor-pointer flex-col items-center gap-4 rounded-lg border border-gray-200 px-9 py-12 text-center hover:border-blue-100"
              href={`/integrations#`}
            >
              {item.fields.logoSquare && (
                <Image
                  src={`https:${item.fields.logoSquare.fields.file.url}`}
                  width={50}
                  height={50}
                  alt={`${item.fields.title} logo`}
                />
              )}
              <div className="flex flex-col justify-between gap-4">
                <div className="space-y-3">
                  <h3 className="line-clamp-3 text-xl font-bold group-hover:text-blue-100 md:line-clamp-3 lg:line-clamp-2">
                    {item.fields.title}
                  </h3>
                  <p className="text-md leading-tight text-gray-600">{item.fields.description}</p>
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

export async function fetchIntegrationsFeed({ limit, skip } = DEFAULT_PARAMS): Promise<
  ContentfulCollection<IIntegration>
> {
  try {
    const results = await fetch(
      '/api/contentful/integrations?' +
        new URLSearchParams({
          limit: limit.toString(),
          skip: skip.toString(),
        }),
    ).then(r => r.json())

    if (results.error) {
      throw new Error('Failed to fetch Integrations\n' + JSON.stringify(results.error, null, 2))
    }

    return results
  } catch (e: any) {
    throw new Error(e)
  }
}
