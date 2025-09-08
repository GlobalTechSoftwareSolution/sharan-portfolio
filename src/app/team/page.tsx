"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Github, Globe } from "lucide-react";

const teamMembers = [
  {
    name: "Mani Bharadwaj",
    role: "SDE & Team Lead",
    image: "/team/manii.jpg",
    github: "https://github.com/Manibharadwaj",
    portfolio: "http://manibharadwaj.netlify.app/",
    email: "manibharadwajcr@gmail.com",
  },
  {
    name: "Abishek Mangalur",
    role: "Backend Developer",
    image: "/team/abi.jpg",
    github: "https://github.com/AbhishekMangalur",
    portfolio: "https://abhishekmangalur.github.io/Portfolio/",
    email: "abhimangalur1@gmail.com ",
  },
  {
    name: "Pavan Kumar",
    role: "Frontend Developer",
    image: "/team/pavan.jpg",
    github: "https://github.com/pavankumarkkgf",
    portfolio: "https://pavan-portfolio-olive.vercel.app/",
    email: "pavankumarkkgf@gmail.com",
  },
  {
    name: "Gomathish Krishna",
    role: "Finance Executive",
    image: "/team/kiran.jpg",
    github: "/sreenath.globalfin.care@gmail.com",
    portfolio: "/sreenath.globalfin.care@gmail.com",
    email: "sreenath.globalfin.care@gmail.com",
  },
];

export default function TeamSection() {
  return (
    <section
      id="team"
      className="relative py-24 px-6 bg-gradient-to-tr from-slate-50 to-emerald-50 dark:from-slate-900 dark:to-slate-800"
    >
      {/* Section Heading */}
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100"
        >
          Meet Our Team
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-400"
        >
          A group of passionate professionals dedicated to building sustainable
          solutions and delivering results.
        </motion.p>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="relative bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition-transform duration-300 border border-slate-100 dark:border-slate-700"
          >
            {/* Profile Image */}
            <div className="w-36 h-36 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-emerald-500 dark:border-emerald-400 mb-4 flex items-center justify-center bg-slate-100 dark:bg-slate-700">
              <Image
                src={member.image}
                alt={member.name}
                width={160}
                height={160}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Name & Role */}
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
              {member.name}
            </h3>
            <p className="text-emerald-600 dark:text-emerald-400 font-medium mb-4">
              {member.role}
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={member.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="text-black dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                <Globe className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${member.email}`}
                className="text-black dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
