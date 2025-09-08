"use client";

import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, TrendingUp } from "lucide-react";

const qualifications = [
  {
    icon: <GraduationCap className="w-7 h-7 text-emerald-600" />,
    title: "Master of Business Administration (MBA)",
    institution: "Chethan Business School",
    year: "2018 – 2022",
    details: "Specialized in Marketing and Human Resources (HR), with distinction in strategic management.",
    skills: ["Strategic Planning", "Market Analysis", "Leadership", "Organizational Behavior"],
    grade: "CGPA: 3.8/4.0"
  },
  {
    icon: <Award className="w-7 h-7 text-amber-600" />,
    title: "Financial Analyst (Bankers)",
    institution: "Professional Experience",
    year: "2013 – Present",
    details: "8 years of financial analysis expertise and 5 years of business leadership experience.",
    skills: ["Financial Modeling", "Risk Assessment", "Investment Analysis", "Portfolio Management"],
    achievements: ["Increased portfolio ROI by 28%", "Led team of 12 analysts", "Developed proprietary analysis framework"]
  },
  {
    icon: <BookOpen className="w-7 h-7 text-blue-600" />,
    title: "Certified Digital Marketing Professional",
    institution: "Digital Marketing Institute",
    year: "2020",
    details: "Advanced certification in digital marketing strategies and analytics.",
    skills: ["SEO/SEM", "Social Media Marketing", "Data Analytics", "Content Strategy"],
    grade: "Score: 98%"
  },
  {
    icon: <TrendingUp className="w-7 h-7 text-purple-600" />,
    title: "Business Development Strategist",
    institution: "Industry Recognition",
    year: "2019 – Present",
    details: "Recognized for developing innovative growth strategies in competitive markets.",
    skills: ["Market Penetration", "Partnership Development", "Revenue Growth", "Strategic Alliances"],
    achievements: ["Generated $4.2M in new business", "Expanded to 3 new markets", "25% YoY growth"]
  }
];

export default function QualificationsPage() {
  return (
   <section
      id="qualifications"
      className="relative py-24 px-6 bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-emerald-200/30 dark:bg-emerald-800/20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-blue-200/30 dark:bg-blue-800/20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center rounded-full bg-white dark:bg-slate-800 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-300 shadow-sm ring-1 ring-emerald-500/20 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2"></span>
            Professional Journey
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4"
          >
            Education & Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400"
          >
            Academic achievements and professional credentials that form the foundation of my expertise.
          </motion.p>
        </div>

        {/* Row-wise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {qualifications.map((q, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100 dark:border-slate-700 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30 group-hover:scale-110 transition-transform duration-300">
                  {q.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                    {q.title}
                  </h3>
                  <p className="text-emerald-600 dark:text-emerald-400 font-medium">
                    {q.institution}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{q.year}</p>
                </div>
              </div>

              <p className="text-slate-700 dark:text-slate-300 mb-5">
                {q.details}
              </p>

              {q.skills && (
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                    Relevant Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {q.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}