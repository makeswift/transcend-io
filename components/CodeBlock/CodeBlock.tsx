import { Ref, forwardRef, useEffect, useState } from 'react'

import clsx from 'clsx'
import highlight from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'

type Props = {
  className?: string
  code?: string
  language?: 'typescript'
}

highlight.registerLanguage('typescript', typescript)

export const CodeBlock = forwardRef(function CodeBlock(
  { className, code = '', language = 'typescript' }: Props,
  ref: Ref<HTMLElement>,
) {
  const [highlighted, setHighlighted] = useState<string>('')

  useEffect(() => {
    setHighlighted(highlight.highlight(code, { language }).value)
  }, [code, language])

  return (
    <code
      ref={ref}
      className={clsx('hljs language-tsx text-code !p-6 text-sm', className)}
      dangerouslySetInnerHTML={{ __html: highlighted }}
    />
  )
})
