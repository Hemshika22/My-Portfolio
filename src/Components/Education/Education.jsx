import React from "react";
import { motion } from "framer-motion";
import { educationData } from "../../constants";


const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[20vw] bg-[#0a0f1c] clip-path-custom"
    >
      {/* SECTION TITLE */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-24 mx-auto h-1 bg-[#9929EA] mt-2"></div>
        <p className="mt-4 text-gray-400 text-lg font-semibold">
          My academic journey that shaped my technical and problem-solving
          foundation.
        </p>
      </div>

      {/* TIMELINE */}
      <div className="relative border-l-4 border-[#9929EA] ml-4 md:ml-10">
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
            <span className="absolute w-5 h-5 bg-[#9929EA] rounded-full mt-2 -left-[12px] border-4 border-[#0a0f1c]"></span>

            {/* Card */}
            <div className="bg-gray-900 backdrop-blur-md p-6 rounded-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] hover:shadow-purple-500/30 transition">
              <h3 className="text-xl font-semibold text-gray-200">
                {edu.degree}
              </h3>
              <p className="text-sm text-gray-400">{edu.institute}</p>
              <span className="inline-block bg-[#9929EA]/20 text-[#9929EA] text-xs px-3 py-1 rounded-full mt-2">
                {edu.year}
              </span>
              <p className="text-gray-400 mt-3 text-sm">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
