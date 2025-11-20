import { motion } from "framer-motion";
import Bubble from "./Bubble";

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full py-24 px-6 bg-transparent text-gray-100 overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-Galindo text-[#4df7c7] mb-16 text-center">
          Education
        </h2>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-10 shadow-xl relative"
        >
          {/* Title */}
          <h3 className="text-3xl font-Galindo text-[#4df7c7] text-center mb-10">
            University of Portland
          </h3>

          {/* TWO DEGREES */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            {/* LEFT — CS */}
            <div>
              <h4 className="text-2xl font-Galindo text-[#4df7c7] mb-2">
                B.S. in Computer Science
              </h4>

              <p className="text-gray-400 mb-4">
                Focus in Software Development
              </p>

              <ul className="text-gray-400 space-y-1">
                <li>• Senior Project: MicroMouse Competition</li>
                <li>• Algorithms, Compilers, and Operating Systems</li>
                <li>• Data Structures, Object-Oriented, Theory of Computation</li>
                <li>• Software Engineering, Big Data, Game Design</li>
              </ul>
            </div>

            {/* RIGHT — MUSIC */}
            <div>
              <h4 className="text-2xl font-Galindo text-[#4df7c7] mb-2">
                Major in Music
              </h4>

              <p className="text-gray-400 mb-4">
                Trained in violin performance and theory
              </p>

              <ul className="text-gray-400 space-y-1">
                <li>• Violin Performance</li>
                <li>• Ensemble Leadership - Concert Master</li>
                <li>• Music Theory & Ear Training</li>
                <a href='https://www.youtube.com/watch?v=-AcJyN9wh0I&t=1290s' target='_blank' rel='noopener noreferrer'>• <span className="underline text-[#4df7c7]">My Senior Recital</span></a>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* BUBBLE ROW UNDER CARD */}
        <div className="relative w-full flex flex-col lg:flex-row justify-center gap-6 mt-12 pointer-events-auto">
          <Bubble
            imgURL='./SS.JPG'
            description="Quintet Ensemble First Chair"
          />
          <Bubble className="w-8 h-8 animate-float-medium opacity-40" 
            imgURL='./seniorRecital.png'
            description="Outstanding Instrumentalist Award & Senior Recital"
          />
          <Bubble className="w-8 h-8 animate-float-medium opacity-40" 
            imgURL='./Orlando.JPG'
            description="Tennis Club President"
          />
          <Bubble className="w-8 h-8 animate-float-fast opacity-40" 
            imgURL='./MicroMouse.JPG'
            description="Outstanding Capstone Award"
          />
          <Bubble className="w-8 h-8 animate-float-slow opacity-40" 
            imgURL='./lionDance.JPG'
            description="Lion Dance Head"
          />
        </div>

      </div>
    </section>
  );
}
