import { useEffect } from "react"

import { AppProps } from "next/app"

import { NeueHaasDisplay } from "@/lib/fonts"
import clsx from "clsx"

import "../styles/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    document.body.classList.add(NeueHaasDisplay.variable, "font-sans")
  }, [])

  return (
    <main className={clsx(NeueHaasDisplay.variable, "font-sans")}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
