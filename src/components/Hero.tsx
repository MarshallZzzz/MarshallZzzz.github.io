import { motion } from "framer-motion";
import Bubble from "./bubble";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <FloatingBubble img="/Orlando.JPG" x="10%" y="20%" />
        <FloatingBubble img="/MicroMouse.JPG" x="85%" y="35%" />
        <FloatingBubble img="/SS.JPG" x="20%" y="70%" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-Galindo tracking-wide mb-6">
          Hey, I&apos;m <span className="text-[#4df7c7]">Marshall</span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6"
        >
          I build things that blend engineering, creativity, and real-world impact.
          From full-stack apps and automation tools to robotics systems and music production,
          I love taking ideas and turning them into something real.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-400 mb-10 max-w-2xl mx-auto"
        >
          Software developer • Robotics engineer • Music producer • Tennis leader
        </motion.p>

        <div className="flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#06402B] to-[#4df7c7] text-black font-semibold shadow-lg hover:opacity-90 transition"
          >
            View My Work
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-full border border-[#4df7c7] text-[#4df7c7] font-semibold hover:bg-[#4df7c714] transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

function FloatingBubble({ img, x, y }: { img: string; x: string; y: string }) {
  return (
    <motion.div
      className="absolute opacity-80"
      style={{ top: y, left: x, transform: "translate(-50%, -50%)" }}
      animate={{ y: ["0px", "-20px", "0px"] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    >
      <Bubble imgURL={img} description="" />
    </motion.div>
  );
}
