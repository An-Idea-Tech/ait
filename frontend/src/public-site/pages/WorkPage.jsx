import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';

gsap.registerPlugin(ScrollTrigger);

const WorkPageContent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.work-hero', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
      
      gsap.utils.toArray('.work-section').forEach(sec => {
        gsap.fromTo(sec, 
          { opacity: 0, y: 40 },
          { 
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 80%"
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-cream dark:bg-dark text-slate-800 dark:text-slate-200 min-h-screen transition-colors duration-300" ref={containerRef}>
      <SEO 
        title="Selected Work | An Idea Tech" 
        description="Selected client engagements. 40+ projects since 2016. Long-term relationships built on real maintenance, not just delivery." 
      />
      <Navbar />

      <main id="main-content" role="main">
        <section className="work-hero pt-32 pb-16 md:pt-40 md:pb-24 border-b border-black/10 dark:border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h1 className="font-fraunces_regular text-5xl md:text-7xl lg:text-8xl text-navy dark:text-light tracking-tight leading-[1.1] mb-6">
              Selected Work
            </h1>
            <p className="font-fraunces_italic text-xl md:text-2xl text-slate-700 dark:text-slate-300 max-w-3xl">
              The full archive. 40+ real engagements since 2016. Filterable by category.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24 work-section">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <h2 className="font-fraunces_regular text-2xl md:text-3xl text-navy dark:text-light mb-10">
              Cases ready to detail
            </h2>
            
            <div className="space-y-6 md:space-y-8 font-inter_regular text-lg md:text-xl text-navy dark:text-light">
              <div>
                <Link to="/work/suprabha-wellness" className="hover:opacity-70 transition-opacity">
                  <span className="text-brown mr-2">→</span> Suprabha Wellness (3rd year, full case)
                </Link>
              </div>
              <div>
                <Link to="/work/core-technologies" className="hover:opacity-70 transition-opacity">
                  <span className="text-brown mr-2">→</span> Core Technologies (3rd year, short case)
                </Link>
              </div>
              <div>
                <Link to="/work/spc-sppuc-puttur" className="hover:opacity-70 transition-opacity">
                  <span className="text-brown mr-2">→</span> SPC + SPPUC Puttur (4th year, institutional)
                </Link>
              </div>
            </div>

            <div className="mt-24 md:mt-32 flex gap-8">
              <Link to="/" className="text-brown border-b border-brown pb-0.5 hover:opacity-70 transition-opacity font-inter_regular text-sm md:text-base">
                ← Back to homepage
              </Link>
              <Link to="/contact" className="text-brown border-b border-brown pb-0.5 hover:opacity-70 transition-opacity font-inter_regular text-sm md:text-base">
                → Talk to us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const WorkPage = () => (
  <ThemeProvider>
    <WorkPageContent />
  </ThemeProvider>
);

export default WorkPage;
