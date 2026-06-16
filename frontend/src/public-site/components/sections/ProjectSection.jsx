import React from 'react';
import { Link } from 'react-router-dom';

const ProjectSection = ({ projects, isLoading }) => {
  if (isLoading) {
    return (
      <section className="py-24 md:py-32 bg-cream dark:bg-dark transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-8 max-w-7xl">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-slate-200 dark:bg-surface-card rounded w-1/3"></div>
            <div className="h-6 bg-slate-200 dark:bg-surface-card rounded w-1/2"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map(i => (
                <div key={i} className="h-96 bg-slate-200 dark:bg-surface-card rounded-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (!projects || projects.length === 0) {
    return null; // Don't render if no featured projects
  }

  return (
    <section className="py-24 md:py-32 bg-cream dark:bg-dark transition-colors duration-300" id="projects-section">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="mb-16 md:mb-24">
          <h2 className="font-fraunces_regular text-5xl md:text-6xl text-navy dark:text-light tracking-tight mb-6">
            Selected work.
          </h2>
          <p className="font-inter_regular text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl">
            Featured clients. The decision, the build, and the outcome.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div 
              key={project._id} 
              className="bg-[#F4F1EA] dark:bg-surface-card p-8 md:p-10 flex flex-col h-full transition-colors duration-300 rounded-sm border border-black/5 dark:border-white/10 shadow-sm hover:shadow-md"
            >
              {/* Project Title (Top Tag) */}
              <div className="text-xs font-bold text-brown tracking-widest uppercase mb-8">
                {project.title}
              </div>

              {/* Main Description (The Decision / Short Description) */}
              <div className="mb-8 flex-grow">
                <h3 className="text-xs font-bold text-navy dark:text-slate-400 mb-3 uppercase tracking-wider">
                  The Build
                </h3>
                <p className="font-fraunces_regular text-2xl md:text-3xl text-navy dark:text-light leading-snug">
                  {project.shortDescription}
                </p>
              </div>

              {/* Outcome / Results */}
              {project.results && (
                <div className="mb-10">
                  <h4 className="text-xs font-bold text-navy dark:text-slate-400 mb-3 uppercase tracking-wider">
                    Outcome
                  </h4>
                  <p className="font-inter_regular text-sm md:text-base text-brown font-semibold leading-relaxed">
                    {project.results}
                  </p>
                </div>
              )}

              {/* Read Full Case Link */}
              <div className="mt-auto pt-4 border-t border-black/10 dark:border-white/10">
                <Link 
                  to={`/work/${project.slug}`} 
                  className="inline-flex items-center text-sm font-medium text-navy dark:text-light hover:text-brown dark:hover:text-brown transition-colors group"
                >
                  Read full case
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
