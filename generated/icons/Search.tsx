import * as React from 'react'
import { SVGProps } from 'react'

const SvgSearch = (props: SVGProps<SVGSVGElement>) => (
  <svg width={25} height={26} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
    <circle
      cx={11.559}
      cy={12.059}
      r={7.062}
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="m20.503 21.003-3.951-3.951"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgSearch
