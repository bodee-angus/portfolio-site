import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-7xl mb-6 tracking-tight">
            BoDee Angus
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Creative designer and developer crafting exceptional digital experiences
            with attention to detail and user-centered design.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-black text-white hover:bg-gray-800 px-8 py-3 rounded-full"
            >
              <a href="#projects">View My Work</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}