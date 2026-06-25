"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const calendarData = [
  {
    year: "2026",
    months: [
      { name: "December", status: "upcoming" },
      { name: "November", status: "current" },
      { name: "October", status: "upcoming" },
      { name: "September", status: "upcoming" },
      { name: "August", status: "upcoming" },
    ],
  },
  { year: "2025", months: [] },
  { year: "2024", months: [] },
  { year: "2023", months: [] },
  { year: "2022", months: [] },
  { year: "2021", months: [] },
];

export default function InsightsCalendar() {
  const [openYear, setOpenYear] = useState("2026");

  const toggleYear = (year) => {
    setOpenYear(openYear === year ? null : year);
  };

  return (
    <section className="bg-bg-primary px-6 py-20 lg:px-16 border-b border-border-primary flex flex-col items-center">
      <div className="w-full max-w-4xl text-center space-y-6 mb-16">
        <h2 className="heading-section">The 2026 essay calendar.</h2>
        <p className="body-large max-w-2xl mx-auto">
          A release schedule built for focus. We release 12 essay units every calendar year. Each covers a single theme in-depth, offering a comprehensive view. Subscribe below to get notified of new units.
        </p>
      </div>

      <div className="w-full max-w-4xl border-t border-border-primary">
        {calendarData.map((item) => {
          const isOpen = openYear === item.year;
          return (
            <div key={item.year} className="brand-accordion-item">
              <button
                onClick={() => toggleYear(item.year)}
                className={`w-full flex items-center justify-between py-6 px-6 text-left transition-all duration-300 font-manrope-medium ${
                  isOpen
                    ? "bg-brand text-black dark:text-black font-semibold"
                    : "text-text-primary hover:bg-slate-50 dark:hover:bg-zinc-950"
                }`}
              >
                <span className="text-xl sm:text-2xl tracking-wide">{item.year}</span>
                {isOpen ? <FiMinus className="w-6 h-6" /> : <FiPlus className="w-6 h-6" />}
              </button>

              <AnimatePresence initial={false}>
                {isOpen && item.months.length > 0 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden bg-bg-primary"
                  >
                    <div className="py-6 px-8 flex flex-col space-y-4">
                      {item.months.map((month) => (
                        <div
                          key={month.name}
                          className="flex items-center justify-between border-b border-border-primary/45 py-3"
                        >
                          <span className={`text-lg ${month.status === "current" ? "text-brand font-bold" : "text-text-secondary"}`}>
                            {month.name}
                          </span>
                          {month.status === "current" && (
                            <span className="flex items-center gap-2">
                              <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
                              <span className="text-xs uppercase tracking-wider text-brand font-semibold">Active Unit</span>
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
