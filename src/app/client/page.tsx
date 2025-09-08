"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  feedback: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alice Johnson",
    role: "CEO, GreenHarvest",
    avatar: "/clients/images.jpeg",
    feedback:
      "Working with this team has transformed our business. Their insights and dedication are unmatched.",
  },
  {
    name: "Michael Lee",
    role: "CTO, EcoFarms",
    avatar: "/clients/images.jpeg",
    feedback:
      "Professional, efficient, and innovative. I highly recommend them for any forward-thinking company.",
  },
  {
    name: "Sofia Martinez",
    role: "Marketing Head, Organic Co.",
    avatar: "/clients/images.jpeg",
    feedback:
      "Their attention to detail and proactive approach made our partnership seamless and productive.",
  },
  {
    name: "David Kim",
    role: "Founder, PureHarvest",
    avatar: "/clients/images.jpeg",
    feedback:
      "Exceptional service and creative solutions. They consistently exceed expectations.",
  },
];

export default function FeedbackSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 5 seconds
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const navigateTo = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="py-28 px-6 bg-gradient-to-br from-slate-50 to-emerald-50/30 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-16">
          Trusted feedback from our valued partners who drive innovation and excellence.
        </p>

        <div className="relative flex items-center justify-center">
          {/* Testimonials Carousel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-8 md:p-12 max-w-3xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12"
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <Image
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-emerald-500"
                />
              </div>

              {/* Feedback Text */}
              <div className="text-center md:text-left">
                <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-4">
                  &ldquo;{testimonials[activeIndex].feedback}&rdquo;
                </p>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {testimonials[activeIndex].name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400">
                  {testimonials[activeIndex].role}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-5 mb-4 space-x-2 absolute bottom-0 left-1/2 -translate-x-1/2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => navigateTo(i)}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === activeIndex
                    ? "bg-emerald-500 w-6"
                    : "bg-slate-300 dark:bg-slate-700 hover:bg-emerald-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
