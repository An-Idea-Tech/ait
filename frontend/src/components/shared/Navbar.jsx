import React from "react";
import Link from "next/link";
import { NavLinks } from "@/data/menu";
import ThemeToggle from "@/components/ui/ThemeToggle";
import Logo from "./Logo";

export default function Navbar() {

  return (
    <nav className="w-full bg-[var(--bg)] px-6 pt-4 pb-4 text-[var(--text-primary)] md:px-12 ">
      <div className="mx-auto flex w-full max-w-[1920px] items-center justify-between border-b border-[var(--line)] pb-2">
        
        {/* Logo Section */}
        <div className="flex flex-shrink-0 items-center">
          <Link href="/">
            <Logo className="h-15 w-auto object-contain md:h-20"/>
          </Link>
        </div>

        {/* Navigation Links - Center-Right aligned */}
        <div className="hidden items-center gap-8 text-sm tracking-wide md:flex md:text-base lg:gap-14">
          {NavLinks.map((menu, index) => {
            if (index < 5) {
              return (
                <Link
                  href={menu.url}
                  className="hover:text-brand "
                  key={index}
                >
                  {menu.title}
                </Link>
              );
            }
          })}
        </div>

        {/* Menu Section - Right aligned */}
        <div className="flex items-center gap-4 md:gap-6">
          <ThemeToggle />
          
          <div className="group flex cursor-pointer items-center gap-3 md:gap-4">
            {/* Hamburger Icon */}
            <div className="flex w-10 flex-col gap-1.5">
              <span className="group-hover:bg-brand h-[1px] w-full bg-[var(--text-primary)] "></span>
              <span className="group-hover:bg-brand h-[1px] w-full bg-[var(--text-primary)] "></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
