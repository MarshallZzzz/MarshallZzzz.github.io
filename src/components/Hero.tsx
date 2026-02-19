import { motion } from "framer-motion";
import { useEffect, use } from "react";
import { IKImage, IKContext } from 'imagekitio-react';

export default function Hero({ profileRef }) {
  return (
    <section id='hero' className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* Main Content */}
      <div className="relative flex flex-col z-10 items-center justify-center text-center max-w-3xl">
        <IKImage
          urlEndpoint="https://ik.imagekit.io/aegwbjd5j/public" // Include this to be safe
          path="profilepic.webp"                       // NO "/public/" and NO leading slash
          ref={profileRef}
          transformation={[{ height: "300", width: "300" }]}
          alt="Profile"
          className="
    relative
    w-32 sm:w-40 lg:w-48
    h-32 sm:h-40 lg:h-48
    object-cover
    rounded-full
    bg-[#caff00]
    shadow-[0_0_50px_rgba(77,247,199,0.9)]
    mb-6
  "
        />

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-Galindo tracking-wide mb-6">
          {/* Hey! It&apos;s me! */}
          HEY!
          It&apos;s <span className="text-[#4df7c7]">Marshall </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-6"
        >
          I use technology to build real-world impact.
          From full-stack apps to robotics systems and music,
          I love taking ideas and turning them into something real.
        </motion.p>

        <div className="flex justify-center gap-4">
          <motion.button
            onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#06402B] to-[#4df7c7] text-black font-semibold shadow-lg hover:opacity-90 transition"
          >
            View My Work
          </motion.button>
          <motion.button
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({
                behavior: "smooth",
                block: "start"
              });
            }}
            className="px-6 py-3 rounded-full border border-[#4df7c7] text-[#4df7c7] font-semibold cursor-pointer hover:bg-[#4df7c714] hover:scale-105 transition duration-300"
          >
            Contact Me
          </motion.button>

        </div>
      </div>
    </section>
  );
}

