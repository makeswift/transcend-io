import { Style } from '@makeswift/runtime/controls'
import { ReactRuntime } from '@makeswift/runtime/react'

import { IntegrationsFeed } from './IntegrationsFeed'

ReactRuntime.registerComponent(IntegrationsFeed, {
  type: 'integrationsFeed',
  label: 'Integrations Feed',
  props: {
    className: Style(),
  },
})
