import dynamic from 'next/dynamic'

import { Style } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('./BlogSearch').then(({ BlogSearch }) => BlogSearch))),
  ),
  {
    type: 'BlogSearch',
    label: 'Blog/Search',
    props: {
      className: Style(),
    },
  },
)
