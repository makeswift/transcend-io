import dynamic from 'next/dynamic'

import { Style } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'
import { ReactRuntime } from '@makeswift/runtime/react'

ReactRuntime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('./BlogCategories').then(({ BlogCategories }) => BlogCategories))),
  ),
  {
    type: 'BlogCategories',
    label: 'Feeds/Blog Categories',
    props: {
      className: Style(),
    },
  },
)
