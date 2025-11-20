import { motion } from "framer-motion";
import Bubble from "./Bubble";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full py-24 px-6 bg-black text-gray-100 overflow-hidden"
    >
      {/* FLOATING BUBBLES */}

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl sm:text-5xl font-Galindo text-[#4df7c7] text-center mb-16">
          Skills
        </h2>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-[#0f0f0f]/90 border border-gray-800 rounded-2xl p-10 shadow-xl"
        >

          {/* SKILL GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            
            {/* =========================== */}
            {/* PROGRAMMING */}
            {/* =========================== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-2xl font-Galindo text-[#4df7c7] mb-3">
                Programming
              </h4>
              <ul className="text-gray-400 space-y-1">
                <li>• JavaScript / TypeScript</li>
                <li>• React / Vite</li>
                <li>• Node.js / Express</li>
                <li>• Java / Python</li>
                <li>• SQL / Prisma / MongoDB</li>
              </ul>
            </motion.div>

            {/* =========================== */}
            {/* FRONTEND */}
            {/* =========================== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-2xl font-Galindo text-[#4df7c7] mb-3">
                Frontend
              </h4>
              <ul className="text-gray-400 space-y-1">
                <li>• React + Hooks</li>
                <li>• Tailwind CSS</li>
                <li>• Framer Motion</li>
                <li>• UI/UX Design</li>
                <li>• Responsive Layouts</li>
              </ul>
            </motion.div>

            {/* =========================== */}
            {/* BACKEND */}
            {/* =========================== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h4 className="text-2xl font-Galindo text-[#4df7c7] mb-3">
                Backend / Database
              </h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Node.js / Express</li>
                <li>• REST APIs</li>
                <li>• Authentication (JWT)</li>
                <li>• PostgreSQL / MongoDB</li>
                <li>• Docker</li>
              </ul>
            </motion.div>

            {/* =========================== */}
            {/* CLOUD & DEVOPS */}
            {/* =========================== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-2xl font-Galindo text-[#4df7c7] mb-3">
                Cloud & DevOps
              </h4>
              <ul className="text-gray-400 space-y-1">
                <li>• AWS ECS / ECR</li>
                <li>• Docker Compose</li>
                <li>• CI/CD (GitHub Actions)</li>
                <li>• Deployment Pipelines</li>
                <li>• Git Version Control</li>
              </ul>
            </motion.div>

            {/* =========================== */}
            {/* CREATIVE */}
            {/* =========================== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              <h4 className="text-2xl font-Galindo text-[#4df7c7] mb-3">
                Services
              </h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Violin & Music Theory</li>
                <li>• Tennis Coaching</li>
                <li>• Video Editing</li>
                <li>• Graphic Design</li>
              </ul>
            </motion.div>

            {/* =========================== */}
            {/* SOFT SKILLS */}
            {/* =========================== */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
            >
              <h4 className="text-2xl font-Galindo text-[#4df7c7] mb-3">
                Soft Skills
              </h4>
              <ul className="text-gray-400 space-y-1">
                <li>• Leadership</li>
                <li>• Communication</li>
                <li>• Critical Thinking</li>
                <li>• Team Collaboration</li>
                <li>• Problem Solving</li>
              </ul>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
