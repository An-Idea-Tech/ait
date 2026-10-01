"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Do I need to know which service I need?",
    answer:
      "No. Tell us what is not working. We will look at the situation with you and work out whether a website, a process change, an integration, or a Custom Web App would help.",
  },
  {
    question: "Can you work with the tools we already use?",
    answer:
      "Yes. We do not replace tools that are already doing the job. If there is a gap, we can look at an integration or a different system.",
  },
  {
    question: "What happens after the Discovery Call?",
    answer:
      "The call gives you a clearer view of the problem and what to do next. If the issue needs more investigation, we may suggest Solutions Consulting before recommending a service.",
  },
];

export default function FAQsection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section
      className="section py-14 sm:py-20 lg:py-28"
      aria-labelledby="homepage-faq-title"
    >
      <div className="mx-auto w-full max-w-6xl">
        <header className="max-w-3xl">
          <h2
            id="homepage-faq-title"
            className="title"
          >
            Questions Before You Begin
          </h2>
        </header>

        <div className="mt-10 border-t border-border-primary/25 sm:mt-14">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className="border-b border-border-primary/25"
              >
                <h3>
                  <button
                    type="button"
                    className="group flex w-full items-center justify-between gap-6 py-6 text-left sm:py-8"
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`homepage-faq-answer-${index}`}
                  >
                    <span className="subtitle">
                      {faq.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className="relative flex size-9 shrink-0 items-center justify-center rounded-full  transition-colors duration-200  sm:size-10"
                    >
                      <span className="absolute h-px w-4 bg-current" />
                      <span
                        className={`absolute h-4 w-px bg-current transition-transform duration-200 ${
                          isOpen ? "scale-y-0" : "scale-y-100"
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <div
                  id={`homepage-faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-4xl pb-7 description">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
