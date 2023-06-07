import Link from 'next/link'
import { CSSProperties, ReactNode, Ref, forwardRef } from 'react'

import clsx from 'clsx'

import { ChevronRight } from '@/generated/icons'

const SIZE_STYLES = {
  medium: 'px-5 py-2.5',
  large: 'px-7 py-4',
}

const BUTTON_VARIANT_STYLES: { [key: string]: string } = {
  'filled-blue': 'bg-blue-100 border-blue-100 text-white hover:bg-transparent hover:text-blue-100',
  'filled-gray': 'bg-gray-900 border-gray-900 text-white hover:bg-transparent hover:text-gray-900',
  'filled-white': 'bg-white border-white text-blue-100 hover:bg-transparent hover:text-white',
  'outlined-blue':
    'bg-transparent border-blue-100 text-blue-100 hover:bg-blue-100 hover:text-white',
  'outlined-gray':
    'bg-transparent border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white',
  'outlined-white': 'bg-transparent border-white text-white hover:bg-white hover:text-blue-100',
}

type ButtonProps = {
  children?: ReactNode
  size?: 'medium' | 'large'
  variant?: 'filled' | 'outlined'
  color?: 'blue' | 'gray' | 'white'
  textColor?: string
  showIcon?: boolean
  className?: string
}

export const Button = forwardRef(function Button(
  {
    className,
    children,
    size = 'large',
    variant = 'filled',
    color = 'blue',
    textColor = 'var(--white)',
  }: ButtonProps,
  ref: Ref<HTMLButtonElement>,
) {
  const buttonConfig = `${variant}-${color}`

  return (
    <button
      ref={ref}
      className={clsx(
        className,
        BUTTON_VARIANT_STYLES[buttonConfig],
        SIZE_STYLES[size],
        'group rounded-lg border text-sm font-bold leading-none text-[var(--text-color)] transition duration-150',
      )}
      style={{ '--color': color, '--text-color': textColor } as CSSProperties}
    >
      {children}
      {/* <ChevronRight className="text-gray-400" /> */}
    </button>
  )
})

type LinkButtonProps = {
  link?: { href: string; target?: '_self' | '_blank' }
} & ButtonProps

export const LinkButton = forwardRef(function LinkButton(
  { link, className, ...rest }: LinkButtonProps,
  ref: Ref<HTMLAnchorElement>,
) {
  return (
    <Link ref={ref} className={className} href={link?.href ?? '#'} target={link?.target}>
      <Button {...rest} />
    </Link>
  )
})
