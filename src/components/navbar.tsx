"use client";

import React, { useEffect, useState } from "react";
import ThemeToggle from "@/app/toggle/page";
import { motion } from "framer-motion";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Force dark mode by default
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 50) {
        setShow(false); // hide on scroll down
      } else {
        setShow(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: show ? 0 : -80, opacity: show ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="w-full top-0 left-0 z-50 bg-slate-900/90 backdrop-blur-md shadow-lg px-6 md:px-16 h-16 flex items-center justify-between"
    >
      {/* Left side: Developer name */}
      <div className="text-lg md:text-2xl font-bold text-white tracking-wide">
        Driven By
      </div>

      {/* Right side: Theme toggle */}
      <motion.div
        whileHover={{ scale: 1.1, boxShadow: "0px 0px 12px rgba(16,185,129,0.7)" }}
        whileTap={{ scale: 0.95 }}
        className="p-2 rounded-full bg-slate-700 cursor-pointer transition-colors duration-300"
      >
        <ThemeToggle />
      </motion.div>
    </motion.nav>
  );
}
