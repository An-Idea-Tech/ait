"use client";

import React from "react";
import { whatWeNotData } from "@/data/about";
import { FiXCircle } from "react-icons/fi";
import { motion } from "motion/react";

export default function WhatwenotSection() {
  if (!whatWeNotData || !whatWeNotData.points) return null;

  return (
    <section className="section justify-center !min-h-fit py-12 sm:py-16 md:py-24">
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-12 sm:mb-16 md:mb-20 text-center"
        >
          <h2 className="title">
            {whatWeNotData.titlePrefix && `${whatWeNotData.titlePrefix} `}
            <span className="text-[#ff2424] dark:text-[#ff3333]">
              {whatWeNotData.highlightWord || "not"}
            </span>
            {whatWeNotData.titleSuffix || "."}
          </h2>
        </motion.div>

        {/* List of Points */}
        <div className="flex flex-col">
          {whatWeNotData.points.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="group flex items-start gap-4 sm:gap-5 md:gap-6 p-3 sm:p-4 rounded-2xl transition-all duration-300 hover:bg-text-primary/[0.03] hover:translate-x-1 sm:hover:translate-x-2"
            >
              {/* Icon */}
              <div className="shrink-0 mt-0.5 sm:mt-1 text-[#ff2424] dark:text-[#ff3333] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-90">
                <FiXCircle className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 stroke-[1.75]" />
              </div>

              {/* Text */}
              <p className="description text-justify flex-1 transition-colors duration-300 group-hover:text-text-secondary">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

