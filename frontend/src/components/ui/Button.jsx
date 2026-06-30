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
 * @param {"light" | "dark"} [props.variant] - Force 'light' or 'dark' style behaviors.
 * @param {string} [props.link] - Optional link URL for navigation.
 * @param {React.ReactNode} [props.icon] - Optional custom icon to replace the default arrow.
 */
export default function Button({
    text = "Connect with us",
    variant,
    link,
    icon,
    type = "button",
    ...props
}) {
    // Default Adaptive Behavior (behaves like "light" variant):
    // - Light mode (white theme): Black button
    // - Dark mode (black theme): White button
    let btnClasses = "bg-black text-white border-transparent hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-slate-100";
    let circleClasses = "bg-brand text-white";

    if (variant === "dark") {
        // - Light mode (white theme): White button
        // - Dark mode (black theme): Black button
        btnClasses = "bg-white text-black border-transparent shadow-md hover:bg-slate-50 dark:bg-black dark:text-white dark:border-white/20 dark:hover:bg-zinc-950";
        circleClasses = "bg-brand text-white";
    } else if (variant === "light") {
        // - Light mode (white theme): Black button
        // - Dark mode (black theme): White button
        btnClasses = "bg-black text-white border-transparent hover:bg-zinc-900 dark:bg-white dark:text-black dark:hover:bg-slate-100";
        circleClasses = "bg-brand text-white";
    }

    const currentIcon = icon || <FiArrowRight className="w-5 h-5 text-black" />;

    const buttonContent = (
        <motion.button
            type={type}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            variants={{
                tap: { scale: 0.95 }
            }}
            {...props}
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