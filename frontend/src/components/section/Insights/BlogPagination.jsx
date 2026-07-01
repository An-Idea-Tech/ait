import React from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

export default function BlogPagination({ currentPage, totalPages, onPrevPage, onNextPage }) {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-between border-t border-border-primary pt-6">
      <button
        onClick={onPrevPage}
        disabled={currentPage === 1}
        className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:hover:text-text-secondary font-manrope-bold transition-colors cursor-pointer"
      >
        <FiArrowLeft className="w-4 h-4" /> Previous
      </button>
      <span className="text-xs uppercase tracking-widest text-text-secondary font-manrope-medium">
        Page {currentPage} of {totalPages}
      </span>
      <button
        onClick={onNextPage}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 text-xs uppercase tracking-widest text-text-secondary hover:text-text-primary disabled:opacity-30 disabled:hover:text-text-secondary font-manrope-bold transition-colors cursor-pointer"
      >
        Next <FiArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
}
