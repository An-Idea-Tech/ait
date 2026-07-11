import React from "react";

/**
 * Note component for displaying important notes or callouts with a blinking green dot indicator.
 * Uses the `.note` class from globals.css for text appearance.
 *
 * @param {Object} props
 * @param {string|React.ReactNode} [props.text] - The note text to display.
 * @param {React.ReactNode} [props.children] - Optional children content if `text` prop is omitted.
 * @param {string} [props.className=""] - Additional custom classes for the wrapper.
 */
export default function Note({ text, children, className = "" }) {
  const content = text || children;
  if (!content) return null;

  return (
    <div className={`note inline-flex items-start justify-center gap-2 ${className}`}>
      {/* Blinking green dot indicator */}
      <span className="relative mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green opacity-75"></span>
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green"></span>
      </span>

      {/* Note text content */}
      <span className="text-center">{content}</span>
    </div>
  );
}
