"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const formId = process.env.NEXT_PUBLIC_FORM ?? "abc123";
  const [state, handleSubmit] = useForm(formId);

  if (state.succeeded) {
    return (
      <p className="text-primary text-center font-semibold">
        Thanks for your submission!
      </p>
    );
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium items-center gap-2 leading-none select-none mb-1">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="dark:bg-input/30 h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs outline-none disabled:opacity-50 focus-visible:border-ring focus-visible:ring-[2px]"
          />
          <ValidationError
            className="text-red-500 font-medium"
            prefix="Email"
            field="email"
            errors={state.errors}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium items-center gap-2 leading-none select-none mb-1">
            Message
          </label>
          <textarea id="message" name="message" 
            className="dark:bg-input/30 w-full focus-visible:border-ring focus-visible:ring-[2px] min-h-16 flex field-sizing-content rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 font-medium"
          />
        </div>
        <button
          type="submit"
          disabled={state.submitting}
          className="bg-primary text-primary-foreground hover:bg-primary/90 h-9 px-4 py-2 rounded-md"
        >
          Submit
        </button>
        <ValidationError
          className="text-red-500 font-medium"
          errors={state.errors}
        />
      </form>
    </>
  );
}
