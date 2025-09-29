import { motion } from "motion/react";

export function About() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            About Me
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              I'm a passionate designer and developer with a love for creating
              digital experiences that are both beautiful and functional. With
              years of experience in the industry, I specialize in web development,
              UI/UX design, and brand identity.
            </p>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              My approach combines creative thinking with technical expertise to
              deliver solutions that not only look great but also solve real
              problems for users and businesses.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="mb-3 text-gray-900">Skills</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>React & TypeScript</li>
                  <li>UI/UX Design</li>
                  <li>Brand Identity</li>
                  <li>Product Strategy</li>
                </ul>
              </div>

              <div>
                <h4 className="mb-3 text-gray-900">Tools</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>VS Code</li>
                  <li>GitHub</li>
                  <li>Figma</li>
                  <li>Adobe Creative Suite</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl aspect-square flex items-center justify-center">
              <div className="w-16 h-16 bg-black rounded-full"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}