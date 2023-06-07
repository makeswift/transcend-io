import dynamic from 'next/dynamic'

import { Checkbox, Number, Style, TextInput } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('./Lottie').then(({ Lottie }) => Lottie))),
  ),
  {
    type: 'Lottie',
    label: 'Lottie',
    icon: 'video',
    props: {
      className: Style(),
      src: TextInput({ label: 'Lottie URL' }),
      speed: Number({ label: 'Speed', suffix: 'x', defaultValue: 1, step: 0.1 }),
      autoplay: Checkbox({ label: 'Autoplay', defaultValue: false }),
      loop: Checkbox({ label: 'Loop', defaultValue: false }),
    },
  },
)
