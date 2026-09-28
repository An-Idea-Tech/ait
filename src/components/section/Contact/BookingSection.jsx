"use client";

import React, { useState, useMemo } from "react";
import { FiChevronLeft, FiChevronRight, FiCheckCircle, FiX } from "react-icons/fi";
import { bookingSection } from "@/data/contactdata";

export default function BookingSection() {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(5);
  const [selectedDay, setSelectedDay] = useState(30);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(bookingSection.timeSlots[0]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: ""
  });

  const monthsList = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const weekdaysShort = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const daysInMonth = useMemo(() => {
    return new Date(currentYear, currentMonth + 1, 0).getDate();
  }, [currentYear, currentMonth]);

  const firstDayIndex = useMemo(() => {
    return new Date(currentYear, currentMonth, 1).getDay();
  }, [currentYear, currentMonth]);

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const selectedDateFormatted = useMemo(() => {
    const dateObj = new Date(currentYear, currentMonth, selectedDay);
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][dateObj.getDay()];
    const monthShort = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"][currentMonth];
    return `${dayName}, ${selectedDay} ${monthShort} ${currentYear}`;
  }, [currentYear, currentMonth, selectedDay]);

  const handleDaySelect = (day) => {
    setSelectedDay(day);
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setIsSuccess(false);
    setFormData({ name: "", email: "", details: "" });
  };

  return (
    <>
      <section className="section bg-bg-primary">
        <div className="w-full max-w-[1000px] mx-auto flex flex-col items-center text-center space-y-4">
          <h2 className="title">{bookingSection.title}</h2>
          <p className="description max-w-xl mx-auto">{bookingSection.description}</p>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 border border-border-primary/20 bg-zinc-50 dark:bg-zinc-900/40 p-6 md:p-8 mt-12 text-left rounded-2xl shadow-xl">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center justify-between border-b border-border-primary pb-4">
                <span className="font-manrope-bold text-base text-text-primary">
                  {monthsList[currentMonth]} {currentYear}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handlePrevMonth}
                    className="p-2 border border-border-primary hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-text-primary cursor-pointer rounded-lg"
                  >
                    <FiChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextMonth}
                    className="p-2 border border-border-primary hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors text-text-primary cursor-pointer rounded-lg"
                  >
                    <FiChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 text-center gap-y-2">
                {weekdaysShort.map((day) => (
                  <span key={day} className="text-xs font-manrope-medium text-text-secondary">
                    {day}
                  </span>
                ))}

                {Array.from({ length: firstDayIndex }).map((_, idx) => (
                  <span key={`empty-${idx}`} />
                ))}

                {Array.from({ length: daysInMonth }).map((_, idx) => {
                  const day = idx + 1;
                  const isSelected = day === selectedDay;
                  return (
                    <button
                      key={`day-${day}`}
                      onClick={() => handleDaySelect(day)}
                      className={`py-2 text-sm font-manrope-medium transition-all cursor-pointer rounded-lg ${
                        isSelected
                          ? "bg-brand text-black font-manrope-bold shadow-md"
                          : "text-text-primary hover:bg-zinc-100 dark:hover:bg-zinc-900"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col justify-between border-t md:border-t-0 md:border-l border-border-primary pt-6 md:pt-0 md:pl-8">
              <div className="space-y-4">
                <span className="text-xs uppercase tracking-widest text-text-secondary">
                  Select Time
                </span>
                <h3 className="font-manrope-bold text-lg text-text-primary">
                  {selectedDateFormatted}
                </h3>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  {bookingSection.timeSlots.map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedTimeSlot(slot)}
                      className={`py-3 px-4 border text-center text-xs tracking-wider transition-all cursor-pointer rounded-lg ${
                        selectedTimeSlot === slot
                          ? "bg-brand border-brand text-black font-manrope-bold shadow-sm"
                          : "border-border-primary text-text-secondary hover:text-text-primary hover:border-text-primary"
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-6 space-y-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-black font-manrope-bold text-xs uppercase tracking-widest py-4 transition-colors cursor-pointer rounded-lg shadow-md"
                >
                  {bookingSection.buttonText}
                </button>
                <p className="text-[10px] text-text-secondary text-center leading-relaxed">
                  {bookingSection.disclaimer}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-6 z-50 backdrop-blur-md">
          <div className="bg-bg-primary border border-border-primary/20 w-full max-w-lg p-8 relative flex flex-col rounded-2xl shadow-2xl">
            <button
              onClick={handleCloseModal}
              className="absolute right-6 top-6 text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
            >
              <FiX className="w-5 h-5" />
            </button>

            {!isSuccess ? (
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div>
                  <h3 className="text-xl font-manrope-bold text-text-primary">
                    Confirm your details
                  </h3>
                  <p className="text-xs text-text-secondary mt-1">
                    Booked for {selectedDateFormatted} at {selectedTimeSlot}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-col space-y-2">
                    <label className="text-xs uppercase tracking-wider text-text-secondary">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Jane Doe"
                      className="w-full bg-transparent border border-border-primary p-3.5 text-sm outline-none text-text-primary focus:border-brand transition-colors rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-xs uppercase tracking-wider text-text-secondary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="jane@company.com"
                      className="w-full bg-transparent border border-border-primary p-3.5 text-sm outline-none text-text-primary focus:border-brand transition-colors rounded-lg"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-xs uppercase tracking-wider text-text-secondary">
                      What are you trying to build?
                    </label>
                    <textarea
                      required
                      rows="3"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="Give us a brief description of the product idea..."
                      className="w-full bg-transparent border border-border-primary p-3.5 text-sm outline-none text-text-primary focus:border-brand transition-colors resize-none rounded-lg"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#10B981] hover:bg-[#059669] text-black font-manrope-bold text-xs uppercase tracking-widest py-4 transition-colors cursor-pointer rounded-lg shadow-md"
                >
                  Confirm Booking
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center text-center space-y-6 py-6">
                <FiCheckCircle className="w-16 h-16 text-[#10B981]" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-manrope-bold text-text-primary">
                    Call Scheduled!
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Your 30-minute discovery call has been successfully scheduled for <span className="font-manrope-bold text-text-primary">{selectedDateFormatted}</span> at <span className="font-manrope-bold text-text-primary">{selectedTimeSlot}</span>.
                  </p>
                  <p className="text-xs text-text-secondary leading-relaxed pt-2">
                    We've sent a Google Meet invitation link to <span className="text-brand">{formData.email}</span>.
                  </p>
                </div>
                <button
                  onClick={handleCloseModal}
                  className="w-full bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-text-primary font-manrope-bold text-xs uppercase tracking-widest py-3 transition-colors cursor-pointer rounded-lg shadow-sm border border-border-primary/20"
                >
                  Dismiss
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
