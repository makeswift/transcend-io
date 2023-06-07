import dynamic from 'next/dynamic'

import { Style } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'
import { ReactRuntime } from '@makeswift/runtime/react'

ReactRuntime.registerComponent(
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
