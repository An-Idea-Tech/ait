"use client";

import React from "react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";

export default function CTASection({ section }) {
  return (
    <section id={section.id} className="section py-14 md:py-20">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-3xl border border-brand/40 bg-gradient-to-b from-[#1c1c21] via-bg-primary to-[#121215] p-8 text-center shadow-[0_0_50px_rgba(255,107,0,0.12)] sm:p-12 md:p-16"
      >
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* CTA Title */}
          {section.title && (
            <h2 className="title !text-3xl sm:!text-4xl md:!text-5xl lg:!text-6xl mb-6">
              <span>{section.title}</span>
            </h2>
          )}

          {/* CTA Paragraphs */}
          <div className="mb-8 space-y-4 text-base leading-relaxed text-text-secondary sm:text-lg md:text-xl">
            {section.paragraphs &&
              section.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
          </div>

          {/* CTA Buttons */}
          {section.buttons && section.buttons.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {section.buttons.map((btn, index) => (
                <Button
                  key={index}
                  text={btn.text}
                  link={btn.link}
                  variant={index === 0 ? "light" : "outline"}
                />
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
