import gsap from "gsap";

/**
 * Fade-in + slide-up entrance animation.
 * @param {HTMLElement|string} element - Target element or CSS selector
 * @param {object} opts - Optional overrides
 * @returns {gsap.core.Tween}
 */
export const fadeInUp = (element, opts = {}) =>
  gsap.fromTo(
    element,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: opts.duration || 0.8,
      ease: opts.ease || "power3.out",
      delay: opts.delay || 0,
    }
  );

/**
 * Fade-out + slide-down exit animation.
 * @param {HTMLElement|string} element
 * @param {object} opts
 * @returns {gsap.core.Tween}
 */
export const fadeOutDown = (element, opts = {}) =>
  gsap.to(element, {
    opacity: 0,
    y: -30,
    duration: opts.duration || 0.5,
    ease: opts.ease || "power2.in",
    delay: opts.delay || 0,
  });

/**
 * Staggered reveal for multiple child elements.
 * @param {HTMLElement[]|string} elements
 * @param {object} opts
 * @returns {gsap.core.Tween}
 */
export const staggerReveal = (elements, opts = {}) =>
  gsap.fromTo(
    elements,
    { opacity: 0, y: 30 },
    {
      opacity: 1,
      y: 0,
      duration: opts.duration || 0.7,
      stagger: opts.stagger || 0.12,
      ease: opts.ease || "power3.out",
      delay: opts.delay || 0,
    }
  );

/**
 * Animate progress bar width.
 * @param {HTMLElement|string} element
 * @param {number} progress - 0 to 100
 * @returns {gsap.core.Tween}
 */
export const progressBarAnim = (element, progress) =>
  gsap.to(element, {
    width: `${progress}%`,
    duration: 0.6,
    ease: "power2.out",
  });

/**
 * Create an analyzing screen pulse timeline.
 * @param {HTMLElement|string} element
 * @returns {gsap.core.Timeline}
 */
export const pulseAnalyzing = (element) => {
  const tl = gsap.timeline({ repeat: -1 });
  tl.to(element, { scale: 1.05, opacity: 0.7, duration: 1, ease: "sine.inOut" });
  tl.to(element, { scale: 1, opacity: 1, duration: 1, ease: "sine.inOut" });
  return tl;
};

/**
 * Dramatic verdict reveal with staggered elements.
 * @param {HTMLElement[]|string} elements
 * @returns {gsap.core.Tween}
 */
export const verdictReveal = (elements) =>
  gsap.fromTo(
    elements,
    { opacity: 0, y: 50, scale: 0.97 },
    {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      delay: 0.2,
    }
  );

/**
 * Crossfade between analyzing messages.
 * @param {HTMLElement|string} element
 * @returns {gsap.core.Timeline}
 */
export const textCrossfade = (element) => {
  const tl = gsap.timeline();
  tl.to(element, { opacity: 0, y: -10, duration: 0.3, ease: "power2.in" });
  tl.set(element, { y: 10 });
  tl.to(element, { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" });
  return tl;
};

/**
 * Utility to kill all GSAP tweens on elements to prevent memory leaks.
 * @param  {...HTMLElement|string} elements
 */
export const killAnimations = (...elements) => {
  elements.forEach((el) => {
    if (el) gsap.killTweensOf(el);
  });
};
