import dynamic from 'next/dynamic'

import { Color, Image, List, Number, Shape, Style, TextInput } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'
import { ReactRuntime } from '@makeswift/runtime/react'

ReactRuntime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('./Marquee').then(({ Marquee }) => Marquee))),
  ),
  {
    type: 'Marquee',
    label: 'Marquee',
    props: {
      logos: List({
        label: 'Logos',
        type: Shape({
          type: {
            logoImage: Image({
              label: 'Logo',
              format: Image.Format.WithDimensions,
            }),
            logoAlt: TextInput({ label: 'Logo alt text', defaultValue: 'Image' }),
            logoWidth: Number({
              label: 'Width',
              defaultValue: 120,
              suffix: 'px',
            }),
          },
        }),
        getItemLabel(logo) {
          return logo?.logoAlt || 'Untitled'
        },
      }),
      gap: Number({ label: 'Gap', defaultValue: 48 }),
      fadeColor: Color({ label: 'Fade color', defaultValue: '#ffffff' }),
      className: Style(),
    },
  },
)
