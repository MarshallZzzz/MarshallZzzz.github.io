import { motion } from "framer-motion";
import CaseStudyCard from "./CaseStudyCard.js";

export default function Games() {
  return (
    <section id="games" className="w-full py-24 px-6 bg-black text-gray-100">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl sm:text-5xl font-Galindo tracking-wide text-[#4df7c7] mb-12 text-center">
          Games
        </h2>

        <div className="flex flex-col gap-16">

          {/* Example Game #1 */}
          <CaseStudyCard
            title="Mortal Cooking"
            tagline="A mortal combat against your food!"
            description="Prepare to embark on the ultimate clash between you and your food. Explore the new game that integrates Mortal Kombat with cooking."
            bullets={[
              "Complete Orders to stay alive",
              "Watch out! Food will attack!",
              "Different weapons = Different cuts of food",
              "Custom animations and characters"
            ]}
            tech="Godot Game Engine 2D"
            mediaType="video"
            media="./mortalCooking.mp4"
          />

          {/* Example Game #2 */}
          <CaseStudyCard
            title="Speedrun"
            tagline="A racing game to challenge your technique and agility"
            description="Run through an obstacle course to get to the end. Achive the fastest record. Your greatest opponent is yourself!"
            bullets={[
              "Need for speed!",
              "Stick to walls!",
              "Don't let the past haunt you!"
            ]}
            tech="Godot Game Engine 3D"
            mediaType="video"
            media="./speedRun.mp4"
          />
          <CaseStudyCard
            title="Hylophobia"
            tagline="Get out of your comfort zone!"
            description="Game Jam with the theme of: Getting out of your comfort zone! Keep your campfire alive and survive the night."
            bullets={[
              "Keep your fire alive!",
              "Collect Sticks for your fire",
              "Monsters will chase you!",
              "You only have 3 lives",
            ]}
            tech="Godot Game Engine 3D"
            mediaType="video"
            media="./Hylophobia.mp4"
          />

        </div>
      </div>
    </section>
  );
}