import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../../constants";


const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] clip-path-custom"
      style={{ backgroundColor: 'var(--surface-bg)' }}
    >
      {/* SECTION TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-main)]">EDUCATION</h2>
        <div className="w-24 mx-auto h-1 mt-2" style={{ backgroundColor: 'var(--accent)' }}></div>
        <p className="mt-4 text-[var(--text-muted)] text-lg font-semibold">
          My academic journey that shaped my technical and problem-solving
          foundation.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative border-l-4 ml-4 md:ml-10" style={{ borderColor: 'var(--accent)' }}>
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="mb-10 ml-6"
          >
            {/* Timeline Dot */}
            <span className="absolute w-5 h-5 rounded-full mt-2 -left-[12px] border-4" style={{ backgroundColor: 'var(--accent)', borderColor: 'var(--surface-bg)' }}></span>

            {/* Card */}
            <div className="backdrop-blur-md p-6 rounded-2xl shadow-[0_0_20px_1px_var(--hero-glow)] hover:shadow-[0_0_24px_1px_var(--hero-glow)] transition" style={{ backgroundColor: 'var(--panel-bg)' }}>
              <h3 className="text-xl font-semibold text-[var(--text-main)]">
                {edu.degree}
              </h3>
              <p className="text-sm text-[var(--text-muted)]">{edu.institute}</p>
              <span className="inline-block text-xs px-3 py-1 rounded-full mt-2" style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 18%, transparent)', color: 'var(--accent)' }}>
                {edu.year}
              </span>
              <p className="text-[var(--text-muted)] mt-3 text-sm">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
