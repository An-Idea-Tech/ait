import React from 'react';

const ServicePortfolioPreview = ({ data }) => {
  return (
    <section className="service-section py-20 md:py-28 border-t border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-6">
          {data.heading}
        </h2>
        <p className="font-inter_regular text-slate-600 dark:text-slate-400 text-lg">
          {data.description}
        </p>
      </div>
    </section>
  );
};

export default ServicePortfolioPreview;
