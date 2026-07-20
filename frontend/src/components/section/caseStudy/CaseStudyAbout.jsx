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
      <div className="flex gap-12 flex-col flex-wrap w-full md:gap-16 lg:gap-24">
        {/* Left: About text */}
        <motion.div
          className="min-w-0 flex-2 flex-col-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="subtitle !text-left uppercase">About</h2>
          <div className="bg-border-primary mt-4 mb-8 h-[2px] w-[25%]" />
          <div className="flex flex-col gap-5 ">
            {about.paragraphs.map((para, i) => (
              <p key={i} className="font-manrope-light text-xl text-center md:text-2xl xl:text-4xl md:max-w-[800px] lg:max-w-[900px] text-center">
                {para}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Right: Services + Industry tags */}
        <motion.div
          className="flex flex-1 flex-shrink-0 flex-col gap-10"
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
            <div className="bg-border-primary mt-4 mb-4 h-[2px] w-[25%]" />
            <div className="flex flex-col gap-3">
              {services.map((service, i) => (
                <p key={i} className="text-xl sm:text-[4vw] lg:text-[3vw] font-manrope-bold !text-left">
                  {service}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

      <motion.div
          className=" "
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
            <div className="bg-border-primary mt-4 mb-4 h-[2px] w-[25%]" />
            <p className="text-xl sm:text-[4vw] lg:text-[3vw] font-manrope-bold !text-left">
              {industry}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
