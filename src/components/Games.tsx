import { motion } from "framer-motion";

export default function Games() {
  return (
    <section id="games" className="w-full py-24 px-6 bg-black text-gray-100">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl sm:text-5xl font-Galindo tracking-wide text-[#4df7c7] mb-12 text-center">
          Games
        </h2>

        <div className="flex flex-col gap-16">

          {/* Example Game #1 */}
          <GameCard
            title="Reaction Training Game"
            tagline="A fast-paced timing and reaction test built in JavaScript."
            description="This mini-game challenges players to react with perfect timing as the speed increases. Designed to practice state management, animation, and real-time input handling."
            bullets={[
              "Built in vanilla JavaScript",
              "Real-time key input handling",
              "Increasing difficulty curve",
              "Custom animation loop",
              "Sound + visual feedback"
            ]}
            tech="JavaScript, HTML Canvas, CSS, Game Loops"
            video="/mortalCooking.mp4"  // Replace with your video
          />

          {/* Example Game #2 */}
          <GameCard
            title="Puzzle Grid Game"
            tagline="A logic puzzle where players move tiles to complete patterns."
            description="This project focuses on grid-based movement logic, win-state checking, and smooth animations. Includes custom puzzle generation and responsive UI."
            bullets={[
              "Grid system with collision logic",
              "Smooth tile animations",
              "Puzzle randomization",
              "Touch + keyboard controls",
              "Designed for mobile and desktop"
            ]}
            tech="React, TypeScript, Tailwind, Game Logic"
            video="/speedRun.mp4"  // Replace with your video
          />
          <GameCard
            title="Puzzle Grid Game"
            tagline="A logic puzzle where players move tiles to complete patterns."
            description="This project focuses on grid-based movement logic, win-state checking, and smooth animations. Includes custom puzzle generation and responsive UI."
            bullets={[
              "Grid system with collision logic",
              "Smooth tile animations",
              "Puzzle randomization",
              "Touch + keyboard controls",
              "Designed for mobile and desktop"
            ]}
            tech="React, TypeScript, Tailwind, Game Logic"
            video="/Hylophobia.mp4"  // Replace with your video
          />

        </div>
      </div>
    </section>
  );
}

interface GameProps {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  tech: string;
  video: string;
}

function GameCard({ title, tagline, description, bullets, tech, video }: GameProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 shadow-xl relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* TEXT */}
        <div>
          <h3 className="text-3xl font-Galindo text-[#4df7c7] mb-2">
            {title}
          </h3>

          <p className="text-lg text-gray-300 mb-4">{tagline}</p>
          <p className="text-gray-400 mb-6">{description}</p>

          <ul className="text-gray-400 mb-6 space-y-2">
            {bullets.map((b, i) => (
              <li key={i}>• {b}</li>
            ))}
          </ul>

          <p className="text-sm text-gray-500 italic">Tech: {tech}</p>
        </div>

        {/* VIDEO */}
        <div className="flex items-center justify-center">
          <motion.video
            src={video}
            controls
            className="rounded-xl shadow-lg max-w-sm w-full object-cover"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          />
        </div>

      </div>
    </motion.div>
  );
}
