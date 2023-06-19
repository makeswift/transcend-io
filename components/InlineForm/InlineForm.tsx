import { Ref, forwardRef } from 'react'

import { Control, Field, Label, Message, Root, Submit } from '@radix-ui/react-form'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { submitLead } from '@/lib/pardot/submit'

type Props = {
  className?: string
  pardotCampaignId?: string
  pardotListIds?: string
}

export const InlineForm = forwardRef(function InlineForm(
  { className, pardotCampaignId = '10501', pardotListIds = '7579' }: Props,
  ref: Ref<HTMLFormElement>,
) {
  return (
    <Root
      ref={ref}
      className={clsx(className, 'space-y-8')}
      onSubmit={async e => {
        const email = e.currentTarget.elements.namedItem('email')

        await submitLead({
          email: email instanceof HTMLInputElement ? email.value : '',
          consent: true,
          pardotCampaignId,
          pardotListIds,
        })
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
          <Button className="absolute right-0 top-1/2 -translate-y-1/2">Submit</Button>
        </Submit>
      </div>
    </Root>
  )
})
