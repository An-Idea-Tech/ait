import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCTA = ({ data }) => {
  return (
    <section className="service-section py-24 md:py-32 bg-navy dark:bg-black text-white text-center">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl">
        <h2 className="font-fraunces_regular text-4xl md:text-5xl tracking-tight mb-8 text-light">
          {data.heading}
        </h2>
        {data.description && (
          <p className="font-inter_regular text-slate-300 text-lg md:text-xl leading-relaxed mb-12">
            {data.description}
          </p>
        )}
        {data.paragraphs && (
          <div className="space-y-6 mb-12 text-slate-300 font-inter_regular text-lg md:text-xl leading-relaxed">
            {data.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          {data.primaryCTA && (
            <Link to={data.primaryCTA.target} className="btn-primary bg-brown hover:bg-[#8A4A2F] text-white px-8 py-4 text-base md:text-lg w-full sm:w-auto text-center border-none shadow-orange-glow">
              {data.primaryCTA.label}
            </Link>
          )}
          {data.secondaryCTA && (
            <Link to={data.secondaryCTA.target} className="font-inter_regular text-slate-300 hover:text-white border-b border-slate-500 pb-0.5 transition-colors w-full sm:w-auto text-center">
              {data.secondaryCTA.label}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
