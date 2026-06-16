import { useState, useCallback, useRef } from "react";
import { PHASES } from "../diagnosis/utils/constants";
import { startDiagnosis, submitAnswer, submitDiagnosisLead } from "../diagnosis/api/diagnosisApi";

/**
 * Custom hook managing the diagnosis state machine.
 * Phases: idle → intro → question → analyzing → verdict → lead → submitted
 */
const useDiagnosis = () => {
  const [phase, setPhase] = useState(PHASES.IDLE);
  const [sessionId, setSessionId] = useState(null);
  const [question, setQuestion] = useState(null);
  const [verdict, setVerdict] = useState(null);
  const [totalQuestions, setTotalQuestions] = useState(4);
  const [currentStep, setCurrentStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Ref to prevent double-clicks
  const processingRef = useRef(false);

  /**
   * Open the diagnosis overlay (show intro screen).
   */
  const openDiagnosis = useCallback(() => {
    setPhase(PHASES.INTRO);
    setError(null);
  }, []);

  /**
   * Start a new diagnosis session — calls the API, receives first question.
   */
  const beginDiagnosis = useCallback(async () => {
    if (processingRef.current) return;
    processingRef.current = true;
    setIsLoading(true);
    setError(null);

    try {
      const res = await startDiagnosis();
      const data = res.data;

      setSessionId(data.sessionId);
      setQuestion(data.question);
      setTotalQuestions(data.totalQuestions);
      setCurrentStep(data.currentStep);
      setPhase(PHASES.QUESTION);
    } catch (err) {
      setError(err?.response?.data?.message || "Failed to start diagnosis. Please try again.");
    } finally {
      setIsLoading(false);
      processingRef.current = false;
    }
  }, []);

  /**
   * Submit an answer. Backend returns either next question or verdict.
   */
  const answerQuestion = useCallback(
    async (selectedOption) => {
      if (processingRef.current || !sessionId || !question) return;
      processingRef.current = true;
      setIsLoading(true);
      setError(null);

      try {
        const res = await submitAnswer(sessionId, question.questionId, selectedOption);
        const data = res.data;

        if (data.type === "verdict") {
          // Show analyzing screen first, then verdict
          setVerdict(data.verdict);
          setPhase(PHASES.ANALYZING);
        } else if (data.type === "question") {
          setQuestion(data.question);
          setTotalQuestions(data.totalQuestions);
          setCurrentStep(data.currentStep);
          // Keep phase as QUESTION — container will handle transition
        }
      } catch (err) {
        setError(err?.response?.data?.message || "Something went wrong. Please try again.");
      } finally {
        setIsLoading(false);
        processingRef.current = false;
      }
    },
    [sessionId, question]
  );

  /**
   * Called after analyzing animation completes — show the verdict.
   */
  const showVerdict = useCallback(() => {
    setPhase(PHASES.VERDICT);
  }, []);

  /**
   * Open lead capture form.
   */
  const openLeadForm = useCallback(() => {
    setPhase(PHASES.LEAD);
  }, []);

  /**
   * Submit lead capture data.
   */
  const submitLeadData = useCallback(
    async (leadData) => {
      if (processingRef.current || !sessionId) return;
      processingRef.current = true;
      setIsLoading(true);
      setError(null);

      try {
        await submitDiagnosisLead(sessionId, leadData);
        setPhase(PHASES.SUBMITTED);
      } catch (err) {
        const msg = err?.response?.data?.message || "Failed to submit. Please try again.";
        setError(msg);
        throw new Error(msg);
      } finally {
        setIsLoading(false);
        processingRef.current = false;
      }
    },
    [sessionId]
  );

  /**
   * Reset everything — close diagnosis.
   */
  const closeDiagnosis = useCallback(() => {
    setPhase(PHASES.IDLE);
    setSessionId(null);
    setQuestion(null);
    setVerdict(null);
    setCurrentStep(0);
    setError(null);
    setIsLoading(false);
    processingRef.current = false;
  }, []);

  const progress = totalQuestions > 0 ? Math.round((currentStep / totalQuestions) * 100) : 0;

  return {
    phase,
    question,
    verdict,
    progress,
    currentStep,
    totalQuestions,
    isLoading,
    error,
    openDiagnosis,
    beginDiagnosis,
    answerQuestion,
    showVerdict,
    openLeadForm,
    submitLeadData,
    closeDiagnosis,
    sessionId,
  };
};

export default useDiagnosis;
