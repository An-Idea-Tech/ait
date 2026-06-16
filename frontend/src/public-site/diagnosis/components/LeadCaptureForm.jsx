import React, { useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { staggerReveal, killAnimations } from '../utils/animations';
import DiagnosisLoader from './DiagnosisLoader';

const LeadCaptureForm = ({ onSubmit, isLoading, onBack }) => {
  const containerRef = useRef(null);
  const elementsRef = useRef([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      phone: '',
      businessType: '',
    },
  });

  const addToRefs = (el) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  useEffect(() => {
    if (elementsRef.current.length > 0) {
      staggerReveal(elementsRef.current, { duration: 0.6, stagger: 0.08, delay: 0.2 });
    }
    return () => killAnimations(...elementsRef.current);
  }, []);

  const onFormSubmit = async (data) => {
    try {
      await onSubmit(data);
      toast.success('Thank you! We will reach out shortly.');
    } catch (err) {
      toast.error(err.message || 'Something went wrong. Please try again.');
    }
  };

  const inputCls =
    'w-full bg-transparent border border-cream/15 rounded-lg px-4 py-3.5 text-sm text-cream placeholder-cream/30 focus:outline-none focus:border-[#A35A3A]/60 focus:ring-1 focus:ring-[#A35A3A]/40 transition-all duration-200 font-inter_regular';
  const labelCls = 'block text-xs font-inter_regular text-cream/50 mb-1.5 tracking-wide uppercase';
  const errorCls = 'text-xs text-red-400 mt-1';

  return (
    <div ref={containerRef} className="flex flex-col items-center justify-center min-h-[80vh] px-6 max-w-[520px] mx-auto">
      <div ref={addToRefs} className="w-12 h-[2px] bg-[#A35A3A] mb-8 opacity-60 opacity-0" aria-hidden="true" />

      <h3 ref={addToRefs} className="text-[clamp(22px,4vw,32px)] font-fraunces_regular text-cream text-center mb-3 opacity-0">
        Get your detailed report
      </h3>

      <p ref={addToRefs} className="text-sm font-inter_regular text-cream/40 text-center mb-10 opacity-0">
        We'll send you a personalized recommendation with next steps.
      </p>

      <form ref={addToRefs} onSubmit={handleSubmit(onFormSubmit)} className="w-full space-y-5 opacity-0" noValidate>
        <div>
          <label htmlFor="diag-name" className={labelCls}>Name</label>
          <input
            id="diag-name"
            type="text"
            className={inputCls}
            placeholder="Your full name"
            {...register('name', { required: 'Name is required', maxLength: { value: 100, message: 'Max 100 characters' } })}
          />
          {errors.name && <p className={errorCls}>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="diag-business" className={labelCls}>Business Name</label>
          <input
            id="diag-business"
            type="text"
            className={inputCls}
            placeholder="Your business or company name"
            {...register('businessName', { required: 'Business name is required', maxLength: { value: 150, message: 'Max 150 characters' } })}
          />
          {errors.businessName && <p className={errorCls}>{errors.businessName.message}</p>}
        </div>

        <div>
          <label htmlFor="diag-email" className={labelCls}>Email</label>
          <input
            id="diag-email"
            type="email"
            className={inputCls}
            placeholder="you@business.com"
            {...register('email', {
              required: 'Email is required',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Invalid email address' },
            })}
          />
          {errors.email && <p className={errorCls}>{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="diag-phone" className={labelCls}>Phone</label>
          <input
            id="diag-phone"
            type="tel"
            className={inputCls}
            placeholder="+91 XXXXX XXXXX"
            {...register('phone', { required: 'Phone is required', maxLength: { value: 20, message: 'Max 20 characters' } })}
          />
          {errors.phone && <p className={errorCls}>{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="diag-type" className={labelCls}>Business Type (optional)</label>
          <input
            id="diag-type"
            type="text"
            className={inputCls}
            placeholder="e.g. Restaurant, Coaching, SaaS..."
            {...register('businessType', { maxLength: { value: 100, message: 'Max 100 characters' } })}
          />
          {errors.businessType && <p className={errorCls}>{errors.businessType.message}</p>}
        </div>

        <div className="pt-4">
          {isLoading ? (
            <DiagnosisLoader />
          ) : (
            <button
              type="submit"
              className="w-full py-4 bg-[#A35A3A] hover:bg-[#B8693F] text-cream text-[15px] font-semibold rounded-full shadow-[0_4px_20px_rgba(163,90,58,0.3)] hover:shadow-[0_6px_28px_rgba(163,90,58,0.45)] transition-all duration-300"
              id="diagnosis-submit-lead"
            >
              Send My Report
            </button>
          )}
        </div>
      </form>

      <button
        onClick={onBack}
        className="mt-6 text-xs font-inter_regular text-cream/20 hover:text-cream/40 transition-colors duration-300"
      >
        ← Back to verdict
      </button>
    </div>
  );
};

export default LeadCaptureForm;
