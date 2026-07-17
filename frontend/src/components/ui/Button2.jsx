"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

/**
 * Secondary Button (Button2) component with responsive pill shape, transparent background,
 * and dynamic text-primary border & text colors as specified in globals.css.
 *
 * @param {Object} props
 * @param {string} [props.text="Secondary Button"] - Button text.
 * @param {React.ReactNode} [props.children] - Optional children text.
 * @param {string} [props.link] - Optional link URL for navigation.
 * @param {string} [props.className] - Additional custom classes.
 * @param {string} [props.type="button"] - Button type.
 * @param {Function} [props.onClick] - Click handler.
 */
export default function Button2({
  text = "Secondary Button",
  children,
  link,
  className = "",
  type = "button",
  onClick,
  ...props
}) {
  const buttonContent = (
    <motion.button
      type={type}
      onClick={onClick}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      variants={{
        rest: { scale: 1 },
        hover: { scale: 1.03 },
        tap: { scale: 0.96 },
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      {...props}
      className={`group border-border-primary text-text-primary font-manrope-medium hover:bg-btn-hover inline-flex w-max cursor-pointer items-center justify-center rounded-full border bg-transparent px-8 py-2.5 text-sm md:text-base tracking-wide transition-colors duration-300 select-none  lg:px-8 lg:py-3 ${className}`}
    >
      <span>{text || children}</span>
    </motion.button>
  );

  if (link) {
    return (
      <Link href={link} className="decoration-none inline-block w-max">
        {buttonContent}
      </Link>
    );
  }

  return buttonContent;
}
