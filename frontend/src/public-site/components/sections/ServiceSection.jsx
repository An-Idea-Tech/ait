import React, { useEffect, useRef } from 'react';
import { services } from '../../../data/service';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ServiceSection = () => {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Fade in the header
      gsap.fromTo('.service-header', 
        { opacity: 0, y: 30 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 0.8, 
          ease: "power3.out",
          scrollTrigger: {
            trigger: '.service-header',
            start: "top 80%",
          }
        }
      );

      // Stagger fade in the cards initially if they are in view
      cardsRef.current.forEach((card) => {
        if (card) {
          gsap.fromTo(card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
              }
            }
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 bg-cream dark:bg-dark transition-colors duration-300 relative z-10"
      id="services-section"
    >
      <div className="container mx-auto px-4 md:px-8 max-w-5xl relative">
        <div className="service-header mb-16 md:mb-24 text-center max-w-3xl mx-auto">
          <h2 className="font-fraunces_regular text-4xl md:text-5xl lg:text-6xl text-navy dark:text-light tracking-tight mb-6">
            Services & <span className="font-fraunces_italic text-[#EF870D]">Systems</span>
          </h2>
          <p className="font-inter_regular text-lg md:text-xl text-slate-600 dark:text-slate-400">
            We build software for SMEs that drives real business growth. Choose the tier that matches your current stage.
          </p>
        </div>

        {/* The container for the stacking cards. Adding some bottom padding so the last card has room to stick before the section ends. */}
        <div className="relative pb-[15vh]">
          {services.map((service, index) => {
            return (
              <div
                key={service.id}
                ref={el => cardsRef.current[index] = el}
                // High margin-bottom creates the scrolling distance before the next card arrives
                className="sticky w-full mb-24 md:mb-32 origin-top"
                style={{ 
                  top: `calc(12vh + ${index * 30}px)`, 
                  zIndex: index + 1
                }}
              >
                <div 
                  className={`
                    w-full min-h-[350px] rounded-[2.5rem] p-8 md:p-12 
                    shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]
                    border border-black/5 dark:border-white/10
                    flex flex-col lg:flex-row gap-8 lg:gap-12
                    transition-colors duration-300
                    bg-white dark:bg-surface-card
                    backdrop-blur-xl
                  `}
                >
                  {/* Left Column */}
                  <div className="lg:w-5/12 flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-brand-50/50 dark:bg-brand-900/20 text-brand-600 dark:text-brand-400 text-xs font-bold tracking-widest uppercase mb-6 border border-brand-100 dark:border-brand-800/30">
                        {service.tag}
                      </div>
                      <h3 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light mb-4">
                        {service.title}
                      </h3>
                      <p className="font-inter_regular text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                        <span className="font-semibold text-navy dark:text-light block mb-2">Who it's for:</span>
                        {service.whoItsFor}
                      </p>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="lg:w-7/12 flex flex-col justify-between">
                    <div className="bg-cream/50 dark:bg-surface/50 rounded-3xl p-6 md:p-8 border border-slate-100/50 dark:border-surface-border/50">
                      <h4 className="font-inter_regular font-semibold text-navy dark:text-light text-lg mb-4 flex items-center gap-3">
                        <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#EF870D]/10 text-[#EF870D]">
                           <CheckCircle2 className="w-5 h-5" />
                        </span>
                        What you get
                      </h4>
                      <p className="font-inter_regular text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        {service.whatYouGet}
                      </p>
                      
                      <div className="mt-6 pt-6 border-t border-slate-200 dark:border-surface-border/50 flex items-center gap-2">
                         <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"></div>
                         <span className="text-sm font-medium text-slate-500 dark:text-slate-400">{service.amc}</span>
                      </div>
                    </div>
                    
                    {/* Bottom Details Row */}
                    <div className="mt-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
                      <div className="flex gap-8">
                        <div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider font-semibold">Investment</div>
                          <div className="font-inter_regular font-bold text-xl text-navy dark:text-light">{service.investment}</div>
                        </div>
                        <div>
                          <div className="text-xs text-slate-500 dark:text-slate-400 mb-1.5 uppercase tracking-wider font-semibold">Timeline</div>
                          <div className="font-inter_regular font-medium text-lg text-navy dark:text-light">{service.timeline}</div>
                        </div>
                      </div>
                      
                      <button className="btn-primary group rounded-full sm:px-6 sm:py-3 h-12">
                        {service.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
