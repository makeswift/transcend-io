import React, { ComponentPropsWithoutRef, Ref, forwardRef } from 'react'

import clsx from 'clsx'

import { LinkButton } from '../Button'

type ButtonProps = ComponentPropsWithoutRef<typeof LinkButton>

type ButtonGroupProps = {
  buttons: Array<Omit<ButtonProps, 'className'>>
  className?: string
  alignment?: 'left' | 'center' | 'right'
  buttonGap: number
}

export const ButtonGroup = forwardRef(function ButtonGroup(
  { className, buttons, alignment = 'left', buttonGap = 20 }: ButtonGroupProps,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <div
      className={clsx(
        className,
        'flex flex-col flex-wrap items-center sm:flex-row',
        {
          left: 'justify-start',
          right: 'justify-end',
          center: 'justify-center',
        }[alignment],
      )}
      ref={ref}
      style={{ gap: buttonGap }}
    >
      {buttons.length === 0 ? (
        <p className="text w-full py-4 text-center text-gray-700">There are no buttons</p>
      ) : (
        buttons.map((button, i) => {
          return (
            <LinkButton key={i} {...button} className="w-full sm:w-auto [&>button]:w-full">
              {button.children}
            </LinkButton>
          )
        })
      )}
    </div>
  )
})
