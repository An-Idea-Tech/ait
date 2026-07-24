"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { quizSection } from "@/data/home";
import Heighlight from "@/components/shared/Heighlight";
import Button from "@/components/ui/Button";
import Note from "@/components/shared/Note";

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
    <section className="section gap-10">
      {/* Huge Display Typography*/}
      <div className="huge-text text-center">
        <div>DOES YOUR</div>
        <div className="image-text bg-[url('https://ik.imagekit.io/anideatech/ait/liquid-orange.avif')]">
          BUSINESS
        </div>
        <div>NEED A WEBSITE?</div>
      </div>

      <div className="subtitle-container">
        <p className="subtitle">Just 5 questions to know if you actually need a website or not.</p>
      </div>

      {/* Centered Peach Quiz Modal Card Container */}
      <div className="bg-text-primary relative mx-auto flex w-full max-w-2xl flex-col overflow-hidden border border-border-primary shadow-2xl transition-all duration-300">
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
              <div className="description !text-bg-primary px-6 pt-8 pb-2 !text-center">
                {currentQuestion.indicator}
              </div>

              {/* Question Text */}
              <h3 className="title2 !text-bg-primary mx-auto max-w-xl px-6 py-6 sm:py-10 sm:text-3xl md:text-4xl">
                {currentQuestion.question}
              </h3>

              {/* Options Grid */}
              <div className="border-border-secondary grid grid-cols-1 border border-t sm:grid-cols-2">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleOptionClick(opt)}
                    className={`font-manrope-medium group text-bg-primary hover:text-bg-primary flex w-full cursor-pointer items-center gap-4 p-6 text-left text-lg transition-all duration-200 hover:bg-brand sm:p-8 sm:text-xl ${
                      idx === 0
                        ? "border-b border-border-secondary sm:border-r sm:border-b-0"
                        : ""
                    }`}
                  >
                    <span className="font-manrope-bold bg-bg-primary text-text-primary group-hover:bg-bg-text-bg-primary flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm transition-colors duration-200 group-hover:text-text-primary">
                      {opt.badge}
                    </span>
                    <span className="sm:font-manrope-bold font-serif text-xl tracking-tight sm:text-2xl">
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
              <div className="flex-row-center !justify-between px-6 pt-8 pb-2">
                <span>
                  <Heighlight text={activeVerdict.tag} className={'!text-bg-primary'} />
                </span>
                <button
                  onClick={restartQuiz}
                  className="button"
                >
                  ↺ Reset
                </button>
              </div>

              {/* Verdict Title */}
              <h3 className="mx-auto max-w-xl px-6 pt-4 pb-6 text-center title2 !text-bg-primary">
                {activeVerdict.title}
              </h3>

              {/* Verdict Body Explanation */}
              <p className="description text-center !text-bg-primary mx-auto mb-6 max-w-xl px-6">
                {activeVerdict.body}
              </p>

              {/* Highlight Box */}
              <div className="mx-6 description !text-text-secondary mb-8 border-border-primary p-5 text-left sm:mx-10">
                <p className=" mb-1.5">
                  {activeVerdict.highlightTitle}
                </p>
                <p>
                  {activeVerdict.highlightText}
                </p>
              </div>

              {/* Black CTA Button (exact to screenshot 4) */}
              <div className=" bg-bg-primary flex-row-center py-2 ">
                <Button text={activeVerdict.ctaText}/>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <Note text="Got a verdict you didn't expect? That's the point. We'd rather tell you the truth now than waste your money later."/>
    </section>
  );
}
