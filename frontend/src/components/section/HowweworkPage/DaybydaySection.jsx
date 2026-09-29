"use client";

import React from "react";
import { motion } from "motion/react";
import Note from "@/components/shared/Note";
import { dayToDayData } from "@/data/howwework";

export default function DaybydaySection() {
  if (!dayToDayData) return null;

  return (
    <section
      id={dayToDayData.id}
      className="section !items-start scroll-mt-32 md:scroll-mt-36 transition-colors duration-300 "
    >
      {/* Section Header */}
      <div className="flex flex-col items-start max-w-3xl mb-12 sm:mb-16 md:mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="title !text-left mb-4 sm:mb-6"
        >
          {dayToDayData.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="subtitle !text-left !font-manrope-light text-text-secondary leading-relaxed"
        >
          {dayToDayData.subtitle}
        </motion.p>
      </div>

      {/* Principles List (Horizontal Table / Rows Layout) */}
      <div className="w-full border-t border-border-primary transition-colors duration-300">
        {dayToDayData.principles?.map((principle, index) => (
          <motion.div
            key={principle.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.7,
              delay: index * 0.12,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="group relative flex flex-col md:flex-row w-full border-b border-border-primary/40 py-8 sm:py-10 md:py-14 lg:py-16 transition-all duration-300 "
          >
            {/* Left Column: Title */}
            <div className="w-full md:w-80 lg:w-[420px] shrink-0 pb-6 md:pb-0 md:pr-8 lg:pr-12 flex flex-col justify-start items-start">
              {principle.number && (
                <span className="title !text-hww">
                  {principle.number} 
                </span>
              )}
              <h3 className="title2 !text-left">
                {principle.title}
              </h3>
            </div>

            {/* Right Column: Content */}
            <div className="flex-1 flex flex-col gap-5 sm:gap-6 justify-center">
              {principle.description && (
                <p className="font-manrope-light text-base sm:text-lg text-text-secondary leading-relaxed whitespace-pre-line">
                  {principle.description}
                </p>
              )}

              {/* Practice Box Callout */}
              {principle.practiceText && (
                <div className="mt-1 sm:mt-2 relative overflow-hidden rounded-r-2xl border border-border-primary/20 dark:border-border-primary/40 border-l-4 border-l-brown dark:border-l-hww bg-cream/60 dark:bg-white/[0.04] p-5 sm:p-6 backdrop-blur-md transition-all duration-300 group-hover:bg-cream dark:group-hover:bg-white/[0.07] shadow-sm">
                  <p className="font-manrope-light text-sm sm:text-base text-text-secondary leading-relaxed">
                    {principle.practiceLabel && (
                      <span className="font-manrope-bold text-text-primary mr-1.5 block sm:inline">
                        {principle.practiceLabel}
                      </span>
                    )}
                    {principle.practiceText}
                  </p>
                </div>
              )}

              {principle.secondaryDescription && (
                <p className="font-manrope-light text-base sm:text-lg text-text-secondary leading-relaxed whitespace-pre-line mt-1">
                  {principle.secondaryDescription}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Note Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-12 sm:mt-16 md:mt-20 pt-4 flex justify-start sm:justify-center"
      >
        <Note
          text={dayToDayData.bottomNote}
          className="max-w-3xl !text-left sm:!text-center !font-manrope-light text-text-secondary text-sm sm:text-base"
        />
      </motion.div>
    </section>
  );
}
