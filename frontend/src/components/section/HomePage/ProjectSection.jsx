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
    <section className="section my-10 sm:my-14 md:my-16 lg:my-20 gap-8 sm:gap-10 md:gap-12 lg:gap-16 relative z-10 w-full overflow-hidden">
      <div className="flex-col-center relative w-full gap-6 sm:gap-8 max-w-[1600px] mx-auto px-2 sm:px-4 md:px-6">
        <div className="flex flex-col items-center justify-center gap-3 sm:gap-4 text-center max-w-2xl mx-auto">
          <h2 className="title">
            {projectSection.header?.title ? (
              <>
                Selected <span className="text-brand">work</span>.
              </>
            ) : (
              "Selected work."
            )}
          </h2>

          <p className="subtitle max-w-xl mx-auto px-2 sm:px-0">
            {projectSection.header?.subtitle ||
              "Real outcomes for real businesses. Here are some of our recent projects and systems."}
          </p>
        </div>

        {/* Cards Container: Column on mobile/sm, flex-row on md/lg/xl */}
        <div className="flex flex-col items-center justify-center gap-8 py-6 sm:gap-10 sm:py-8 md:flex-row md:items-stretch md:justify-center md:gap-4 md:pt-14 md:pb-14 lg:gap-6 lg:pt-16 lg:pb-16 xl:gap-8 xl:pt-20 xl:pb-20 w-full">
          {projectSection.projects.slice(0, 3).map((project, index) => {
            // First and last card up, middle card down on desktop (md and above)
            const offsetClass =
              index === 0 || index === 2
                ? "md:-translate-y-6 lg:-translate-y-8 xl:-translate-y-10"
                : "md:translate-y-6 lg:translate-y-8 xl:translate-y-10";

            return (
              <motion.div
                key={project.id}
                initial={
                  isDesktop ? { opacity: 0, y: 80 } : { opacity: 1, y: 0 }
                }
                whileInView={
                  isDesktop ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.15,
                }}
                className="w-full max-w-[400px] flex-shrink-0 sm:max-w-[440px] md:w-1/3 md:max-w-none flex flex-col"
              >
                {/* Inner Card Container with up/down offset on desktop */}
                <div
                  className={`group card-rounded relative h-[420px] sm:h-[460px] md:h-[450px] lg:h-[500px] xl:h-[540px] w-full flex flex-col overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-black/60 ${offsetClass}`}
                >
                  {/* Background Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:opacity-75"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/10 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/60" />

                  {/* Card Content Area */}
                  <div className="relative z-10 flex h-full flex-col justify-between p-5 sm:p-6 md:p-5 lg:p-6 xl:p-8">
                    {/* Top Bar: Tag & Arrow Button */}
                    <div className="flex items-center justify-between gap-2 w-full">
                      <Heighlight
                        text={project.tag}
                        className="!px-3 !py-1 sm:!px-4 sm:!py-1.5 md:!px-3 md:!py-1 lg:!px-3.5 lg:!py-1.5 xl:!px-5 xl:!py-2 [&>p]:!text-[11px] sm:[&>p]:!text-xs md:[&>p]:!text-[11px] lg:[&>p]:!text-xs xl:[&>p]:!text-sm max-w-[75%] sm:max-w-[80%] md:max-w-[72%] lg:max-w-[78%] truncate"
                      />
                      <Link
                        href={project.url || "/contact"}
                        className="bg-text-primary flex h-9 w-9 sm:h-11 sm:w-11 md:h-8 md:w-8 lg:h-10 lg:w-10 xl:h-12 xl:w-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 flex-shrink-0"
                        aria-label={`View ${project.title}`}
                      >
                        <FiArrowUpRight className="text-base sm:text-xl md:text-base lg:text-lg xl:text-2xl transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>

                    {/* Bottom Bar: Title & Description */}
                    <div className="flex flex-col gap-2 sm:gap-2.5 mt-auto pt-4">
                      <h3 className="font-manrope-bold text-left text-white text-xl sm:text-2xl md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl tracking-tight leading-snug group-hover:text-brand transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="font-manrope-light text-white/90 text-left text-xs sm:text-sm md:text-xs lg:text-sm xl:text-[15px] line-clamp-3 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex-col-center gap-4 pt-2 sm:pt-4 md:pt-6">
          <Note text="40+ real engagements since 2016." />

          <Button2 text="View the archive" link="/contact" />
        </div>
      </div>
    </section>
  );
}
