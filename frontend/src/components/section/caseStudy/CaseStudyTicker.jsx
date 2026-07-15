"use client";

import React, { useState, useEffect } from "react";

const GAP = 16; // gap-4 = 1rem = 16px

/**
 * Returns item dimensions based on current window width.
 * Breakpoints mirror Tailwind: xs <640, sm 640–768, md 768–1024, lg 1024–1280, xl 1280+
 */
function getItemSize(windowWidth) {
  if (windowWidth < 480) return { width: 220, height: 150 };
  if (windowWidth < 640) return { width: 270, height: 180 };
  if (windowWidth < 768) return { width: 320, height: 215 };
  if (windowWidth < 1024) return { width: 400, height: 265 };
  if (windowWidth < 1280) return { width: 480, height: 320 };
  return { width: 560, height: 370 };
}

/**
 * Auto-scrolling horizontal image ticker strip.
 * Fully responsive — item size and animation offset recalculate on window resize.
 * Images are tripled to create a seamless infinite loop.
 */
export default function CaseStudyTicker({ images, title }) {
  const [itemSize, setItemSize] = useState({ width: 560, height: 370 });

  useEffect(() => {
    function update() {
      setItemSize(getItemSize(window.innerWidth));
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  if (!images || images.length === 0) return null;

  const tripled = [...images, ...images, ...images];

  // The offset for one full "lap" = (itemWidth + gap) × number of original images
  const tickerOffset = (itemSize.width + GAP) * images.length;
  // Duration scales with images count and a base speed factor
  const duration = images.length * 6;

  return (
    <section
      className="w-full overflow-hidden py-8 sm:py-10 md:py-14 lg:py-16"
      style={{
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div
        className="flex w-max"
        style={{
          gap: `${GAP}px`,
          animation: `cs-ticker-scroll ${duration}s linear infinite`,
          animationPlayState: "running",
          "--ticker-offset": `-${tickerOffset}px`,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.animationPlayState = "running")
        }
      >
        {tripled.map((src, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-xl overflow-hidden"
            style={{
              width: `${itemSize.width}px`,
              height: `${itemSize.height}px`,
              transition: "width 0.3s ease, height 0.3s ease",
            }}
          >
            <img
              src={src}
              alt={`${title} showcase ${(i % images.length) + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              style={{ display: "block" }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

