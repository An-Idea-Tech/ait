"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InsightsHero() {
    return (
        <section className="min-h-screen bg-bg-primary px-6 py-16 md:py-24 lg:px-16 flex flex-col font-manrope-medium transition-colors duration-500 selection:bg-brand selection:text-white">
            {/* Top Pill Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex justify-center mb-20 md:mb-32"
            >
                <span className="rounded-full border border-border-line bg-bg-primary px-6 py-2.5 text-xs sm:text-sm text-text-secondary tracking-wide shadow-sm">
                    What we offer, organized by what your business needs.
                </span>
            </motion.div>

            <div className="w-full max-w-[1400px] mx-auto flex flex-col">
                {/* Large Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-16 md:mb-24 text-[2.75rem] leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-[6rem] font-manrope-light"
                >
                    Essays for founders <br className="hidden sm:block" />
                    who'd rather think than <br className="hidden sm:block" />
                    skim.
                </motion.h1>

                {/* Grid container */}
                <div className="flex flex-col lg:flex-row items-end gap-12 lg:gap-20 lg:pl-[15%]">
                    {/* Image Area */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
                        className="w-full lg:w-[65%] overflow-hidden rounded-xl border border-border-line bg-bg-primary shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                            alt="Posters"
                            className="w-full h-auto object-cover transition-transform duration-1000 hover:scale-105 opacity-90"
                        />
                    </motion.div>

                    {/* Excerpt Paragraph Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="w-full lg:w-[35%] lg:pb-6"
                    >
                        <p className="text-base sm:text-[17px] leading-[1.8] text-text-secondary font-manrope-light">
                            Notes on how SME software should actually get built, what we've
                            learned running a studio for ten years, and observations from
                            working with founders across India. Most pieces take 6-12 minutes
                            to read. We don't publish on a schedule. We publish when we have
                            something worth saying.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}