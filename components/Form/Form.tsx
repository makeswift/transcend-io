import { Ref, forwardRef } from 'react'

import { Control, Field, Label, Message, Root, Submit } from '@radix-ui/react-form'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Input } from '@/components/Input'

type Props = {
  className?: string
}

export const Form = forwardRef(function Form({ className }: Props, ref: Ref<HTMLFormElement>) {
  return (
    <Root ref={ref} className={clsx(className, 'space-y-8')}>
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
