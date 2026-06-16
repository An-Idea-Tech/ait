import React, { useRef, useEffect } from 'react';
import { verdictReveal, killAnimations } from '../utils/animations';

const VerdictScreen = ({ verdict, onGetReport, onClose }) => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (elementsRef.current.length > 0) {
      verdictReveal(elementsRef.current);
    }
    return () => killAnimations(...elementsRef.current);
  }, []);

  if (!verdict) return null;

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center min-h-[80vh] px-6 max-w-[780px] mx-auto text-center">
      <div ref={addToRefs} className="text-[13px] font-inter_regular text-[#A35A3A] tracking-[4px] uppercase mb-6 opacity-0">
        Your Diagnosis
      </div>

      <h3 ref={addToRefs} className="text-[clamp(26px,5vw,48px)] font-fraunces_regular leading-[1.15] text-cream mb-8 opacity-0">
        {verdict.title}
      </h3>

      <p ref={addToRefs} className="text-base md:text-lg font-inter_regular text-cream/60 leading-relaxed max-w-[640px] mb-10 opacity-0">
        {verdict.explanation}
      </p>

      {(verdict.pricing || verdict.timeline) && (
        <div ref={addToRefs} className="flex flex-wrap justify-center gap-6 mb-12 opacity-0">
          {verdict.pricing && (
            <div className="px-8 py-5 border border-cream/10 rounded-xl bg-cream/[0.03]">
              <p className="text-xs font-inter_regular text-cream/40 tracking-[2px] uppercase mb-2">Investment</p>
              <p className="text-xl md:text-2xl font-fraunces_regular text-cream">{verdict.pricing}</p>
            </div>
          )}
          {verdict.timeline && (
            <div className="px-8 py-5 border border-cream/10 rounded-xl bg-cream/[0.03]">
              <p className="text-xs font-inter_regular text-cream/40 tracking-[2px] uppercase mb-2">Timeline</p>
              <p className="text-xl md:text-2xl font-fraunces_regular text-cream">{verdict.timeline}</p>
            </div>
          )}
        </div>
      )}

      <div ref={addToRefs} className="flex flex-wrap justify-center gap-4 mb-8 opacity-0">
        {verdict.ctaText && (
          <a
            href={verdict.ctaLink || '/contact'}
            className="inline-flex items-center gap-3 px-9 py-4 bg-[#A35A3A] hover:bg-[#B8693F] text-cream text-[16px] font-semibold rounded-full shadow-[0_4px_20px_rgba(163,90,58,0.3)] hover:shadow-[0_6px_28px_rgba(163,90,58,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
            id="diagnosis-primary-cta"
          >
            {verdict.ctaText}
            <svg viewBox="0 0 24 24" className="w-4 h-4 stroke-cream stroke-[2.5] fill-none" aria-hidden="true">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
        )}
        {verdict.secondaryCtaText && (
          <a
            href={verdict.secondaryCtaLink || '/contact'}
            className="inline-flex items-center gap-2 px-9 py-4 border border-cream/20 hover:border-cream/40 text-cream/80 hover:text-cream text-[16px] font-medium rounded-full transition-all duration-300"
            id="diagnosis-secondary-cta"
          >
            {verdict.secondaryCtaText}
          </a>
        )}
      </div>

      <div ref={addToRefs} className="opacity-0">
        <button
          onClick={onGetReport}
          className="text-sm font-inter_regular text-cream/40 hover:text-cream/70 underline underline-offset-4 decoration-cream/20 hover:decoration-cream/50 transition-all duration-300"
          id="diagnosis-get-report"
        >
          Get your detailed report sent to your inbox
        </button>
      </div>

      <button
        onClick={onClose}
        className="mt-10 text-xs font-inter_regular text-cream/20 hover:text-cream/40 transition-colors duration-300"
        aria-label="Close diagnosis"
      >
        Close
      </button>
    </div>
  );
};

export default VerdictScreen;
