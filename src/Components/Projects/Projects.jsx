import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../constants";

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-24 px-[7vw] md:px-[10vw] lg:px-[15vw] text-[var(--text-main)]"
      style={{ backgroundColor: 'var(--surface-bg)' }}
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold"
        >
          PROJECTS
        </motion.h2>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-24 mx-auto h-1 mt-2"
          style={{ backgroundColor: 'var(--accent)' }}
        ></motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 text-[var(--text-muted)] text-lg font-semibold"
        >
          A collection of my featured work, blending creativity, functionality,
          and problem-solving.
        </motion.p>
      </div>

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((proj, index) => (
          <motion.div
            key={proj.id}
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="backdrop-blur-md rounded-2xl shadow-lg border overflow-hidden flex flex-col"
            style={{ backgroundColor: 'var(--panel-bg)', borderColor: 'var(--border-color)' }}
          >
            {/* Image / Video
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
              {/* Optional Video Preview */}
              {/* <video src={proj.video} autoPlay loop muted className="w-full h-full object-cover"></video> */}
            {/* </div> * */}

            {/* videoo */}
            <div className="relative w-full h-52 overflow-hidden">
            {proj.video ? (
              <video 
                src={proj.video} 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover"
              />
            )}
          </div>
              


            {/* Content */}
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold text-[var(--text-main)] mb-2">
                {proj.title}
              </h3>
              <p className="text-[var(--text-muted)] text-sm flex-1">{proj.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-4">
                {proj.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 18%, transparent)', color: 'var(--accent)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex justify-between items-center mt-6">
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[var(--text-muted)] hover:text-[var(--text-main)] transition"
                >
                  🔗 GitHub
                </a>
                <a
                  href={proj.webapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-sm font-semibold rounded-full text-[var(--accent-contrast)] transition-all"
                  style={{
                    background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                  }}
                >
                  Live Demo 🚀
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
