"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="relative w-full bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 px-6 md:px-16 py-12 flex flex-col items-center gap-6">
      
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex md:flex-row items-center gap-6 text-sm md:text-base"
      >
        <a
          href="tel:+918495862494"
          className="flex items-center gap-2 hover:text-emerald-600 transition"
        >
          <FiPhone className="w-5 h-5" />
          +91 84958 62494
        </a> <br />
        <a
          href="mailto:sikoti8055@gmail.com"
          className="flex items-center gap-2 hover:text-emerald-600 transition"
        >
          <FiMail className="w-5 h-5" />
          sikoti8055@gmail.com
        </a>
      </motion.div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-xs md:text-sm text-black dark:text-slate-400 mt-4"
      >
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </motion.div>
    </footer>
  );
}
