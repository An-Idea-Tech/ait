"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Heighlight from "@/components/shared/Heighlight";

export default function CaseStudyHero({ title, tagline, heroImage, tag }) {
  return (
    <section className="section !items-start">

      {/* Title block */}
      <div className="max-w-5xl  pb-8 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-3"
        >
          <Heighlight text={tag} />

          <h1 className="title !text-left">
            {title}
          </h1>
          <p className="subtitle !text-left">
            {tagline}
          </p>
        </motion.div>
      </div>

      {/* Hero image */}
      <motion.div
        initial={{ opacity: 0, scale: 1.03 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        className="w-full aspect-[16/8] md:aspect-[16/7] overflow-hidden"
      >
        <img
          src={heroImage}
          alt={title}
          className="w-full h-full object-cover rounded-xl"
        />
      </motion.div>
    </section>
  );
}
