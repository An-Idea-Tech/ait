"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaRegCircle } from "react-icons/fa";

export default function CaseStudyChallenge({ challenge }) {
  const {
    subtitle,
    items,
    image = "https://i.pinimg.com/1200x/e6/6d/9e/e66d9e450c7ac6bd60ced9cb792fdca0.jpg",
  } = challenge || {};

  return (
    <section className="section">
      <div className="flex flex-col gap-10 md:gap-14 lg:gap-16 w-full">
        {/* Section header (Top Left) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start gap-4 w-full"
        >
          <h2 className="subtitle uppercase">
            Challenge
          </h2>
          {subtitle && (
            <p className="title2 !text-left">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Next: Left Image, Right List of Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="flex flex-col lg:flex-row gap-10 md:gap-16 items-start w-full"
        >
          {/* Left: Image */}
          <div className="w-full lg:w-1/2 flex-1  overflow-hidden border border-border-primary/15">
            <img
              src={image}
              className="w-full h-auto object-cover max-h-[500px]"
              alt="Case study challenge visual"
            />
          </div>

          {/* Right: Challenge items */}
          <div className="w-full lg:w-1/2 flex-1 flex flex-col gap-0">
            {items?.map((item, i) => (
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
                className="flex flex-row gap-5 py-5 border-b border-border-primary/10 last:border-none first:pt-0"
              >
                <span className="subtitle !text-gray flex-row-center">
                  <FaRegCircle className="absolute w-9 h-9 md:w-10 md:h-10 text-red-600" />
                  <p>{item.number}</p>
                </span>
                <p className="subtitle !text-left">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
