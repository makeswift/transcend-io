import dynamic from 'next/dynamic'

import { Style } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'
import { ReactRuntime } from '@makeswift/runtime/react'

ReactRuntime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('./BlogFeed').then(({ BlogFeed }) => BlogFeed))),
  ),
  {
    type: 'BlogFeed',
    label: 'Blog/Feed',
    props: {
      className: Style(),
    },
  },
)
