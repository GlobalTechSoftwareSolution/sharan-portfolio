"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar,  BarChart3, Users, Target } from "lucide-react";

const experiences = [
  {
    role: "Founder & CEO",
    // company: "FarmHarvestToHome",
    year: "2020 – Present",
    duration: "5 years",
    details:
      "Leading the development of an agri-tech marketplace that connects farmers directly with consumers. Focused on scalability, sustainability, and digital-first solutions.",
    achievements: [
      "Grew business from concept to serving 10,000+ customers",
      "Built a network of 500+ local farmers and producers",
      "Increased farmer incomes by 35% through direct market access",
      "Reduced food waste by 60% through efficient supply chain"
    ],
    skills: ["Strategic Leadership", "Business Development", "Supply Chain Management", "Digital Transformation", "Team Building"],
    icon: <Target className="w-5 h-5" />
  },
  {
    role: "Financial Analyst",
    company: "Independent Consulting",
    year: "2020 – Present",
    duration: "5 years",
    details:
      "Provided financial insights and business strategies for SMEs and startups. Delivered actionable recommendations to improve growth, reduce costs, and optimize operations.",
    achievements: [
      "Helped 25+ businesses improve financial performance",
      "Developed financial models that increased client ROI by 40%",
      "Reduced operational costs by 25% for consulting clients",
      "Mentored junior analysts and built training programs"
    ],
    skills: ["Financial Modeling", "Data Analysis", "Business Strategy", "Risk Management", "Consulting"],
    icon: <BarChart3 className="w-5 h-5" />
  },
  {
    role: "Business Manager",
    company: "Local Enterprises",
    year: "2020 – present",
    duration: "3 years",
    details:
      "Managed day-to-day operations, supervised cross-functional teams, and drove revenue growth through innovative sales and marketing campaigns.",
    achievements: [
      "Increased company revenue by 45% over 3 years",
      "Managed a team of 15+ cross-functional staff members",
      "Implemented new operational systems that improved efficiency by 30%",
      "Developed marketing campaigns that increased customer acquisition by 60%"
    ],
    skills: ["Operations Management", "Team Leadership", "Sales Strategy", "Marketing", "Process Improvement"],
    icon: <Users className="w-5 h-5" />
  },
];

export default function ExperiencePage() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  return (
    <section
      id="experience"
      className="relative py-24 px-6 bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-emerald-200/20 dark:bg-emerald-800/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-800/10 rounded-full blur-3xl"></div>
      
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
            Work Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400"
          >
            A journey of leadership, innovation, and transformative business impact
          </motion.p>
        </div>

        {/* Experience Tabs and Content */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Timeline Navigation */}
          <div className="lg:w-1/3">
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 to-blue-400 dark:from-emerald-600 dark:to-blue-600"></div>
              
              <div className="space-y-4">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-14"
                  >
                    <div 
                      className={`absolute left-4 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full ${expandedIndex === index ? 'bg-emerald-500 ring-4 ring-emerald-500/20' : 'bg-slate-300 dark:bg-slate-600'} transition-all duration-300`}
                    ></div>
                    
                    <button
                      onClick={() => setExpandedIndex(index)}
                      className={`text-left w-full p-5 rounded-xl transition-all duration-300 ${expandedIndex === index 
                        ? 'bg-white dark:bg-slate-800 shadow-lg border border-emerald-500/20' 
                        : 'bg-slate-100/50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800'}`}
                    >
                      <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">{exp.year}</p>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mt-1">{exp.role}</h3>
                      <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{exp.company}</p>
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Detail */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {experiences.map((exp, index) => (
                expandedIndex === index && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 border border-slate-100 dark:border-slate-700"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                            {exp.icon}
                          </div>
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">{exp.role}</h3>
                        </div>
                        <p className="text-lg text-emerald-600 dark:text-emerald-400 font-medium">{exp.company}</p>
                      </div>
                      
                      <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-700 rounded-full">
                        <Calendar className="w-4 h-4 text-slate-600 dark:text-slate-400" />
                        <span className="text-sm font-medium text-slate-600 dark:text-slate-400">{exp.year} • {exp.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-700 dark:text-slate-300 mb-8 leading-relaxed">{exp.details}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                          Key Achievements
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        </h4>
                        <ul className="space-y-3">
                          {exp.achievements.map((achievement, i) => (
                            <motion.li 
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: i * 0.1 }}
                              className="flex items-start text-slate-700 dark:text-slate-300"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 mr-3 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                          Skills Applied
                          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <motion.span 
                              key={i}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.05 }}
                              className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-full"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}