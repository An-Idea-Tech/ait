import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';
import { theMethodData as data } from '../../data/theMethod';

gsap.registerPlugin(ScrollTrigger);

const TheMethodPageContent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    let ctx = gsap.context(() => {
      gsap.fromTo('.method-hero',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );

      gsap.utils.toArray('.method-section').forEach(sec => {
        gsap.fromTo(sec,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
            scrollTrigger: {
              trigger: sec,
              start: "top 85%"
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  // Utility to render text that might have markdown-like syntax (bold **, italic *)
  const renderFormattedText = (text) => {
    // Basic markdown parsing for bold (**text**) and italic (*text*)
    // We split by both and render accordingly.
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold text-navy dark:text-light">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={index} className="font-inter_regular italic">{part.slice(1, -1)}</em>;
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div className="bg-[#FAF7EF] dark:bg-dark text-slate-800 dark:text-slate-200 min-h-screen transition-colors duration-300" ref={containerRef}>
      <SEO title={data.seo.title} description={data.seo.description} canonical="https://anideatech.com/the-method" />
      <Navbar />

      <main id="main-content" role="main">
        {/* HERO SECTION */}
        <section className="method-hero pt-32 pb-16 md:pt-40 md:pb-20 border-b border-black/10 dark:border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <div className="flex items-center gap-4 mb-10">
              <span className="text-xs font-bold tracking-widest text-brown uppercase leading-relaxed">
                {data.hero.topTag}
              </span>
            </div>
            <h1 className="font-fraunces_regular text-5xl md:text-6xl text-navy dark:text-light tracking-tight leading-[1.1] mb-10">
              {data.hero.title}
            </h1>
            <p className="font-inter_regular text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
              {renderFormattedText(data.hero.intro)}
            </p>
          </div>
        </section>

        {/* ESSAY SECTIONS */}
        <div className="container mx-auto px-4 md:px-8 max-w-3xl py-8">
          {data.sections.map((section, idx) => (
            <section key={idx} className="method-section py-16 border-b border-black/10 dark:border-white/10 last:border-none">
              <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-8">
                {section.title}
              </h2>
              
              {section.intro && (
                <p className="font-inter_regular text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8 whitespace-pre-wrap">
                  {renderFormattedText(section.intro)}
                </p>
              )}

              {section.type === "content" && section.paragraphs && (
                <div className="space-y-6">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx} className="font-inter_regular text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                      {renderFormattedText(p)}
                    </p>
                  ))}
                </div>
              )}

              {section.type === "contentWithSubsections" && section.subsections && (
                <div className="space-y-12">
                  {section.subsections.map((sub, subIdx) => (
                    <div key={subIdx}>
                      <h3 className="font-fraunces_regular font-bold text-xl md:text-2xl text-navy dark:text-light mb-4">
                        {sub.subtitle}
                      </h3>
                      <div className="space-y-6">
                        {sub.paragraphs.map((p, pIdx) => (
                          <p key={pIdx} className="font-inter_regular text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                            {renderFormattedText(p)}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {section.outro && (
                <p className="font-inter_regular text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mt-10">
                  {renderFormattedText(section.outro)}
                </p>
              )}
            </section>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <section className="method-section py-20 border-t border-black/10 dark:border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light tracking-tight mb-8">
              {data.cta.heading}
            </h2>
            <div className="space-y-6 mb-12">
              {data.cta.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="font-inter_regular text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  {renderFormattedText(p)}
                </p>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-20">
              <Link to={data.cta.buttons.primary.href} className="btn-primary px-8 py-3.5 text-sm md:text-base w-full sm:w-auto text-center bg-navy hover:bg-black dark:bg-light dark:text-navy dark:hover:bg-gray-200">
                {data.cta.buttons.primary.text}
              </Link>
              <Link to={data.cta.buttons.secondary.href} className="font-inter_regular text-sm md:text-base text-navy dark:text-light font-medium border-b border-navy dark:border-light pb-0.5 hover:opacity-70 transition-opacity w-full sm:w-auto text-center">
                {data.cta.buttons.secondary.text}
              </Link>
            </div>

            <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row gap-8">
              {data.cta.footerLinks.map((link, idx) => (
                <Link key={idx} to={link.href} className="text-sm font-medium border-b border-brown text-brown pb-0.5 inline-block hover:opacity-70 transition-opacity">
                  {link.text}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const TheMethodPage = () => (
  <ThemeProvider>
    <TheMethodPageContent />
  </ThemeProvider>
);

export default TheMethodPage;
