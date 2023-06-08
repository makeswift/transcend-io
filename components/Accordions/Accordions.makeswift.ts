import dynamic from 'next/dynamic'

import { runtime } from '@/lib/makeswift/runtime'
import { List, Shape, Slot, Style, TextInput } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

runtime.registerComponent(
	forwardNextDynamicRef((patch) =>
		dynamic(() => patch(import('./Accordions').then(({ Accordions }) => Accordions)))
	),
	{
		type: 'accordions',
		label: 'Accordions',
		props: {
			className: Style(),
			accordions: List({
				label: 'Accordions',
				type: Shape({
					type: {
						title: TextInput({
							label: 'Title',
							defaultValue: 'This is an accordion title',
							selectAll: true
						}),
						children: Slot()
					}
				}),
				getItemLabel(accordionItem) {
					return accordionItem?.title || 'This is an accordion title'
				}
			})
		}
	}
)
