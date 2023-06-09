import dynamic from 'next/dynamic'

import { Style } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('./InlineForm').then(({ InlineForm }) => InlineForm))),
  ),
  {
    type: 'InlineForm',
    label: 'Inline Form',
    icon: 'form',
    props: {
      className: Style(),
    },
  },
)
