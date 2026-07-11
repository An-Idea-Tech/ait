"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavLinks } from "@/data/menu";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Logo from "./Logo";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close drawer on Escape key press and prevent background scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <nav className="w-full sticky top-0 bg-bg-primary z-50 px-6 text-text-primary md:px-12 border-b border-border-primary/10 transition-colors duration-300">
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between py-1">
        {/* Logo Section */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Logo className="h-15 w-auto object-contain md:h-20" />
          </Link>
        </div>

        {/* Navigation Links - Center-Right aligned (Visible only on lg and above for first 5 items) */}
        <div className="hidden items-center gap-8 text-sm tracking-wide lg:flex lg:text-base lg:gap-14">
          {NavLinks.map((menu, index) => {
            if (index < 5) {
              return (
                <Link
                  href={menu.url}
                  className="hover:text-brand transition-colors duration-200 font-manrope-medium"
                  key={index}
                >
                  {menu.title}
                </Link>
              );
            }
            return null;
          })}
        </div>

        {/* Menu Section - Right aligned */}
        <div className="flex items-center gap-4 md:gap-6">
          <ThemeToggle />

          <button
            onClick={() => setIsOpen(true)}
            className="group flex cursor-pointer items-center gap-3 md:gap-4 p-2 focus:outline-none"
            aria-label="Open menu"
          >
            {/* Hamburger Icon */}
            <div className="flex w-10 flex-col gap-1.5">
              <span className="group-hover:bg-brand h-[1.5px] w-full bg-text-primary transition-colors duration-200"></span>
              <span className="group-hover:bg-brand h-[1.5px] w-full bg-text-primary transition-colors duration-200"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Slide-in Mobile & Desktop Drawer (3/4 page width) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Side Drawer - 3/4 width of the page */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-3/4 max-w-md bg-bg-primary text-text-primary shadow-2xl z-50 flex flex-col justify-between p-6 sm:p-8 overflow-y-auto border-l border-border-primary/20 transition-colors duration-300"
            >
              <div>
                {/* Drawer Header with Close Icon Above */}
                <div className="flex items-center justify-end border-b border-border-primary/15 pb-5 mb-6">
                  
                  <button
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-center h-10 w-10 sm:h-11 sm:w-11 rounded-full border border-border-primary/30 bg-bg-primary text-text-primary hover:text-brand hover:border-brand transition-all duration-200 cursor-pointer shadow-sm"
                    aria-label="Close menu"
                  >
                    <IoClose className="text-2xl sm:text-3xl" />
                  </button>
                </div>

                {/* Navigation Links inside Hamburger Menu */}
                <div className="flex flex-col gap-1 my-2">
                  {NavLinks.map((menu, index) => {
                    /*
                     * Below lg screen: show all menu links (block)
                     * On lg and above: first 5 links are in navbar so hide them in drawer (lg:hidden),
                     * and display only the remaining links (index >= 5)
                     */
                    const visibilityClass = index < 5 ? "block lg:hidden" : "block";
                    return (
                      <Link
                        key={index}
                        href={menu.url}
                        onClick={() => setIsOpen(false)}
                        className={`${visibilityClass} py-3 sm:py-3.5 px-3 m text-lg sm:text-xl tracking-wide  hover:bg-gray-300/40  hover:translate-x-1.5 transition-all duration-200`}
                      >
                        {menu.title}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="mt-8 pt-6 border-t border-border-primary/15 flex flex-col gap-4">
                <div className="flex items-center justify-end">
                  <ThemeToggle />
                </div>
                <p className="text-xs text-text-third font-manrope-light text-center mt-2">
                  © {new Date().getFullYear()} An Idea Tech. All rights reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}

