import dynamic from 'next/dynamic'

import {
  Checkbox,
  Color,
  Link,
  List,
  Number,
  Select,
  Shape,
  Style,
  TextInput,
} from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('./ButtonGroup').then(({ ButtonGroup }) => ButtonGroup))),
  ),
  {
    type: 'button-group',
    label: 'Button Group',
    icon: 'button',
    props: {
      className: Style(),
      buttons: List({
        label: 'Buttons',
        type: Shape({
          type: {
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
          },
        }),
        getItemLabel(button) {
          return button?.children || 'Button text'
        },
      }),
      alignment: Select({
        label: 'Alignment (desktop)',
        options: [
          { value: 'left', label: 'Left' },
          { value: 'center', label: 'Center' },
          { value: 'right', label: 'Right' },
        ],
        defaultValue: 'left',
      }),
      buttonGap: Number({
        label: 'Gap',
        defaultValue: 20,
        step: 4,
        suffix: 'px',
        selectAll: true,
      }),
    },
  },
)
