import { motion } from "framer-motion";

interface CaseStudyProps {
  title: string;
  tagline: string;
  description: string;
  bullets: string[];
  tech: string;
  mediaType: "image" | "video" | "youtube";
  media: string; // src for image/video OR youtube embed URL
}

export default function CaseStudyCard({
  title,
  tagline,
  description,
  bullets,
  tech,
  mediaType,
  media
}: CaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-[#0f0f0f] border border-gray-800 rounded-2xl p-8 shadow-xl relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* TEXT SECTION */}
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

        {/* MEDIA SECTION */}
        <div className="flex items-center justify-center">
          {mediaType === "video" && (
            <motion.video
              src={media}
              controls
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {mediaType === "image" && (
            <motion.img
              src={media}
              alt={title}
              className="rounded-xl shadow-lg w-full h-auto object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          )}

          {mediaType === "youtube" && (
            <motion.iframe
              src={media}
              className="rounded-xl shadow-lg w-full aspect-video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>

      </div>
    </motion.div>
  );
}
