import dynamic from 'next/dynamic'

import { MakeswiftComponentType } from '@makeswift/runtime/components'
import { Checkbox, Color, Link, Select, Style, TextInput } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('./Button').then(({ LinkButton }) => LinkButton))),
  ),
  {
    type: MakeswiftComponentType.Button,
    label: 'Button',
    props: {
      children: TextInput({ label: 'Text', defaultValue: 'Button text', selectAll: true }),
      link: Link({ label: 'Link' }),
      size: Select({
        label: 'Size',
        options: [
          { value: 'medium', label: 'Medium' },
          { value: 'large', label: 'Large' },
        ],
        defaultValue: 'large',
      }),
      variant: Select({
        label: 'Variant',
        options: [
          { value: 'filled', label: 'Filled' },
          { value: 'outlined', label: 'Outlined' },
        ],
        defaultValue: 'filled',
      }),
      color: Select({
        label: 'Color',
        options: [
          { value: 'blue', label: 'Blue' },
          { value: 'gray', label: 'Gray' },
          { value: 'white', label: 'White' },
        ],
        defaultValue: 'blue',
      }),
      showIcon: Checkbox({ label: 'Show icon', defaultValue: false }),
      className: Style({ properties: [Style.Margin] }),
    },
  },
)
