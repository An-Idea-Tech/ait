import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';
import { aboutData as data } from '../../data/about';

gsap.registerPlugin(ScrollTrigger);

const AboutContent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.about-hero', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
      
      gsap.utils.toArray('.about-section').forEach(sec => {
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
      <SEO title={data.seo.title} description={data.seo.description} />
      <Navbar />

      <main id="main-content" role="main" className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          
          {/* HERO SECTION */}
          <section className="about-hero mb-24">
            <div className="text-xs font-bold text-brown tracking-widest uppercase mb-6">
              {data.hero.tag}
            </div>
            <h1 className="font-fraunces_regular text-5xl md:text-6xl lg:text-7xl text-navy dark:text-light tracking-tight leading-[1.1] mb-8">
              {data.hero.title}
            </h1>
            <p className="font-inter_regular text-lg md:text-xl text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              {data.hero.subtitle}
            </p>
          </section>

          {/* WHAT WE DO */}
          <section className="about-section">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light mb-6">
              {data.whatWeDo.title}
            </h2>
            <div className="space-y-6 font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              {data.whatWeDo.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <div className="mt-8">
              <Link to={data.whatWeDo.link.href} className="text-brown border-b border-brown pb-0.5 hover:opacity-70 transition-opacity font-inter_regular text-sm font-medium">
                {data.whatWeDo.link.text}
              </Link>
            </div>
          </section>

          <hr className="border-t border-black/10 dark:border-white/10 my-16 md:my-24" />

          {/* HISTORY */}
          <section className="about-section">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light mb-6">
              {data.history.title}
            </h2>
            <div className="space-y-6 font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              {data.history.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
              ))}
            </div>
          </section>

          <hr className="border-t border-black/10 dark:border-white/10 my-16 md:my-24" />

          {/* TEAM */}
          <section className="about-section">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light mb-8">
              {data.team.title}
            </h2>
            <div className="space-y-8 max-w-3xl">
              {data.team.members.map((member, i) => (
                <div key={i}>
                  <h3 className="font-fraunces_regular text-xl font-bold text-navy dark:text-light mb-2">
                    {member.name} — {member.role}
                  </h3>
                  <p className="font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 font-inter_regular italic text-sm text-slate-500">
              {data.team.footer}
            </div>
          </section>

          <hr className="border-t border-black/10 dark:border-white/10 my-16 md:my-24" />

          {/* LOCATION */}
          <section className="about-section">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light mb-6">
              {data.location.title}
            </h2>
            <div className="space-y-6 font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mb-8">
              {data.location.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <h3 className="font-inter_regular font-bold text-navy dark:text-light mb-4 text-base">
              {data.location.subtitle}
            </h3>
            <div className="space-y-6 font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              {data.location.subParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>

          {/* WHY MANGALURU */}
          <section className="about-section mt-16 md:mt-24">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light mb-6">
              {data.whyMangaluru.title}
            </h2>
            <div className="space-y-6 font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl">
              {data.whyMangaluru.paragraphs.map((p, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: p }}></p>
              ))}
            </div>
          </section>

          <hr className="border-t border-black/10 dark:border-white/10 my-16 md:my-24" />

          {/* BELIEFS */}
          <section className="about-section">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light mb-6">
              {data.beliefs.title}
            </h2>
            <p className="font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mb-10">
              {data.beliefs.intro}
            </p>
            <div className="space-y-8 max-w-3xl">
              {data.beliefs.items.map((item, i) => (
                <div key={i}>
                  <h3 className="font-inter_regular font-bold text-navy dark:text-light mb-2 text-base">
                    {item.heading}
                  </h3>
                  <p className="font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* WHAT WE ARE NOT */}
          <section className="about-section mt-16 md:mt-24">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light mb-6">
              {data.whatWeAreNot.title}
            </h2>
            <p className="font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mb-8">
              {data.whatWeAreNot.intro}
            </p>
            <div className="space-y-6 max-w-3xl">
              {data.whatWeAreNot.items.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <span className="text-slate-400 text-xs mt-1.5">•</span>
                  <p className="font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                    <strong className="font-bold text-navy dark:text-light">{item.bold}</strong> {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <hr className="border-t border-black/10 dark:border-white/10 my-16 md:my-24" />

          {/* CTA SECTION */}
          <section className="about-section">
            <h2 className="font-fraunces_regular text-3xl md:text-4xl text-navy dark:text-light mb-6">
              {data.cta.title}
            </h2>
            <div className="space-y-6 font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed max-w-3xl mb-8">
              {data.cta.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              <p className="italic font-medium">{data.cta.italicText}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-6 mt-8">
              <Link to={data.cta.button.href} className="inline-flex items-center justify-center px-8 py-3 bg-navy text-light hover:bg-navy/90 dark:bg-light dark:text-navy dark:hover:bg-light/90 font-inter_regular font-medium text-sm transition-colors rounded-sm w-fit">
                {data.cta.button.text}
              </Link>
              <Link to={data.cta.link.href} className="text-navy dark:text-light border-b border-navy dark:border-light pb-0.5 hover:opacity-70 transition-opacity font-inter_regular text-sm w-fit">
                {data.cta.link.text}
              </Link>
            </div>
          </section>

          <hr className="border-t border-black/10 dark:border-white/10 my-16 md:my-24" />

          {/* FOOTER LINKS */}
          <section className="about-section flex flex-wrap gap-8 font-inter_regular text-sm md:text-base">
            {data.footerLinks.map((link, i) => (
              <Link key={i} to={link.href} className="text-brown border-b border-brown pb-0.5 hover:opacity-70 transition-opacity">
                {link.text}
              </Link>
            ))}
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

const AboutPage = () => (
  <ThemeProvider>
    <AboutContent />
  </ThemeProvider>
);

export default AboutPage;
