import Image from 'next/image'
import React, { CSSProperties, Ref, forwardRef } from 'react'

import clsx from 'clsx'

type Logo = {
  logoImage?: { url: string; dimensions: { width: number; height: number } }
  logoAlt: string
  logoWidth: number
}

type Props = {
  className?: string
  gap: number
  logos: Logo[]
  fadeEdges?: boolean
  duration?: number
}

export const Marquee = forwardRef(function Marquee(
  { className, gap = 96, logos, fadeEdges = true, duration = 120 }: Props,
  ref: Ref<HTMLDivElement>,
) {
  if (!logos?.length) {
    return (
      <p className={clsx(className, 'text-center')} ref={ref}>
        There are no logos
      </p>
    )
  }

  const marqueeContainer = (
    <div
      className="flex min-w-full flex-[0_0_auto] animate-marqueeScroll items-center"
      style={{ columnGap: gap, paddingLeft: gap / 2, paddingRight: gap / 2 }}
    >
      {logos.map((logo, index) => {
        if (logo.logoImage == null)
          return <div key={index} className="h-10 w-10 rounded-full bg-gray-300" />

        return (
          <Image
            key={index}
            src={logo.logoImage.url}
            alt={logo.logoAlt}
            width={logo.logoWidth}
            height={
              logo.logoWidth / (logo.logoImage.dimensions.width / logo.logoImage.dimensions.height)
            }
          />
        )
      })}
    </div>
  )

  return (
    <div
      className={className}
      ref={ref}
      style={{ '--marquee-duration': `${duration}s` } as CSSProperties}
    >
      <div
        className={clsx(
          fadeEdges &&
            '[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)] [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]',
          'relative flex min-h-[40px] w-full flex-row items-center overflow-hidden',
        )}
      >
        {marqueeContainer}
        {marqueeContainer}
      </div>
    </div>
  )
})
