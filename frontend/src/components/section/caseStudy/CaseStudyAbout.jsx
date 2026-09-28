"use client";

import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CaseStudyAbout({ about, services, industry }) {
  return (
    <section className="section">
      <div className="flex flex-col gap-12 md:flex-row flex-wrap md:gap-16 lg:gap-24">
        {/* Left: About text */}
        <motion.div
          className="min-w-0 flex-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="subtitle !text-left uppercase">About</h2>
          <div className="bg-border-primary mt-4 mb-8 h-[2px] w-[25%]" />
          <div className="flex flex-col gap-5">
            {about.paragraphs.map((para, i) => (
              <p key={i} className="description !text-justify">
                {para}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right: Services + Industry tags */}
        <motion.div
          className="flex flex-1 flex-shrink-0 flex-col gap-10 md:w-[220px] lg:w-[260px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            ...fadeUp,
            visible: {
              ...fadeUp.visible,
              transition: { ...fadeUp.visible.transition, delay: 0.1 },
            },
          }}
        >
          {/* Services */}
          <div>
            <h2 className="subtitle !text-left uppercase">Service</h2>
            <div className="bg-border-primary mt-4 mb-8 h-[2px] w-[25%]" />
            <div className="flex flex-col gap-3">
              {services.map((service, i) => (
                <p key={i} className="subtitle !text-left">
                  {service}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

      <motion.div
          className="flex flex-0 flex-shrink-0 flex-col gap-10 md:w-[220px] lg:w-[260px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            ...fadeUp,
            visible: {
              ...fadeUp.visible,
              transition: { ...fadeUp.visible.transition, delay: 0.1 },
            },
          }}
        >
          {/* Industry */}
          <div>
            <h2 className="subtitle !text-left uppercase">Industry</h2>
            <div className="bg-border-primary mt-4 mb-8 h-[2px] w-[25%]" />
            <p className="subtitle !text-left">
              {industry}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
