"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function SubscribeSection() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Subscribed: ${email}`);
    setEmail("");
  };

  return (
    <section className="bg-bg-primary section-padding-y section-padding-x flex flex-col items-center border-b border-border-primary relative overflow-hidden">
      
      {/* Decorative Airplane Path Animation */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 w-80 h-32 pointer-events-none opacity-40">
        <svg viewBox="0 0 300 100" fill="none" className="w-full h-full">
          {/* Dotted Line trajectory */}
          <motion.path
            d="M 10 80 Q 90 20 180 50 T 290 20"
            stroke="var(--line)"
            strokeWidth="2"
            strokeDasharray="4 4"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
          {/* Animated paper airplane */}
          <motion.g
            initial={{ x: 10, y: 80, rotate: -30 }}
            animate={{ 
              x: [10, 90, 180, 290],
              y: [80, 20, 50, 20],
              rotate: [-30, -10, 20, -15]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          >
            <path
              d="M0,0 L20,10 L0,20 L5,11 L0,0 M20,10 L5,11"
              fill="none"
              stroke="var(--text-secondary)"
              strokeWidth="1.5"
              transform="scale(0.8) translate(-10, -10)"
            />
          </motion.g>
        </svg>
      </div>

      <div className="w-full max-w-2xl text-center space-y-8 mt-10">
        <h2 className="title">Get new essays when they ship.</h2>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-end gap-4 w-full">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            required
            className="w-full bg-transparent border-b border-border-primary py-3 text-lg placeholder-text-secondary/50 flex-1 outline-none transition-colors focus:border-brand font-manrope-light text-text-primary"
          />
          <div className="w-full sm:w-auto flex justify-end">
            <Button text="Subscribe" variant="dark" />
          </div>
        </form>

        <p className="description text-xs text-text-secondary/70">
          You'll receive maximum one email per month. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
