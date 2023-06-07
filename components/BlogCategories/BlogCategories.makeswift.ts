import dynamic from 'next/dynamic'

import { Style } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('./BlogCategories').then(({ BlogCategories }) => BlogCategories))),
  ),
  {
    type: 'BlogCategories',
    label: 'Blog/Categories',
    props: {
      className: Style(),
    },
  },
)
