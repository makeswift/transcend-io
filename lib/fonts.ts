import localFont from 'next/font/local'

export const NeueHaasDisplay = localFont({
  src: [
    {
      path: '../public/fonts/NeueHaasGrotesk-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasGrotesk-Roman.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/NeueHaasGrotesk-Medium.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-neue-haas-grotesk',
})
