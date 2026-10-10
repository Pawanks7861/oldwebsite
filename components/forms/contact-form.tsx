"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  submitContact,
  validateContact,
  type ContactField,
  type ContactInput,
  type ContactResult,
} from "@/lib/contact-request";
import { siteConfig } from "@/lib/constants";

const initialValues: ContactInput = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  city: "",
  message: "",
};

const fields: { name: Exclude<ContactField, "message">; label: string; type: string; autoComplete: string }[] = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "businessName", label: "Business Name", type: "text", autoComplete: "organization" },
  { name: "phone", label: "Contact Number", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "city", label: "City", type: "text", autoComplete: "address-level2" },
];

const inputClass =
  "mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-3 text-sm outline-none focus-visible:border-brown focus-visible:ring-2 focus-visible:ring-brown/30";

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<ContactField, string>>>({});
  const [status, setStatus] = useState<"idle" | "checking" | "done">("idle");
  const [result, setResult] = useState<ContactResult | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "done") {
      successRef.current?.scrollIntoView({ block: "start" });
    }
  }, [status]);

  function update(field: ContactField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "checking") return;

    const nextErrors = validateContact(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(nextErrors)[0];
      document.getElementById(`contact-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("checking");
    try {
      const response = await submitContact(values);
      setResult(response);
      setStatus("done");
    } catch {
      setStatus("idle");
      setErrors({ name: "Check the form and try again." });
    }
  }

  if (status === "done" && result) {
    return (
      <div ref={successRef} className="scroll-mt-28 rounded-2xl border border-gold/30 bg-gold-soft p-6" role="status">
        <h2 className="font-serif text-3xl text-brown">{result.title}</h2>
        <p className="mt-3 text-sm leading-7 text-ink sm:text-base">{result.message}</p>
        <p className="mt-4 text-sm leading-6">
          Phone:{" "}
          <a className="font-semibold text-brown underline-offset-2 hover:underline" href={siteConfig.contact.phoneHref}>
            {siteConfig.contact.phone}
          </a>
          <br />
          Email:{" "}
          <a className="font-semibold text-brown underline-offset-2 hover:underline" href={siteConfig.contact.emailHref}>
            {siteConfig.contact.email}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-card p-5 sm:p-6">
      <p id="contact-form-note" className="text-sm leading-6 text-muted">
        This form checks your message on this page. It does not send or store it.
      </p>
      <div className="mt-5 grid gap-4">
        {fields.map((field) => {
          const error = errors[field.name];
          const errorId = `contact-${field.name}-error`;
          return (
            <div key={field.name}>
              <label htmlFor={`contact-${field.name}`} className="text-sm font-medium">
                {field.label}
              </label>
              <input
                id={`contact-${field.name}`}
                name={field.name}
                type={field.type}
                autoComplete={field.autoComplete}
                value={values[field.name]}
                required
                aria-required="true"
                onChange={(event) => update(field.name, event.target.value)}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? errorId : undefined}
                className={inputClass}
              />
              {error ? (
                <p id={errorId} className="mt-1 text-sm text-clay" role="alert">
                  {error}
                </p>
              ) : null}
            </div>
          );
        })}
        <div>
          <label htmlFor="contact-message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            required
            aria-required="true"
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "contact-message-error" : "contact-form-note"}
            className={inputClass}
          />
          {errors.message ? (
            <p id="contact-message-error" className="mt-1 text-sm text-clay" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "checking"}
        className="mt-5 inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full bg-brown px-5 py-2.5 text-sm font-semibold text-ivory transition hover:bg-brown-rich active:bg-brown-rich disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "checking" ? "Checking message…" : "Send Message"}
      </button>
    </form>
  );
}
