import React from 'react'
import Spline from '@splinetool/react-spline'
import Skill from './skill'
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="w-full py-20 px-6 bg-black text-gray-200">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <h2 className="text-4xl sm:text-5xl font-Galindo mb-8 tracking-wide text-[#4df7c7]">
            About Me
          </h2>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
            I don't have hobbies. I have 200% mental overhauls. Whether that's rebuilding a software project three times to save two seconds on load time,
            or engineering a way to make a cooking mess while having it clean at the same time, I am wired to maximize efficiency in order to save an extra two seconds.
          </p>

          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
            I'm a software engineer, entrepreneur, and problem solver. My bread and butter is full stack engineering with MERN, but the garlic on top is my ability
            to communicate and empthaize with others. Building software isn't enough. I believe understanding the humans using it and protecting the vulnerabilities they don't see
            is the gap I need to bridge from abstract code to real people.
          </p>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 mb-10 max-w-2xl mx-auto pt-10"
        >
          Software developer • Musician • Tennis Coach • Home Cook • Certified Dog Lover
        </motion.p>
      </div>
    </section>
  );
}
