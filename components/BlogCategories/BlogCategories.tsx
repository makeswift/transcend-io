import Link from 'next/link'
import { Ref, forwardRef } from 'react'

import clsx from 'clsx'
import useSWR from 'swr'

import { BlogCategoriesDocument } from '@/generated/dato'
import { client } from '@/lib/dato/client'
import { getCacheKey } from '@/lib/utils'

type Props = {
  className?: string
}

export const BlogCategories = forwardRef(function BlogCategories(
  { className }: Props,
  ref: Ref<HTMLDivElement>,
) {
  const { data: categoryData } = useSWR(getCacheKey('blog/categories'), () =>
    client.request(BlogCategoriesDocument),
  )

  return (
    <div className={clsx(className, 'relative flex gap-4')} ref={ref}>
      {categoryData?.allCategories.map(category => (
        <Link
          key={category.id}
          href={`/blog${category.path}`}
          className="rounded-full bg-gray-200 px-3 py-2 text-xs font-bold text-gray-500 hover:bg-gray-300"
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
})
