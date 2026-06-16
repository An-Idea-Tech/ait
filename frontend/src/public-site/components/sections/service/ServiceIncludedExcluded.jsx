import React from 'react';

const ServiceIncludedExcluded = ({ data }) => {
  return (
    <section className="service-section py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-16 text-center">
          {data.heading}
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Included */}
          {data.included && (
            <div className="bg-cream dark:bg-surface-card p-8 rounded-xl border-t-4 border-green-600 shadow-sm">
              <h3 className="font-fraunces_regular text-2xl text-navy dark:text-light mb-8 flex items-center gap-3">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {data.included.title}
              </h3>
              <ul className="space-y-4">
                {data.included.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-slate-700 dark:text-slate-300 font-inter_regular">
                    <span className="text-green-600 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Excluded */}
          {data.excluded && (
            <div className="bg-[#f9f9f9] dark:bg-surface p-8 rounded-xl border-t-4 border-red-500 shadow-sm">
              <h3 className="font-fraunces_regular text-2xl text-navy dark:text-light mb-8 flex items-center gap-3">
                <svg className="w-6 h-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {data.excluded.title}
              </h3>
              <ul className="space-y-6">
                {data.excluded.items.map((item, idx) => (
                  <li key={idx} className="flex flex-col gap-1 text-slate-700 dark:text-slate-300 font-inter_regular">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{item.title}</span>
                    <span className="text-sm text-slate-500 dark:text-slate-400">{item.description}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceIncludedExcluded;
