import React, { useRef, useCallback } from 'react';
import gsap from 'gsap';

const OptionButton = ({ label, value, onSelect, disabled = false }) => {
  const btnRef = useRef(null);

  const handleMouseEnter = useCallback(() => {
    if (disabled) return;
    gsap.to(btnRef.current, {
      borderColor: 'rgba(163, 90, 58, 0.6)',
      backgroundColor: 'rgba(163, 90, 58, 0.08)',
      scale: 1.01,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [disabled]);

  const handleMouseLeave = useCallback(() => {
    if (disabled) return;
    gsap.to(btnRef.current, {
      borderColor: 'rgba(250, 247, 239, 0.15)',
      backgroundColor: 'transparent',
      scale: 1,
      duration: 0.3,
      ease: 'power2.out',
    });
  }, [disabled]);

  const handleClick = useCallback(() => {
    if (disabled) return;

    // Click flash animation
    gsap.to(btnRef.current, {
      backgroundColor: 'rgba(163, 90, 58, 0.2)',
      borderColor: 'rgba(163, 90, 58, 0.8)',
      duration: 0.15,
      ease: 'power2.in',
      onComplete: () => onSelect(value),
    });
  }, [disabled, value, onSelect]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  return (
    <button
      ref={btnRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      className="w-full text-left px-8 py-5 md:py-6 border border-cream/15 rounded-xl
                 text-cream/90 text-lg md:text-xl font-inter_regular
                 transition-colors duration-300
                 focus:outline-none focus:ring-2 focus:ring-[#A35A3A]/50 focus:ring-offset-2 focus:ring-offset-[#1A2332]
                 disabled:opacity-40 disabled:cursor-not-allowed
                 cursor-pointer select-none"
      role="option"
      aria-label={label}
      tabIndex={0}
    >
      <span className="flex items-center gap-4">
        <span className="w-2 h-2 rounded-full bg-cream/20 shrink-0" aria-hidden="true" />
        <span>{label}</span>
      </span>
    </button>
  );
};

export default OptionButton;
