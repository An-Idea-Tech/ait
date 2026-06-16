import React from 'react';
import { Loader2 } from 'lucide-react';

const LoadingSpinner = ({ size = 'md', className = '' }) => {
  const sizes = { sm: 'w-4 h-4', md: 'w-6 h-6', lg: 'w-10 h-10' };
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className={`${sizes[size]} text-brand-400 animate-spin`} />
    </div>
  );
};

export const PageLoader = () => (
  <div className="flex-1 flex items-center justify-center min-h-[40vh]">
    <div className="flex flex-col items-center gap-3">
      <Loader2 className="w-10 h-10 text-brand-400 animate-spin" />
      <p className="text-sm text-slate-400">Loading...</p>
    </div>
  </div>
);

export default LoadingSpinner;
