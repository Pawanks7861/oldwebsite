export type DemoRequestInput = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  city: string;
  eventsPerMonth: string;
  managementMethod: string;
  message: string;
};

export type DemoField = keyof DemoRequestInput;

export type DemoRequestResult = {
  ok: true;
  stored: false;
  title: string;
  message: string;
};

export const eventVolumeOptions = [
  { value: "under-5", label: "Fewer than 5" },
  { value: "5-15", label: "5 – 15" },
  { value: "16-40", label: "16 – 40" },
  { value: "over-40", label: "More than 40" },
] as const;

export const managementMethodOptions = [
  { value: "whatsapp", label: "WhatsApp" },
  { value: "sheets", label: "Excel / Google Sheets" },
  { value: "manual", label: "Notebook / Manual" },
  { value: "software", label: "Other Software" },
  { value: "combination", label: "Combination of Methods" },
] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateDemoRequest(input: DemoRequestInput) {
  const errors: Partial<Record<DemoField, string>> = {};

  if (input.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }
  if (input.businessName.trim().length < 2) {
    errors.businessName = "Enter your catering business name.";
  }

  const digits = input.phone.replace(/\D/g, "");
  if (digits.length < 8 || digits.length > 15) {
    errors.phone = "Enter a valid contact number.";
  }

  if (!emailPattern.test(input.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (input.city.trim().length < 2) {
    errors.city = "Enter your city.";
  }
  if (!eventVolumeOptions.some((option) => option.value === input.eventsPerMonth)) {
    errors.eventsPerMonth = "Select how many events you handle in a month.";
  }
  if (!managementMethodOptions.some((option) => option.value === input.managementMethod)) {
    errors.managementMethod = "Select how you manage catering today.";
  }
  if (input.message.trim().length > 1000) {
    errors.message = "Keep the message under 1000 characters.";
  }

  return errors;
}

/**
 * Validates a demo request for a future API.
 * This function does not send, store, or log the submission.
 * Replace the body with a real request when an endpoint exists.
 */
export async function submitDemoRequest(input: DemoRequestInput): Promise<DemoRequestResult> {
  const errors = validateDemoRequest(input);
  if (Object.keys(errors).length > 0) {
    throw new Error("Demo request failed validation.");
  }

  return {
    ok: true,
    stored: false,
    title: "Details look good",
    message:
      "This page checked your request in the browser. Nothing was sent or saved. Use the phone number or email on the contact page until demo delivery is connected.",
  };
}
