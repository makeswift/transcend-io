import dynamic from 'next/dynamic'

import { Style } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'
import { ReactRuntime } from '@makeswift/runtime/react'

ReactRuntime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() =>
      patch(import('./IntegrationsFeed').then(({ IntegrationsFeed }) => IntegrationsFeed)),
    ),
  ),
  {
    type: 'IntegrationsFeed',
    label: 'Integrations/Feed',
    props: {
      className: Style(),
    },
  },
)
