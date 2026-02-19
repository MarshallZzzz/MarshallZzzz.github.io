import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import TennisBallScroll from "./components/TennisBallScroll"

export default function IntroGate({ children, profileRef }) {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <>
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 z-[100]"
          >
            <TennisBallScroll
              profileRef={profileRef}
              onComplete={() => setShowIntro(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {children}
    </>
  )
}
