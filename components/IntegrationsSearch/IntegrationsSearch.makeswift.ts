import dynamic from 'next/dynamic'

import { Checkbox, Style, TextInput } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() =>
      patch(import('./IntegrationsSearch').then(({ IntegrationsSearch }) => IntegrationsSearch)),
    ),
  ),
  {
    type: 'IntegrationsSearch',
    label: 'Integrations/Search',
    props: {
      className: Style(),
      label: TextInput({ label: 'Label', defaultValue: 'Search' }),
      hideLabel: Checkbox({ label: 'Hide label' }),
      placeholder: TextInput({ label: 'Placeholder', defaultValue: 'Search' }),
    },
  },
)
