import Link from 'next/link'
import { Ref, forwardRef, useEffect, useState } from 'react'

import clsx from 'clsx'
import useSWR from 'swr'

import { BlogSearch } from '@/components/BlogSearch'
import { CategoriesDocument } from '@/generated/dato'
import { request } from '@/lib/dato/client'
import { getCacheKey } from '@/lib/utils'

type Props = {
  className?: string
}

export const BlogCategories = forwardRef(function BlogCategories(
  { className }: Props,
  ref: Ref<HTMLDivElement>,
) {
  const { data: categoryData } = useSWR(getCacheKey('category'), () => request(CategoriesDocument))

  return (
    <div className={clsx(className, 'relative flex gap-4')} ref={ref}>
      {categoryData?.allCategories.map(category => (
        <Link
          key={category.id}
          href={`/blog${category.path}`}
          className="rounded-full bg-gray-200 px-4 py-3 text-black"
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
})
