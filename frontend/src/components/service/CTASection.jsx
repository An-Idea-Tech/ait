"use client";

import React from "react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import Button2 from "../ui/Button2";

export default function CTASection({ section }) {
  return (
    <section id={section.id} className="section">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden card-rounded  p-8 text-center shadow-[0_0_50px_rgba(255,107,0,0.12)] sm:p-12 md:p-16"
      >
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-brand/15 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-3xl">
          {/* CTA Title */}
          {section.title && (
            <h2 className="title2  mb-6">
              <span>{section.title}</span>
            </h2>
          )}

          {/* CTA Paragraphs */}
          <div className="mb-8 space-y-4 description">
            {section.paragraphs &&
              section.paragraphs.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
          </div>

          {/* CTA Buttons */}
          {section.buttons && section.buttons.length > 0 && (
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              {section.buttons.map((btn, index) => (
                (index == 0) ? (
                  <Button text={btn.label} link={btn.link}  />
                ) : (
                  <Button2 text={btn.label} link={btn.link}  />
                )
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}
