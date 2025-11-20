import { motion } from "framer-motion";

export default function Contact() {
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
              href="mailto:marshalldz123@gmail.com"
              className="hover:text-[#4df7c7] transition"
            >
              marshalldz123@gmail.com
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
        </div>
      </motion.div>
    </section>
  );
}
