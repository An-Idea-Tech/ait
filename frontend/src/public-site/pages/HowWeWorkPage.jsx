import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ThemeProvider } from '../context/ThemeContext';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SEO from '../components/SEO';
import { howWeWorkData as data } from '../../data/howWeWork';

gsap.registerPlugin(ScrollTrigger);

const ArtifactOneWireframe = () => (
  <div className="bg-[#FAF7EF] dark:bg-surface-card border border-black/10 dark:border-white/10 p-6 md:p-8 rounded-sm shadow-sm font-inter_regular">
    <div className="flex justify-between items-start mb-8">
      <div>
        <h4 className="font-fraunces_regular text-xl text-navy dark:text-light font-bold mb-1">Suprabha Wellness — Phase 3</h4>
        <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">STABILIZE & GROW - 26 DAYS REMAINING</p>
      </div>
      <div className="text-right text-xs text-slate-500">
        <p>Launched: 10 Apr 2026</p>
        <p>Next demo: Tue, 12 May</p>
      </div>
    </div>
    
    <div className="flex flex-col md:flex-row gap-8">
      <div className="flex-1">
        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">ACTIVE TASKS</h5>
        <div className="space-y-4">
          {[
            { task: "Booking confirmation email — copy revision", tag: "IN PROGRESS", tagColor: "bg-red-100 text-red-600", initial: "AK", time: "2h ago" },
            { task: "GBP listing — additional service categories", tag: "DONE", tagColor: "bg-green-100 text-green-600", initial: "PR", time: "Yesterday" },
            { task: "WhatsApp routing — owner approval pending", tag: "BLOCKED", tagColor: "bg-red-100 text-red-600", initial: "DA", time: "2d ago" },
            { task: "Blog category page redesign", tag: "IN PROGRESS", tagColor: "bg-red-100 text-red-600", initial: "AK", time: "1h ago" }
          ].map((t, i) => (
            <div key={i} className="flex items-center justify-between py-2 border-b border-black/5 dark:border-white/5 last:border-0 text-sm">
              <span className="text-navy dark:text-light flex-1">{t.task}</span>
              <div className="flex items-center gap-4 flex-shrink-0">
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase ${t.tagColor}`}>{t.tag}</span>
                <span className="text-slate-400 text-xs w-6">{t.initial}</span>
                <span className="text-slate-400 text-xs w-12 text-right">{t.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="md:w-1/3 border border-red-600/30 bg-red-50/30 p-5 rounded-sm">
        <h5 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-4">DECISIONS NEEDED FROM YOU</h5>
        <ul className="space-y-4 text-sm text-navy dark:text-light list-none">
          <li className="flex gap-2"><span className="text-red-500">→</span> Approve WhatsApp auto-reply copy (1 day)</li>
          <li className="flex gap-2"><span className="text-red-500">→</span> Pick May blog topic from list of 3 (this week)</li>
        </ul>
      </div>
    </div>
  </div>
);

const ArtifactTwoWireframe = () => (
  <div className="bg-[#FAF7EF] dark:bg-surface-card border border-black/10 dark:border-white/10 p-6 md:p-8 rounded-sm shadow-sm font-inter_regular">
    <div className="flex justify-between items-center pb-6 border-b border-black/10 dark:border-white/10 mb-6">
      <div>
        <h4 className="font-fraunces_regular text-xl text-navy dark:text-light font-bold mb-1">Suprabha Wellness — April 2026</h4>
        <p className="text-xs text-slate-500">AMC tier: Growth - Sent 1 May 2026</p>
      </div>
      <div className="text-xs text-slate-500">Next report: 1 June 2026</div>
    </div>
    
    <div className="space-y-6">
      <div>
        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">WHAT WE SHIPPED THIS MONTH</h5>
        <ul className="list-disc pl-5 text-sm text-navy dark:text-light space-y-1">
          <li>Migrated booking system to new Zoho Bookings instance — zero downtime.</li>
          <li>Published 3 blog posts on the new content engine.</li>
          <li>Updated GBP service categories — visibility up 18% in local search.</li>
        </ul>
      </div>
      <div>
        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">WHAT WE DIDN'T SHIP AND WHY</h5>
        <ul className="list-disc pl-5 text-sm text-navy dark:text-light space-y-1">
          <li>WhatsApp auto-reply flow — paused. Awaiting owner approval on draft copy (sent 28 Apr).</li>
        </ul>
      </div>
      <div>
        <h5 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">WHAT'S COMING NEXT MONTH</h5>
        <ul className="list-disc pl-5 text-sm text-navy dark:text-light space-y-1">
          <li>Therapist profile page redesign.</li>
          <li>SEO audit and on-page improvements for top 5 service pages.</li>
          <li>Newsletter signup integration.</li>
        </ul>
      </div>
      <div>
        <h5 className="text-xs font-bold text-red-600 uppercase tracking-widest mb-3">WHAT WE'RE WATCHING</h5>
        <ul className="list-disc pl-5 text-sm text-navy dark:text-light space-y-1">
          <li>Mobile bounce rate creeping up after WhatsApp button repositioning. Investigating.</li>
        </ul>
      </div>
    </div>
  </div>
);

const ArtifactThreeWireframe = () => (
  <div className="bg-[#FAF7EF] dark:bg-surface-card border border-black/10 dark:border-white/10 p-6 md:p-8 rounded-sm shadow-sm font-inter_regular">
    <div className="pb-6 border-b border-black/10 dark:border-white/10 mb-6">
      <h4 className="font-fraunces_regular text-xl text-navy dark:text-light font-bold mb-1">Fortnightly demo — Tuesday, 12 May 2026</h4>
      <p className="text-xs text-slate-500">20 minutes - Recorded - Calendar invite sent yesterday</p>
    </div>
    
    <div className="space-y-4">
      {[
        { n: 1, title: "What's working since last demo — live walkthrough", t: "5 min" },
        { n: 2, title: "What's not yet working — honest about gaps", t: "3 min" },
        { n: 3, title: "Decisions you need to make — with options", t: "5 min" },
        { n: 4, title: "Open floor — your questions", t: "5 min" },
        { n: 5, title: "What we're shipping in the next two weeks — set expectations", t: "2 min" }
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-4 py-2 border-b border-black/5 dark:border-white/5 last:border-0 text-sm">
          <span className="text-slate-400 w-4">{item.n}</span>
          <span className="text-navy dark:text-light flex-1">{item.title}</span>
          <span className="text-slate-500 text-xs">{item.t}</span>
        </div>
      ))}
    </div>
    <div className="mt-6 pt-4 border-t border-black/10 dark:border-white/10 flex justify-between text-xs text-slate-500">
      <span>Total: 20 minutes</span>
      <span>Recording shared after.</span>
    </div>
  </div>
);


const HowWeWorkContent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.fromTo('.hww-hero', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
      );
      
      gsap.utils.toArray('.hww-section').forEach(sec => {
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

      <main id="main-content" role="main">
        {/* HERO SECTION */}
        <section className="hww-hero pt-32 pb-16 md:pt-40 md:pb-24 border-b border-black/10 dark:border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-brown"></div>
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">{data.hero.topTag}</span>
            </div>
            <h1 className="font-fraunces_regular text-5xl md:text-7xl lg:text-8xl text-navy dark:text-light tracking-tight leading-[1.1] mb-8 max-w-4xl">
              {data.hero.title}
            </h1>
            <p className="font-inter_regular text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl">
              {data.hero.subtitle}
            </p>
          </div>
          
          <div className="container mx-auto px-4 md:px-8 max-w-5xl mt-16 md:mt-24">
            <div className="border-t border-b border-black/10 dark:border-white/10 py-4 overflow-x-auto no-scrollbar">
              <nav className="flex gap-6 md:gap-8 min-w-max">
                {data.nav.map((item, i) => (
                  <a key={i} href={item.href} className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-navy dark:hover:text-light transition-colors whitespace-nowrap">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </section>

        {/* PHASES SECTION */}
        <section className="py-24 md:py-32 hww-section">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="mb-20 md:mb-32">
              <h2 className="font-fraunces_regular text-4xl md:text-5xl text-navy dark:text-light tracking-tight mb-4">{data.phasesTitle}</h2>
              <p className="font-inter_regular text-slate-600 dark:text-slate-400 max-w-2xl">{data.phasesSubtitle}</p>
            </div>

            <div className="space-y-32">
              {data.phases.map((phase) => (
                <div key={phase.id} id={phase.id} className="relative">
                  <div className="border-t border-black/10 dark:border-white/10 pt-12 md:pt-16 flex flex-col md:flex-row gap-8 md:gap-16">
                    <div className="md:w-1/3 shrink-0">
                      <div className="text-xs font-bold text-brown tracking-widest uppercase mb-4">{phase.phaseNumber}</div>
                      <h3 className="font-fraunces_regular text-3xl text-navy dark:text-light mb-4">{phase.title}</h3>
                      <div className="inline-block bg-navy dark:bg-white text-white dark:text-navy text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">{phase.tag}</div>
                    </div>
                    
                    <div className="md:w-2/3">
                      <h4 className="font-fraunces_regular text-2xl text-navy dark:text-light leading-snug mb-10">{phase.mainHeading}</h4>
                      
                      <div className="space-y-8 mb-12">
                        {phase.sections.map((sec, j) => (
                          <div key={j}>
                            <h5 className="text-xs font-bold text-brown tracking-widest uppercase mb-3">{sec.label}</h5>
                            <p className="font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed">{sec.content}</p>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-8 pt-8 border-t border-black/10 dark:border-white/10">
                        <div>
                          <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-1">TYPICAL DURATION</div>
                          <div className="font-inter_regular text-sm font-semibold text-navy dark:text-light">{phase.duration}</div>
                        </div>
                        <div>
                          <div className="text-[10px] font-bold text-slate-500 tracking-widest uppercase mb-1">DELIVERABLE</div>
                          <div className="font-inter_regular text-sm font-semibold text-navy dark:text-light">{phase.deliverable}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 pt-8 border-t border-black/10 dark:border-white/10">
              <p className="font-inter_regular italic text-slate-500 text-sm max-w-xl">{data.phasesFooter}</p>
            </div>
          </div>
        </section>

        {/* OPERATING LAYER */}
        <section id="operating-layer" className="py-24 md:py-32 bg-[#FAF7EF] dark:bg-surface-card hww-section border-t border-b border-black/10 dark:border-white/10">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="mb-20">
              <h2 className="font-fraunces_regular text-4xl md:text-5xl text-navy dark:text-light tracking-tight mb-4">{data.operatingLayer.title}</h2>
              <p className="font-inter_regular text-slate-600 dark:text-slate-400 max-w-2xl">{data.operatingLayer.subtitle}</p>
            </div>

            <div className="space-y-16">
              {data.operatingLayer.items.map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-black/10 dark:border-white/10 pt-12">
                  <div className="md:w-1/3">
                    <h3 className="font-fraunces_regular text-2xl text-navy dark:text-light">{item.title}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <p className="font-inter_regular text-sm md:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-6">{item.content}</p>
                    {item.callout && (
                      <div className="bg-cream dark:bg-surface border-l-2 border-brown p-5 text-sm text-slate-600 dark:text-slate-400">
                        {item.callout}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 pt-8 border-t border-black/10 dark:border-white/10">
              <p className="font-inter_regular italic text-slate-500 text-sm max-w-xl">{data.operatingLayer.footer}</p>
            </div>
          </div>
        </section>

        {/* ARTIFACTS SECTION */}
        <section id="artifacts" className="py-24 md:py-32 hww-section">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="mb-20">
              <h2 className="font-fraunces_regular text-4xl md:text-5xl text-navy dark:text-light tracking-tight mb-4">{data.artifacts.title}</h2>
              <p className="font-inter_regular text-slate-600 dark:text-slate-400 max-w-2xl">{data.artifacts.subtitle}</p>
            </div>

            <div className="space-y-24">
              {/* Artifact 1 */}
              <div>
                <div className="mb-8">
                  <div className="text-[10px] font-bold text-brown tracking-widest uppercase mb-2">{data.artifacts.items[0].number}</div>
                  <h3 className="font-fraunces_regular text-3xl text-navy dark:text-light mb-4">{data.artifacts.items[0].title}</h3>
                </div>
                <div className="mb-8">
                  <ArtifactOneWireframe />
                </div>
                <p className="font-inter_regular text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-3xl">{data.artifacts.items[0].content}</p>
              </div>

              {/* Artifact 2 */}
              <div>
                <div className="mb-8">
                  <div className="text-[10px] font-bold text-brown tracking-widest uppercase mb-2">{data.artifacts.items[1].number}</div>
                  <h3 className="font-fraunces_regular text-3xl text-navy dark:text-light mb-4">{data.artifacts.items[1].title}</h3>
                </div>
                <div className="mb-8 max-w-4xl">
                  <ArtifactTwoWireframe />
                </div>
                <p className="font-inter_regular text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-3xl">{data.artifacts.items[1].content}</p>
              </div>

              {/* Artifact 3 */}
              <div>
                <div className="mb-8">
                  <div className="text-[10px] font-bold text-brown tracking-widest uppercase mb-2">{data.artifacts.items[2].number}</div>
                  <h3 className="font-fraunces_regular text-3xl text-navy dark:text-light mb-4">{data.artifacts.items[2].title}</h3>
                </div>
                <div className="mb-8 max-w-3xl">
                  <ArtifactThreeWireframe />
                </div>
                <p className="font-inter_regular text-sm md:text-base text-slate-600 dark:text-slate-400 max-w-3xl">{data.artifacts.items[2].content}</p>
              </div>
            </div>

            <div className="mt-24 pt-8 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row gap-8 justify-between">
              {data.artifacts.links.map((link, i) => (
                <div key={i} className="max-w-xs">
                  <p className="font-inter_regular text-sm text-slate-600 dark:text-slate-400 mb-2">{link.text}</p>
                  <Link to={link.href} className="text-sm font-medium border-b border-brown text-brown pb-0.5 inline-block hover:opacity-70 transition-opacity">
                    {link.linkText}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AFTER LAUNCH SECTION */}
        <section id="after-launch" className="py-24 md:py-32 bg-navy text-light hww-section">
          <div className="container mx-auto px-4 md:px-8 max-w-5xl">
            <div className="mb-20">
              <h2 className="font-fraunces_regular text-4xl md:text-5xl tracking-tight mb-4">{data.afterLaunch.title}</h2>
              <p className="font-inter_regular text-slate-300 max-w-xl">{data.afterLaunch.subtitle}</p>
            </div>

            <div className="space-y-16">
              {data.afterLaunch.items.map((item, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-8 md:gap-16 border-t border-white/20 pt-12">
                  <div className="md:w-1/3">
                    <h3 className="font-fraunces_regular text-2xl">{item.title}</h3>
                  </div>
                  <div className="md:w-2/3">
                    <div className="font-inter_regular text-sm md:text-base text-slate-300 leading-relaxed whitespace-pre-wrap">
                      {item.content}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-24 pt-8 border-t border-white/20 flex flex-col sm:flex-row gap-8 justify-between">
              {data.afterLaunch.links.map((link, i) => (
                <div key={i} className="max-w-xs">
                  <p className="font-inter_regular text-sm text-slate-400 mb-2">{link.text}</p>
                  <a href={link.href} className="text-sm font-medium border-b border-brown text-brown pb-0.5 inline-block hover:opacity-70 transition-opacity">
                    {link.linkText}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 md:py-32 bg-[#FAF7EF] hww-section">
          <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center">
            <h2 className="font-fraunces_italic text-4xl md:text-5xl text-navy tracking-tight mb-8">
              {data.cta.title}
            </h2>
            <p className="font-inter_regular text-slate-700 leading-relaxed mb-10 text-center">
              {data.cta.content}
            </p>
            <div className="flex flex-col items-center gap-4">
              <Link to={data.cta.buttonHref} className="btn-primary rounded-full px-8 py-3 text-base">
                {data.cta.buttonText}
              </Link>
              <div className="text-sm font-inter_regular text-slate-600 mt-2">
                {data.cta.orEmail}
              </div>
              <div className="text-sm font-inter_regular italic text-slate-500 mt-4">
                {data.cta.footerItalic}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

const HowWeWorkPage = () => (
  <ThemeProvider>
    <HowWeWorkContent />
  </ThemeProvider>
);

export default HowWeWorkPage;
