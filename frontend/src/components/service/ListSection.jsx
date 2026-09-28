"use client";

import React from "react";
import { motion } from "motion/react";
import { FiCheck } from "react-icons/fi";

export default function ListSection({ section }) {
  return (
    <section id={section.id} className="section">
      <div className="mx-auto max-w-5xl ">
        {/* Section Heading */}
        {section.title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 text-center sm:mb-12"
          >
            <h2 className="title">
              <span>{section.title}</span>
            </h2>
          </motion.div>
        )}

        {/* List Items Grid / Stack */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2">
          {section.items &&
            section.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className=" group flex items-start gap-4 card-rounded p-6  transition-all duration-300 select-none sm:p-7"
              >
                {/* Glowing Checkmark Badge */}
                <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green duration-300 ">
                  <FiCheck className="h-4 w-4 stroke-[2.5]" />
                </div>

                {/* Item Text */}
                <p className="text-base font-medium leading-relaxed text-text-primary sm:text-lg">
                  {item}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
