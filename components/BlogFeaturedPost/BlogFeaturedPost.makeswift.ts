import dynamic from 'next/dynamic'

import { Style } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() =>
      patch(import('./BlogFeaturedPost').then(({ BlogFeaturedPost }) => BlogFeaturedPost)),
    ),
  ),
  {
    type: 'BlogFeaturedPost',
    label: 'Blog/Featured Post',
    props: {
      className: Style(),
    },
  },
)
