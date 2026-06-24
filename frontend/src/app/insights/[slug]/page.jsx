"use client";

import React, { use } from "react";
import Link from "next/link";
import Button from "@/components/ui/Button";

/**
 * Dynamic Insight Article page component (React 19 / Next.js 16 App Router compliant).
 */
export default function InsightArticlePage({ params }) {
  // Unwrap dynamic params promise using React 19's use hook
  const { slug } = use(params);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 flex flex-col transition-colors duration-300">
      {/* Navigation */}
      <header className="border-b border-slate-200/80 dark:border-slate-800/80 bg-white/70 dark:bg-slate-955/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
              A
            </div>
            <span className="font-semibold text-lg tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
              An Idea Tech
            </span>
          </Link>

          <Button text="All Insights" link="/insights" />
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16 w-full flex flex-col justify-center space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-purple-400">
            Article View
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight capitalize">
            {slug ? slug.replace(/-/g, " ") : "Untitled Article"}
          </h1>
        </div>
        
        <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
          This is a blank placeholder for the article with dynamic slug: <code className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-900 font-mono text-sm">{slug}</code>.
        </p>

        <div className="pt-8 border-t border-slate-250 dark:border-slate-800">
          <Button text="Back to Insights" link="/insights" />
        </div>
      </main>
    </div>
  );
}
