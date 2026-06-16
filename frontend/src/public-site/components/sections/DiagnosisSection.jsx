import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PHASES, SECTION_SUBHEADING, SECTION_DESCRIPTION } from '../../diagnosis/utils/constants';
import { killAnimations } from '../../diagnosis/utils/animations';
import useDiagnosis from '../../hooks/useDiagnosis';
import DiagnosisContainer from '../../diagnosis/components/DiagnosisContainer';

gsap.registerPlugin(ScrollTrigger);

const DiagnosisSection = () => {
  const sectionRef = useRef(null);
  const subheadingRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);

  const diagnosis = useDiagnosis();

  useEffect(() => {
    const elements = [subheadingRef.current, descRef.current, ctaRef.current].filter(Boolean);

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
        },
      }
    );

    return () => {
      killAnimations(...elements);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="diagnosis"
        className="relative min-h-screen w-full md:py-32 px-6 overflow-hidden flex  items-center justify-center"
        aria-label="Business Diagnosis Engine"
      >
    

        <div className="relative z-10 max-w-[800px] mx-auto text-center">

          {/* Headline */}
          <h2
            ref={subheadingRef}
            className="text-[clamp(40px,5vw,52px)] font-fraunces_regular leading-[1.15] text-navy dark:text-cream mb-6 opacity-0 transition-colors duration-300"
          >
            {SECTION_SUBHEADING}
          </h2>

          {/* Description */}
          <p
            ref={descRef}
            className="text-base md:text-lg font-inter_regular text-gray-500 dark:text-cream/50 leading-relaxed max-w-[600px] mx-auto mb-12 opacity-0 transition-colors duration-300"
          >
            {SECTION_DESCRIPTION}
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="opacity-0">
            <button
              onClick={diagnosis.openDiagnosis}
              className="group inline-flex items-center gap-3 px-10 py-4 bg-brown hover:bg-[#B8693F] text-white text-[17px] font-semibold rounded-full shadow-[0_4px_20px_rgba(163,90,58,0.25)] hover:shadow-[0_6px_28px_rgba(163,90,58,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-brown/50 focus:ring-offset-2 dark:focus:ring-offset-dark"
              id="diagnosis-start-cta"
              aria-label="Start business diagnosis"
            >
              Check Now
              <span className="flex items-center justify-center w-7 h-7 bg-white/15 rounded-full transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-white stroke-[2.5] fill-none">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Full-screen diagnosis overlay */}
      {diagnosis.phase !== PHASES.IDLE && (
        <DiagnosisContainer {...diagnosis} />
      )}
    </>
  );
};

export default DiagnosisSection;
