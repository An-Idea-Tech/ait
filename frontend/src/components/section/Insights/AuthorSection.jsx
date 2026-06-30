"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AuthorSection() {
  return (
    <section className="bg-bg-primary section-padding-y section-padding-x flex flex-col items-center border-b border-border-primary">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Sneaker Display */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex md:col-span-3 aspect-square bg-[#E50000] rounded-2xl items-center justify-center overflow-hidden p-6 border border-border-primary hover:scale-[1.02] transition-transform duration-500"
        >
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop"
            alt="Red Sneaker Left"
            className="w-full h-auto object-contain transform -rotate-12 hover:rotate-0 transition-transform duration-500 select-none"
          />
        </motion.div>

        {/* Center Biography Area */}
        <div className="col-span-12 md:col-span-6 text-center space-y-6 px-4">
          <h2 className="title">Who writes these.</h2>
          <p className="subtitle font-manrope-light text-text-secondary">
            These essays are written by the team at An Idea Tech. We run a product studio building software for companies across India. We also publish books, tools, and open source libraries.
          </p>
        </div>

        {/* Right Sneaker Display */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="hidden md:flex md:col-span-3 aspect-square bg-[#E50000] rounded-2xl items-center justify-center overflow-hidden p-6 border border-border-primary hover:scale-[1.02] transition-transform duration-500"
        >
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop"
            alt="Red Sneaker Right"
            className="w-full h-auto object-contain transform rotate-12 scale-x-[-1] hover:rotate-0 transition-transform duration-500 select-none"
          />
        </motion.div>
        
        {/* Mobile Sneaker Display (shown only on small viewports) */}
        <div className="flex md:hidden col-span-12 justify-center">
          <div className="w-48 h-48 bg-[#E50000] rounded-2xl flex items-center justify-center overflow-hidden p-4 border border-border-primary">
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=600&auto=format&fit=crop"
              alt="Red Sneaker Mobile"
              className="w-full h-auto object-contain transform -rotate-12"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
