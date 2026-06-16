import React from 'react';

const ServiceExclusions = ({ data }) => {
  return (
    <section className="service-section py-20 md:py-28 bg-[#f9f9f9] dark:bg-surface border-y border-black/5 dark:border-white/5">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="mb-12">
          <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-4">
            {data.heading}
          </h2>
          {data.description && (
            <p className="font-inter_regular text-lg text-slate-500 dark:text-slate-400">
              {data.description}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
          {data.items.map((item, index) => (
            <div key={index} className="flex flex-col">
              <h4 className="font-fraunces_regular text-xl text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                <span className="text-red-500/80 font-inter_regular text-sm px-2 py-0.5 rounded-full bg-red-100 dark:bg-red-900/30">Not included</span>
                {item.title}
              </h4>
              <p className="font-inter_regular text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceExclusions;
