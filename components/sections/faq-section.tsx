import { ChevronDown } from "lucide-react";
import { faqCategories } from "@/content/faq";

export function FaqSection() {
  return (
    <div className="space-y-10">
      {faqCategories.map((category) => (
        <section key={category.title} aria-labelledby={`faq-${category.title}`}>
          <h2 id={`faq-${category.title}`} className="font-serif text-2xl text-brown">
            {category.title}
          </h2>
          <div className="mt-4 divide-y divide-line border-y border-line">
            {category.items.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="menu-summary flex cursor-pointer items-center justify-between gap-4 py-4 text-left text-base font-semibold hover:text-brown">
                  {faq.question}
                  <ChevronDown className="size-5 shrink-0 text-muted transition group-open:rotate-180" aria-hidden="true" />
                </summary>
                <p className="pb-4 pr-8 text-sm leading-7 text-muted sm:text-base">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
