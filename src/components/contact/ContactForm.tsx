"use client";

import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-md border border-flow-200 bg-flow-50 p-10 text-center">
        <CheckCircle2 className="h-10 w-10 text-flow-600" />
        <p className="mt-4 text-lg font-bold text-brand-950">Thank you — we&apos;ve received your enquiry.</p>
        <p className="mt-2 max-w-sm text-sm text-ink-600">
          A member of the Proplastics team will be in touch shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-brand-950" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            required
            type="text"
            className="mt-1.5 w-full rounded-sm border border-ink-200 px-4 py-2.5 text-sm focus:border-flow-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-brand-950" htmlFor="company">
            Company
          </label>
          <input
            id="company"
            type="text"
            className="mt-1.5 w-full rounded-sm border border-ink-200 px-4 py-2.5 text-sm focus:border-flow-500 focus:outline-none"
          />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-semibold text-brand-950" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            required
            type="email"
            className="mt-1.5 w-full rounded-sm border border-ink-200 px-4 py-2.5 text-sm focus:border-flow-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-semibold text-brand-950" htmlFor="phone">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className="mt-1.5 w-full rounded-sm border border-ink-200 px-4 py-2.5 text-sm focus:border-flow-500 focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="text-sm font-semibold text-brand-950" htmlFor="enquiry">
          Enquiry type
        </label>
        <select
          id="enquiry"
          className="mt-1.5 w-full rounded-sm border border-ink-200 px-4 py-2.5 text-sm focus:border-flow-500 focus:outline-none"
        >
          <option>Technical / product specification</option>
          <option>Sales / distributor enquiry</option>
          <option>Investor relations</option>
          <option>General enquiry</option>
        </select>
      </div>

      <div>
        <label className="text-sm font-semibold text-brand-950" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          className="mt-1.5 w-full rounded-sm border border-ink-200 px-4 py-2.5 text-sm focus:border-flow-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-sm bg-signal-500 px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white hover:bg-signal-600"
      >
        Send enquiry
      </button>
    </form>
  );
}
