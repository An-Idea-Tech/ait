import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { killAnimations } from '../utils/animations';
import OptionButton from './OptionButton';
import DiagnosisLoader from './DiagnosisLoader';

const QuestionScreen = ({ question, currentStep, totalQuestions, onAnswer, isLoading }) => {
  const containerRef = useRef(null);
  const questionTextRef = useRef(null);
  const optionsRef = useRef(null);
  const stepRef = useRef(null);
  const [animating, setAnimating] = useState(false);

  // Track question changes for transition
  const [displayedQuestion, setDisplayedQuestion] = useState(question);

  useEffect(() => {
    if (!question) return;

    // If question changed, animate out then in
    if (displayedQuestion && displayedQuestion.questionId !== question.questionId) {
      setAnimating(true);
      const elements = [stepRef.current, questionTextRef.current, optionsRef.current].filter(Boolean);

      gsap.to(elements, {
        opacity: 0,
        y: -20,
        duration: 0.35,
        ease: 'power2.in',
        stagger: 0.05,
        onComplete: () => {
          setDisplayedQuestion(question);
          // Animate in after state update (next tick)
          requestAnimationFrame(() => {
            gsap.fromTo(
              elements,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: 'power3.out',
                onComplete: () => setAnimating(false),
              }
            );
          });
        },
      });
    } else {
      // First question — just animate in
      setDisplayedQuestion(question);
      const elements = [stepRef.current, questionTextRef.current, optionsRef.current].filter(Boolean);
      gsap.fromTo(
        elements,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: 'power3.out',
          delay: 0.15,
        }
      );
    }

    return () => {
      killAnimations(containerRef.current);
    };
  }, [question?.questionId]);

  if (!displayedQuestion) return null;

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center min-h-[80vh] px-6 max-w-[720px] mx-auto"
      role="group"
      aria-label={`Question ${currentStep} of ${totalQuestions}`}
    >
      {/* Step indicator */}
      <div
        ref={stepRef}
        className="text-[13px] font-inter_regular text-cream/30 tracking-[3px] uppercase mb-10 opacity-0"
      >
        Question {currentStep} of {totalQuestions}
      </div>

      {/* Question text */}
      <h3
        ref={questionTextRef}
        className="text-[clamp(22px,4vw,40px)] font-fraunces_regular leading-[1.2] text-cream text-center mb-14 opacity-0"
      >
        {displayedQuestion.text}
      </h3>

      {/* Options */}
      <div
        ref={optionsRef}
        className="w-full flex flex-col gap-4 opacity-0"
        role="listbox"
        aria-label="Answer options"
      >
        {displayedQuestion.options.map((opt) => (
          <OptionButton
            key={opt.value}
            label={opt.label}
            value={opt.value}
            onSelect={onAnswer}
            disabled={isLoading || animating}
          />
        ))}
      </div>

      {isLoading && (
        <div className="mt-8">
          <DiagnosisLoader />
        </div>
      )}
    </div>
  );
};

export default QuestionScreen;
