import { useRouter } from 'next/router'
import { Ref, forwardRef, useState } from 'react'

import { Control, Field, Label, Message, Root, Submit } from '@radix-ui/react-form'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { submitLead } from '@/lib/pardot/submit'
import { analytics } from '@/lib/segment/analytics'

type Props = {
  className?: string
  pardotCampaignId?: string
  pardotListIds?: string
  eventName?: string
}

export const InlineForm = forwardRef(function InlineForm(
  {
    className,
    pardotCampaignId = '10501',
    pardotListIds = '7579',
    eventName = 'Form Submitted',
  }: Props,
  ref: Ref<HTMLFormElement>,
) {
  const {
    query: { utm_source, utm_medium, utm_campaign, utm_id, utm_term, utm_content },
  } = useRouter()
  const [loading, setLoading] = useState(false)

  return (
    <Root
      ref={ref}
      className={clsx(className, 'space-y-8')}
      onSubmit={async e => {
        e.preventDefault()

        const email = e.currentTarget.elements.namedItem('email')

        analytics.track(eventName)

        setLoading(true)

        try {
          await submitLead({
            email: email instanceof HTMLInputElement ? email.value : '',
            consent: true,
            pardotCampaignId,
            pardotListIds,
            utm_source: typeof utm_source === 'string' ? utm_source : undefined,
            utm_medium: typeof utm_medium === 'string' ? utm_medium : undefined,
            utm_campaign: typeof utm_campaign === 'string' ? utm_campaign : undefined,
            utm_id: typeof utm_id === 'string' ? utm_id : undefined,
            utm_term: typeof utm_term === 'string' ? utm_term : undefined,
            utm_content: typeof utm_content === 'string' ? utm_content : undefined,
          })

          if (e.target instanceof HTMLFormElement) {
            e.target.reset()

            // TODO: Send success growler
          }
        } catch (err) {
          console.error(err)
        } finally {
          setLoading(false)
        }
      }}
    >
      <div className="relative">
        <Field className="relative grid" name="email">
          <Label className="sr-only">Email</Label>
          <Message
            className="absolute left-0 top-full mt-2 text-xs text-black/60"
            match="valueMissing"
          >
            Please enter your email
          </Message>
          <Message
            className="absolute left-0 top-full mt-2 text-xs text-black/60"
            match="typeMismatch"
          >
            Please provide a valid email
          </Message>
          <Control asChild>
            <Input type="email" required placeholder="Email" className="w-full pr-[120px]" />
          </Control>
        </Field>
        <Submit asChild>
          <Button className="absolute right-0 top-1/2 -translate-y-1/2" disabled={loading}>
            {loading ? 'Loading...' : 'Submit'}
          </Button>
        </Submit>
      </div>
    </Root>
  )
})
