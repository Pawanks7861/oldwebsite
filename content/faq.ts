export const faqCategories = [
  {
    title: "General",
    items: [
      {
        question: "What is Rasoyaa?",
        answer:
          "Rasoyaa is catering operations management software designed to help catering businesses manage events, menus, inventory, purchases, staff, quotations, payments and event profitability from one organised platform.",
      },
      {
        question: "Who is Rasoyaa for?",
        answer:
          "Rasoyaa is for caterers, catering company owners, event caterers and the people who coordinate teams. It is meant for businesses that cook for events, not for a restaurant dining room.",
      },
      {
        question: "Is it a restaurant POS?",
        answer:
          "No. Rasoyaa is designed for catering and event operations. It is not restaurant billing software and it is not a food delivery product.",
      },
      {
        question: "Does the demo form save my details?",
        answer:
          "Not on this website yet. The form checks that your details are complete and then stops. It does not send or store the request. Call or email using the contact details until delivery is connected.",
      },
    ],
  },
  {
    title: "Events",
    items: [
      {
        question: "Can I manage multiple events?",
        answer:
          "Yes. Each catering event has its own workspace for the menu, inventory, purchasing, quotation, payments and team, so several events can move forward at the same time.",
      },
      {
        question: "Can I manage Expected Guests?",
        answer:
          "Yes. Each event records Expected Guests with the date and venue. Rasoyaa uses Expected Guests, not PAX.",
      },
      {
        question: "Can I track venues and budgets?",
        answer:
          "Yes. Venue and customer budget sit on the event, next to the quotation and the payments that follow.",
      },
    ],
  },
  {
    title: "Menu",
    items: [
      {
        question: "Can I create station-based menus?",
        answer:
          "Yes. A menu is organised as a station, then dishes, then a short brief and a quantity for that event.",
      },
      {
        question: "Can I create menu PDFs?",
        answer:
          "Yes. You can preview the menu and download a professional menu PDF to share with the client.",
      },
    ],
  },
  {
    title: "Inventory",
    items: [
      {
        question: "Can I track event inventory?",
        answer:
          "Yes. Rasoyaa keeps central stock separate from what a single event needs, including the quantity still available.",
      },
      {
        question: "Can I track returned and missing items?",
        answer:
          "Yes. Returnable items can be recorded as sent, returned or missing, so the store record stays traceable after the event.",
      },
    ],
  },
  {
    title: "Finance",
    items: [
      {
        question: "Can I track payments?",
        answer:
          "Yes. Quoted value, payments received, money spent and the remaining balance belong to the event they came from.",
      },
      {
        question: "Can I understand event profit/loss?",
        answer:
          "Rasoyaa is designed to compare customer payments with event costs. Upcoming events keep estimated cost and expected margin separate from actual cost and actual margin.",
      },
    ],
  },
  {
    title: "Team",
    items: [
      {
        question: "Can Managers and Staff have different access?",
        answer:
          "Yes. Admin, Manager and Staff roles see different parts of the business. Managers work on the events they are responsible for. Staff see assigned events, tasks and checklists, and can submit expenses, without browsing the full payment history.",
      },
      {
        question: "Can I assign staff to events?",
        answer:
          "Yes. People can be assigned to an event with a task such as setup, service or inventory return, and with a checklist for that job.",
      },
    ],
  },
] as const;
