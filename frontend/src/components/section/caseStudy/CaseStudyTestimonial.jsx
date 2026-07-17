"use client";

import React from "react";
import { motion } from "framer-motion";

export default function CaseStudyTestimonial({ testimonial }) {
  const { quote, name, designation } = testimonial;

  return (
    <section className="section bg-blue-500 ">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col gap-6"
      >
        <blockquote className="flex flex-col gap-8  ">
          <p className="title2">
            &ldquo;{quote}&rdquo;
          </p>
          <footer className="flex flex-col gap-1">
            <span className="subtitle">
              {name}
            </span>
            <span className="subtitle">
              {designation}
            </span>
          </footer>
        </blockquote>
      </motion.div>
    </section>
  );
}
