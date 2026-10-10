export type ContactInput = {
  name: string;
  businessName: string;
  phone: string;
  email: string;
  city: string;
  message: string;
};

export type ContactField = keyof ContactInput;

export type ContactResult = {
  ok: true;
  stored: false;
  title: string;
  message: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateContact(input: ContactInput) {
  const errors: Partial<Record<ContactField, string>> = {};

  if (input.name.trim().length < 2) {
    errors.name = "Enter your name.";
  }
  if (input.businessName.trim().length < 2) {
    errors.businessName = "Enter your business name.";
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
  if (input.message.trim().length < 10) {
    errors.message = "Enter a short message, at least 10 characters.";
  }
  if (input.message.trim().length > 1000) {
    errors.message = "Keep the message under 1000 characters.";
  }

  return errors;
}

/**
 * Validates a contact message for a future API.
 * This function does not send, store, or log the submission.
 */
export async function submitContact(input: ContactInput): Promise<ContactResult> {
  const errors = validateContact(input);
  if (Object.keys(errors).length > 0) {
    throw new Error("Contact message failed validation.");
  }

  return {
    ok: true,
    stored: false,
    title: "Message checked",
    message:
      "This page checked your message in the browser. Nothing was sent or saved. Use the phone number or email beside the form until contact delivery is connected.",
  };
}
