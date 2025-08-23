import React from 'react'
import Tilt from 'react-parallax-tilt';
import { SkillsInfo } from '../../constants';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section
      id="skills"
      className='py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[20vw] bg-skills-gradient clip-path-custom'>

      {/* SECTION TITLE */}
      <div className='text-center mb-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-white'>SKILLS</h2>
        <div className='w-24 mx-auto h-1 bg-[#9929EA] mt-2'></div>
        <p className='mt-4 text-gray-400 text-lg font-semibold'>
          A showcase of my technical skills and creative expertise, refined through hands-on projects and real-world experience.
        </p>
      </div>

      {/* Skills categories */}
      <div className='flex flex-wrap justify-center lg:gap-5 gap-3 py-10'>
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}  // left or right based on index
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="bg-gray-900 backdrop-blur-md px-6 sm:px-8 py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white/10 shadow-[0_0_20px_1px_rgba(130,69,236,0.3)]"
          >
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">{category.title}</h3>

            {/* skills items */}
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.05}
              transitionSpeed={1000}
              className="relative"
            >
              <ul className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-4 w-full">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    className="flex items-center justify-center space-x-3 bg-gray-800/30 border border-gray-700 rounded-lg px-4 py-2 
                               transition-all duration-300 ease-in-out hover:scale-105 hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/20 cursor-pointer"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-8 h-8 object-contain"
                    />
                    <span className="text-xs sm:text-sm text-gray-200 font-semibold">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
