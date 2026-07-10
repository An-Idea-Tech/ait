"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiCopy, FiCheck } from "react-icons/fi";
import { directInquirySection } from "@/data/contactdata";

export default function DirectInquirySection() {
  const [openIndex, setOpenIndex] = useState(null);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  return (
    <section className="bg-bg-primary flex flex-col w-full">
      <div className="w-full max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs uppercase tracking-widest text-brand font-manrope-bold">
            {directInquirySection.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-manrope-bold text-text-primary leading-tight">
            {directInquirySection.title}
          </h2>
          <p className="text-sm text-text-secondary leading-relaxed font-manrope-light">
            {directInquirySection.description}
          </p>
        </div>

        <div className="lg:col-span-7 border-t border-border-primary">
          {directInquirySection.contacts.map((contact, idx) => {
            const isOpen = openIndex === idx;
            const isEmail = contact.value.includes("@");
            const isCopied = copiedIndex === idx;

            return (
              <div key={idx} className="border-b border-border-primary">
                <button
                  onClick={() => toggleDropdown(idx)}
                  className="w-full flex items-center justify-between py-6 text-sm sm:text-base font-manrope-medium text-left hover:text-brand transition-colors cursor-pointer group"
                >
                  <span className="text-text-secondary group-hover:text-text-primary transition-colors">
                    {contact.label}
                  </span>
                  <div className="flex items-center text-text-secondary group-hover:text-text-primary transition-colors">
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <FiChevronDown className="w-5 h-5" />
                    </motion.div>
                  </div>
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
                      <div className="pb-6 pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        {isEmail ? (
                          <a
                            href={`mailto:${contact.value}`}
                            className="text-lg sm:text-xl font-manrope-bold text-text-primary hover:text-brand transition-colors underline"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <a
                            href={`tel:${contact.value.replace(/\s+/g, "")}`}
                            className="text-lg sm:text-xl font-manrope-bold text-text-primary hover:text-brand transition-colors underline"
                          >
                            {contact.value}
                          </a>
                        )}

                        <button
                          onClick={() => handleCopy(contact.value, idx)}
                          className="flex items-center gap-2 text-xs uppercase tracking-wider font-manrope-bold px-4 py-2 border border-border-primary bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-900/60 dark:hover:bg-zinc-900 hover:border-text-primary text-text-secondary hover:text-text-primary transition-all cursor-pointer w-max"
                        >
                          {isCopied ? (
                            <>
                              <FiCheck className="w-3.5 h-3.5 text-[#10B981]" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <FiCopy className="w-3.5 h-3.5" />
                              <span>Copy {isEmail ? "Email" : "Phone"}</span>
                            </>
                          )}
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
