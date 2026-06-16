import React from 'react';

const DiagnosisLoader = () => (
  <div className="flex items-center justify-center py-8" role="status" aria-label="Loading">
    <div className="relative w-10 h-10">
      <div className="absolute inset-0 rounded-full border-2 border-cream/10" />
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#A35A3A] animate-spin" />
    </div>
  </div>
);

export default DiagnosisLoader;
