"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORM ?? "abc123";
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return <p className="text-primary text-center font-semibold">Thanks for your submission!</p>;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <Label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </Label>
          <Input id="email" type="email" name="email" />
          <ValidationError className="text-red-500 font-medium" prefix="Email" field="email" errors={state.errors} />
        </div>
        <div className="mb-4">
          <Label htmlFor="message" className="block text-sm font-medium">
            Message
          </Label>
          <Textarea id="message" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 font-medium"
          />
        </div>
        <Button type="submit" disabled={state.submitting} className="justify-center">
          Submit
        </Button>
        <ValidationError className="text-red-500 font-medium" errors={state.errors}/>
      </form>
    </div>
  );
}
