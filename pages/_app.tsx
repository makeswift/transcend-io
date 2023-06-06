import { AppProps } from 'next/app'
import { useEffect } from 'react'

import clsx from 'clsx'

import { NeueHaasDisplay } from '@/lib/fonts'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add(NeueHaasDisplay.variable, 'font-sans')
  }, [])

  return (
    <main className={clsx(NeueHaasDisplay.variable, 'font-sans')}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
