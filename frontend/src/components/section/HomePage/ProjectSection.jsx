"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { projectSection } from "@/data/home";

export default function ProjectSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Transform scroll progress into horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <section ref={targetRef} className="relative h-[350vh] bg-black text-white">
      <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden py-12">
        {/* Header Section */}
        <div className="section-padding-x mb-12 flex flex-col items-center text-center">
          <span className="mb-4 inline-block border border-[#333] px-4 py-1 text-xs font-bold tracking-widest text-[#AAA] uppercase">
            {projectSection.header.tag}
          </span>
          <h2 className="text-3xl font-bold tracking-tight sm:text-5xl md:text-6xl max-w-4xl">
            {projectSection.header.title}
          </h2>
        </div>

        {/* Horizontal Scrolling Cards Container */}
        <div className="flex pl-6 sm:pl-12 md:pl-24">
          <motion.div style={{ x }} className="flex gap-6 sm:gap-8 md:gap-10">
            {projectSection.projects.map((project, index) => (
              <div
                key={project.id}
                className={`relative w-[300px] sm:w-[360px] md:w-[420px] h-[420px] sm:h-[480px] md:h-[520px] flex-shrink-0 rounded-3xl overflow-hidden bg-neutral-900 shadow-2xl group border border-white/10 ${
                  index % 2 !== 0 ? "md:translate-y-6" : ""
                }`}
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
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
