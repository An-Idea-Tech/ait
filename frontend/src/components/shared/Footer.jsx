import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks, footerContact } from "@/data/footer";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--line)] bg-[var(--bg)] px-6 pt-20 pb-8 text-[var(--text-primary)] md:px-12">
      <div className="mx-auto w-full max-w-[1920px]">
        {/* Top Section */}
        <div className="">
          <h2 className="font-manrope-light mb-2 flex items-center gap-3 text-3xl tracking-wide md:text-5xl">
            Built in Mangaluru
            <span className="relative inline-block h-8 w-16 overflow-hidden rounded-full border border-[var(--line)] align-middle md:h-12 md:w-24">
              {/* Dummy image for lighthouse */}
              <Image
                src="https://dummyimage.com/100x50/333/fff&text=Lighthouse"
                alt="Mangaluru Lighthouse"
                fill
                className="object-cover"
                unoptimized
              />
            </span>
            .
          </h2>
          <h2 className="font-manrope-light mb-8 text-3xl tracking-wide md:text-5xl">
            Trusted across Karnataka and beyond.
          </h2>
          <div className="h-[1px] w-64 bg-[var(--text-primary)] opacity-50"></div>
        </div>

        {/* Middle Section - Giant Text */}
        <div className="relative mb-20 flex w-full items-center overflow-hidden py-10">
          <div className="font-manrope-medium relative z-10 flex text-[15vw] leading-none tracking-tighter select-none md:text-[180px] lg:text-[220px]">
            an idea tech
          </div>
        </div>

        {/* Bottom Section - Links Grid */}
        <div className="font-manrope-light mb-20 grid grid-cols-1 gap-12 text-sm sm:grid-cols-2 md:text-base lg:grid-cols-5 lg:gap-8">
          {/* Logo & Socials */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              <Logo />
            </div>
            <div className="mt-auto flex items-center gap-4 text-xl">
              <a href="#" className="hover:text-brand transition-colors">
                <FaWhatsapp />
              </a>
              <a href="#" className="hover:text-brand transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-brand transition-colors">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="flex flex-col gap-4 md:gap-6">
              <h4 className="font-manrope-bold text-xs tracking-wider text-[var(--text-primary)] uppercase md:text-sm">
                {column.title}
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-[var(--text-secondary)] md:text-base">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.url}
                      className="transition-colors hover:text-[var(--text-primary)]"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="flex flex-col gap-4 text-sm text-[var(--text-secondary)] md:gap-6 md:text-base">
            <h4 className="font-manrope-bold text-xs tracking-wider text-[var(--text-primary)] uppercase md:text-sm">
              {footerContact.title}
            </h4>
            <div className="flex flex-col gap-1">
              {footerContact.address.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
            <p className="mt-2">{footerContact.gst}</p>
            <div className="mt-2 flex flex-col gap-1">
              {footerContact.hours.map((line, idx) => (
                <p key={idx}>{line}</p>
              ))}
            </div>
            <p className="mt-2">{footerContact.phone}</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="font-manrope-light pb-4 text-center text-xs text-[var(--text-secondary)] md:text-sm">
          © 2016-2026 An Idea Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
