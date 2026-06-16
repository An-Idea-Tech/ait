import React from 'react';

const ServicePricing = ({ data }) => {
  return (
    <section className="service-section py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="font-fraunces_regular text-3xl md:text-5xl text-navy dark:text-light tracking-tight mb-16">
          {data.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Investment Block */}
          {data.investment && (
            <div className="border border-black/10 dark:border-white/10 p-8 rounded-xl bg-white dark:bg-surface-card">
              <div className="text-[10px] font-bold text-brown tracking-widest uppercase mb-4">
                {data.investment.label}
              </div>
              <div className="font-fraunces_regular text-4xl text-navy dark:text-light mb-6">
                {data.investment.value}
              </div>
              <p className="font-inter_regular text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {data.investment.description}
              </p>
            </div>
          )}

          {/* Timeline Block */}
          {data.timeline && (
            <div className="border border-black/10 dark:border-white/10 p-8 rounded-xl bg-white dark:bg-surface-card">
              <div className="text-[10px] font-bold text-brown tracking-widest uppercase mb-4">
                {data.timeline.label}
              </div>
              <div className="font-fraunces_regular text-4xl text-navy dark:text-light mb-6">
                {data.timeline.value}
              </div>
              <p className="font-inter_regular text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {data.timeline.description}
              </p>
            </div>
          )}
        </div>

        {/* AMC Section */}
        {data.amc && (
          <div className="mt-8 border border-black/10 dark:border-white/10 p-8 rounded-xl bg-[#FAF7EF] dark:bg-surface-card">
            <h4 className="font-fraunces_regular text-2xl text-navy dark:text-light mb-4">
              {data.amc.title}
            </h4>
            <p className="font-inter_regular text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-2xl">
              {data.amc.description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicePricing;
