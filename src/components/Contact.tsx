import { motion } from "framer-motion";
import * as Icon from 'lucide-react';

export default function Contact() {
    const resumeHref = "/Marshall_Zhang_Resume.pdf"
    const resumeFileName = "Marshall_Zhang_Resume.pdf"

    const tip =
        "pointer-events-none absolute left-1/2 -translate-x-1/2 top-[calc(100%+6px)] " +
        "text-[11px] px-2 py-0.5 rounded-md bg-black/70 text-white " +
        "opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap";

    return (
        <section
            id="contact"
            className="w-full py-24 px-6 bg-black text-gray-200 flex justify-center"
        >
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="max-w-xl text-center"
            >
                <h2 className="text-4xl sm:text-5xl font-Galindo text-[#4df7c7] mb-8">
                    Contact
                </h2>

                <p className="text-lg text-gray-300 mb-6">
                    Let’s build something. Whether you have a project in mind, want to
                    collaborate, or simply want to say hello, feel free to reach out —
                    I’d love to talk.
                </p>

                <div className="text-gray-300 space-y-2">
                    <p>
                        <span className="text-[#4df7c7] font-semibold">Email:</span>{" "}
                        <a
                            href="mailto:marshall.zhang02@gmail.com"
                            className="hover:text-[#4df7c7] transition"
                        >
                            marshall.zhang02@gmail.com
                        </a>
                    </p>

                    <p>
                        <span className="text-[#4df7c7] font-semibold">GitHub:</span>{" "}
                        <a
                            href="https://github.com/MarshallZzzz"
                            target="_blank"
                            className="hover:text-[#4df7c7] transition"
                        >
                            github.com/MarshallZzzz
                        </a>
                    </p>
                    <p>
                        <span className="text-[#4df7c7] font-semibold">Linkedin:</span>{" "}
                        <a
                            href="www.linkedin.com/in/marshall-zhang-a23002291"
                            target="_blank"
                            className="hover:text-[#4df7c7] transition"
                        >
                            Marshall Zhang
                        </a>
                    </p>
                    <div>
                        <a
                            href={resumeHref}
                            download={resumeFileName}
                            title="Download resume"
                            aria-label="Download resume"
                            className="group relative inline-flex items-center justify-center w-9 h-9 rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition transform hover:scale-110 active:scale-95"
                        >
                            <Icon.Newspaper />
                            <span className={tip}>Download Resume</span>
                        </a>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
