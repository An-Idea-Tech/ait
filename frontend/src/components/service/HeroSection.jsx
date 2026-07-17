"use client";

import React from "react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";
import Button2 from "@/components/ui/Button2";
import Heighlight from "../shared/Heighlight";

export default function HeroSection({ section, tier }) {
  const badgeText = section.subtitle || (tier ? `${tier.name}` : "Service");

  return (
    <section id={section.id} className="section">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex-col-center gap-7 lg:gap-10"
      >
        {/* Tier / Subtitle Badge */}
        {badgeText && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
           <Heighlight text= {badgeText}/>
          </motion.div>
        )}

        {/* Title */}
        <h1 className="huge-text !text-center">
          <span>{section.title}</span>
        </h1>

        {/* Heading / Subtitle */}
        {section.heading && (
          <p className="title2 !text-black bg-yellow-300 p-1">
            {section.heading}
          </p>
        )}

        {/* Description */}
        {section.description && (
          <p className="subtitle max-w-5xl text-center">
            {section.description}
          </p>
        )}

        {/* Action Buttons */}
        {section.buttons && section.buttons.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
          >
            {section.buttons.map((btn, index) =>
              index === 0 ? (
                <Button key={index} text={btn.text} link={btn.link} />
              ) : (
                <Button2 key={index} text={btn.text} link={btn.link} />
              )
            )}
          </motion.div>
        )}

      </motion.div>
    </section>
  );
}
