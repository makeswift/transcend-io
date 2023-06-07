import dynamic from 'next/dynamic'

import { MakeswiftComponentType } from '@makeswift/runtime'
import { Checkbox, Image, Link, List, Shape, Style, TextInput } from '@makeswift/runtime/controls'
import { forwardNextDynamicRef } from '@makeswift/runtime/next'

import { runtime } from '@/lib/makeswift/runtime'

runtime.registerComponent(
  forwardNextDynamicRef(patch =>
    dynamic(() => patch(import('./Navigation').then(({ Navigation }) => Navigation))),
  ),
  {
    type: MakeswiftComponentType.Navigation,
    label: 'Navigation',
    icon: 'navigation',
    props: {
      className: Style(),
      darkMode: Checkbox({ label: 'Dark mode' }),
      logoLink: Link({ label: 'Logo on click' }),
      mainLinks: List({
        label: 'Main navigation',
        type: Shape({
          type: {
            text: TextInput({
              label: 'Text',
              defaultValue: 'Link',
              selectAll: true,
            }),
            subnavGroups: List({
              label: 'Subnav groups',
              type: Shape({
                type: {
                  heading: TextInput({
                    label: 'Heading',
                    defaultValue: 'Heading',
                    selectAll: true,
                  }),
                  subnavLinks: List({
                    label: 'Links',
                    type: Shape({
                      type: {
                        link: Link({ label: 'On click' }),
                        icon: Image({
                          label: 'Icon',
                          format: Image.Format.WithDimensions,
                        }),
                        iconAlt: TextInput({
                          label: 'Icon alt text',
                          defaultValue: 'Icon',
                          selectAll: true,
                        }),
                        linkText: TextInput({
                          label: 'Link text',
                          defaultValue: 'Link',
                          selectAll: true,
                        }),
                        subtext: TextInput({
                          label: 'Subtext',
                          defaultValue: 'This is some subtext',
                          selectAll: true,
                        }),
                      },
                    }),
                    getItemLabel(subnavLink) {
                      return subnavLink?.linkText || 'Link'
                    },
                  }),
                },
              }),
              getItemLabel(subnavGroup) {
                return subnavGroup?.heading || 'Heading'
              },
            }),
          },
        }),
        getItemLabel(links) {
          return links?.text || 'Link'
        },
      }),
      secondaryLinks: List({
        label: 'Right links',
        type: Shape({
          type: {
            link: Link({ label: 'On click' }),
            linkText: TextInput({
              label: 'Link text',
              defaultValue: 'Link',
              selectAll: true,
            }),
          },
        }),
        getItemLabel(secondaryLink) {
          return secondaryLink?.linkText || 'Link'
        },
      }),
      ctaText: TextInput({
        label: 'CTA text',
        defaultValue: 'Request a demo',
        selectAll: true,
      }),
      ctaLink: Link({ label: 'CTA on click' }),
    },
  },
)
