"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projectSection } from "@/data/home";
import Heighlight from "@/components/shared/Heighlight";
import { FiArrowUpRight } from "react-icons/fi";
import Button2 from "@/components/ui/Button2";
import Note from "@/components/shared/Note";

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
    <section className="section mt-10 gap-10">
      <div className="flex-col-center relative w-full gap-8">
        <h2 className="title">
          What we <span className="text-brand"> actually build</span>.
        </h2>

        <p className="subtitle max-w-lg">
          Three engagement tiers, depending on where your business is. Real
          prices. Real timelines. Pick the one that fits.
        </p>

        {/* Cards Container: Column on mobile, flex-row on desktop */}
        <div className="flex flex-col items-center justify-center gap-8 pt-4 pb-12 sm:gap-10 md:flex-row md:gap-6 lg:gap-10">
          {projectSection.projects.slice(0, 3).map((project, index) => {
            // First and last card up, middle card down on desktop
            const offsetClass =
              index === 0 || index === 2
                ? "md:-translate-y-8 lg:-translate-y-12"
                : "md:translate-y-8 lg:translate-y-12";

            return (
              <motion.div
                key={project.id}
                initial={
                  isDesktop ? { opacity: 0, y: 100 } : { opacity: 1, y: 0 }
                }
                whileInView={
                  isDesktop ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.2,
                }}
                className="w-full max-w-[380px] flex-shrink-0 sm:max-w-[420px] md:w-1/3"
              >
                {/* Inner Card Container with up/down offset on desktop */}
                <div
                  className={`group card-rounded relative h-[420px] w-full overflow-hidden shadow-2xl transition-transform duration-500 sm:h-[480px] md:h-[500px] lg:h-[540px] ${offsetClass}`}
                >
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-105 group-hover:opacity-70"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

                  {/* Card Content */}
                  <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
                    {/* Top Bar: Tag & Arrow Button */}
                    <div className="flex items-center justify-between">
                      <Heighlight text={project.tag} />
                      <Link
                        href={project.url}
                        className="bg-text-primary flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors duration-300 hover:bg-white hover:text-black sm:h-12 sm:w-12"
                      >
                        <FiArrowUpRight className="text-bg-primary text-5xl" />
                      </Link>
                    </div>

                    {/* Bottom Bar: Title & Description */}
                    <div className="flex flex-col gap-2">
                      <h3 className="title2 !text-left !text-white">
                        {project.title}
                      </h3>
                      <p className="description line-clamp-3 !text-white">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex-col-center gap-3">
          <Note text="40+ real engagements since 2016." />

          <Button2 text="View the archive" link="/contact" />
        </div>
      </div>
    </section>
  );
}
