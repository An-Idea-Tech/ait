import React from "react";
import { FiArrowLeft, FiCalendar, FiClock } from "react-icons/fi";

export default function BlogDetail({ post, onBack }) {
  return (
    <div className="space-y-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-secondary hover:text-text-primary font-manrope-bold transition-colors cursor-pointer"
      >
        <FiArrowLeft className="w-4 h-4" /> Back to essays
      </button>

      <div className="border border-border-primary p-6 md:p-10 rounded-3xl space-y-8 bg-bg-primary">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-b border-border-primary/60 pb-6">
          <div className="flex items-center gap-3.5">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-11 h-11 rounded-full object-cover border border-border-primary"
            />
            <div>
              <p className="text-sm font-manrope-bold text-text-primary">{post.author.name}</p>
              <p className="text-xs text-text-secondary uppercase tracking-wider mt-0.5">Author</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-text-secondary uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <FiCalendar className="w-3.5 h-3.5 text-brand" /> {post.date}
            </span>
            <span className="flex items-center gap-2">
              <FiClock className="w-3.5 h-3.5 text-brand" /> {post.readTime}
            </span>
          </div>
        </div>

        <div className="w-full aspect-video overflow-hidden rounded-2xl border border-border-primary">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="space-y-6 max-w-4xl">
          <span className="inline-block px-3 py-1 rounded-full bg-brand/10 text-brand text-xs uppercase tracking-wider font-manrope-bold border border-brand/20">
            {post.category}
          </span>
          <h1 className="text-2xl sm:text-4xl font-manrope-bold text-text-primary leading-tight">
            {post.title}
          </h1>
          <div className="text-text-secondary text-base sm:text-lg leading-relaxed font-manrope-light space-y-6 whitespace-pre-line pt-2">
            {post.content}
          </div>
        </div>
      </div>
    </div>
  );
}
