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
    <nav className="bg-bg-primary text-text-primary  sticky top-0 z-50 w-full px-6 transition-colors duration-300 md:px-12">
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between py-1">
        {/* Logo Section */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/" onClick={() => setIsOpen(false)}>
            <Logo className="h-15 w-auto object-contain md:h-20" />
          </Link>
        </div>

        {/* Navigation Links - Center-Right aligned (Visible only on lg and above for first 5 items) */}
        <div className="hidden items-center gap-8 text-sm tracking-wide lg:flex lg:gap-14 lg:text-base">
          {NavLinks.map((menu, index) => {
            if (index < 5) {
              const href =
                menu.url?.startsWith("/") || menu.url?.startsWith("http")
                  ? menu.url
                  : `/${menu.url || ""}`;
              return (
                <Link
                  href={href}
                  className="hover:text-brand font-manrope-medium transition-colors duration-200"
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
            className="group flex cursor-pointer items-center gap-3 p-2 focus:outline-none md:gap-4"
            aria-label="Open menu"
          >
            {/* Hamburger Icon */}
            <div className="flex w-10 flex-col gap-1.5">
              <span className="group-hover:bg-brand bg-text-primary h-[1.5px] w-full transition-colors duration-200"></span>
              <span className="group-hover:bg-brand bg-text-primary h-[1.5px] w-full transition-colors duration-200"></span>
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
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            />

            {/* Side Drawer - 3/4 width of the page */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="bg-bg-primary text-text-primary border-border-primary/20 fixed top-0 right-0 z-50 flex h-full w-3/4 max-w-md flex-col justify-between overflow-y-auto border-l p-6 shadow-2xl transition-colors duration-300 sm:p-8"
            >
              <div>
                {/* Drawer Header with Close Icon Above */}
                <div className="border-border-primary/15 mb-6 flex items-center justify-end border-b pb-5">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="border-border-primary/30 bg-bg-primary text-text-primary hover:text-brand hover:border-brand flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border shadow-sm transition-all duration-200 sm:h-11 sm:w-11"
                    aria-label="Close menu"
                  >
                    <IoClose className="text-2xl sm:text-3xl" />
                  </button>
                </div>

                {/* Navigation Links inside Hamburger Menu */}
                <div className="my-2 flex flex-col gap-1">
                  {NavLinks.map((menu, index) => {
                    /*
                     * Below lg screen: show all menu links (block)
                     * On lg and above: first 5 links are in navbar so hide them in drawer (lg:hidden),
                     * and display only the remaining links (index >= 5)
                     */
                    const visibilityClass =
                      index < 5 ? "block lg:hidden" : "block";
                    const href =
                      menu.url?.startsWith("/") || menu.url?.startsWith("http")
                        ? menu.url
                        : `/${menu.url || ""}`;
                    return (
                      <Link
                        key={index}
                        href={href}
                        onClick={() => setIsOpen(false)}
                        className={`${visibilityClass} m px-3 py-3 text-lg tracking-wide transition-all duration-200 hover:translate-x-1.5 hover:bg-gray-300/40 sm:py-3.5 sm:text-xl`}
                      >
                        {menu.title}
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Footer */}
              <div className="border-border-primary/15 mt-8 flex flex-col gap-4 border-t pt-6">
                <div className="flex items-center justify-end">
                  <ThemeToggle />
                </div>
                <p className="text-text-third font-manrope-light mt-2 text-center text-xs">
                  © {new Date().getFullYear()} An Idea Tech. All rights
                  reserved.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
