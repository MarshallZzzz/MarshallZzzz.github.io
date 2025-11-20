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
                        title={<a href='http://3.15.138.247:3000/' target='_blank' rel='noopener noreferrer'><span className="underline text-[#4df7c7]">MoneyMaker</span></a>}
                        tagline="A production-ready budgeting app built from the ground up."
                        description="MoneyMaker helps users track spending, manage categories, and understand their finances visually. 
                        I designed the entire system — database schema, API, authentication, frontend UI, and deployment — with production in mind."
                        bullets={[
                            "REST API with Node, Express, Prisma",
                            "PostgreSQL schema for budgets, items, and transactions",
                            "Secure JWT authentication",
                            "Responsive React + Tailwind UI",
                            "Dockerized backend + GitHub Actions CI/CD",
                            "AWS EC2 deployment with ECR",
                            "Bank-sync foundation (Plaid-ready)"
                        ]}
                        tech="React, JavaScript, Node.js, Express, PostgreSQL + Prisma, JWT, Docker, AWS EC2 + ECR"
                        mediaType="video"
                        media="/MoneyMaker.mp4"
                    />

                    {/* MicroMouse */}
                    <CaseStudyCard
                        title="MicroMouse"
                        tagline="A fully autonomous maze-solving robot built from scratch."
                        description="Led my team of 4 in designing firmware and control systems for an autonomous robot that navigates a maze using sensors, pathfinding algorithms, and precise motor control."
                        bullets={[
                            "STM32 firmware in C",
                            "IR sensor integration + filtering",
                            "PID motor control algorithms",
                            "Maze mapping + flood-fill pathfinding",
                            "Real-time control tuning",
                            "Team collaboration + engineering leadership",
                            "APEC MicroMouse Competition 2025"
                        ]}
                        tech="STM32, C, IR Sensors, Algorithms, Motor Control"
                        mediaType="video"
                        media="./microMouse.mp4"
                    />
                    {/*UP Contribution */}
                    <CaseStudyCard
                        title="UP Contribution"
                        tagline="A full-stack map pinning website to visualize UP contributions around the world."
                        description="Led a team of 5 to revitalize an existing code base, update the University's database, and deploy on Microsoft Azure on university server."
                        bullets={[
                            "HTML + CSS",
                            "Microsoft Azure",
                            "Agile Sprint Methodology + Trello Task Organization",
                            "CI/CD + GitHub",
                            "Team collaboration + engineering leadership"
                        ]}
                        tech="HTML, CSS, Azure, Agile, GitHub, CI/CD, Trello"
                        mediaType="video"
                        media="./UPContributions.mp4"
                    />

                    {/* Music */}
                    <CaseStudyCard
                        title="Mega United"
                        tagline="Full-Stack responsive portfolio website"
                        description="Portfolio website that displays construction projects, specs, and company's history. Features include map features, contact page, progress bar, galleries, and reactive components. "
                        bullets={[
                            "REST API with Node.js + Express",
                            "MongoDB Database",
                            "Responsive React Components + Tailwind UI"
                        ]}
                        tech="MongoDB, React, Node.js, Express "
                        mediaType="video"
                        media="/megaUnited.mp4"
                    />

                </div>
            </div>
        </section>
    );
}