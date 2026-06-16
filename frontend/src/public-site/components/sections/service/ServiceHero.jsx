import React from 'react';
import { Link } from 'react-router-dom';

const ServiceHero = ({ data }) => {
  return (
    <section className="service-section pt-32 pb-16 md:pt-40 md:pb-24 border-b border-black/10 dark:border-white/10">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        {data.tierTag && (
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-brown"></div>
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">{data.tierTag}</span>
          </div>
        )}
        <h1 className="font-fraunces_regular text-5xl md:text-6xl lg:text-7xl text-navy dark:text-light tracking-tight leading-[1.1] mb-8">
          {data.title}
        </h1>
        {data.description && (
          <p className="font-inter_regular text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-3xl leading-relaxed mb-12">
            {data.description}
          </p>
        )}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {data.primaryCTA && (
            <Link to={data.primaryCTA.target} className="btn-primary px-8 py-3.5 text-sm md:text-base w-full sm:w-auto text-center">
              {data.primaryCTA.label}
            </Link>
          )}
          {data.secondaryCTA && (
            <Link to={data.secondaryCTA.target} className="font-inter_regular text-sm md:text-base text-navy dark:text-light font-medium border-b border-navy dark:border-light pb-0.5 hover:opacity-70 transition-opacity w-full sm:w-auto text-center">
              {data.secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
