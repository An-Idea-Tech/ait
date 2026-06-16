import React from 'react';
import { Link } from 'react-router-dom';
import { footerData } from '../../../data/footer';

const Footer = () => {
  return (
    <footer className="bg-navy dark:bg-dark text-slate-300 py-16 md:py-24 border-t border-navy/10 dark:border-white/5 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        {/* Headline */}
        <div className="mb-16 md:mb-24">
          <h2 className="font-fraunces_regular text-3xl md:text-5xl lg:text-6xl text-white max-w-4xl leading-tight">
            Built in <span className="font-fraunces_italic text-cream">Mangaluru.</span> Trusted across <span className="font-fraunces_italic text-cream">Karnataka</span> and beyond.
          </h2>
        </div>

        <div className="w-full h-px bg-white/10 mb-16"></div>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24">
          
          {/* Column 1: AN IDEA TECH */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
              {footerData.companyInfo.title}
            </h3>
            <p className="font-inter_regular text-sm leading-relaxed text-slate-300/90 pr-4">
              {footerData.companyInfo.description}
            </p>
            <div className="font-inter_regular text-sm leading-relaxed text-slate-300/90">
              {footerData.companyInfo.address.map((line, idx) => (
                <div key={idx}>{line}</div>
              ))}
            </div>
            <div className="font-inter_regular text-sm text-slate-300/90">
              GST: {footerData.companyInfo.gst}
            </div>
          </div>

          {/* Column 2: SITE */}
          <div className="lg:col-span-2 lg:col-start-5 flex flex-col gap-6">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
              {footerData.siteLinks.title}
            </h3>
            <ul className="flex flex-col gap-4">
              {footerData.siteLinks.links.map((link, idx) => (
                <li key={idx}>
                  <Link to={link.href} className="font-inter_regular text-sm text-slate-300 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: START SOMETHING & STAY IN TOUCH */}
          <div className="lg:col-span-3 flex flex-col gap-12">
            {footerData.actionLinks.map((section, idx) => (
              <div key={idx} className="flex flex-col gap-6">
                <h3 className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-4">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx}>
                      <Link to={link.href} className="font-inter_regular text-sm text-slate-300 hover:text-white transition-colors duration-200">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 4: REACH */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h3 className="text-xs font-semibold tracking-[0.2em] text-white/70 uppercase">
              {footerData.reach.title}
            </h3>
            
            <div className="flex flex-col gap-4">
              {/* Emails */}
              {footerData.reach.emails.map((email, idx) => (
                <div key={idx} className="flex flex-col">
                  <a href={email.href} className="font-inter_regular text-sm text-white hover:text-brand-300 transition-colors duration-200">
                    {email.label}
                  </a>
                  <span className="font-inter_regular text-xs text-slate-500 mt-0.5">
                    {email.desc}
                  </span>
                </div>
              ))}
              
              <div className="h-2"></div>
              
              {/* Phone */}
              <div>
                <a href={footerData.reach.phone.href} className="font-inter_regular text-sm text-white hover:text-brand-300 transition-colors duration-200">
                  {footerData.reach.phone.display}
                </a>
              </div>
              
              <div className="h-2"></div>
              
              {/* Hours */}
              <div className="font-inter_regular text-sm text-slate-300/90 flex flex-col gap-1">
                {footerData.reach.hours.map((line, idx) => (
                  <div key={idx}>{line}</div>
                ))}
              </div>

              <div className="h-2"></div>

              {/* Extra Links */}
              {footerData.reach.extraLinks.map((link, idx) => (
                <div key={`extra-${idx}`}>
                  <Link to={link.href} className="font-inter_regular text-sm text-white hover:text-brand-300 transition-colors duration-200">
                    {link.label}
                  </Link>
                </div>
              ))}
              
              <div className="h-2"></div>

              {/* Socials */}
              <div className="flex flex-col gap-2">
                {footerData.reach.socials.map((social, idx) => (
                  <a 
                    key={idx} 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-inter_regular text-sm text-slate-300 hover:text-white transition-colors duration-200"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px bg-white/10 mb-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-inter_regular text-xs text-slate-400">
            {footerData.bottomBar.copyright}
          </div>
          <div className="flex gap-6">
            {footerData.bottomBar.links.map((link, idx) => (
              <Link 
                key={idx} 
                to={link.href} 
                className="font-inter_regular text-xs text-slate-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
