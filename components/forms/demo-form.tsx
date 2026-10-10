"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  eventVolumeOptions,
  managementMethodOptions,
  submitDemoRequest,
  validateDemoRequest,
  type DemoField,
  type DemoRequestInput,
  type DemoRequestResult,
} from "@/lib/demo-request";
import { siteConfig } from "@/lib/constants";

const initialValues: DemoRequestInput = {
  name: "",
  businessName: "",
  phone: "",
  email: "",
  city: "",
  eventsPerMonth: "",
  managementMethod: "",
  message: "",
};

const fields: { name: DemoField; label: string; type: string; autoComplete: string }[] = [
  { name: "name", label: "Name", type: "text", autoComplete: "name" },
  { name: "businessName", label: "Catering Business Name", type: "text", autoComplete: "organization" },
  { name: "phone", label: "Contact Number", type: "tel", autoComplete: "tel" },
  { name: "email", label: "Email", type: "email", autoComplete: "email" },
  { name: "city", label: "City", type: "text", autoComplete: "address-level2" },
];

export function DemoForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<DemoField, string>>>({});
  const [status, setStatus] = useState<"idle" | "checking" | "done">("idle");
  const [result, setResult] = useState<DemoRequestResult | null>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (status === "done") {
      successRef.current?.scrollIntoView({ block: "start" });
    }
  }, [status]);

  function update(field: DemoField, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "checking") return;

    const nextErrors = validateDemoRequest(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(nextErrors)[0];
      document.getElementById(`demo-${firstInvalid}`)?.focus();
      return;
    }

    setStatus("checking");
    try {
      const response = await submitDemoRequest(values);
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
        <h2 className="font-serif text-3xl">{result.title}</h2>
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
      <p id="demo-form-note" className="text-sm leading-6 text-muted">
        This preview checks your details on this page. It does not send or store them.
      </p>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {fields.map((field) => (
          <Field
            key={field.name}
            {...field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={(value) => update(field.name, value)}
          />
        ))}
        <div className="sm:col-span-1">
          <label htmlFor="demo-eventsPerMonth" className="text-sm font-medium">
            Events Per Month
          </label>
          <select
            id="demo-eventsPerMonth"
            name="eventsPerMonth"
            value={values.eventsPerMonth}
            onChange={(event) => update("eventsPerMonth", event.target.value)}
            aria-invalid={Boolean(errors.eventsPerMonth)}
            aria-describedby={errors.eventsPerMonth ? "demo-eventsPerMonth-error" : undefined}
            className="mt-1.5 w-full cursor-pointer rounded-xl border border-line bg-white px-3 py-3 text-sm outline-none focus-visible:border-brown focus-visible:ring-2 focus-visible:ring-brown/30"
          >
            <option value="">Select a range</option>
            {eventVolumeOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.eventsPerMonth ? (
            <p id="demo-eventsPerMonth-error" className="mt-1 text-sm text-clay" role="alert">
              {errors.eventsPerMonth}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="demo-managementMethod" className="text-sm font-medium">
            Current Management Method
          </label>
          <select
            id="demo-managementMethod"
            name="managementMethod"
            value={values.managementMethod}
            onChange={(event) => update("managementMethod", event.target.value)}
            aria-invalid={Boolean(errors.managementMethod)}
            aria-describedby={errors.managementMethod ? "demo-managementMethod-error" : undefined}
            className="mt-1.5 w-full cursor-pointer rounded-xl border border-line bg-white px-3 py-3 text-sm outline-none focus-visible:border-brown focus-visible:ring-2 focus-visible:ring-brown/30"
          >
            <option value="">Select a method</option>
            {managementMethodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.managementMethod ? (
            <p id="demo-managementMethod-error" className="mt-1 text-sm text-clay" role="alert">
              {errors.managementMethod}
            </p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="demo-message" className="text-sm font-medium">
            What would you like to manage better?
          </label>
          <textarea
            id="demo-message"
            name="message"
            rows={5}
            value={values.message}
            onChange={(event) => update("message", event.target.value)}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? "demo-message-error" : "demo-form-note"}
            className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-3 text-sm outline-none focus-visible:border-brown focus-visible:ring-2 focus-visible:ring-brown/30"
          />
          {errors.message ? (
            <p id="demo-message-error" className="mt-1 text-sm text-clay" role="alert">
              {errors.message}
            </p>
          ) : null}
        </div>
      </div>
      <button
        type="submit"
        disabled={status === "checking"}
        className="mt-5 inline-flex min-h-11 w-full cursor-pointer items-center justify-center rounded-full bg-brown px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brown-rich active:bg-brown-rich disabled:cursor-wait disabled:opacity-70 sm:w-auto"
      >
        {status === "checking" ? "Checking details…" : "Request My Demo"}
      </button>
    </form>
  );
}

function Field({
  name,
  label,
  type,
  autoComplete,
  value,
  error,
  onChange,
}: {
  name: DemoField;
  label: string;
  type: string;
  autoComplete: string;
  value: string;
  error?: string;
  onChange: (value: string) => void;
}) {
  const errorId = `demo-${name}-error`;
  return (
    <div>
      <label htmlFor={`demo-${name}`} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={`demo-${name}`}
        name={name}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className="mt-1.5 w-full rounded-xl border border-line bg-white px-3 py-3 text-sm outline-none focus-visible:border-brown focus-visible:ring-2 focus-visible:ring-brown/30"
      />
      {error ? (
        <p id={errorId} className="mt-1 text-sm text-clay" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
