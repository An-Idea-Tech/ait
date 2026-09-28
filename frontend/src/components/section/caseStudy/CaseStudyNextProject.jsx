"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

export default function CaseStudyNextProject({ nextProject }) {
  if (!nextProject) return null;
  const { slug, title } = nextProject;

  return (
    <section className="max-w-5xl mx-auto px-6 md:px-12 py-14 md:py-20">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Link
          href={`/work/${slug}`}
          className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 py-8 hover:opacity-80 transition-opacity duration-300"
        >
          <div className="flex flex-col gap-2">
            <span className="subtitle !text-left">
              Next Project
            </span>
            <span className="title2 group-hover:text-brand transition-colors duration-300">
              {title}
            </span>
          </div>

          <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-full border border-border-primary flex items-center justify-center transition-all duration-300 group-hover:bg-brand group-hover:border-brand">
            <FiArrowUpRight className="w-5 h-5 text-text-primary transition-all duration-300 group-hover:text-white group-hover:scale-110 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </div>
        </Link>
      </motion.div>
    </section>
  );
}
