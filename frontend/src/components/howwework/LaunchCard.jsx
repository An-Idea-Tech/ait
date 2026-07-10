"use client";

import React from "react";

export default function LaunchCard({ data }) {
  if (!data) return null;

  return (
    <div className="w-full flex flex-col md:flex-row bg-bg-primary text-text-primary border-b border-border-primary transition-colors duration-300">
      {/* Left Column: Title */}
      <div className={`w-full md:w-80 lg:w-[420px] shrink-0 p-8 sm:p-10 md:p-12 md:border-r border-border-primary flex items-start justify-start`} style={{
        backgroundColor: data.color
      }}>
        <h3 className="font-manrope-bold text-text-primary text-2xl sm:text-3xl md:text-4xl tracking-tight leading-snug whitespace-pre-line">
          {data.title}
        </h3>
      </div>

      {/* Right Column: Content */}
      <div className="flex-1 p-8 sm:p-10 md:p-12 flex flex-col justify-center gap-6">
        {data.intro && (
          <p className="description text-text-secondary leading-relaxed whitespace-pre-line">
            {data.intro}
          </p>
        )}

        {data.points && data.points.length > 0 && (
          <ul className="list-disc list-outside ml-5 space-y-2.5 text-text-secondary description">
            {data.points.map((point, index) => (
              <li key={index} className="leading-relaxed pl-1">
                {point}
              </li>
            ))}
          </ul>
        )}

        {data.outro && (
          <p className="description text-text-secondary leading-relaxed whitespace-pre-line">
            {data.outro}
          </p>
        )}
      </div>
    </div>
  );
}
