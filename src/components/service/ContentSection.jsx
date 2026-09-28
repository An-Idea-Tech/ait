"use client";

import React from "react";
import { motion } from "motion/react";

export default function ContentSection({ section }) {
  return (
    <section id={section.id} className="section">
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto  max-w-4xl  p-6  backdrop-blur-md sm:p-10 md:p-14"
      >
        {/* Section Heading */}
        {section.title && (
          <h2 className="title2 mb-6 sm:mb-8 md:mb-10">
            <span>{section.title}</span>
          </h2>
        )}

        {/* Paragraphs */}
        <div className="space-y-6 description ">
          {section.paragraphs &&
            section.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-justify "
              >
                {paragraph}
              </motion.p>
            ))}
        </div>
      </motion.div>
    </section>
  );
}
