"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizSection } from "@/data/home";

export default function QuizSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [verdict, setVerdict] = useState(null);

  const handleOptionClick = (option) => {
    if (option.verdict) {
      setVerdict(option.verdict);
    } else if (option.next) {
      setCurrentStep(option.next);
    }
  };

  const restartQuiz = () => {
    setCurrentStep(1);
    setVerdict(null);
  };

  const currentQuestion = quizSection.questions[currentStep];
  const activeVerdict = verdict ? quizSection.verdicts[verdict] : null;

  return (
    <section className="relative min-h-screen w-full overflow-hidden py-16 md:py-28 px-4 sm:px-6 flex-col-center">
    
      {/* Huge Background Display Typography (Desktop) */}
      <div className="absolute inset-0 hidden md:flex flex-col items-center justify-center pointer-events-none select-none z-0 overflow-hidden text-center leading-[0.82] font-medium tracking-tighter text-red/500">
        <div className="text-[13vw] whitespace-nowrap">DOES YOUR</div>
        <div className="text-[14vw] whitespace-nowrap  font-normal text-red">
          BUSINESS
        </div>
        <div className="text-[13vw] whitespace-nowrap">NEED A</div>
        <div className="text-[13vw] whitespace-nowrap">WEBSITE?</div>
      </div>

      {/* Huge Display Typography (Mobile - stacked above card) */}
      <div className="w-full text-center md:hidden mb-8 relative z-10 pointer-events-none select-none leading-[0.88]  tracking-tight text-text-primary">
        <div className="text-[13vw]">DOES YOUR</div>
        <div className="text-[14vw] font-normal text-red">
          BUSINESS
        </div>
        <div className="text-[13vw]">NEED A</div>
        <div className="text-[13vw]">WEBSITE?</div>
      </div>

      {/* Centered Peach Quiz Modal Card Container */}
      <div className="relative z-10 w-full max-w-2xl mx-auto bg-[#fad3b0] border border-[#1a1514] shadow-2xl overflow-hidden flex flex-col transition-all duration-300">
        <AnimatePresence mode="wait">
          {!activeVerdict ? (
            <motion.div
              key={`question-${currentStep}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="flex flex-col"
            >
              {/* Question Step Tag */}
              <div className="pt-8 px-6 pb-2 text-center text-xs font-manrope-bold tracking-[0.25em] uppercase text-[#1a1514]/70">
                {currentQuestion.indicator}
              </div>

              {/* Question Text */}
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1a1514] font-medium leading-snug max-w-xl mx-auto py-6 sm:py-10 px-6 text-center">
                {currentQuestion.question}
              </h3>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-[#1a1514]">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    className={`w-full p-6 sm:p-8 flex items-center gap-4 text-left font-manrope-medium text-lg sm:text-xl transition-all duration-200 cursor-pointer bg-[#fad3b0] text-[#1a1514] hover:bg-[#1a1514] hover:text-[#fad3b0] group ${
                      idx === 0
                        ? "border-b sm:border-b-0 sm:border-r border-[#1a1514]"
                        : ""
                    }`}
                  >
                    <span className="w-8 h-8 rounded-full bg-[#1a1514] text-[#fad3b0] group-hover:bg-[#fad3b0] group-hover:text-[#1a1514] flex items-center justify-center font-manrope-bold text-sm shrink-0 transition-colors duration-200">
                      {opt.badge}
                    </span>
                    <span className="font-serif sm:font-manrope-bold text-xl sm:text-2xl tracking-tight">
                      {opt.text}
                    </span>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={`verdict-${activeVerdict.tag}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col"
            >
              {/* Verdict Top Tag */}
              <div className="pt-8 px-6 pb-2 flex items-center justify-between text-xs font-manrope-bold tracking-[0.25em] uppercase text-[#1a1514]/70">
                <span className="w-16"></span>
                <span>{activeVerdict.tag}</span>
                <button
                  onClick={restartQuiz}
                  className="w-16 text-right hover:text-[#1a1514] transition-colors cursor-pointer flex items-center justify-end gap-1 font-manrope-bold text-[11px]"
                >
                  ↺ Reset
                </button>
              </div>

              {/* Verdict Title */}
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#1a1514] font-medium leading-tight max-w-xl mx-auto pt-4 pb-6 px-6 text-center">
                {activeVerdict.title}
              </h3>

              {/* Verdict Body Explanation */}
              <p className="font-manrope-medium text-[#1a1514]/80 text-sm sm:text-base max-w-xl mx-auto text-center leading-relaxed mb-6 px-6">
                {activeVerdict.body}
              </p>

              {/* Highlight Box */}
              <div className="mx-6 sm:mx-10 mb-8 p-5 bg-[#1a1514]/5 border-l-2 border-[#1a1514] text-left">
                <p className="font-manrope-bold text-xs sm:text-sm uppercase tracking-wider text-[#1a1514] mb-1.5">
                  {activeVerdict.highlightTitle}
                </p>
                <p className="font-manrope-medium text-sm sm:text-base text-[#1a1514]/90 leading-relaxed">
                  {activeVerdict.highlightText}
                </p>
              </div>

              {/* Black CTA Button (exact to screenshot 4) */}
              <div className="border-t border-[#1a1514]">
                <a
                  href={activeVerdict.ctaLink}
                  className="w-full bg-[#1a1514] text-[#fad3b0] py-5 px-6 font-manrope-bold text-center tracking-wider uppercase text-xs sm:text-sm hover:bg-black transition-colors cursor-pointer block"
                >
                  {activeVerdict.ctaText}
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Card Footer Bar (screenshot 2 & 3) */}
        <div className="px-6 py-4 border-t border-[#1a1514] flex items-center justify-between bg-[#fad3b0] text-[#1a1514]">
          <span className="font-manrope-bold tracking-tighter uppercase text-sm sm:text-base">
            AN IDEA TECH
          </span>
          {activeVerdict ? (
            <button
              onClick={restartQuiz}
              className="font-manrope-bold text-xs tracking-wider uppercase hover:underline flex items-center gap-1 cursor-pointer text-[#1a1514]"
            >
              <span>↺ RETAKE QUIZ</span>
            </button>
          ) : (
            <div className="flex flex-col gap-1.5 w-6 cursor-pointer">
              <div className="h-[1.5px] w-full bg-[#1a1514]"></div>
              <div className="h-[1.5px] w-full bg-[#1a1514]"></div>
            </div>
          )}
        </div>
      </div>

    </section>
  );
}
