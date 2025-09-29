import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Modern Web Platform",
    description: "A responsive web application built with React and modern design principles, focusing on user experience and performance.",
    image: "https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXNpZ258ZW58MXx8fHwxNzU5MDM4MDU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    url: "https://example.com/project1",
    category: "Web Development"
  },
  {
    title: "Mobile App Interface",
    description: "Intuitive mobile application design with seamless user interactions and clean visual hierarchy.",
    image: "https://images.unsplash.com/photo-1658953229625-aad99d7603b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzU5MDc1NzAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    url: "https://example.com/project2",
    category: "UI/UX Design"
  },
  {
    title: "Creative Workspace",
    description: "Digital workspace solution designed to enhance productivity and collaboration for creative teams.",
    image: "https://images.unsplash.com/photo-1510832758362-af875829efcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NTkwMzU0MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    url: "https://example.com/project3",
    category: "Product Design"
  },
  {
    title: "Brand Identity System",
    description: "Comprehensive branding solution including logo design, typography, and visual guidelines for modern businesses.",
    image: "https://images.unsplash.com/photo-1690228254548-31ef53e40cd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwYnJhbmRpbmclMjBkZXNpZ258ZW58MXx8fHwxNzU5MDg2MTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    url: "https://example.com/project4",
    category: "Branding"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A selection of recent work showcasing creativity, technical expertise,
            and attention to detail across various digital platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}