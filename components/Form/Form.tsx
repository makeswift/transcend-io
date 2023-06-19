import { useRouter } from 'next/router'
import { Ref, forwardRef } from 'react'

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

export const Form = forwardRef(function Form(
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

  return (
    <Root
      ref={ref}
      className={clsx(className, 'space-y-8')}
      onSubmit={async e => {
        const firstName = e.currentTarget.elements.namedItem('firstName')
        const lastName = e.currentTarget.elements.namedItem('lastName')
        const email = e.currentTarget.elements.namedItem('email')
        const company = e.currentTarget.elements.namedItem('company')

        analytics.track(eventName)

        await submitLead({
          firstName: firstName instanceof HTMLInputElement ? firstName.value : undefined,
          lastName: lastName instanceof HTMLInputElement ? lastName.value : undefined,
          email: email instanceof HTMLInputElement ? email.value : '',
          company: company instanceof HTMLInputElement ? company.value : undefined,
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
      }}
    >
      <div className="grid grid-cols-12 gap-y-8 sm:gap-x-4">
        <Field className="relative col-span-12 grid sm:col-span-6" name="firstName">
          <div className="flex items-baseline justify-between">
            <Label className="sr-only">First name</Label>
            <Message
              className="absolute left-0 top-full mt-1 text-xs text-black/60"
              match="valueMissing"
            >
              Please enter your first name
            </Message>
          </div>
          <Control asChild>
            <Input type="text" required placeholder="First name" />
          </Control>
        </Field>
        <Field className="relative col-span-12 grid sm:col-span-6" name="lastName">
          <div className="flex items-baseline justify-between">
            <Label className="sr-only">Last name</Label>
            <Message
              className="absolute left-0 top-full mt-1 text-xs text-black/60"
              match="valueMissing"
            >
              Please enter your last name
            </Message>
          </div>
          <Control asChild>
            <Input type="text" required placeholder="Last name" />
          </Control>
        </Field>
      </div>
      <Field className="relative grid" name="email">
        <div className="flex items-baseline justify-between">
          <Label className="sr-only">Email</Label>
          <Message
            className="absolute left-0 top-full mt-1 text-xs text-black/60"
            match="valueMissing"
          >
            Please enter your email
          </Message>
          <Message
            className="absolute left-0 top-full mt-1 text-xs text-black/60"
            match="typeMismatch"
          >
            Please provide a valid email
          </Message>
        </div>
        <Control asChild>
          <Input type="email" required placeholder="Email" />
        </Control>
      </Field>
      <Field className="relative grid" name="company">
        <div className="flex items-baseline justify-between">
          <Label className="sr-only">Email</Label>
          <Message
            className="absolute left-0 top-full mt-1 text-xs text-black/60"
            match="valueMissing"
          >
            Please enter your company
          </Message>
        </div>
        <Control asChild>
          <Input type="text" required placeholder="Company" />
        </Control>
      </Field>
      <Submit asChild>
        <Button>Submit</Button>
      </Submit>
    </Root>
  )
})
