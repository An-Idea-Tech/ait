"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";
import Heighlight from "@/components/shared/Heighlight";

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
    <section className="section py-12 md:py-20 lg:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 w-full max-w-[1400px] mx-auto">
        
        {/* Left: About Text - Spans 8 columns on desktop */}
        <motion.div
          className="lg:col-span-8 flex flex-col justify-between border border-border-primary/40 card-rounded p-8 bg-bg-primary/40 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow duration-500 relative overflow-hidden group"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          {/* Decorative ambient glow */}
          <div className="absolute top-0 right-0 w-72 h-72 card-rouded blur-3xl -translate-y-1/2 translate-x-1/3  transition-colors duration-700 pointer-events-none" />

          <div className="relative z-10 h-full flex flex-col gap-3">
            <div className="flex items-center gap-3 mb-5 ">
              <h2 className="title2">ABOUT</h2>
            </div>
            
            <div className="flex flex-col gap-6 md:gap-8">
              {about.paragraphs.map((para, i) => (
                <p 
                  key={i} 
                  className="subtitle !text-justify !tracking-tight md:!text-left"
                >
                  {para}
                </p>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Industry & Services - Spans 4 columns */}
        <div className="lg:col-span-4 flex flex-col gap-6 md:gap-8">
          
          {/* Industry Box */}
          <motion.div
            className="flex-1 flex flex-col justify-center border border-border-primary/20 card-rounded p-8 sm:p-10 relative overflow-hidden group shadow-sm hover:shadow-md transition-all duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.1 } } }}
          >
            {/* Subtle overlay on hover */}
            <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="subtitle">Industry</h2>
              <Heighlight text= {industry}/>
            </div>
          </motion.div>

          {/* Services Box */}
          <motion.div
            className="flex-[1.5] flex flex-col justify-between border border-border-primary/40 card-rounded p-8 sm:p-10 bg-bg-primary/40 backdrop-blur-md shadow-sm hover:shadow-md transition-shadow duration-500"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.2 } } }}
          >
            <h2 className="subtitle uppercase mb-8">SERVICES</h2>
            <div className="flex flex-wrap gap-2.5">
              {services.map((service, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-border-primary/50 bg-white/[0.02] hover:bg-white/[0.08] hover:border-border-primary transition-all duration-300 group cursor-default"
                >
                  <span className="font-manrope-medium text-sm text-text-primary group-hover:text-brand transition-colors duration-300">
                    {service}
                  </span>
                  <FiPlus className="text-text-secondary text-sm group-hover:rotate-90 group-hover:text-brand transition-all duration-300" />
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
