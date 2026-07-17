"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CaseStudyChallenge({ challenge }) {
  const { subtitle, items } = challenge;

  return (
    <section className="section">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col lg:flex-row gap-10 md:gap-12"
      >
        {/* Section header */}
        <div className="flex flex-col items-start gap-4">
          <h2 className="subtitle uppercase">
            Challenge
          </h2>
          <p className="title2 !text-left">
            {subtitle}
          </p>
        </div>

        {/* Challenge items */}
        <div className="flex flex-col gap-0">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: i * 0.08,
              }}
              className="flex flex-row gap-5 py-5 "
            >
              <span className="subtitle !text-gray">
                {item.number}
              </span>
              <p className="subtitle !text-left">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
