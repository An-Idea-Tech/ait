import React from 'react';
import { comparisonData } from '../../../data/comparison';

const ComparisonSection = () => {
  return (
    <section className="py-24 md:py-32 bg-cream dark:bg-dark transition-colors duration-300" id="comparison-section">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="mb-16 md:mb-24">
          <h2 className="font-fraunces_regular text-5xl md:text-6xl text-navy dark:text-light tracking-tight mb-6">
            {comparisonData.heading}
          </h2>
          <p className="font-inter_regular text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-xl">
            {comparisonData.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-16">
          {/* Who we work with */}
          <div>
            <h3 className="font-fraunces_regular text-3xl text-navy dark:text-light mb-8">
              Who we work with
            </h3>
            <ul className="flex flex-col">
              {comparisonData.whoWeWorkWith.map((item, index) => (
                <li 
                  key={index} 
                  className={`py-6 font-inter_regular text-slate-700 dark:text-slate-300 ${index === 0 ? 'border-t border-b' : 'border-b'} border-black/10 dark:border-white/10 leading-relaxed`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Who we don't */}
          <div>
            <h3 className="font-fraunces_regular text-3xl text-navy dark:text-light mb-8">
              Who we don't
            </h3>
            <ul className="flex flex-col">
              {comparisonData.whoWeDont.map((item, index) => (
                <li 
                  key={index} 
                  className={`py-6 font-inter_regular text-slate-700 dark:text-slate-300 ${index === 0 ? 'border-t border-b' : 'border-b'} border-black/10 dark:border-white/10 leading-relaxed`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <p className="font-inter_regular italic text-slate-600 dark:text-slate-400 max-w-2xl text-lg">
            {comparisonData.footerText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
