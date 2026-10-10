/**
 * Public site settings. Replace the placeholder contact details here
 * before publishing. Every phone, email, hours and location on the site
 * reads from this file.
 */
export const brand = {
  name: "Rasoyaa",
  tagline: "Managing Catering, Your Way",
  title: "Rasoyaa | Catering Management Software",
  ogTitle: "Rasoyaa — Managing Catering, Your Way",
  description:
    "Manage catering events, menus, inventory, purchases, staff, quotations, payments and profitability with Rasoyaa.",
  summary:
    "Catering operations management software for events, menus, inventory, purchases, teams and finances.",
} as const;

export const siteConfig = {
  ...brand,
  url: "https://yourdomain.com",
  logo: "/brand/rasoyaa-logo.jpg",
  contact: {
    phone: "+91 00000 00000",
    phoneHref: "tel:+910000000000",
    email: "hello@yourdomain.com",
    emailHref: "mailto:hello@yourdomain.com",
    hours: "Monday – Saturday, 10:00 AM – 6:00 PM IST",
    location: "Your City, India",
  },
} as const;
