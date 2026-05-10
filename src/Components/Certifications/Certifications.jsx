import React from "react";
import { motion } from "framer-motion";

// Example certifications data (you can update with yours)
const certifications = [
  {
    id: 1,
    title: "Full Stack Web Development",
    issuer: "PW Skills",
    date: "2024",
    logo: "/assets/certificates/pwskills.png",
    link: "https://example.com/cert/fullstack",
  },
  {
    id: 2,
    title: "Machine Learning Specialization",
    issuer: "Coursera – Andrew Ng",
    date: "2025",
    logo: "/assets/certificates/coursera.png",
    link: "https://example.com/cert/ml",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025",
    logo: "/assets/certificates/aws.png",
    link: "https://example.com/cert/aws",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] clip-path-custom"
      style={{ backgroundColor: 'var(--surface-bg)' }}
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-[var(--text-main)]">
          CERTIFICATIONS
        </h2>
        <div className="w-24 mx-auto h-1 mt-2" style={{ backgroundColor: 'var(--accent)' }}></div>
        <p className="mt-4 text-[var(--text-muted)] text-lg font-semibold">
          Achievements and credentials that validate my technical skills.
        </p>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="p-6 rounded-2xl border shadow-[0_0_20px_1px_var(--hero-glow)] hover:shadow-[0_0_24px_1px_var(--hero-glow)] transition"
            style={{ backgroundColor: 'var(--panel-bg)', borderColor: 'var(--border-color)' }}
          >
            {/* Logo */}
            <div className="flex justify-center mb-4">
              <img
                src={cert.logo}
                alt={cert.issuer}
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-[var(--text-main)] mb-1">
              {cert.title}
            </h3>
            <p className="text-sm text-[var(--text-muted)]">{cert.issuer}</p>
            <span className="inline-block text-xs px-3 py-1 rounded-full mt-2" style={{ backgroundColor: 'color-mix(in srgb, var(--accent) 18%, transparent)', color: 'var(--accent)' }}>
              {cert.date}
            </span>

            {/* View Certificate Button */}
            <div className="mt-4">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-4 py-2 rounded-full text-[var(--accent-contrast)] transition-all inline-block"
                style={{
                  background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
                }}
              >
                View Credential 🔗
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
