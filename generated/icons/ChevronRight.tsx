import * as React from 'react'
import type { SVGProps } from 'react'
const SvgChevronRight = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={8} height={8} fill="none" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m3 7 3-3-3-3"
    />
  </svg>
)
export default SvgChevronRight
