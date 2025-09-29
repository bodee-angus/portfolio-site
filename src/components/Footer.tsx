import { motion } from "motion/react";
import { Mail, Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";

export function Footer() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it.
            Let's create something amazing together.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full"
              onClick={() => window.open('mailto:hello@bodeeangus.com', '_blank')}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <p className="text-gray-400">
            © 2025 BoDee Angus. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}