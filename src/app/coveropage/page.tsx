"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiFacebook } from "react-icons/fi";
import Image from "next/image";

interface CoverPageProps {
  name?: string;
  portrait?: string;
  bio?: string;
  email?: string;
  linkedin?: string;
  facebook?: string;
}

export default function ProfessionalCoverPage({
  name = "Sharanagoud I Koti",
  portrait = "/sharansir..jpg",
  bio = "Sharanagoud Koti decided to explore his interest in the digital world and now finds immense satisfaction in helping his customers find the right software solution for their business. Customer service is his sole objective, and dedication is his mantra of success.",
  email = "mailto:sikoti8055@gmail.com",
  linkedin = "https://linkedin.com/in/sharanpatil",
  facebook = "https://www.facebook.com/sharan.koti.16",
}: CoverPageProps) {
  return (
    <header className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 px-6 md:px-16 overflow-hidden">

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative w-60 h-60 mt-20 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-emerald-500 shadow-lg "
      >
        <Image
          src={portrait}
          alt={`${name} Portrait`}
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Name */}
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-8 text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-slate-100 text-center"
      >
        {name}
      </motion.h1>

      {/* Bio */}
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-4 text-base md:text-lg text-slate-600 dark:text-slate-400 text-center max-w-3xl leading-relaxed"
      >
        {bio}
      </motion.p>

      {/* Features / Services */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-6 text-center max-w-3xl"
      >
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Get Free Expert Advice
        </p>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Wide Range of Software Options
        </p>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          Personalized Software Recommendations
        </p>
        <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
          100% Satisfaction on Deals
        </p>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="mt-6 flex gap-6"
      >
        {[
          { href: facebook, icon: <FiFacebook className="w-7 h-7" /> },
          { href: linkedin, icon: <FiLinkedin className="w-7 h-7" /> },
          { href: email, icon: <FiMail className="w-7 h-7" /> },
        ].map(({ href, icon }, i) => (
          <motion.a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className="text-slate-700 dark:text-slate-300 hover:text-emerald-600 transition mb-10 mt-5"
          >
            {icon}
          </motion.a>
        ))}
      </motion.div>
    </header>
  );
}
