import { AnalyticsBrowser } from '@segment/analytics-next'
import { strict } from 'assert'

strict(process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY)

export const analytics = AnalyticsBrowser.load({
  writeKey: process.env.NEXT_PUBLIC_SEGMENT_WRITE_KEY,
})
