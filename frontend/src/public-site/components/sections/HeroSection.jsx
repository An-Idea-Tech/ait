import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';


const renderSubheadline = (text) => {
  if (!text) return null;

  const parts = text.split(/(Not)/);
  return parts.map((part, i) =>
    part === 'Not' ? (
      <strong key={i} className="font-bold text-gray-900 dark:text-gray-100">{part}</strong>
    ) : (
      <React.Fragment key={i}>{part}</React.Fragment>
    )
  );
};

const HeroSkeleton = () => (
  <div className="flex flex-col items-center gap-6 py-20 px-6" aria-label="Loading hero section">
    <div className="w-[300px] h-4 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 bg-[length:200%_100%] animate-shimmer" />
    <div className="w-[600px] max-w-full h-9 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 bg-[length:200%_100%] animate-shimmer" />
    <div className="w-[700px] max-w-full h-9 rounded-lg bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 bg-[length:200%_100%] animate-shimmer" />
    <div className="w-[500px] max-w-full h-[280px] rounded-2xl bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 bg-[length:200%_100%] animate-shimmer" />
    <div className="w-[180px] h-[50px] rounded-full bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 bg-[length:200%_100%] animate-shimmer" />
  </div>
);

const IMAGES = [
  "https://www.designagency.gr/wp-content/uploads/2023/12/FACEBOOK-BANNERd-scaled.jpg",
  "https://penji.co/wp-content/uploads/2025/01/How-to-Choose-the-Right-Design-Agency-cover-image.png.webp",
  "https://cdn.dribbble.com/userupload/14884073/file/still-288ad1870c0b555ec3c8dfed2a97efdd.png",
  "https://picsum.photos/seed/h4/600/400"
];

const HeroSection = ({ hero, isLoading }) => {
  const rowRef = useRef(null);

  useEffect(() => {
    if (!rowRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(rowRef.current, {
        xPercent: -50,
        ease: "none",
        duration: 25, // Adjust duration to control scroll speed
        repeat: -1,
      });
    }, rowRef);
    return () => ctx.revert();
  }, []);

  if (isLoading) {
    return (
      <section className="relative py-10 overflow-hidden" aria-busy="true">
        <HeroSkeleton />
      </section>
    );
  }

  if (!hero) return null;

  const { subheadline, ctaText, ctaLink, badgeText } = hero;

  return (
    <section className="relative overflow-hidden min-h-screen flex flex-col justify-end pb-16 md:pb-24 pt-24" id="hero" aria-label="Hero section">

      {/* Background Images - Infinite GSAP Scroll */}
      <div className="absolute top-0 left-0 right-0 z-0 overflow-hidden pointer-events-none h-full dark:bg-navy flex items-start">
        <div ref={rowRef} className="flex flex-nowrap opacity-100" style={{ width: 'max-content' }}>
          {[...IMAGES, ...IMAGES].map((src, idx) => (
            <img 
              key={idx} 
              src={src} 
              className="w-[85vw] sm:w-[50vw] md:w-[33.33vw] lg:w-[25vw] h-[250px] md:h-[350px] object-cover shrink-0" 
              alt="" 
            />
          ))}
        </div>
        {/* Fog effect overlay using the specified image */}
        <img 
          src="/images/shade-effect.webp" 
          alt="fog effect" 
          className="absolute inset-0 w-full h-full object-cover object-bottom pointer-events-none dark:invert opacity-100 mix-blend-normal" 
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-6 text-center flex flex-col items-center mt-auto pt-40 pb-10">

        {/* Badge */}
        {/* {badgeText && (
          <div className="inline-flex bg-white items-center gap-2.5 mb-6 md:mb-8 text-[0.7rem] font-medium text-green-700 dark:text-green-400">
            <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0 animate-pulse-dot" aria-hidden="true" />
            <span>{badgeText}</span>
          </div>
        )} */}

        {/* Headline — H1 (SEO: single H1 per page) */}
        <h1 className="max-w-[1050px] mx-auto mb-8 flex flex-col items-center justify-center gap-3 md:gap-5 transition-colors duration-300">
          <span className="text-[clamp(14px,2vw,18px)] font-medium text-navy dark:text-cream whitespace-nowrap tracking-wider uppercase opacity-80">
            Most Indian SMEs don't need a website.
          </span>
          <span className="text-[clamp(36px,5.5vw,75px)] font-fraunces_regular font-normal text-navy dark:text-cream leading-[1.05em]">
            They need 3 <span className='font-medium '>Landing pages</span> and a <span className='font-medium '>WhatsApp flow.</span>
          </span>
        </h1>


        {/* Subheadline */}
        {subheadline && (
          <p className="text-[clamp(15px,2vw,18px)] font-normal leading-relaxed text-gray-500 dark:text-gray-400 max-w-[680px] mx-auto mb-8 transition-colors duration-300">
            {renderSubheadline(subheadline)}
          </p>
        )}

        {/* CTA Button */}
        {ctaText && (
          <button
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-orange hover:bg-orange/90 text-white text-[17px] font-semibold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 group"
            id="hero-cta-talk-to-us"
          >
            {ctaText}
            <span className="flex items-center justify-center w-7 h-7 bg-white/20 rounded-full transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white stroke-[2.5] fill-none">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </button>
        )}
      </div>

      {/* Vertical side text */}
      <div
        className="fixed left-5 bottom-16 text-[11px] font-semibold tracking-[3px] uppercase text-gray-400 dark:text-gray-600 z-10 select-none hidden md:block transition-colors duration-300"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
        aria-hidden="true"
      >
        SEE HOW WE BUILD
      </div>
    </section>
  );
};

export default HeroSection;
