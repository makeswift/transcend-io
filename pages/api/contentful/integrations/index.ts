import { NextApiRequest, NextApiResponse } from 'next'

import { z } from 'zod'

import { getIntegrations } from '@/lib/contentful/client'

const params = z.object({
  skip: z.string().optional(),
  limit: z.string().optional(),
  order: z.string().optional(),
  filter: z.string().optional(),
})

export default async function contentfulIntegrations(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method Not Allowed' })

  try {
    const { skip = 0, limit = 8, order, filter } = params.parse(req.query)

    const results = await getIntegrations({ skip, limit, order, filter })

    res.json(results)
  } catch (e: any) {
    res.status(400).json({ error: JSON.parse(e.message) })
  }
}
