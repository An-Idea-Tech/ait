"use client";

import React from "react";

// Dummy image paths for the 5 vertical background cards.
// You can easily replace these src paths with your actual sky and sunset images later!
const heroPanels = [
  {
    id: 1,
    src: "https://i.pinimg.com/736x/f2/84/fa/f284faf693b60499a934426c66e50498.jpg",
    alt: "Background Panel 1",
  },
  {
    id: 2,
    src: "https://i.pinimg.com/736x/02/04/37/020437355c6d0b25e55780eb8233d1c9.jpg",
    alt: "Background Panel 2",
  },
  {
    id: 3,
    src: "https://i.pinimg.com/control1/1200x/40/6d/94/406d941b9978384bd9008b1f81c613a3.jpg",
    alt: "Background Panel 3",
  },
  {
    id: 4,
    src: "https://i.pinimg.com/1200x/d7/73/23/d7732365701be78c735848e80d045cba.jpg",
    alt: "Background Panel 4",
  },
  {
    id: 5,
    src: "https://i.pinimg.com/736x/f2/84/fa/f284faf693b60499a934426c66e50498.jpg",
    alt: "Background Panel 5",
  },
];

export default function HeroSection() {
  return (
    <section className="section">
      {/* 5 Vertical Image Panels Gallery Container */}
      <div className="relative w-full max-w-[1400px] h-[340px] sm:h-[440px] md:h-[540px] lg:h-[620px] mx-auto grid grid-cols-5 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
        {heroPanels.map((panel) => (
          <div
            key={panel.id}
            className="relative w-full h-full overflow-hidden bg-gray-900"
          >
            <img
              src={panel.src}
              alt={panel.alt}
              className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
            />
            {/* Subtle overlay for text contrast and depth */}
            <div className="absolute inset-0 bg-black/15 pointer-events-none" />
          </div>
        ))}

        {/* Overlaid Typography across all 5 image cards */}
        <div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
          <h1 className="huge-text text-center !text-bg-primary !text-[12vh] lg:!text-[11vw]">
            an idea tech
          </h1>
        </div>
      </div>

      {/* Bottom Tagline */}
      <div className="mt-10 sm:mt-14 md:mt-16 text-center max-w-2xl mx-auto px-4 z-10">
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-secondary font-manrope-medium">
          AIT started in 2016 in Mangaluru. We&apos;ve stayed small on purpose.
        </p>
      </div>
    </section>
  );
}

