import React, { useState } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

export default function BlogSidebar({
  calendarStructure,
  selectedYear,
  selectedMonth,
  expandedYear,
  toggleYear,
  handleYearSelect,
  handleMonthSelect,
}) {
  const [isOpenOnMobile, setIsOpenOnMobile] = useState(false);

  return (
    <div className="lg:col-span-3 lg:sticky lg:top-[120px] lg:z-10 self-start space-y-4 lg:space-y-6">
      
      <h3 className="hidden lg:block text-xs uppercase tracking-widest text-text-secondary font-manrope-bold">
        Archive Calendar
      </h3>

      <button
        onClick={() => setIsOpenOnMobile(!isOpenOnMobile)}
        className="lg:hidden w-full flex items-center justify-between border border-border-primary rounded-2xl px-5 py-3.5 text-sm font-manrope-bold text-text-primary bg-bg-primary cursor-pointer hover:border-brand transition-colors"
      >
        <span>
          Archive Calendar
          {selectedYear && (
            <span className="text-brand font-manrope-medium ml-2">
              ({selectedYear}{selectedMonth ? ` / ${selectedMonth}` : ""})
            </span>
          )}
        </span>
        {isOpenOnMobile ? <FiChevronUp className="w-4 h-4 text-text-secondary" /> : <FiChevronDown className="w-4 h-4 text-text-secondary" />}
      </button>

      <div className={`${isOpenOnMobile ? "block" : "hidden"} lg:block border border-border-primary rounded-2xl overflow-hidden divide-y divide-border-primary bg-bg-primary`}>
        {calendarStructure.map((item) => {
          const isExpanded = expandedYear === item.year;
          const isYearActive = selectedYear === item.year && !selectedMonth;
          return (
            <div key={item.year} className="bg-bg-primary">
              <div className="flex items-center justify-between">
                <button
                  onClick={() => {
                    handleYearSelect(item.year);
                    setIsOpenOnMobile(false);
                  }}
                  className={`flex-1 text-left px-5 py-4 text-sm font-manrope-bold transition-colors ${
                    isYearActive
                      ? "text-brand"
                      : "text-text-primary hover:text-brand"
                  }`}
                >
                  {item.year}
                </button>
                <button
                  onClick={() => toggleYear(item.year)}
                  className="px-5 py-4 text-text-secondary hover:text-text-primary"
                >
                  {isExpanded ? <FiChevronUp className="w-4 h-4" /> : <FiChevronDown className="w-4 h-4" />}
                </button>
              </div>

              {isExpanded && (
                <div className="bg-slate-50 dark:bg-zinc-950/45 px-5 pb-4 space-y-2 border-t border-border-primary/50 pt-3">
                  {item.months.map((m) => {
                    const isMonthActive = selectedYear === item.year && selectedMonth === m;
                    return (
                      <button
                        key={m}
                        onClick={() => {
                          handleMonthSelect(item.year, m);
                          setIsOpenOnMobile(false);
                        }}
                        className={`block w-full text-left text-xs uppercase tracking-wider py-1.5 font-manrope-medium transition-colors ${
                          isMonthActive
                            ? "text-brand font-bold"
                            : "text-text-secondary hover:text-text-primary"
                        }`}
                      >
                        {m}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
