import Image from 'next/image'
import Link from 'next/link'
import React, { Ref, forwardRef } from 'react'

import clsx from 'clsx'

type Props = {
  className?: string
  imageSrc?: { url: string; dimensions: { width: number; height: number } }
  imageAlt: string
  link?: {
    href: string
    target?: '_self' | '_blank'
  }
  title?: string
  text?: string
}

export const Card = forwardRef(function Card(
  { className, imageSrc, imageAlt, link, title, text }: Props,
  ref: Ref<HTMLAnchorElement>,
) {
  return (
    <Link
      ref={ref}
      href={link?.href ?? '#'}
      target={link?.target}
      className={clsx(
        className,
        'flex w-full flex-col self-stretch overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-900 transition-shadow hover:shadow-xl hover:shadow-black/5',
      )}
    >
      {imageSrc && (
        <Image
          src={imageSrc.url}
          alt={imageAlt}
          width={imageSrc.dimensions.width}
          height={imageSrc.dimensions.height}
          className="aspect-video object-cover"
        />
      )}
      <div className="flex flex-1 flex-col break-words px-8 py-6 text-current">
        {title && <h3 className="text-xl font-bold">{title}</h3>}
        {text && <p className="mt-5 text-base">{text}</p>}
      </div>
    </Link>
  )
})
