"use client";

import React from "react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";

export default function WhatweSection() {
  return (
    <section className="section ">
      {/* Centered Div with Red Color Accent and Styling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-4xl bg-[#d54c45] p-8 shadow-[0_12px_40px_rgba(255,36,36,0.12)] backdrop-blur-xl sm:p-12 md:p-16"
      >
        {/* Title */}
        <h2 className="title !text-white mb-6 sm:mb-8 md:mb-10">
          <span>What we actually do </span>
        </h2>

        {/* Paragraph 1 */}
        <p className="description  !text-white mb-8 sm:mb-10 text-justify">
          We build software, websites, and growth systems for SMEs and founders
          — primarily in Karnataka, occasionally beyond. The work splits across
          five categories: branding, validation builds (landing pages, GBP),
          conversion builds (websites, growth consulting), operational platforms
          (web apps, MVPs, mobile), and standalone thinking work (PRDs).
        </p>

        {/* Paragraph 2 */}
        <p className="description  !text-white mb-8 sm:mb-10 text-justify">
          That&apos;s the surface. Underneath, what we actually do is help
          founders decide what NOT to build — then build the rest properly. Most
          agencies sell more work to clients who don&apos;t need it. We say no a
          lot. That&apos;s the discipline that&apos;s kept us alive for ten
          years.
        </p>

        {/* Link / CTA */}
        <div className="mt-8 flex justify-center">
          <Button text="See full services" link="/services" />
        </div>
      </motion.div>
    </section>
  );
}
