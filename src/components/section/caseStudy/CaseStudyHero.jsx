"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import Heighlight from "@/components/shared/Heighlight";
import Image from "next/image";

export default function CaseStudyHero({ title, tagline, heroImage, tag }) {
  return (
    <section className="section ">
      {/* Title block */}
      <div className="flex-col-center gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center justify-center gap-3"
        >
          <Heighlight text={tag} className="mb-5" />

          <h1 className="hero-title-main w-[90%] !text-center md:mb-6">
            {title}
            <Image
              src="https://ik.imagekit.io/anideatech/ait/hero-image.webp"
              width={600}
              height={200}
              alt="ait-hero-banner"
              priority
              sizes="100vw"
              className="mx-3 inline-block h-[48px] w-[140px] rounded-[100px] object-cover align-middle md:h-[72px] md:w-[240px]"
            />
          </h1>

          <p className="subtitle">{tagline}</p>
        </motion.div>

        {/* Hero image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="aspect-[16/8] w-full overflow-hidden md:aspect-[16/7]"
        >
          <img
            src={heroImage}
            alt={title}
            className="h-full w-full rounded-xl object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
