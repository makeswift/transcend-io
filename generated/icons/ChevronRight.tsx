import * as React from 'react'
import { SVGProps } from 'react'

const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg width={8} height={8} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="m3 7 3-3-3-3"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgChevronRight
