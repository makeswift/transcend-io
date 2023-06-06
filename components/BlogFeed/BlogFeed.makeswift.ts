import { Style } from '@makeswift/runtime/controls'
import { ReactRuntime } from '@makeswift/runtime/react'

import { BlogFeed } from './BlogFeed'

ReactRuntime.registerComponent(BlogFeed, {
  type: 'blogFeed',
  label: 'Blog Feed',
  props: {
    className: Style(),
  },
})
