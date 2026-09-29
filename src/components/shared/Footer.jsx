import React from "react";
import Link from "next/link";
import Image from "next/image";
import { footerLinks, footerContact } from "@/data/footer";
import { FaWhatsapp, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  const imgurl =
    "https://images.unsplash.com/photo-1699119710104-9cf4f77019b6?q=80&w=1207&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <footer className="border-border-primary bg-bg-primary text-text-primary w-full border-t mt-auto px-4 pt-20 pb-4 md:px-12">
      <div className="mx-auto w-full max-w-[1920px]">
        {/* Top Section */}
        <div className="">
          <h2 className="font-manrope-light mb-2 flex items-center gap-3 text-3xl tracking-wide md:text-5xl">
            Built in Mangaluru
            <span className="relative inline-block h-8 w-16 overflow-hidden rounded-full align-middle md:h-12 md:w-24">
              {/* Dummy image for lighthouse */}
              <Image
                src={imgurl}
                alt="Mangaluru-Lighthouse"
                fill
                className="object-cover"
                unoptimized
              />
            </span>
          </h2>
          <h2 className="font-manrope-light mb-0 text-3xl tracking-wide md:text-5xl">
            Trusted across Karnataka and beyond.
          </h2>
          <div className="border-border-primary h-[1px] w-full opacity-50"></div>
        </div>

        {/* Middle Section - Giant Text */}
        <div className="relative mb-20 flex w-full items-center overflow-hidden py-10">
          <div className="font-manrope-medium relative z-10 flex text-[15vw] leading-none tracking-tighter select-none md:text-[150px] xl:text-[220px]">
            an idea tech
          </div>
        </div>

        {/* Bottom Section - Links Grid */}
        <div className="font-manrope-light mb-20 grid grid-cols-1 gap-12 text-sm sm:grid-cols-2 md:text-base lg:grid-cols-5 lg:gap-8">
          {/* Logo & Socials */}
          <div className=" ">
            <div className="relative h-16 w-16 md:h-20 md:w-20">
              <Logo />
            </div>
            <div className="mt-auto flex items-center gap-4 text-xl">
              <div className="mt-auto flex items-center gap-4 text-xl">
                <a
                  href="https://wa.me/6591234567" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  <FaWhatsapp />
                </a>

                <a
                  href="https://www.instagram.com/yourusername/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  <FaInstagram />
                </a>

                <a
                  href="https://www.linkedin.com/in/yourusername/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand transition-colors"
                >
                  <FaLinkedinIn />
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx} className="flex flex-col gap-4 md:gap-6">
              <h4 className="font-manrope-bold text-text-primary text-xs tracking-wider uppercase md:text-sm">
                {column.title}
              </h4>
              <ul className="text-text-secondary flex flex-col gap-3 text-sm md:text-base">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link
                      href={link.url}
                      className="hover:text-text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact Column */}
          <div className="text-text-secondary zflex flex-col gap-4 text-sm md:gap-6 md:text-base">
            <h4 className="font-manrope-bold text-text-primary text-xs tracking-wider uppercase md:text-sm">
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
        <div className="font-manrope-light text-text-secondary pb-4 text-center text-xs md:text-sm">
          © 2016-2026 An Idea Tech. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
