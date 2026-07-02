"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { FiChevronDown } from "react-icons/fi";

export default function PhaseCard({ data }) {
  if (!data) return null;

  const [openIds, setOpenIds] = useState(() => {
    if (data?.accordions) {
      const defaultOpened = data.accordions.filter((acc) => acc.defaultOpen).map((acc) => acc.id);
      return defaultOpened.length > 0 ? defaultOpened : [data.accordions[0]?.id];
    }
    return [];
  });

  const toggleAccordion = (itemId) => {
    setOpenIds((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  return (
    <section
      id={data.id}
      className="w-full scroll-mt-32 md:scroll-mt-36 border-t border-b border-border-primary bg-bg-primary text-text-primary transition-all duration-300"
    >
      {/* Top Header Row */}
      <div className="flex flex-col md:flex-row border-b border-border-primary">
        {/* Phase Label Column */}
        <div className="w-full md:w-44 lg:w-52 shrink-0 py-5 px-6 border-b md:border-b-0 md:border-r border-border-primary flex items-center">
          <span className="font-manrope-medium text-text-secondary text-sm sm:text-base">
            {data.phaseLabel}
          </span>
        </div>

        {/* Phase Title Column */}
        <div className="w-full md:w-72 lg:w-80 shrink-0 py-5 px-6 border-b md:border-b-0 md:border-r border-border-primary flex items-center">
          <h2 className="font-manrope-bold text-text-primary text-2xl sm:text-3xl tracking-tight">
            {data.title}
          </h2>
        </div>

        {/* Phase Subtitle Column */}
        <div className="flex-1 py-5 px-6 flex items-center">
          <p className="font-manrope-medium text-text-secondary text-sm sm:text-base md:text-lg leading-relaxed">
            {data.subtitle}
          </p>
        </div>
      </div>

      {/* Middle Accordions Section */}
      {data.accordions && data.accordions.length > 0 && (
        <div className="flex flex-col md:flex-row">
          {/* Empty spacer column to align accordions under the title */}
          <div className="hidden md:block md:w-44 lg:w-52 shrink-0" />

          {/* Accordion list */}
          <div className="flex-1 px-6 divide-y divide-border-primary/40">
            {data.accordions.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div key={item.id} className="py-2">
                  <button
                    onClick={() => toggleAccordion(item.id)}
                    className="w-full flex items-center justify-between py-4 sm:py-5 text-left cursor-pointer group focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`font-manrope-medium text-base sm:text-lg md:text-xl transition-colors duration-200 ${
                        isOpen
                          ? "text-brand font-manrope-bold"
                          : "text-text-primary group-hover:text-brand"
                      }`}
                    >
                      {item.title}
                    </span>
                    <span className="ml-4 shrink-0 text-text-secondary group-hover:text-text-primary transition-transform duration-300">
                      <FiChevronDown
                        className={`w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-brand" : ""
                        }`}
                      />
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
                        <div className="pb-6 pt-1 text-text-secondary font-manrope-light text-sm sm:text-base leading-relaxed max-w-4xl pr-4">
                          {item.content}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Bottom Footer Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-t border-border-primary py-5 px-6 text-xs sm:text-sm md:text-base">
        <div>
          <span className="text-text-secondary font-manrope-medium">
            {data.durationLabel || "Typical duration : "}
          </span>
          <span className="font-manrope-bold text-text-primary ml-1">
            {data.durationValue || data.typicalDuration}
          </span>
        </div>

        <div>
          <span className="text-text-secondary font-manrope-medium">
            {data.deliverableLabel || "Deliverable : "}
          </span>
          <span className="font-manrope-bold text-text-primary ml-1">
            {data.deliverableValue || data.deliverable}
          </span>
        </div>
      </div>
    </section>
  );
}
