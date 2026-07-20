"use client";

import React from "react";
import { motion } from "motion/react";
import { FiCheck } from "react-icons/fi";

export default function ListSection({ section }) {
  return (
    <section id={section.id} className="section">
      <div className="mx-auto max-w-5xl">
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
        <div className="grid grid-cols-1 md:grid-cols-2">
          {section.items &&
            section.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group card-rounded flex items-start gap-4 p-4 transition-all duration-300 select-none "
              >
                {/* Glowing Checkmark Badge */}
                <div className="bg-green mt-0.5 flex h-6 lg:h-8 lg:w-8 w-6  shrink-0 items-center justify-center rounded-full duration-300">
                  <FiCheck className="h-4 w-4 stroke-[2.5]" />
                </div>

                {/* Item Text */}
                <p className="description">
                  {item}
                </p>
              </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
}
