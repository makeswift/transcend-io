import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import clsx from 'clsx'

import { NeueHaasDisplay } from '@/lib/fonts'
import { analytics } from '@/lib/segment/analytics'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    document.body.classList.add(NeueHaasDisplay.variable, 'font-sans')
  }, [])

  useEffect(() => {
    function handleRouteChange(url: string) {
      analytics.page(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => router.events.off('routeChangeComplete', handleRouteChange)
  }, [router])

  return (
    <main className={clsx(NeueHaasDisplay.variable, 'font-sans')}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
