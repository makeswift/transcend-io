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
    <div className={clsx(className, 'flex flex-wrap gap-x-2 gap-y-3 text-center')} ref={ref}>
      {categoryData?.allCategories.map(category => (
        <Link
          key={category.id}
          href={`/blog${category.path}`}
          className="rounded-full bg-gray-200 px-4 py-2 text-xs font-bold text-gray-600 ring-1 ring-transparent transition-colors hover:bg-white hover:text-blue-100 hover:ring-gray-200"
        >
          {category.name}
        </Link>
      ))}
    </div>
  )
})
