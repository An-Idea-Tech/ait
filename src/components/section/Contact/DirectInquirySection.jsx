"use client";

import { useState } from "react";
import { FiCheck, FiCopy, FiMail, FiPhone } from "react-icons/fi";
import { directInquirySection } from "@/data/contactdata";

export default function DirectInquirySection() {
  const [copiedValue, setCopiedValue] = useState("");

  const copyToClipboard = async (value) => {
    await navigator.clipboard.writeText(value);
    setCopiedValue(value);
    window.setTimeout(() => setCopiedValue(""), 2000);
  };

  return (
    <section className="section bg-bg-primary">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="lg:pt-4">
          
          <h2 className="title mt-4 !text-left">{directInquirySection.title}</h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-text-secondary">
            {directInquirySection.description}
          </p>
        </div>

        <div className="]rounded-2xl ">
          {directInquirySection.contacts.map((contact) => {
            const isPhone = contact.type === "phone";
            const isCopied = copiedValue === contact.value;
            const href = isPhone
              ? `tel:${contact.value.replace(/\s+/g, "")}`
              : `mailto:${contact.value}`;
            const Icon = isPhone ? FiPhone : FiMail;

            return (
              <div key={contact.label} className="flex items-center gap-4 p-5 sm:p-6">
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon aria-hidden="true" className="size-5" />
                </span>

                <div className="min-w-0 flex-1">
                  <p className="font-manrope-semibold text-sm text-text-primary">
                    {contact.label}
                  </p>
                  <a
                    href={href}
                    className="mt-1 block break-all text-sm text-text-secondary transition-colors hover:text-brand sm:text-base"
                  >
                    {contact.value}
                  </a>
                </div>

                <button
                  type="button"
                  onClick={() => copyToClipboard(contact.value)}
                  className="flex size-9 shrink-0 items-center justify-center rounded-full border border-border-primary/30 text-text-secondary transition-colors hover:border-brand hover:text-brand"
                  aria-label={`Copy ${contact.label}`}
                >
                  {isCopied ? (
                    <FiCheck aria-hidden="true" className="size-4 text-brand" />
                  ) : (
                    <FiCopy aria-hidden="true" className="size-4" />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
