import dynamic from 'next/dynamic'

import { Style } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
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
