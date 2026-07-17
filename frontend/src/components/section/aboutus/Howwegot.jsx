"use client";

import React, { useRef, useMemo } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { howWeGotData } from "@/data/about";

// Helper to parse text with **bold** and *italic* markdown tags into individual words
const parseTextToWords = (text) => {
  if (!text) return [];
  const regex = /(\*\*.*?\*\*|\*.*?\*)/g;
  const parts = text.split(regex);
  const words = [];

  parts.forEach((part) => {
    if (!part) return;
    let isBold = false;
    let isItalic = false;
    let content = part;

    if (part.startsWith("**") && part.endsWith("**")) {
      isBold = true;
      content = part.slice(2, -2);
    } else if (part.startsWith("*") && part.endsWith("*")) {
      isItalic = true;
      content = part.slice(1, -1);
    }

    const splitWords = content.trim().split(/\s+/);
    splitWords.forEach((word) => {
      if (word) {
        words.push({ word, isBold, isItalic });
      }
    });
  });

  return words;
};

// Word component that animates opacity based on user scroll progress
const Word = ({ word, isBold, isItalic, start, end, progress }) => {
  const opacity = useTransform(progress, [start, end], [0.18, 1]);

  return (
    <motion.span
      style={{ opacity }}
      className={`inline-block mr-[0.27em] transition-colors duration-200 ${
        isBold
          ? "font-manrope-bold text-text-primary dark:text-white"
          : "font-manrope-medium text-text-primary dark:text-white"
      } ${isItalic ? "italic font-manrope-medium" : ""}`}
    >
      {word}
    </motion.span>
  );
};

export default function Howwegot() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.25"],
  });

  // Parse paragraphs and assign sequential scroll progress ranges across all words
  const parsedParagraphs = useMemo(() => {
    if (!howWeGotData || !howWeGotData.paragraphs) return [];

    const allParsed = howWeGotData.paragraphs.map((p) => parseTextToWords(p));
    const totalWords = allParsed.reduce((acc, p) => acc + p.length, 0);

    let currentGlobalIndex = 0;

    return allParsed.map((words) => {
      return words.map((w) => {
        // We map across 0.0 to 0.85 so the last word finishes revealing before the very bottom
        const start = (currentGlobalIndex / totalWords) * 0.85;
        const end = Math.min(1, start + 0.15);
        currentGlobalIndex++;
        return {
          ...w,
          start,
          end,
        };
      });
    });
  }, []);

  if (!howWeGotData) return null;

  return (
    <section
      ref={containerRef}
      className="section justify-center !min-h-fit py-16 sm:py-20 md:py-28"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left Column: Title (Sticky on Desktop, No scroll reveal animation as requested) */}
          <div className="md:col-span-5 lg:col-span-4 md:sticky md:top-32 md:self-start">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <h2 className="title !text-left">
                {howWeGotData.title || "How we got here."}
              </h2>
            </motion.div>
          </div>

          {/* Right Column: Description Text with Scroll-based Word Reveal Animation */}
          <div className="md:col-span-7 lg:col-span-8 flex flex-col gap-6 sm:gap-8 md:gap-10">
            {parsedParagraphs.map((words, pIndex) => (
              <p
                key={pIndex}
                className="text-base sm:text-lg md:text-xl lg:text-2xl leading-[1.7] sm:leading-[1.75] md:leading-[1.8]  sm:text-justify m-0 text-justify"
              >
                {words.map((item, wIndex) => (
                  <Word
                    key={`${pIndex}-${wIndex}`}
                    word={item.word}
                    isBold={item.isBold}
                    isItalic={item.isItalic}
                    start={item.start}
                    end={item.end}
                    progress={scrollYProgress}
                  />
                ))}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

