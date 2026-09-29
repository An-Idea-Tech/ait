"use client";

import { whatWeDoData } from "@/data/about";
import { motion } from "motion/react";

export default function WhatwenotSection() {
  if (!whatWeDoData?.points?.length) return null;

  return (
    <section className="section py-12 sm:py-16 md:py-24">
      <div className="w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8 sm:mb-10"
        >
          <h2 className="font-manrope-bold text-4xl tracking-tight text-text-primary sm:text-5xl md:text-6xl">
            {whatWeDoData.title}
          </h2>
        </motion.div>

        <div className="">
          {whatWeDoData.points.map((item, index) => (
            <motion.div
              key={item.id || index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="border-b border-border-secondary py-6 sm:py-7"
            >
              <h3 className="font-manrope-bold text-xl tracking-tight text-text-primary sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 max-w-5xl font-manrope-light text-base leading-relaxed tracking-tight text-text-secondary sm:text-lg">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
