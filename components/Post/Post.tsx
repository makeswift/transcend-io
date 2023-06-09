import Link from 'next/link'
import { Ref, forwardRef } from 'react'

import clsx from 'clsx'

type Props = {
  className?: string
  link?: { href: string; target?: '_blank' | '_self' }
  orientation?: 'horizontal' | 'vertical'
  slug?: string
  preHeading?: string | null
  heading?: string
  body?: string
  date?: string | null
  readTime?: number | null
  image?: React.ReactNode
}

export const Post = forwardRef(function Post(
  {
    className,
    link,
    orientation = 'horizontal',
    image,
    preHeading = 'Featured Post',
    heading = 'How to make a website.',
    body = "Learn how to make a website with this easy to follow tutorial. We'll walk you through step by step.",
    date,
    readTime = 5,
  }: Props,
  ref: Ref<HTMLAnchorElement>,
) {
  return (
    <Link
      ref={ref}
      href={link?.href ?? '#'}
      target={link?.target}
      className={clsx(
        className,
        'group',
        {
          horizontal: 'grid grid-cols-12 gap-y-5 md:gap-x-16 md:gap-y-0',
          vertical: 'space-y-5',
        }[orientation],
      )}
    >
      <div
        className={clsx(
          'relative',
          {
            horizontal: 'col-span-12 h-[300px] md:col-span-6 md:h-[400px]',
            vertical: 'col-span-12 h-[250px]',
          }[orientation],
        )}
      >
        {image}
      </div>
      <div
        className={clsx(
          'space-y-5 py-5',
          {
            horizontal: 'col-span-12 md:col-span-6',
            vertical: 'col-span-12',
          }[orientation],
        )}
      >
        <div className="text-xs font-bold uppercase text-blue-100">{preHeading}</div>
        <h3 className="text-3xl font-bold group-hover:text-blue-100">{heading}</h3>
        <p className="text-lg font-light">{body}</p>
        <p className="text-base text-gray-500">
          {date &&
            `${new Date(date).toLocaleDateString('en-US', {
              month: 'long',
              day: 'numeric',
              year: 'numeric',
            })} • `}
          {readTime && `${readTime} min read`}
        </p>
      </div>
    </Link>
  )
})
