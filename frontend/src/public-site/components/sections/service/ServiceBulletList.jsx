import React from 'react';

const ServiceBulletList = ({ data }) => {
  return (
    <section className="service-section py-20 md:py-28 bg-[#FAF7EF] dark:bg-surface-card border-y border-black/5 dark:border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-12">
          {data.heading}
        </h2>
        <ul className="space-y-8">
          {data.items.map((item, index) => (
            <li key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg className="w-6 h-6 text-brown" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-inter_regular text-base md:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
                {typeof item === 'string' ? (
                  item
                ) : (
                  <>
                    <span className="font-semibold text-navy dark:text-light">{item.title}</span> {item.description}
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceBulletList;
