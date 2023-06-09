import React, { ReactNode, Ref, forwardRef } from 'react'

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

export const Accordions = forwardRef(function Accordions(
  { className, accordions }: Props,
  ref: Ref<HTMLUListElement>,
) {
  return (
    <Accordion.Root type="multiple" asChild>
      <ul className={clsx(className, 'w-full space-y-5')} ref={ref}>
        {accordions.length === 0 ? (
          <p className="text py-4 text-center text-gray-700">There are no accordions</p>
        ) : (
          accordions.map((accordion, i) => (
            <Accordion.Item key={i} value={`${i + 1}`} asChild>
              <li className="group rounded-xl bg-white py-5 shadow-2xl shadow-black/10">
                <Accordion.Header>
                  <Accordion.Trigger asChild>
                    <div className="flex w-full cursor-pointer items-center gap-x-4 px-5 md:px-10">
                      <div className="text-md text-gray-900 flex-1 py-5 text-left font-bold leading-normal md:text-lg">
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
                    </div>
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="w-full overflow-hidden data-[state=closed]:animate-accordionSlideUp data-[state=open]:animate-accordionSlideDown">
                  <div className="text-md text-gray-900 px-5 pb-1 leading-relaxed md:px-10 md:pb-3">
                    {accordion.children}
                  </div>
                </Accordion.Content>
              </li>
            </Accordion.Item>
          ))
        )}
      </ul>
    </Accordion.Root>
  )
})
