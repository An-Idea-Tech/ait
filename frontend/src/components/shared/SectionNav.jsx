"use client";

import React, { useEffect, useState } from "react";

export default function SectionNav({ sections = [] }) {
  const [activeId, setActiveId] = useState(sections[0]?.id || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 140; // offset for fixed headers + horizontal menu bar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="glass-pill sticky bottom-5 md:top-16 md:top-20 z-40 w-full ">
      <div id="section-nav" className="mx-auto  max-w-[1920px] overflow-x-auto overflow-y-hidden flex items-center justify-start xl:justify-center gap-4 sm:gap-6 md:gap-8">
        {sections.map((sec) => {
          const isActive = activeId === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => scrollToSection(sec.id)}
              className={`whitespace-nowrap text-xs sm:text-sm font-manrope-medium transition-all duration-300 py-1.5 px-3 rounded-full cursor-pointer ${
                isActive
                  ? "bg-brand text-white font-manrope-bold shadow-md scale-105"
                  : "text-text-secondary hover:text-text-primary hover:bg-zinc-100 dark:hover:bg-zinc-800/60"
              }`}
            >
              {sec.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
