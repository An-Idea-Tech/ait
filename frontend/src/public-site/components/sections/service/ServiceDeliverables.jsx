import React from 'react';

const ServiceDeliverables = ({ data }) => {
  return (
    <section className="service-section py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-16 text-center">
          {data.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {data.items.map((item, index) => (
            <div key={index} className="bg-cream dark:bg-surface-card p-8 md:p-10 border border-black/5 dark:border-white/5 shadow-sm rounded-lg transition-transform hover:-translate-y-1 duration-300">
              <h3 className="font-fraunces_regular text-2xl text-navy dark:text-light mb-4">
                {item.title}
              </h3>
              <p className="font-inter_regular text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDeliverables;
