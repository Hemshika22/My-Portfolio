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
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] bg-[#0a0f1c] clip-path-custom"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          CERTIFICATIONS
        </h2>
        <div className="w-24 mx-auto h-1 bg-[#9929EA] mt-2"></div>
        <p className="mt-4 text-gray-400 text-lg font-semibold">
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
            className="bg-gray-900 p-6 rounded-2xl border border-white/10 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-purple-500/30 transition"
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
            <h3 className="text-xl font-semibold text-gray-200 mb-1">
              {cert.title}
            </h3>
            <p className="text-sm text-gray-400">{cert.issuer}</p>
            <span className="inline-block bg-[#9929EA]/20 text-[#9929EA] text-xs px-3 py-1 rounded-full mt-2">
              {cert.date}
            </span>

            {/* View Certificate Button */}
            <div className="mt-4">
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold px-4 py-2 rounded-full text-white transition-all inline-block"
                style={{
                  background: "linear-gradient(90deg, #9929EA, #4BC0C8)",
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
