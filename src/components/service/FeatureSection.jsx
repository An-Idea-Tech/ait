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
            <h2 className="title">
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
                className="group relative flex flex-col justify-between overflow-hidden card-rounded glass-pill  p-7  transition-all duration-300 select-none  sm:p-9"
              >

                {/* Feature Title */}
                <h3 className="mb-3 title2 !text-left">
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
