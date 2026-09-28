import React from "react";
import { motion } from "framer-motion";

export default function BlogCard({ post, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      onClick={onClick}
      className="blog-card-hover border border-border-primary rounded-3xl overflow-hidden bg-bg-primary flex flex-col h-full cursor-pointer hover:border-brand/50"
    >
      <div className="w-full aspect-[16/10] overflow-hidden border-b border-border-primary relative bg-bg-primary">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/80 text-white text-[10px] uppercase tracking-widest font-manrope-bold border border-white/20 shadow-md">
          {post.category}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center gap-4 text-[10px] text-text-secondary uppercase tracking-widest font-manrope-medium">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-lg font-manrope-bold text-text-primary leading-snug hover:text-brand transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="description line-clamp-2">
            {post.excerpt}
          </p>
        </div>

        <div className="flex items-center gap-3 pt-2 border-t border-border-primary/45">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-8 h-8 rounded-full object-cover border border-border-primary"
          />
          <span className="text-xs font-manrope-medium text-text-secondary">
            by {post.author.name}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
