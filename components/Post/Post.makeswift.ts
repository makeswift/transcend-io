import dynamic from 'next/dynamic'

import { Link, Number, Select, Slot, Style, TextInput } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  forwardNextDynamicRef(patch => dynamic(() => patch(import('./Post').then(({ Post }) => Post)))),
  {
    type: 'Post',
    label: 'Post',
    props: {
      className: Style(),
      link: Link(),
      orientation: Select({
        label: 'Orientation',
        options: [
          { label: 'Horizontal', value: 'horizontal' },
          { label: 'Vertical', value: 'vertical' },
        ],
      }),
      image: Slot(),
      preHeading: TextInput({
        label: 'Pre heading',
        defaultValue: 'Featured Post',
      }),
      heading: TextInput({
        label: 'Heading',
        defaultValue: 'How to make a website',
      }),
      body: TextInput({
        label: 'Body',
        defaultValue:
          "Learn how to make a website with this easy to follow tutorial. We'll walk you through step by step.",
      }),
      date: TextInput({
        label: 'Date',
        defaultValue: 'May 31, 2023',
      }),
      readTime: Number({
        label: 'Read time',
        defaultValue: 5,
        suffix: 'min read',
      }),
    },
  },
)
