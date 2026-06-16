import React from 'react';
import { AGENCY_SECTION_CONTENT } from '../../../../../backend/src/constants/http.constants';

const AgencySection = () => {
  const { quote, description, features, footer, footerLinkText, footerLink } = AGENCY_SECTION_CONTENT;

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 lg:px-24 bg-cream dark:bg-dark text-navy dark:text-cream w-full overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col gap-16 md:gap-24">
        
        {/* Top Section */}
        <div className="flex flex-col gap-12">
          <div className="border-l-[3px] border-brown/80 pl-6 md:pl-10 ml-1">
            <h2 className="font-fraunces_italic text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.15] text-navy dark:text-cream max-w-4xl tracking-tight transition-colors duration-300">
              <span className="italic">"{quote}"</span>
            </h2>
          </div>
          
          <div className="flex flex-col gap-6 text-[1.05rem] md:text-[1.1rem] text-navy/70 dark:text-cream/70 max-w-3xl font-inter_regular leading-relaxed mt-4 transition-colors duration-300">
            {description.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-3">
              <h3 className="font-fraunces_regular font-semibold text-2xl text-navy dark:text-cream transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="font-inter_regular text-[1.05rem] text-navy/70 dark:text-cream/70 leading-relaxed max-w-md transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Section */}
        <div className="pt-6 text-navy/80 dark:text-cream/80 flex flex-wrap items-center font-inter_regular transition-colors duration-300">
          <span className="italic mr-2">{footer}</span>
          <a href={footerLink} className="text-brown hover:text-brown/80 transition-colors font-medium border-b border-brown/40 hover:border-brown pb-0.5">
            {footerLinkText}
          </a>
        </div>

      </div>
    </section>
  );
};

export default AgencySection;
