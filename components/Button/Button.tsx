import Link from 'next/link'
import { ComponentPropsWithoutRef, ReactNode, Ref, forwardRef, use, useEffect, useRef } from 'react'

import clsx from 'clsx'

import { ChevronRight } from '@/generated/icons'
import { analytics } from '@/lib/segment/analytics'

const SIZE_STYLES = {
  medium: 'px-5 py-2.5',
  large: 'px-7 py-4',
} as const

const BUTTON_STYLES = {
  filled: {
    blue: 'bg-blue-100 border-blue-100 text-white hover:bg-transparent hover:text-blue-100',
    gray: 'bg-gray-700 border-gray-700 text-white hover:bg-transparent hover:text-gray-700',
    white: 'bg-white border-white text-blue-100 hover:bg-transparent hover:text-white',
  },
  outlined: {
    blue: 'bg-transparent border-blue-100 text-blue-100 hover:bg-blue-100 hover:text-white',
    gray: 'bg-transparent border-gray-700 text-gray-700 hover:bg-gray-700 hover:text-white',
    white: 'bg-transparent border-white text-white hover:bg-white hover:text-blue-100',
  },
} as const

type BaseButtonProps = {
  children?: ReactNode
  size?: 'medium' | 'large'
  variant?: 'filled' | 'outlined'
  color?: 'blue' | 'gray' | 'white'
  showIcon?: boolean
  className?: string
}

type Props = BaseButtonProps & Omit<ComponentPropsWithoutRef<'button'>, keyof BaseButtonProps>

export const Button = forwardRef(function Button(
  {
    className,
    children,
    size = 'large',
    variant = 'filled',
    color = 'blue',
    showIcon = false,
    ...rest
  }: Props,
  ref: Ref<HTMLButtonElement>,
) {
  return (
    <button
      {...rest}
      ref={ref}
      className={clsx(
        className,
        BUTTON_STYLES[variant][color],
        SIZE_STYLES[size],
        'group inline-flex items-center gap-3 rounded-lg border text-sm font-bold leading-none transition duration-150',
      )}
    >
      {children}
      {showIcon && <ChevronRight />}
    </button>
  )
})

type BaseLinkButtonProps = {
  link?: { href: string; target?: '_self' | '_blank' }
  eventName?: string
} & Props

export function LinkButton({ link, className, eventName, ...rest }: BaseLinkButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null)

  useEffect(() => {
    if (!eventName || !ref.current) return

    analytics.trackLink(ref.current, eventName)
  }, [eventName])

  return (
    <Link ref={ref} className={className} href={link?.href ?? '#'} target={link?.target}>
      <Button {...rest} />
    </Link>
  )
}
