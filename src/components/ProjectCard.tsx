import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  url: string;
  category: string;
}

export function ProjectCard({ title, description, image, url, category }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group cursor-pointer"
      onClick={() => window.open(url, '_blank')}
    >
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300">
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          <ImageWithFallback
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-gray-500 uppercase tracking-wide">
              {category}
            </span>
            <ExternalLink
              className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors"
            />
          </div>

          <h3 className="mb-2 group-hover:text-gray-600 transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}