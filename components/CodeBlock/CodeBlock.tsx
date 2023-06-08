import React, { Ref, forwardRef, useEffect, useState } from 'react'

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
  const [html, setHtml] = useState(highlight(code, languages[language], language))

  useEffect(() => {
    setHtml(highlight(code, languages[language], language))
  }, [language, code])

  return (
    <pre
      ref={ref}
      className={clsx('language-js min-h-[40px] tracking-normal', className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
})
