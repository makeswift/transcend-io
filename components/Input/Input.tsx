import { ComponentPropsWithoutRef, Ref, forwardRef } from 'react'

import clsx from 'clsx'

type BaseProps = {
  className?: string
  type?: 'text' | 'email' | 'password'
}

type Props = BaseProps & Omit<ComponentPropsWithoutRef<'input'>, keyof BaseProps>

export const Input = forwardRef(function Input(
  { className, ...rest }: Props,
  ref: Ref<HTMLInputElement>,
) {
  return (
    <input
      {...rest}
      ref={ref}
      className={clsx(
        className,
        'flex h-12 items-center rounded border border-gray-200 px-5 text-base leading-none placeholder:text-base placeholder:text-gray-500 focus:border-blue-100 focus:outline-none',
      )}
    />
  )
})
