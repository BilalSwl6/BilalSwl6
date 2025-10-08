"use client"
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
    const formId = process.env.NEXT_PUBLIC_FORM ?? "abc123";
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return <p>Thanks for your submission!</p>;
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <div>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <div>
        <label htmlFor="message" >Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      <ValidationError errors={state.errors} />
    </form>
    </div>
  );
}
