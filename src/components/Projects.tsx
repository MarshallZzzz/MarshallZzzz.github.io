import { motion } from "framer-motion";
import CaseStudyCard from "./CaseStudyCard.js";
import Games from "./Games.js";

export default function Projects() {
    return (
        <section id="projects" className="w-full py-24 px-6 bg-black text-gray-100">
            <div className="max-w-6xl mx-auto">

                <h2 className="text-4xl sm:text-5xl font-Galindo tracking-wide text-[#4df7c7] mb-12 text-center">
                    Projects
                </h2>

                <div className="flex flex-col gap-16">

                    {/* MoneyMaker */}
                    <CaseStudyCard
                        title="MoneyMaker"
                        tagline="A production-ready budgeting app built from the ground up."
                        description="MoneyMaker helps users track spending, manage categories, and understand their finances visually. I designed the entire system — database schema, API, authentication, frontend UI, and deployment — with production in mind."
                        bullets={[
                            "REST API with Node, Express, Prisma",
                            "PostgreSQL schema for budgets, items, and transactions",
                            "Secure JWT authentication",
                            "Responsive React + Tailwind UI",
                            "Dockerized backend + GitHub Actions CI/CD",
                            "AWS EC2 deployment with ECR",
                            "Bank-sync foundation (Plaid-ready)"
                        ]}
                        tech="React, TypeScript, Node.js, Express, PostgreSQL, Prisma, JWT, Docker, AWS"
                        mediaType="video"
                        media="/megaUnited.mp4"
                    />

                    {/* MicroMouse */}
                    <ProjectCard
                        title="MicroMouse Robotics"
                        tagline="A fully autonomous maze-solving robot built from scratch."
                        description="I designed firmware and control systems for an autonomous robot that navigates a maze using sensors, pathfinding algorithms, and precise motor control."
                        bullets={[
                            "STM32 firmware in C/C++",
                            "IR sensor integration + filtering",
                            "PID motor control algorithms",
                            "Maze mapping + flood-fill pathfinding",
                            "Real-time control tuning",
                            "Team collaboration + engineering leadership"
                        ]}
                        tech="STM32, C/C++, Sensors, Algorithms, Motor Control"
                        video="/microMouse.mp4"
                    />
                    {/*UP Contribution */}
                    <ProjectCard
                        title="UP Contribution"
                        tagline="A fully autonomous maze-solving robot built from scratch."
                        description="I designed firmware and control systems for an autonomous robot that navigates a maze using sensors, pathfinding algorithms, and precise motor control."
                        bullets={[
                            "STM32 firmware in C/C++",
                            "IR sensor integration + filtering",
                            "PID motor control algorithms",
                            "Maze mapping + flood-fill pathfinding",
                            "Real-time control tuning",
                            "Team collaboration + engineering leadership"
                        ]}
                        tech="STM32, C/C++, Sensors, Algorithms, Motor Control"
                        video="/UPContributions.mp4"
                    />

                    {/* Music */}
                    <ProjectCard
                        title="Mega United"
                        tagline="Technical precision meets creative expression."
                        description="Beyond engineering, I produce music and create custom beats and piano arrangements — combining creativity with technical skill."
                        bullets={[
                            "Custom beats and sound design",
                            "Piano performance and arrangement",
                            "Artist placements + collaborations",
                            "Digital mixing and mastering workflows",
                            "Sound design systems and templates"
                        ]}
                        tech="Logic Pro, FL Studio, MIDI, Mixing, Sound Design"
                        video="/megaUnited.mp4"
                    />

                </div>
            </div>
        </section>
    );
}


interface ProjectProps {
    title: string;
    tagline: string;
    description: string;
    bullets: string[];
    tech: string;
    video: string;
}

function ProjectCard({ title, tagline, description, bullets, tech, video }: ProjectProps) {
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
                    <h3 className="text-3xl font-Galindo text-[#4df7c7] mb-2">{title}</h3>
                    <p className="text-lg text-gray-300 mb-4">{tagline}</p>
                    <p className="text-gray-400 mb-6">{description}</p>

                    <ul className="text-gray-400 mb-6 space-y-2">
                        {bullets.map((b, i) => (
                            <li key={i}>• {b}</li>
                        ))}
                    </ul>

                    <p className="text-sm text-gray-500 italic">Tech: {tech}</p>
                </div>

                {/* MEDIA (VIDEO INSTEAD OF IMAGE) */}
                <div className="flex items-center justify-center">
                    <motion.video
                        src={video}
                        controls
                        className="rounded-xl shadow-lg w-full h-auto object-cover"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.3 }}
                    />
                </div>

            </div>
        </motion.div>
    );
}
