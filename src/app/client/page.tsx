"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";
import {
  FiStar,
  FiChevronLeft,
  FiChevronRight,
  FiPlay,
  FiPause,
} from "react-icons/fi";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  avatar: string;
  feedback: string;
  rating: number;
  videoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Mani Bharadwaj",
    role: "Tech",
    company: "Global Software",
    avatar: "/team/manii.jpg",
    feedback:
      "Working with this team has transformed our business. Their insights and dedication are unmatched. The strategic guidance we received helped us increase our market share by 35% in just one quarter.",
    rating: 5,
  },
  {
    id: 2,
    name: "ITC Infotech",
    role: "Associate IT Consultant",
    company: "ITC Limited",
    avatar: "/clients/clint.jpg",
    feedback:
      "I have taken personal loans multiple times from various banks. Within less time my loan amount has been sanctioned with good rate of interest and minimal processing fees. The seamless experience and professional service exceeded my expectations.",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Abishek",
    role: "CTO",
    company: "EcoFarms",
    avatar: "/team/abi.jpg",
    feedback:
      "Professional, efficient, and innovative. I highly recommend them for any forward-thinking company. Their technical solutions reduced our operational costs by 28% while improving system reliability.",
    rating: 5,
    // videoUrl: "https://example.com/video1",
  },
  {
    id: 4,
    name: "Kiran",
    role: "Finance Head",
    company: "Organic Co.",
    avatar: "/team/kiran.jpg",
    feedback:
      "Their attention to detail and proactive approach made our partnership seamless and productive. Our campaign ROI increased by 42% after implementing their strategic recommendations.",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Sarah Johnson",
    role: "Operations Director",
    company: "TechGrowth",
    avatar: "/clients/images.jpeg",
    feedback:
      "The team's ability to understand our complex requirements and deliver tailored solutions was impressive. They helped us streamline our workflow, saving over 20 hours per week in administrative tasks.",
    rating: 5,
    // videoUrl: "https://example.com/video2",
  },
];

export default function FeedbackSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-slide every 7 seconds
  useEffect(() => {
    if (autoPlay) {
      intervalRef.current = setInterval(() => {
        goToNext();
      }, 7000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [autoPlay]);

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const navigateTo = (index: number) => {
    setActiveIndex(index);
  };

  const toggleAutoPlay = () => {
    setAutoPlay(!autoPlay);
  };

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FiStar key={i} className="text-amber-400 fill-amber-400" />);
    }

    if (hasHalfStar) {
      stars.push(<FiStar key="half" className="text-amber-400 fill-amber-400/50" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FiStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-slate-50 to-emerald-50/50 dark:from-slate-900 dark:to-slate-800/50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-emerald-500/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-slate-600/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Discover why forward-thinking companies choose to partner with us for their growth journey.
          </p>
        </motion.div>

        <div className="relative flex items-center justify-center">
          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-0 z-20 md:-left-16 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft className="text-2xl text-slate-700 dark:text-slate-300" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 z-20 md:-right-16 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:shadow-xl transition-all hover:scale-110 hidden md:flex items-center justify-center"
            aria-label="Next testimonial"
          >
            <FiChevronRight className="text-2xl text-slate-700 dark:text-slate-300" />
          </button>

          {/* Testimonials Carousel */}
          <div className="w-full max-w-5xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden flex flex-col md:flex-row"
              >
                {/* Client Image/Video Section */}
                <div className="md:w-2/5 flex  mt-5 items-center justify-center relative">
                  <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
                    <Image
                      src={testimonials[activeIndex].avatar}
                      alt={testimonials[activeIndex].name}
                      fill
                      className="object-cover [object-position:center_5%]"
                    />
                    {testimonials[activeIndex].videoUrl && (
                      <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center">
                        <button className="p-4 rounded-full bg-white/90 hover:bg-white transition-colors">
                          <FiPlay className="text-2xl text-slate-900" />
                        </button>
                      </div>
                    )}
                  </div>

                  {/* Stars badge */}
                  <div className="absolute -bottom-0 mt-1 left-1/2 -translate-x-1/2 bg-white dark:bg-slate-900 py-2 px-4 rounded-full shadow-md flex items-center">
                    {renderStars(testimonials[activeIndex].rating)}
                  </div>
                </div>

                {/* Feedback Content */}
                <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                  <FaQuoteLeft className="text-4xl text-emerald-500 mb-4" />
                  <p className="text-lg md:text-xl text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    &ldquo;{testimonials[activeIndex].feedback}&rdquo;
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                      {testimonials[activeIndex].name}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center mt-8 space-x-4">
              <button
                onClick={toggleAutoPlay}
                className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all"
                aria-label={autoPlay ? "Pause auto rotation" : "Play auto rotation"}
              >
                {autoPlay ? (
                  <FiPause className="text-slate-700 dark:text-slate-300" />
                ) : (
                  <FiPlay className="text-slate-700 dark:text-slate-300" />
                )}
              </button>

              <div className="flex space-x-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => navigateTo(i)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      i === activeIndex
                        ? "bg-emerald-500 w-8"
                        : "bg-slate-300 dark:bg-slate-700 hover:bg-emerald-400"
                    }`}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
