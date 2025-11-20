import React from 'react'
import Spline from '@splinetool/react-spline'
import Skill from './skill'

export default function About() {
  return (
    <section id="about" className="w-full py-20 px-6 bg-black text-gray-200">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl sm:text-5xl font-Galindo mb-8 tracking-wide text-[#4df7c7]">
          About Me
        </h2>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6">
          I’m a software developer who loves building things that blend engineering,
          creativity, and real-world impact. My background ranges from robotics and firmware
          engineering to full-stack web development, music production, and leading my college
          tennis club.
        </p>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          Whether I’m designing a budgeting app, solving a MicroMouse maze, or producing
          something musical, I care about clean design, thoughtful problem-solving, and making
          projects feel polished and intentional. I’m focused on growing as a developer,
          taking on meaningful projects, and continually learning how to build better systems.
        </p>
      </div>
    </section>
  );
}
