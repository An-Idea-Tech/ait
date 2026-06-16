import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PHASES } from '../utils/constants';
import { killAnimations } from '../utils/animations';
import ProgressBar from './ProgressBar';
import DiagnosisIntro from './DiagnosisIntro';
import QuestionScreen from './QuestionScreen';
import AnalyzingScreen from './AnalyzingScreen';
import VerdictScreen from './VerdictScreen';
import LeadCaptureForm from './LeadCaptureForm';

const SubmittedScreen = ({ onClose }) => {
  const ref = useRef(null);

  useEffect(() => {
    gsap.fromTo(ref.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' });
    return () => killAnimations(ref.current);
  }, []);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center opacity-0">
      <div className="w-16 h-16 rounded-full border-2 border-green-500/40 flex items-center justify-center mb-8">
        <svg viewBox="0 0 24 24" className="w-8 h-8 stroke-green-400 stroke-[2] fill-none">
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <h3 className="text-[clamp(22px,4vw,36px)] font-fraunces_regular text-cream mb-4">You're all set.</h3>
      <p className="text-base font-inter_regular text-cream/50 max-w-[480px] mb-10">
        We've received your details. Our team will review your diagnosis and reach out within 24 hours.
      </p>
      <button
        onClick={onClose}
        className="text-sm font-inter_regular text-cream/40 hover:text-cream/70 underline underline-offset-4 transition-colors duration-300"
      >
        Close
      </button>
    </div>
  );
};

const DiagnosisContainer = ({
  phase, question, verdict, progress, currentStep, totalQuestions,
  isLoading, error, beginDiagnosis, answerQuestion, showVerdict,
  openLeadForm, submitLeadData, closeDiagnosis,
}) => {
  const overlayRef = useRef(null);
  const contentRef = useRef(null);

  // Lock body scroll when overlay is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4, ease: 'power2.out' });
    return () => {
      document.body.style.overflow = '';
      killAnimations(overlayRef.current);
    };
  }, []);

  const handleClose = () => {
    gsap.to(overlayRef.current, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete: closeDiagnosis,
    });
  };

  const showProgress = phase === PHASES.QUESTION || phase === PHASES.ANALYZING;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 bg-navy opacity-0"
      role="dialog"
      aria-modal="true"
      aria-label="Business Diagnosis Engine"
    >
      {/* Close button */}
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 z-[60] w-10 h-10 flex items-center justify-center rounded-full border border-cream/10 hover:border-cream/30 text-cream/40 hover:text-cream transition-all duration-300"
        aria-label="Close diagnosis"
      >
        <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current stroke-[2] fill-none">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      {/* Progress bar */}
      {showProgress && <ProgressBar progress={progress} />}

      {/* Content */}
      <div ref={contentRef} className="h-full overflow-y-auto">
        {phase === PHASES.INTRO && (
          <DiagnosisIntro onBegin={beginDiagnosis} isLoading={isLoading} />
        )}

        {phase === PHASES.QUESTION && (
          <QuestionScreen
            question={question}
            currentStep={currentStep}
            totalQuestions={totalQuestions}
            onAnswer={answerQuestion}
            isLoading={isLoading}
          />
        )}

        {phase === PHASES.ANALYZING && (
          <AnalyzingScreen onComplete={showVerdict} />
        )}

        {phase === PHASES.VERDICT && (
          <VerdictScreen
            verdict={verdict}
            onGetReport={openLeadForm}
            onClose={handleClose}
          />
        )}

        {phase === PHASES.LEAD && (
          <LeadCaptureForm
            onSubmit={submitLeadData}
            isLoading={isLoading}
            onBack={() => openLeadForm && showVerdict()}
          />
        )}

        {phase === PHASES.SUBMITTED && (
          <SubmittedScreen onClose={handleClose} />
        )}

        {/* Error message */}
        {error && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[70] px-6 py-3 bg-red-500/20 border border-red-500/30 rounded-xl text-sm text-red-300 font-inter_regular">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default DiagnosisContainer;
