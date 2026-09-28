"use client";

import React from "react";
import { motion } from "motion/react";
import Button from "@/components/ui/Button";

export default function PricingSection({ section }) {
  return (
    <section id={section.id} className="section py-14 md:py-20">
      <div className="mx-auto max-w-6xl">
        {/* Section Heading */}
        {section.title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 text-center sm:mb-16"
          >
            <h2 className="title !text-3xl sm:!text-4xl md:!text-5xl">
              <span>{section.title}</span>
            </h2>
            <p className="description mx-auto mt-4 max-w-2xl text-base text-text-secondary sm:text-lg">
              Transparent, upfront pricing without hidden agency markup or surprise billing.
            </p>
          </motion.div>
        )}

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-stretch">
          {section.plans &&
            section.plans.map((plan, index) => {
              const isRecommended = index === 1; // Highlight middle plan

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className={`group relative flex flex-col justify-between rounded-3xl border p-7 transition-all duration-300 sm:p-9 ${
                    isRecommended
                      ? "border-brand bg-bg-primary shadow-[0_0_35px_rgba(255,107,0,0.18)] lg:-translate-y-2"
                      : "border-border-primary bg-bg-primary/70 hover:border-white/30 hover:scale-[1.01]"
                  }`}
                >
                  {/* Recommended Badge */}
                  {isRecommended && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-brand px-4 py-1 text-xs font-bold tracking-wider text-white uppercase shadow-md select-none">
                      Most Popular
                    </div>
                  )}

                  <div>
                    {/* Plan Title */}
                    <h3 className="mb-2 font-manrope-bold text-xl tracking-tight text-text-primary sm:text-2xl">
                      {plan.title}
                    </h3>

                    {/* Plan Value / Price */}
                    <div className="my-6 flex items-baseline gap-2 border-y border-border-primary/60 py-5">
                      <span className="!text-brand font-manrope-bold text-3xl tracking-tight sm:text-4xl md:text-5xl">
                        {plan.value}
                      </span>
                    </div>

                    {/* Plan Description */}
                    <p className="description mb-8 text-sm leading-relaxed text-text-secondary sm:text-base">
                      {plan.description}
                    </p>
                  </div>

                  {/* Plan Action Button */}
                  <div className="mt-auto pt-4">
                    <Button
                      text={isRecommended ? "Choose Plan" : "Get Started"}
                      link="/contact"
                      variant={isRecommended ? "light" : "outline"}
                      className="w-full justify-between"
                    />
                  </div>
                </motion.div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
