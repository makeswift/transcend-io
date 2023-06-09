import Link from 'next/link'
import { ComponentPropsWithoutRef, ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

import { ChevronRight } from '@/generated/icons'

const SIZE_STYLES = {
  medium: 'px-5 py-2.5',
  large: 'px-7 py-4',
} as const

const BUTTON_STYLES = {
  filled: {
    blue: 'bg-blue-100 border-blue-100 text-white hover:bg-transparent hover:text-blue-100',
    gray: 'bg-gray-900 border-gray-900 text-white hover:bg-transparent hover:text-gray-900',
    white: 'bg-white border-white text-blue-100 hover:bg-transparent hover:text-white',
  },
  outlined: {
    blue: 'bg-transparent border-blue-100 text-blue-100 hover:bg-blue-100 hover:text-white',
    gray: 'bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
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
} & Props

export const LinkButton = forwardRef(function LinkButton(
  { link, className, ...rest }: BaseLinkButtonProps,
  ref: Ref<HTMLAnchorElement>,
) {
  return (
    <Link ref={ref} className={className} href={link?.href ?? '#'} target={link?.target}>
      <Button {...rest} />
    </Link>
  )
})
