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
    <section className="section justify-between gap-16 md:gap-24 !pb-12 sm:!pb-16 md:!pb-20">
      <div className="w-full">
        <h1 className="huge-text !text-[15vw] md:!text-[11vw] lg:!text-[14vw]">
          an idea tech
        </h1>
      </div>

      <div className="w-full border-t border-border-primary pt-8 sm:pt-12 md:pt-16 mt-auto">
        <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center sm:gap-8">
            <h2 className="subtitle !text-center !text-2xl sm:!text-3xl md:!text-4xl !leading-[1.25] tracking-tight">
              <span className="block">AIT started in 2016 in Mangaluru.</span>
              <span className="block">We&apos;ve stayed small on purpose.</span>
            </h2>
            <p className="description !text-center !text-base sm:!text-lg md:!text-xl !leading-relaxed">
              We&apos;re a software and growth studio for SME founders who want to build
              something durable. Most of our clients have been with us for years. Most of
              our team has been here long enough to know how we work without having
              to ask. We&apos;re not trying to grow into a 50-person agency. We&apos;re trying to
              keep doing this work — well — for as long as it makes sense.
            </p>
        </div>
      </div>
    </section>
  );
}
