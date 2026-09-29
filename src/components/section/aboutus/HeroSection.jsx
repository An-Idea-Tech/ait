"use client";

import React from "react";
import { aboutHeroData } from "@/data/about";

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
    <section className="section justify-between gap-16 md:gap-24 !pb-12 sm:!pb-16 md:!pb-20">
      <div className="w-full">
        <h1 className="huge-text text-center !text-[15vw] md:!text-[11vw] lg:!text-[14vw]">
          an idea tech
        </h1>
      </div>

      <div className="w-full border-t border-border-primary pt-8 sm:pt-12 md:pt-16 mt-auto">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:gap-8">
            <h2 className="hero-title-main">
              <span className="block">{aboutHeroData.title}</span>
            </h2>
            <p className="subtitle !text-center !text-base sm:!text-lg md:!text-xl !leading-relaxed">
              {aboutHeroData.description}
            </p>
        </div>
      </div>
    </section>
  );
}
