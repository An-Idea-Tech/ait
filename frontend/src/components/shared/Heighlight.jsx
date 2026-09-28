import React from 'react'

export default function Heighlight({
  text = "Used by 250,000 people from 137 countries",
  className = "",
  children,
}) {
  return (
    <div className={`glass-pill ${className}`.trim()}>
      <p className="font-manrope-medium text-xs tracking-wide sm:text-sm md:text-base">
        {children || text}
      </p>
    </div>
  );
}
