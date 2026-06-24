"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";

/**
 * Animated Dynamic Button component utilizing Framer Motion and React Icons.
 * On hover, the arrow smoothly exits to the right and re-enters from the left.
 *
 * @param {Object} props
 * @param {string} [props.text="Connect with us"] - Button text.
 * @param {"light" | "dark"} [props.variant] - Force 'light' or 'dark' style.
 * @param {string} [props.link] - Optional link URL for navigation.
 * @param {React.ReactNode} [props.icon] - Optional custom icon to replace the default arrow.
 */
export default function Button({
    text = "Connect with us",
    variant,
    link,
    icon,
}) {
    // Base classes default to brand colors
    let btnClasses = "bg-white border-transparent text-black shadow-md hover:shadow-lg hover:bg-slate-50 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800";
    let circleClasses = "bg-brand text-white"; // Enforcing the brand color only for the circle

    // Static variant overrides if explicitly requested
    if (variant === "dark") {
        btnClasses = "bg-black border-white/90 text-white hover:bg-zinc-950";
        circleClasses = "bg-transparent text-white";
    } else if (variant === "light") {
        btnClasses = "bg-white border-transparent text-black shadow-md hover:shadow-lg hover:bg-slate-50";
        circleClasses = "bg-brand text-white";
    }

    const currentIcon = icon || <FiArrowRight className={`w-5 h-5 ${variant === "dark" ? "text-white" : "text-black"}`} />;

    const buttonContent = (
        <motion.button
            type="button"
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            variants={{
                tap: { scale: 0.95 }
            }}
            className={`group flex w-max items-center justify-between rounded-full border-2 py-1.5 pl-6 pr-2 cursor-pointer transition-colors duration-300 ${btnClasses}`}
        >
            <span className="mr-4 font-semibold text-sm tracking-wide select-none">{text}</span>

            {/* Overflow hidden ensures the arrows disappear outside the circle */}
            <span
                className={`relative overflow-hidden flex items-center justify-center rounded-full p-2 transition-colors duration-300 ${circleClasses}`}
            >
                {/* Primary Arrow: Slides out to the right */}
                <motion.span
                    variants={{
                        rest: { x: 0 },
                        hover: { x: 30 }
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                    }}
                    className="flex items-center justify-center"
                >
                    {currentIcon}
                </motion.span>

                {/* Secondary Arrow: Hidden on the left, slides to center */}
                <motion.span
                    variants={{
                        rest: { x: -30 },
                        hover: { x: 0 }
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 25
                    }}
                    className="absolute flex items-center justify-center"
                >
                    {currentIcon}
                </motion.span>
            </span>
        </motion.button>
    );

    if (link) {
        return (
            <Link href={link} className="inline-block w-max decoration-none">
                {buttonContent}
            </Link>
        );
    }

    return buttonContent;
}