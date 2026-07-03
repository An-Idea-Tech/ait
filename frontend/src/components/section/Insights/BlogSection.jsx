"use client";

import React, { useState, useMemo } from "react";
import { FiArrowLeft, FiArrowRight, FiSearch } from "react-icons/fi";
import { AnimatePresence } from "framer-motion";
import { posts, calendarStructure, categories } from "@/data/blog";
import { blogHeaderContent } from "@/data/insightdata";
import BlogSidebar from "./BlogSidebar";
import BlogCard from "./BlogCard";
import BlogDetail from "./BlogDetail";
import BlogPagination from "./BlogPagination";

export default function BlogSection() {
  const { title, description } = blogHeaderContent;
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedYear, setSelectedYear] = useState("2026");
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [expandedYear, setExpandedYear] = useState("2026");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPost, setSelectedPost] = useState(null);

  const toggleYear = (year) => {
    setExpandedYear(expandedYear === year ? null : year);
  };

  const handleYearSelect = (year) => {
    setSelectedYear(year);
    setSelectedMonth(null);
    setCurrentPage(1);
    setSelectedPost(null);
  };

  const handleMonthSelect = (year, month) => {
    setSelectedYear(year);
    setSelectedMonth(month);
    setCurrentPage(1);
    setSelectedPost(null);
  };

  const handleResetFilters = () => {
    setSelectedYear(null);
    setSelectedMonth(null);
    setSelectedCategory("All");
    setSearchQuery("");
    setCurrentPage(1);
    setSelectedPost(null);
  };

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "All" || post.category === selectedCategory;
      const matchesYear = !selectedYear || post.year === selectedYear;
      const matchesMonth = !selectedMonth || post.month === selectedMonth;
      return matchesSearch && matchesCategory && matchesYear && matchesMonth;
    });
  }, [searchQuery, selectedCategory, selectedYear, selectedMonth]);

  const postsPerPage = 4;
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage) || 1;
  const paginatedPosts = useMemo(() => {
    const start = (currentPage - 1) * postsPerPage;
    return filteredPosts.slice(start, start + postsPerPage);
  }, [filteredPosts, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <section className="bg-bg-primary flex flex-col">
      <div className="w-full max-w-[1400px] mx-auto space-y-12">

        <div className="flex flex-col items-center text-center gap-4 w-full">
          <div className="space-y-4 max-w-2xl">
            <h2 className="title">{title}</h2>
            <p className="description max-w-xl mx-auto">
              {description}
            </p>
          </div>
          {(selectedYear || selectedMonth || selectedCategory !== "All" || searchQuery) && (
            <button
              onClick={handleResetFilters}
              className="text-xs uppercase tracking-widest text-brand font-manrope-bold hover:underline cursor-pointer pt-2"
            >
              Clear all filters
            </button>
          )}
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-border-primary pb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                  setSelectedPost(null);
                }}
                className={`px-5 py-2 rounded-full text-xs uppercase tracking-wider font-manrope-bold border transition-all cursor-pointer ${selectedCategory === cat
                  ? "bg-brand border-brand text-black"
                  : "bg-transparent border-border-primary text-text-secondary hover:text-text-primary hover:border-text-primary"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-text-secondary w-4 h-4" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
                setSelectedPost(null);
              }}
              placeholder="Search essays..."
              className="w-full bg-transparent border border-border-primary rounded-full pl-11 pr-4 py-2.5 text-sm outline-none text-text-primary focus:border-brand transition-colors font-manrope-light placeholder-text-secondary/50"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          <BlogSidebar
            calendarStructure={calendarStructure}
            selectedYear={selectedYear}
            selectedMonth={selectedMonth}
            expandedYear={expandedYear}
            toggleYear={toggleYear}
            handleYearSelect={handleYearSelect}
            handleMonthSelect={handleMonthSelect}
          />

          <div className="lg:col-span-9">
            {selectedPost ? (
              <BlogDetail post={selectedPost} onBack={() => setSelectedPost(null)} />
            ) : (
              <div className="space-y-10">
                {paginatedPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                      {paginatedPosts.map((post) => (
                        <BlogCard key={post.id} post={post} onClick={() => setSelectedPost(post)} />
                      ))}
                    </AnimatePresence>
                  </div>
                ) : (
                  <div className="text-center py-20 border border-border-primary border-dashed rounded-3xl space-y-4">
                    <p className="text-text-secondary text-lg font-manrope-light">
                      No essays found matching your current filter settings.
                    </p>
                    <button
                      onClick={handleResetFilters}
                      className="text-xs uppercase tracking-widest text-brand font-manrope-bold hover:underline cursor-pointer"
                    >
                      Reset all filters
                    </button>
                  </div>
                )}

                <BlogPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPrevPage={handlePrevPage}
                  onNextPage={handleNextPage}
                />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
