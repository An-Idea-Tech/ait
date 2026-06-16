import React from 'react';

const ServiceContentBlock = ({ data }) => {
  return (
    <section className="service-section py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-10">
          {data.heading}
        </h2>
        {data.intro && (
          <p className="font-inter_regular text-lg md:text-xl text-slate-700 dark:text-slate-300 font-medium mb-10">
            {data.intro}
          </p>
        )}
        {data.paragraphs && (
          <div className="space-y-6">
            {data.paragraphs.map((p, i) => (
              <p key={i} className="font-inter_regular text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                {p}
              </p>
            ))}
          </div>
        )}
        {data.blocks && (
          <div className="space-y-16 mt-16">
            {data.blocks.map((block, index) => (
              <div key={index}>
                <h3 className="font-fraunces_regular text-2xl text-navy dark:text-light mb-6">
                  {block.title}
                </h3>
                <div className="space-y-6">
                  {block.paragraphs.map((p, i) => (
                    <p key={i} className="font-inter_regular text-slate-600 dark:text-slate-400 leading-relaxed text-base md:text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServiceContentBlock;
