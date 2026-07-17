"use client";

import React from "react";
import { motion } from "motion/react";

export default function FeatureSection({ section }) {
  return (
    <section id={section.id} className="section  py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        {section.title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 text-center sm:mb-14"
          >
            <h2 className="title !text-3xl sm:!text-4xl md:!text-5xl">
              <span>{section.title}</span>
            </h2>
          </motion.div>
        )}

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {section.items &&
            section.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border-primary bg-bg-primary p-7 shadow-inner transition-all duration-300 select-none hover:border-brand/40 hover:scale-[1.01] sm:p-9"
              >
                {/* Number Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="font-manrope-bold text-xs tracking-widest text-brand uppercase">
                    Feature 0{index + 1}
                  </span>
                  <div className="h-1.5 w-12 rounded-full bg-border-primary transition-all duration-300 group-hover:bg-brand group-hover:w-20" />
                </div>

                {/* Feature Title */}
                <h3 className="mb-3 font-manrope-bold text-xl leading-snug tracking-tight text-text-primary sm:text-2xl">
                  {item.title}
                </h3>

                {/* Feature Description */}
                <p className="description text-base leading-relaxed text-text-secondary">
                  {item.description}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
