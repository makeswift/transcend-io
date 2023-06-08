import React, { ReactNode } from 'react'

import * as Accordion from '@radix-ui/react-accordion'
import clsx from 'clsx'

type AccordionItem = {
  title: string
  children?: ReactNode
  answer?: string
}

type Props = {
  className?: string
  accordions: AccordionItem[]
}

export function Accordions({ className, accordions }: Props) {
  const [open, setOpen] = React.useState(false)

  if (accordions?.length === 0)
    return (
      <p className={clsx(className, 'text py-4 text-center text-gray-700')}>
        There are no accordions
      </p>
    )

  return (
    <Accordion.Root type="multiple" className="w-full" asChild>
      <ul className={clsx(className, 'space-y-5')}>
        {accordions?.map((accordion, i) => (
          <Accordion.Item key={i} value={`${i + 1}`} asChild>
            <li className="group rounded-xl bg-white py-5 shadow-2xl shadow-black/10">
              <Accordion.Header>
                <Accordion.Trigger className="flex w-full items-center gap-x-4 px-5 md:px-10">
                  <div className="text-md flex-1 py-5 text-left font-bold leading-normal text-gray-900 md:text-lg">
                    {accordion.title}
                  </div>

                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    className="h-5 w-5 fill-gray-300"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="9"
                      className="h-5 w-0.5 origin-center transition-transform duration-300 group-data-[state=open]:rotate-90"
                    />
                    <rect y="9" className="h-0.5 w-5" />
                  </svg>
                </Accordion.Trigger>
              </Accordion.Header>

              <Accordion.Content className="w-full overflow-hidden data-[state=closed]:animate-accordionSlideUp data-[state=open]:animate-accordionSlideDown">
                <div className="text-md px-5 pb-1 leading-relaxed text-gray-900 md:px-10 md:pb-3">
                  {accordion.children}
                </div>
              </Accordion.Content>
            </li>
          </Accordion.Item>
        ))}
      </ul>
    </Accordion.Root>
  )
}
