"use client";

import React from "react";

/**
 * ImportantDesc component for highlighting key takeaways or notes before a decision.
 * Features a distinctive vertical left border and responsive layout.
 *
 * @param {Object} props
 * @param {Object|string} [props.text] - Can be an object `{ title, description }` or a description string.
 * @param {string|React.ReactNode} [props.title] - Optional title prop (used with or overriding `text.title`).
 * @param {string|React.ReactNode} [props.description] - Optional description prop (used with or overriding `text.description`).
 * @param {string} [props.className=""] - Additional custom CSS classes for the wrapper container.
 */
export default function ImportantDesc({
  text,
  title,
  description,
  className = "",
}) {
  const contentTitle =
    title ||
    (typeof text === "object" ? text?.title : null) ||
    "One thing worth knowing before you choose:";

  const contentDescription =
    description ||
    (typeof text === "object"
      ? text?.description
      : typeof text === "string"
        ? text
        : null) ||
    "We work best with founders who want to move their business from person-oriented to process-oriented — owners ready to stop being the bottleneck, even with a small team. If that sounds like you, almost any tier on this page will fit. If it doesn't, we're probably not your studio.";

  return (
    <div
      className={`relative flex w-full flex-col justify-center border-l-[4px] sm:border-l-[6px] border-brown py-4 pl-5 pr-4 sm:py-6 sm:pl-8 sm:pr-6 md:py-8 md:pl-10 md:pr-8 transition-all duration-300 ${className}`.trim()}
    >
      {/* Title using .title2 class with responsive typography and left alignment */}
      {contentTitle && (
        <h3 className="title2 !text-left !text-xl sm:!text-2xl md:!text-3xl lg:!text-4xl mb-3 sm:mb-4 leading-snug sm:leading-tight">
          {contentTitle}
        </h3>
      )}

      {/* Description using .description class with responsive typography and left alignment */}
      {contentDescription && (
        <p className="description !text-justify lg:!text-left lg:max-w-4xl">
          {contentDescription}
        </p>
      )}
    </div>
  );
}
