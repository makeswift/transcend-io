import dynamic from 'next/dynamic'

import { MakeswiftComponentType } from '@makeswift/runtime'
import { Image, List, Number, Shape, Style, TextArea, TextInput } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('./Carousel').then(({ Carousel }) => Carousel))),
  ),
  {
    type: MakeswiftComponentType.Carousel,
    label: 'Carousel',
    icon: 'carousel',
    props: {
      slides: List({
        label: 'Slides',
        type: Shape({
          type: {
            logo: Image({
              label: 'Logo',
              format: Image.Format.WithDimensions,
            }),
            logoAlt: TextInput({
              label: 'Alt text',
              defaultValue: 'Logo',
              selectAll: true,
            }),
            slideColor: TextInput({
              label: 'Logo BG color (Hex)',
              defaultValue: '#eeeeee',
              selectAll: true,
            }),
            quote: TextArea({
              label: 'Quote',
              defaultValue: `"At Robinhood, we empower our customers to take greater ownership of their financial future, and we believe this extends to their personal information. Transcend's data privacy infrastructure helps facilitate the way we give our customers control over their data."`,
              selectAll: true,
            }),
            author: TextInput({
              label: 'Quote author name',
              defaultValue: 'John Smith',
              selectAll: true,
            }),
            authorTitle: TextInput({
              label: 'Quote author title',
              defaultValue: 'CEO, Apple',
              selectAll: true,
            }),
          },
        }),
        getItemLabel(slide) {
          return slide?.logoAlt || 'Logo'
        },
      }),
      className: Style(),
      autoplay: Number({
        label: 'Autoplay',
        defaultValue: 0,
        step: 0.1,
        suffix: 's',
        selectAll: true,
      }),
    },
  },
)
