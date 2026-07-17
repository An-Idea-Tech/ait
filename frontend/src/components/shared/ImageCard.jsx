import React from 'react'

export default function ImageCard({ image, title, description, className = "", imgClassName = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-border-primary bg-zinc-900/30 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl group flex flex-col ${className}`.trim()}>
      {image && (
        <div className="overflow-hidden w-full flex-1">
          <img
            src={image}
            alt={title || 'card image'}
            className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 ${imgClassName}`.trim()}
          />
        </div>
      )}
      {(title || description) && (
        <div className="p-5 sm:p-6 flex flex-col gap-2 bg-bg-primary/95 backdrop-blur-md border-t border-border-primary">
          {title && <h3 className="font-manrope-bold text-base sm:text-lg text-text-primary leading-snug">{title}</h3>}
          {description && <p className="font-manrope-light text-xs sm:text-sm text-text-secondary leading-relaxed">{description}</p>}
        </div>
      )}
    </div>
  )
}
