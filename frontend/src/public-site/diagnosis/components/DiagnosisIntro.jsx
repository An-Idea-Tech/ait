import React, { useRef, useEffect } from 'react';
import { fadeInUp, staggerReveal, killAnimations } from '../utils/animations';
import { INTRO_HEADLINE, INTRO_SUBTITLE } from '../utils/constants';
import DiagnosisLoader from './DiagnosisLoader';

const DiagnosisIntro = ({ onBegin, isLoading }) => {
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const subtitleRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    const elements = [headlineRef.current, subtitleRef.current, ctaRef.current].filter(Boolean);
    staggerReveal(elements, { duration: 0.8, stagger: 0.2, delay: 0.3 });

    return () => {
      killAnimations(...elements);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center max-w-[800px] mx-auto"
    >
      {/* Decorative line */}
      <div className="w-12 h-[2px] bg-[#A35A3A] mb-10 opacity-60" aria-hidden="true" />

      <h2
        ref={headlineRef}
        className="text-[clamp(28px,5vw,56px)] font-fraunces_regular leading-[1.1] text-cream mb-8 opacity-0"
      >
        {INTRO_HEADLINE}
      </h2>

      <p
        ref={subtitleRef}
        className="text-lg md:text-xl text-cream/60 font-inter_regular leading-relaxed max-w-[600px] mb-12 opacity-0"
      >
        {INTRO_SUBTITLE}
      </p>

      <div ref={ctaRef} className="opacity-0">
        {isLoading ? (
          <DiagnosisLoader />
        ) : (
          <button
            onClick={onBegin}
            className="group inline-flex items-center gap-3 px-10 py-4 bg-[#A35A3A] hover:bg-[#B8693F]
                       text-cream text-[17px] font-semibold rounded-full
                       shadow-[0_4px_20px_rgba(163,90,58,0.3)] hover:shadow-[0_6px_28px_rgba(163,90,58,0.45)]
                       hover:-translate-y-0.5 active:translate-y-0
                       transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#A35A3A]/50 focus:ring-offset-2 focus:ring-offset-[#1A2332]"
            id="diagnosis-begin-cta"
            aria-label="Begin business diagnosis"
          >
            Begin Diagnosis
            <span className="flex items-center justify-center w-7 h-7 bg-white/15 rounded-full transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
              <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-cream stroke-[2.5] fill-none">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default DiagnosisIntro;
