"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { services } from "@/lib/data";

type Status = "idle" | "submitting" | "success";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    await new Promise((resolve) => setTimeout(resolve, 900));
    setStatus("success");
  }

  if (status === "success") {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center gap-4 rounded-2xl border border-border bg-surface p-10 text-center">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
          <CheckCircle2 size={28} strokeWidth={1.75} />
        </div>
        <h3 className="text-xl font-semibold text-primary">Message sent</h3>
        <p className="max-w-sm text-[15px] leading-relaxed text-muted">
          Thanks for reaching out. A member of our team will get back to you within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-border bg-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Full name" htmlFor="name">
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Doe"
            className="input-field"
          />
        </Field>
        <Field label="Work email" htmlFor="email">
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="jane@company.com"
            className="input-field"
          />
        </Field>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Company" htmlFor="company">
          <input id="company" name="company" type="text" placeholder="Company name" className="input-field" />
        </Field>
        <Field label="Service of interest" htmlFor="service">
          <select id="service" name="service" defaultValue="" className="input-field appearance-none">
            <option value="" disabled>
              Select a service
            </option>
            {services.map((service) => (
              <option key={service.slug} value={service.slug}>
                {service.title}
              </option>
            ))}
            <option value="other">Something else</option>
          </select>
        </Field>
      </div>

      <Field label="Project details" htmlFor="message">
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us a bit about your project, timeline, and goals."
          className="input-field resize-none"
        />
      </Field>

      <Button type="submit" size="lg" className="mt-1 w-full sm:w-fit" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 size={16} className="animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={htmlFor} className="text-[13px] font-medium text-primary">
        {label}
      </label>
      {children}
    </div>
  );
}
