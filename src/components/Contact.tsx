import { motion } from "framer-motion";
import * as Icon from "lucide-react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

export default function Contact() {
    const resumeHref = "/Marshall_Zhang_Resume_CV.pdf"
    const resumeFileName = "Marshall_Zhang_Resume_CV.pdf"
    const formRef = useRef<HTMLFormElement>(null);
    const tip = "pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-[calc(100%+6px)] " + "text-[11px] px-2 py-0.5 rounded-md bg-black/70 text-white " + "opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap";

    const [loading, setLoading] = useState(false);

    const sendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formRef.current) return;

        setLoading(true);

        try {
            await emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            toast.success("Message sent successfully 🚀");
            formRef.current.reset();
        } catch (error) {
            toast.error("Something went wrong. Try again.");
        }

        setLoading(false);
    };

    const inputBase =
        "peer w-full bg-transparent border border-white/20 rounded-lg px-4 pt-6 pb-2 text-white " +
        "focus:outline-none focus:border-[#4df7c7] transition";

    const labelBase =
        "absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:top-4 " +
        "peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 " +
        "peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#4df7c7]";

    return (
        <section
            id="contact"
            className="w-full py-24 px-6 bg-black text-gray-200 flex justify-center"
        >
            <Toaster position="top-right" />

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-xl w-full"
            >
                <h2 className="text-4xl sm:text-5xl font-Galindo text-[#4df7c7] mb-10 text-center">
                    Contact
                </h2>

                {/* Minimal Social Icons */}
                <div className="flex justify-center gap-6 mt-8 mb-8 text-gray-400">
                    {/* LinkedIn */}
                    <a
                        href="https://www.linkedin.com/in/marshall-zhang-a23002291"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View LinkedIn"
                        aria-label="View LinkedIn"
                        className="group relative inline-flex items-center justify-center 
               w-9 h-9 rounded-full hover:bg-black/5 
               dark:hover:bg-white/10 transition 
               transform hover:scale-110 active:scale-95"
                    >
                        <Icon.Linkedin />
                        <span className={tip}>LinkedIn</span>
                    </a>

                    {/* GitHub */}
                    <a
                        href="https://github.com/MarshallZzzz"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="View GitHub"
                        aria-label="View GitHub"
                        className="group relative inline-flex items-center justify-center 
               w-9 h-9 rounded-full hover:bg-black/5 
               dark:hover:bg-white/10 transition 
               transform hover:scale-110 active:scale-95"
                    >
                        <Icon.Github />
                        <span className={tip}>GitHub</span>
                    </a>

                    <a
                        href={resumeHref}
                        download={resumeFileName}
                        title="Download resume"
                        aria-label="Download resume"
                        className="group relative inline-flex items-center justify-center w-9 h-9 rounded-full
                            hover:bg-black/5 dark:hover:bg-white/10 transition transform hover:scale-110 active:scale-95" >
                        <Icon.Newspaper />
                        <span className={tip}>Download Resume</span>
                    </a>

                </div>

                {/* Glassmorphism Card */}
                <div
                    className="backdrop-blur-xl bg-white/5 border border-white/10 
                     rounded-2xl p-8 shadow-[0_0_40px_rgba(77,247,199,0.1)]"
                >
                    <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
                        {/* Name */}
                        <div className="relative">
                            <input
                                type="text"
                                name="user_name"
                                placeholder=" "
                                required
                                className={inputBase}
                            />
                            <label className={labelBase}>Your Name</label>
                        </div>

                        {/* Email */}
                        <div className="relative">
                            <input
                                type="email"
                                name="user_email"
                                placeholder=" "
                                required
                                className={inputBase}
                            />
                            <label className={labelBase}>Your Email</label>
                        </div>

                        {/* Subject */}
                        <div className="relative">
                            <input
                                type="text"
                                name="subject"
                                placeholder=" "
                                className={inputBase}
                            />
                            <label className={labelBase}>Subject</label>
                        </div>

                        {/* Message */}
                        <div className="relative">
                            <textarea
                                name="message"
                                rows={5}
                                placeholder=" "
                                required
                                className={`${inputBase} resize-none`}
                            />
                            <label className={labelBase}>Your Message</label>
                        </div>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-3 rounded-lg bg-[#4df7c7] text-black font-semibold
                         transition transform hover:scale-[1.02] active:scale-[0.98]
                         disabled:opacity-60"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
