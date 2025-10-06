import { Button } from "./ui/button";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300 via-purple-300 to-indigo-300" />
      </div>

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
