import dynamic from 'next/dynamic'

import { Style, TextInput } from '@makeswift/runtime/controls'
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
      pardotCampaignId: TextInput({ label: 'Pardot campaign ID', defaultValue: '10501' }),
      pardotListIds: TextInput({ label: 'Pardot list IDs', defaultValue: '7579' }),
      eventName: TextInput({ label: 'Event name', defaultValue: 'Form Submitted' }),
    },
  },
)
