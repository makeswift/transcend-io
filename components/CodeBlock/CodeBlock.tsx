import React, { Ref, forwardRef } from 'react'

import clsx from 'clsx'
import { highlight, languages } from 'prismjs'
import 'prismjs/components/prism-javascript'

type Props = {
  className?: string
  code?: string
  language?: 'js'
}

export const CodeBlock = forwardRef(function CodeBlock(
  { className, code = '', language = 'js' }: Props,
  ref: Ref<HTMLPreElement>,
) {
  return (
    <pre
      ref={ref}
      className={clsx('language-js', className)}
      dangerouslySetInnerHTML={{ __html: highlight(code, languages[language], language) }}
    />
  )
})
