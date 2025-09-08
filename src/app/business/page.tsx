"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, ExternalLink } from "lucide-react";
import Image from "next/image";

// Types
interface Stat {
  value: string;
  label: string;
}

interface Business {
  id: string;
  name: string;
  image: string;
  description: string;
  fullDescription: string;
  stats: Stat[];
  highlights: string[];
  link: string;
  color: keyof typeof colorClasses;
}

const colorClasses: Record<string, string> = {
  emerald: "bg-emerald-50 dark:bg-emerald-900/20",
  cyan: "bg-cyan-50 dark:bg-cyan-900/20",
  amber: "bg-amber-50 dark:bg-amber-900/20",
  purple: "bg-purple-50 dark:bg-purple-900/20",
  blue: "bg-blue-50 dark:bg-blue-900/20",
};

const businesses: Business[] = [
  {
    id: "farm",
    name: "FarmHarvestToHome",
    image: "/logo/farmer.png",
    description:
      "Bridging farmers and consumers with fresh produce delivered directly to homes.",
    fullDescription:
      "FarmHarvestToHome is an innovative agri-tech platform that connects local farmers directly with consumers, eliminating middlemen and ensuring fresher produce at fair prices.",
    stats: [
      { value: "10,000+", label: "Happy Customers" },
      { value: "500+", label: "Partner Farmers" },
      { value: "35%", label: "Income Increase" },
      { value: "60%", label: "Waste Reduction" },
    ],
    highlights: [
      "Direct Farm-to-Consumer",
      "Sustainable Agriculture",
      "Tech-Driven Supply Chain",
      "Fair Pricing",
    ],
    link: "https://www.farmharvesttohome.com/",
    color: "emerald",
  },
  {
    id: "globaltech",
    name: "GlobalTech Software Solutions",
    image: "/logo/Global.jpg",
    description:
      "Delivering cutting-edge technology services and software solutions worldwide.",
    fullDescription:
      "GlobalTech Solutions provides innovative technology services including custom software development, cloud solutions, AI integration, and digital transformation for enterprises globally.",
    stats: [
      { value: "50+", label: "Global Clients" },
      { value: "15", label: "Tech Solutions" },
      { value: "40%", label: "Cost Savings" },
      { value: "99.9%", label: "Uptime Guarantee" },
    ],
    highlights: [
      "Software Development",
      "Cloud Solutions",
      "AI Integration",
      "Digital Transformation",
    ],
    link: "https://www.globaltechsoftwaresolutions.com/",
    color: "cyan",
  },
  {
    id: "fincare",
    name: "Global FinCare",
    image: "/logo/fincare.jpg",
    description:
      "Financial planning, loans, and investment solutions tailored for individuals and businesses.",
    fullDescription:
      "FinCare Advisory provides comprehensive financial services including personalized wealth management, business loans, investment strategies, and retirement planning. Our team of certified financial analysts creates tailored solutions that help clients achieve financial stability and growth.",
    stats: [
      { value: "₹85Cr+", label: "Assets Managed" },
      { value: "1,200+", label: "Clients Served" },
      { value: "28%", label: "Average ROI" },
      { value: "98%", label: "Client Satisfaction" },
    ],
    highlights: [
      "Wealth Management",
      "Business Loans",
      "Investment Strategy",
      "Retirement Planning",
    ],
    link: "https://www.globalfincare.in/",
    color: "amber",
  },
  {
    id: "namma",
    name: "Namma Uru Namma Hemme",
    image: "/logo/namma.png",
    description:
      "Creating employment opportunities and community development through ethical business practices.",
    fullDescription:
      "Namma Uru Namma Hemme is a community-focused initiative that has generated employment for 1000+ individuals through various enterprises. We believe in creating opportunities rather than charity, fostering self-reliance, and building sustainable local economies.",
    stats: [
      { value: "1,000+", label: "Jobs Created" },
      { value: "15", label: "Local Communities" },
      { value: "₹5.2Cr", label: "Annual Revenue" },
      { value: "100%", label: "Ethical Practices" },
    ],
    highlights: [
      "Job Creation",
      "Community Development",
      "Skill Building",
      "Market Access",
    ],
    link: "https://www.nammurunammahemme.com/",
    color: "purple",
  },
  {
    id: "agricare",
    name: "Global AgriCare",
    image: "/logo/agri.webp",
    description:
      "Providing sustainable agriculture solutions and technology-driven support for farmers.",
    fullDescription:
      "AgriCare Solutions empowers farmers with cutting-edge agricultural technology, data-driven insights, and sustainable farming practices. We offer precision farming tools, soil health monitoring, crop advisory services, and market linkage solutions.",
    stats: [
      { value: "2,500+", label: "Farmers Empowered" },
      { value: "45%", label: "Yield Increase" },
      { value: "30%", label: "Cost Reduction" },
      { value: "12", label: "Regions Served" },
    ],
    highlights: [
      "Precision Agriculture",
      "Soil Health Tech",
      "Sustainable Practices",
      "Market Linkage",
    ],
    link: "https://globalagricare.com/",
    color: "blue",
  },
];

export default function BusinessesPage() {
  const [selectedBusiness, setSelectedBusiness] = useState<Business | null>(
    null
  );
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredBusinesses =
    activeFilter === "all"
      ? businesses
      : businesses.filter((biz) => biz.id === activeFilter);

  return (
    <section
      id="businesses"
      className="relative py-24 px-6 bg-gradient-to-br from-slate-50 via-white to-emerald-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-emerald-900/20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4"
          >
            Business Ventures
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400 mb-8"
          >
            From agriculture to finance and global technology, we&apos;re
            building sustainable businesses that impact lives.
          </motion.p>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { key: "all", label: "All Ventures" },
              { key: "farm", label: "Agriculture" },
              { key: "fincare", label: "Finance" },
              { key: "globaltech", label: "Technology" },
              { key: "namma", label: "Community" },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setActiveFilter(f.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === f.key
                    ? "bg-emerald-600 text-white shadow-md"
                    : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 shadow-sm hover:shadow-md"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Business Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredBusinesses.map((biz, index) => (
              <motion.div
                key={biz.id}
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl p-8 border border-slate-100 dark:border-slate-700 transition-all group cursor-pointer"
                onClick={() => setSelectedBusiness(biz)}
              >
                <div
                  className={`flex items-center bg-fixed justify-center w-20 h-20 rounded-3xl mb-6 overflow-hidden ${colorClasses[biz.color]}`}
                >
                  <Image
                    src={biz.image}
                    alt={biz.name}
                    width={72}
                    height={72}
                    className="object-contain border rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-2">
                  {biz.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {biz.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {biz.highlights.slice(0, 3).map((h, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-full"
                    >
                      {h}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-emerald-600 dark:text-emerald-400 font-medium group-hover:gap-2 transition-all">
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedBusiness && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedBusiness(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div
                        className={`p-3 rounded-2xl ${colorClasses[selectedBusiness.color]}`}
                      >
                        <Image
                          src={selectedBusiness.image}
                          alt={selectedBusiness.name}
                          width={48}
                          height={48}
                          className="object-contain"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                          {selectedBusiness.name}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400">
                          {selectedBusiness.description}
                        </p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedBusiness(null)}
                      className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                    >
                      <X className="w-5 h-5 text-slate-600 dark:text-slate-400" />
                    </button>
                  </div>

                  {/* Full Description */}
                  <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                    {selectedBusiness.fullDescription}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {selectedBusiness.stats.map((stat, i) => (
                      <div
                        key={i}
                        className="bg-slate-50 dark:bg-slate-700/50 rounded-xl p-4 text-center"
                      >
                        <p className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
                          {stat.value}
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 text-sm">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedBusiness.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 text-sm font-medium bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>

                  {/* External Link */}
                  <a
                    href={selectedBusiness.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 transition-colors"
                  >
                    Visit Website <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
