import dynamic from 'next/dynamic'

import { Color, Image, Link, Style, TextArea, TextInput } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  forwardNextDynamicRef(patch => dynamic(() => patch(import('./Card').then(({ Card }) => Card)))),
  {
    type: 'card',
    label: 'Card',
    props: {
      className: Style(),
      imageSrc: Image({ label: 'Image', format: Image.Format.WithDimensions }),
      imageAlt: TextInput({
        label: 'Alt text',
        defaultValue: 'Image',
        selectAll: true,
      }),
      title: TextInput({
        label: 'Title',
        defaultValue: 'This is a title',
        selectAll: true,
      }),
      text: TextArea({
        label: 'Text',
        defaultValue:
          'Lorem ipsum dolor sit amet, vix id suas harum tacimates, enim doming prompta vim antial.',
        selectAll: true,
      }),
      link: Link({ label: 'Button action' }),
    },
  },
)
