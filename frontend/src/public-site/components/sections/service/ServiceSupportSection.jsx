import React from 'react';

const ServiceSupportSection = ({ data }) => {
  return (
    <section className="service-section py-20 md:py-28 bg-[#FAF7EF] dark:bg-surface-card border-y border-black/5 dark:border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-8">
          {data.heading}
        </h2>
        
        {data.intro && (
          <p className="font-inter_regular text-lg text-slate-700 dark:text-slate-300 mb-8 border-l-4 border-brown pl-6 py-2">
            {data.intro}
          </p>
        )}

        {data.subheading && (
          <h4 className="font-inter_regular font-bold text-navy dark:text-light mb-4">
            {data.subheading}
          </h4>
        )}
        
        {data.bullets && (
          <ul className="list-disc list-inside space-y-3 mb-8 text-slate-600 dark:text-slate-400 font-inter_regular">
            {data.bullets.map((bullet, idx) => (
              <li key={idx} className="leading-relaxed">{bullet}</li>
            ))}
          </ul>
        )}

        {data.paragraphs && (
          <div className="space-y-6">
            {data.paragraphs.map((p, idx) => (
              <p key={idx} className="font-inter_regular text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                {p}
              </p>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceSupportSection;
