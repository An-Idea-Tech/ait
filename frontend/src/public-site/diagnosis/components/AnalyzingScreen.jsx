import React, { useRef, useEffect, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ANALYZING_MESSAGES } from '../utils/constants';
import { killAnimations } from '../utils/animations';

const AnalyzingScreen = ({ onComplete }) => {
  const containerRef = useRef(null);
  const messageRef = useRef(null);
  const ringRef = useRef(null);
  const [messageIndex, setMessageIndex] = useState(0);
  const timelineRef = useRef(null);

  const animateMessage = useCallback((idx) => {
    if (!messageRef.current) return;

    const tl = gsap.timeline();
    tl.to(messageRef.current, {
      opacity: 0,
      y: -8,
      duration: 0.25,
      ease: 'power2.in',
      onComplete: () => setMessageIndex(idx),
    });
    tl.to(messageRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.25,
      ease: 'power2.out',
    });
    return tl;
  }, []);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      containerRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: 'power2.out' }
    );

    // Pulsing ring
    const ringTl = gsap.timeline({ repeat: -1 });
    ringTl.to(ringRef.current, { scale: 1.15, opacity: 0.4, duration: 1.2, ease: 'sine.inOut' });
    ringTl.to(ringRef.current, { scale: 1, opacity: 0.8, duration: 1.2, ease: 'sine.inOut' });

    // Cycle messages
    let currentMsg = 0;
    const interval = setInterval(() => {
      currentMsg++;
      if (currentMsg >= ANALYZING_MESSAGES.length) {
        clearInterval(interval);
        // Final pause then complete
        setTimeout(() => {
          gsap.to(containerRef.current, {
            opacity: 0,
            scale: 0.98,
            duration: 0.4,
            ease: 'power2.in',
            onComplete: onComplete,
          });
        }, 600);
        return;
      }
      animateMessage(currentMsg);
    }, 700);

    return () => {
      clearInterval(interval);
      ringTl.kill();
      killAnimations(containerRef.current, messageRef.current, ringRef.current);
    };
  }, [animateMessage, onComplete]);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-[80vh] px-6 opacity-0"
      aria-live="polite"
      aria-label="Analyzing your business"
      role="status"
    >
      {/* Pulse ring */}
      <div className="relative w-20 h-20 mb-12">
        <div
          ref={ringRef}
          className="absolute inset-0 rounded-full border-2 border-[#A35A3A]/60"
          aria-hidden="true"
        />
        <div className="absolute inset-[6px] rounded-full border border-cream/10" aria-hidden="true" />
        <div className="absolute inset-[14px] rounded-full bg-[#A35A3A]/20" aria-hidden="true" />
      </div>

      {/* Message */}
      <p
        ref={messageRef}
        className="text-lg md:text-xl font-inter_regular text-cream/70 tracking-wide"
      >
        {ANALYZING_MESSAGES[messageIndex]}
      </p>
    </div>
  );
};

export default AnalyzingScreen;
