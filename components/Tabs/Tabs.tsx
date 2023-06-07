import { Ref, forwardRef } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'
import clsx from 'clsx'

type Tab = {
  title?: string
  code?: string
  children?: React.ReactNode
}

type Props = {
  className?: string
  tabs: Tab[]
  ariaLabel?: string
}

export const Tabs = forwardRef(function Tabs(
  { className, tabs, ariaLabel = 'Tabs' }: Props,
  ref: Ref<HTMLDivElement>,
) {
  return (
    <RadixTabs.Root ref={ref} className={clsx('flex flex-col', className)} defaultValue="0">
      {tabs.length > 0 ? (
        <>
          <RadixTabs.List
            className="flex shrink-0 overflow-hidden rounded-tl-lg rounded-tr-lg bg-black shadow-md"
            aria-label={ariaLabel}
          >
            {tabs?.map((tab, index) => (
              <RadixTabs.Trigger
                key={index}
                className="text-md flex h-10 select-none items-center justify-center bg-gray-900 px-4 leading-none text-gray-400 outline-none data-[state=active]:bg-black data-[state=active]:text-white"
                value={index.toString()}
              >
                {tab.title}
              </RadixTabs.Trigger>
            ))}
          </RadixTabs.List>
          {tabs.map((tab, index) => (
            <RadixTabs.Content key={index} className="outline-none " value={index.toString()}>
              {tab.children}
            </RadixTabs.Content>
          ))}
        </>
      ) : (
        <div className="p-6 text-center text-lg font-light">
          There are no tabs. Try adding some.
        </div>
      )}
    </RadixTabs.Root>
  )
})
