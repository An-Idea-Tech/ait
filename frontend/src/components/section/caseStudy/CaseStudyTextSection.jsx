"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

export default function CaseStudyTextSection({
  sectionLabel,
  subtitle,
  paragraphs,
  image,
  leftImage,
  rightImage,
  colorPalette,
}) {
  const hasBottomContent = image || leftImage || rightImage || (colorPalette && colorPalette.length > 0);

  return (
    <section className="section">
      <div className="flex flex-col xl:flex-row gap-10 md:gap-16 lg:gap-24">
        {/* Label column */}
        <motion.div
          className="md:w-[500px] flex-shrink-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="subtitle !text-left">
            {sectionLabel}
          </h2>
          {subtitle && (
            <p className="title2 !text-left mt-2 md:mt-5">
              {subtitle}
            </p>
          )}
        </motion.div>

        {/* Content column */}
        <motion.div
          className="flex-1 min-w-0 flex flex-col gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.1 } } }}
        >
          {paragraphs?.map((para, i) => (
            <p key={i} className="description text-justify">
              {para}
            </p>
          ))}
        </motion.div>
      </div>

      {/* Bottom Content / Visuals Section (matching reference layout at the end of contents) */}
      {hasBottomContent && (
        <motion.div
          className="flexflex-col xl:flex-row gap-10 md:gap-16 lg:gap-24 mt-12 md:mt-16 lg:mt-20 items-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.2 } } }}
        >
        

          {/* Right Column Bottom Visual / Palette */}
          <div className="flex-1 bgmin-w-0 w-full flex flex-col gap-6">
            
            {image && !rightImage && (
              <div className="rounded-xl overflow-hidden border border-border-primary/15">
                <img
                  src={image}
                  alt={`${sectionLabel} visual`}
                  className="w-full h-auto object-cover max-h-[500px]"
                />
              </div>
            )}
          </div>
        </motion.div>
      )}
    </section>
  );
}
