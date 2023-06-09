import { Ref, forwardRef } from 'react'

import { Control, Field, Label, Message, Root, Submit } from '@radix-ui/react-form'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

type Props = {
  className?: string
}

export const InlineForm = forwardRef(function InlineForm(
  { className }: Props,
  ref: Ref<HTMLFormElement>,
) {
  return (
    <Root ref={ref} className={clsx(className, 'space-y-8')}>
      <div className="relative">
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
            <Input type="email" required placeholder="Email" className="pr-[120px]" />
          </Control>
        </Field>
        <Submit asChild>
          <Button className="absolute right-0 top-1/2 -translate-y-1/2 transform">Submit</Button>
        </Submit>
      </div>
    </Root>
  )
})
