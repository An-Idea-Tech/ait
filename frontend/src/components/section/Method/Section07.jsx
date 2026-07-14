"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";
import { section07 } from "@/data/methoddata";

export default function Section07() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-bg-primary flex flex-col w-full py-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full max-w-[1400px] mx-auto">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="text-4xl font-manrope-bold text-brand">
              {section07.num}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-manrope-bold text-text-primary leading-tight">
              {section07.title}
            </h2>
          </div>

          <div className="border-t border-border-primary/20">
            {section07.faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div key={idx} className="border-b border-border-primary/20">
                  <button
                    onClick={() => toggleAccordion(idx)}
                    className="w-full flex items-center justify-between py-5 text-left text-sm sm:text-base font-manrope-bold tracking-wider text-text-primary hover:text-brand transition-colors cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <span className="ml-4 flex-shrink-0 text-text-secondary">
                      {isOpen ? <FiMinus className="w-4 h-4" /> : <FiPlus className="w-4 h-4" />}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-5 text-sm sm:text-base text-text-secondary leading-relaxed font-manrope-light">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

        <div className="lg:col-span-5 overflow-hidden rounded-xl border border-border-primary/20 bg-zinc-950/40 p-4">
          <img
            src={section07.image}
            alt="Figuring out workflow"
            className="w-full h-auto object-cover rounded-lg aspect-[4/3] lg:aspect-square hover:scale-103 transition-transform duration-700"
          />
        </div>
      </div>
    </section>
  );
}
