"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { comparisonSection } from "@/data/home";
import { FaRegHandshake } from "react-icons/fa";
import { RxCrossCircled } from "react-icons/rx";
import { IoIosWarning } from "react-icons/io";
import Note from "@/components/shared/Note";


function CheckCircleIcon({ className = "" }) {
  return (
    <svg
      className={`shrink-0 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}



export default function Comparision() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="section gap-8 sm:gap-12">
      {/* Header section: Who we're for. Who we're not. */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto flex max-w-3xl flex-col items-center px-4 text-center"
      >
        <h2 className="title">
          <span className="text-brand">
            {comparisonSection.header.titlePrefix}
          </span>{" "}
          <span className="text-text-primary ">
            {comparisonSection.header.titleSuffix}
          </span>
        </h2>
        <p className="subtitle mt-3 max-w-xl">
          {comparisonSection.header.subtitle}
        </p>
      </motion.div>

      {/* Main Outer Container Box with Orange Glow & Border */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className=" relative mx-auto w-full max-w-6xl p-4 transition-all duration-500 sm:p-8 md:p-12 "
      >
        <div className="grid grid-cols-1 items-stretch gap-6 sm:gap-8 lg:grid-cols-2 lg:gap-10">
          {/* Left Column Box: Who We Work With (Highlighted Dark Card) */}
          <motion.div
            variants={itemVariants}
            className="group/card relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border-primary bg-gradient-to-b from-[#18181c] to-[#0e0e11] p-6 text-white shadow-2xl shadow-black/80 transition-all duration-300 hover:border-white/20 sm:rounded-3xl sm:p-8 md:p-10"
          >
            {/* Subtle ambient light gradient inside dark card */}
            <div className="bg-brand/10 pointer-events-none absolute -top-24 -right-24 h-48 w-48 card-rounded opacity-60 blur-3xl transition-opacity duration-500 group-hover/card:opacity-100" />

            <div className="relative z-10">
              {/* Card Header Row */}
              <div className="mb-8 flex items-center gap-3 border-b border-white/10 pb-5 sm:mb-10 sm:gap-4 sm:pb-6">
                <div className="flex shrink-0 items-center">
                  <FaRegHandshake className="h-10 w-10" />
                </div>
                <h3 className="font-manrope-bold text-2xl tracking-tight text-white lowercase sm:text-3xl">
                  {comparisonSection.workWith.title}
                </h3>
              </div>

              {/* Items List */}
              <div className="space-y-6 sm:space-y-7">
                {comparisonSection.workWith.items.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3.5 py-1 transition-all duration-300 sm:gap-4"
                  >
                    <CheckCircleIcon className="mt-0.5 h-6 w-6 shrink-0 text-[#0EBD4F] transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(14,189,79,0.5)] sm:h-7 sm:w-7" />
                    <p className="font-manrope-medium text-sm leading-relaxed text-neutral-200 transition-colors duration-200 group-hover:text-white sm:text-base sm:leading-7 md:text-lg">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column Box: Who We Don't Work With */}
          <motion.div
            variants={itemVariants}
            className="relative flex flex-col justify-between rounded-2xl p-6 transition-all duration-300 sm:rounded-3xl sm:p-8 md:p-10"
          >
            <div>
              {/* Card Header Row */}
              <div className="border-border-primary/20 mb-8 flex items-center gap-3 border-b pb-5 sm:mb-10 sm:gap-4 sm:pb-6">
                <div className="flex shrink-0 items-center justify-center text-neutral-500">
                  <IoIosWarning  className="h-7 w-7 sm:h-8 sm:w-8" />
                </div>
                <h3 className="font-manrope-bold text-2xl tracking-tight text-neutral-400 lowercase sm:text-3xl dark:text-neutral-500">
                  {comparisonSection.workNotWith.title}
                </h3>
              </div>

              {/* Items List */}
              <div className="space-y-6 sm:space-y-7">
                {comparisonSection.workNotWith.items.map((item, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3.5 py-1 transition-all duration-300 sm:gap-4"
                  >
                    <RxCrossCircled className="text-red-600 h-10 w-10" />
                    <p className="description transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Footer Note Below the Card Container */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-2 max-w-2xl px-4 text-center"
      >
          <Note text={comparisonSection.footerNote} />
      </motion.div>
    </section>
  );
}
