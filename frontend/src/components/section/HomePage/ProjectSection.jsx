"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projectSection } from "@/data/home";

export default function ProjectSection() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <section className="section py-16 md:py-28">
      <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        {/* Header Section */}
        <div className="mb-16 md:mb-24 flex flex-col items-center text-center">
          <h1 className="hero-title-main">
            {projectSection.header.title}
          </h1>
        </div>

        {/* Cards Container: Column on mobile, flex-row on desktop */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10 md:gap-6 lg:gap-10 pt-4 pb-12">
          {projectSection.projects.slice(0, 3).map((project, index) => {
            // First and last card up, middle card down on desktop
            const offsetClass =
              index === 0 || index === 2
                ? "md:-translate-y-8 lg:-translate-y-12"
                : "md:translate-y-8 lg:translate-y-12";

            return (
              <motion.div
                key={project.id}
                initial={isDesktop ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 }}
                whileInView={isDesktop ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.2,
                }}
                className="w-full max-w-[380px] sm:max-w-[420px] md:w-1/3 flex-shrink-0"
              >
                {/* Inner Card Container with up/down offset on desktop */}
                <div
                  className={`relative w-full h-[420px] sm:h-[480px] md:h-[500px] lg:h-[540px] rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl group border border-white/10 transition-transform duration-500 ${offsetClass}`}
                >
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-70"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Card Content */}
                  <div className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-8">
                    {/* Top Bar: Tag & Arrow Button */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase ${project.tagColor}`}
                      >
                        {project.tag}
                      </span>
                      <Link
                        href={project.url}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                      </Link>
                    </div>

                    {/* Bottom Bar: Title & Description */}
                    <div className="flex flex-col gap-2">
                      <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
