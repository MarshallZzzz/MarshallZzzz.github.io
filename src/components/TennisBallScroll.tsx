"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

interface Props {
  onComplete: () => void
  profileRef: React.RefObject<HTMLImageElement>
}

export default function TennisBallScroll({ onComplete, profileRef }: Props) {
  const [target, setTarget] = useState<{ x: number; y: number } | null>(null)
  const [moving, setMoving] = useState(true)


  useEffect(() => {
    if (profileRef.current) {
      const rect = profileRef.current.getBoundingClientRect()

      setTarget({
        x: rect.left + rect.width / 2 - window.innerWidth / 2,
        y: rect.top + rect.height / 2 - window.innerHeight / 2,
      })
    }
  }, [profileRef])

  if (!target) return null
  return (
    <div className="fixed inset-0 z-[9999] bg-black overflow-hidden">

      {/* Teal ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,247,199,0.15),transparent_65%)]" />

      {/* Exact hero alignment */}
      <div className="relative min-h-screen flex items-center justify-center px-6">

        <motion.div
          initial={{ x: 0, y: "120vh" }}
          animate={{ x: target.x, y: target.y }}
          transition={{
            duration: 2.2,
            ease: [0.12, 0.8, 0.2, 1],
          }}
          onAnimationComplete={onComplete}
          className="relative"
        >
          <div
            className="
      w-32 sm:w-40 lg:w-48
      h-32 sm:h-40 lg:h-48
      relative
      flex items-center justify-center
    "
          >

            {/* LEFT TEXT */}
            <motion.div
              initial={{ x: -400, y: 0, opacity: 0 }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2.2,
                ease: [0.12, 0.8, 0.2, 1],
              }}
              className="
    absolute
    font-bold
    tracking-widest
    text-white
    text-3xl sm:text-4xl lg:text-5xl

    /* Mobile position (top) */
    top-[-90px]
    left-1/2
    -translate-x-1/2

    /* Desktop position (left side) */
    sm:top-1/2
    sm:left-auto
    sm:right-[200px]
    sm:-translate-y-1/2
    sm:translate-x-0
  "
            >
              LETS
            </motion.div>


            {/* RIGHT / BOTTOM WORD */}
            <motion.div
              initial={{ x: 400, y: 0, opacity: 0 }}
              animate={{
                x: 0,
                y: 0,
                opacity: 1,
              }}
              transition={{
                duration: 2.2,
                ease: [0.12, 0.8, 0.2, 1],
              }}
              className="
    absolute
    font-bold
    tracking-widest
    text-[#4df7c7]
    text-3xl sm:text-4xl lg:text-5xl

    /* Mobile position (bottom) */
    bottom-[-90px]
    left-1/2
    -translate-x-1/2

    /* Desktop position (right side) */
    sm:bottom-auto
    sm:top-1/2
    sm:left-[300px]
    sm:-translate-y-1/2
  "
            >
              BUILD
            </motion.div>


            {/* 🎾 Main Ball */}
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 1600 }}
              transition={{
                duration: 2.2,
                ease: "linear",
              }}
              className="
        relative
        w-full
        h-full
        bg-[#caff00]
        rounded-full
        shadow-[0_0_50px_rgba(77,247,199,0.9)]
      "
            >
              <div className="absolute inset-0 rounded-full border-[6px] border-white border-l-transparent border-r-transparent rotate-45" />
              <div className="absolute inset-0 rounded-full border-[6px] border-white border-t-transparent border-b-transparent opacity-70" />
            </motion.div>

          </div>
        </motion.div>

      </div>
    </div>
  )
}
