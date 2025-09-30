import { motion } from "motion/react";
import { ProjectCard } from "./ProjectCard";

import hclColorMixerImg from '../assets/projects/hcl-color-mixer.png';

const projects = [
  {
    title: "HCL Color Mixer",
    description: "A unique tool that utilizes perceptually unifrom colorspaces for color mixing. Built with React and Vite.",
    image: hclColorMixerImg,
    url: "https://bodee-angus.github.io/hcl-color-mixer/",
    category: "Web Development"
  },
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