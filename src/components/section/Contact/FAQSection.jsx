"use client";

import { useState } from "react";
import { faqSection } from "@/data/contactdata";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="section bg-bg-primary">
      <div className="mx-auto w-full max-w-4xl  ">
        <img src="https://ik.imagekit.io/anideatech/ait/ait/contact-where-we-are-when-were-available.png" className="mb-10 rounded-2xl" alt="contact-where-we-are-when-were-available" />

        <h2 className="title text-center">{faqSection.title}</h2>

        <div className="mt-10 divide-y divide-border-primary/20 border-y border-border-primary/20">
          {faqSection.items.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-6 py-6 text-left font-manrope-semibold text-lg text-text-primary hover:cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span>{item.question}</span>
                  <span
                    aria-hidden="true"
                    className={`flex size-8 shrink-0 items-center justify-center rounded-full border border-border-primary/30 text-2xl font-manrope-light transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-6 text-base leading-relaxed text-text-secondary">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
