"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiFacebook } from "react-icons/fi";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const whatsappNumber = "+918495862494"; // Your WhatsApp number (with country code)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Encode the message for WhatsApp
    const whatsappMessage = `Hi! I would like to get in touch. 
    Name: ${formData.name}. 
    Email: ${formData.email}.
    Message: ${formData.message}`;
    const whatsappLink = `https://wa.me/${whatsappNumber.replace(
      /[^0-9]/g,
      ""
    )}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");

    // Clear form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800 px-6 md:px-16 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 mb-6"
      >
        Get in Touch
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-slate-600 dark:text-slate-400 mb-12 text-center max-w-2xl"
      >
        Send me a message directly via WhatsApp, or contact through social media/email.
      </motion.p>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="flex flex-col md:flex-row items-center justify-center gap-12 mb-12"
      >
        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
          <FiMail className="w-6 h-6 text-emerald-500" />
          <span>sikoti8055@gmail.com</span>
        </div>
        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
          <FiPhone className="w-6 h-6 text-emerald-500" />
          <span>+91 84958 62494</span>
        </div>
        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
          <a href="https://linkedin.com/in/sharanpatil" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="w-6 h-6 text-emerald-500 hover:text-emerald-700 transition" />
          </a>
          <a href="https://www.facebook.com/sharan.koti.16" target="_blank" rel="noopener noreferrer">
            <FiFacebook className="w-6 h-6 text-emerald-500 hover:text-emerald-700 transition" />
          </a>
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="w-full max-w-2xl bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-8 flex flex-col gap-6"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-4 rounded-xl border border-slate-300 dark:border-slate-600 bg-slate-50 dark:bg-slate-700 text-slate-900 dark:text-slate-100 focus:outline-none focus:ring-2 focus:ring-emerald-500 h-32 resize-none"
          required
        />
        <button
          type="submit"
          className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-lg transition"
        >
          Send via WhatsApp
        </button>
      </motion.form>
    </section>
  );
}
