"use client";

import React from "react";
import { motion } from "framer-motion";

export default function InsightsHero() {
    return (
        <section className="bg-bg-primary px-6 py-16 md:py-24 lg:px-16 flex flex-col transition-colors duration-500 selection:bg-brand selection:text-white border-b border-border-primary">
            {/* Top Pill Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex mb-16 sm:mb-24"
            >
                <span className="brand-badge">
                    Notes on building and running businesses
                </span>
            </motion.div>

            <div className="w-full max-w-[1400px] mx-auto flex flex-col">
                {/* Large Headline */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mb-16 md:mb-24 heading-hero"
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
                        className="w-full lg:w-[65%] img-hero-container"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
                            alt="Three colorful posters on a concrete wall"
                            className="img-hero"
                        />
                    </motion.div>

                    {/* Excerpt Paragraph Area */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                        className="w-full lg:w-[35%] lg:pb-6"
                    >
                        <p className="body-large">
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