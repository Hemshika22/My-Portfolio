import React from 'react'
import { SkillsInfo } from '../../constants';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <section
      id="skills"
      className='py-24 px-5 sm:px-8 lg:px-[14vw] clip-path-custom'
      style={{ background: 'var(--skills-gradient)' }}>

      {/* SECTION TITLE */}
      <div className='text-center mb-8'>
        <h2 className='text-3xl sm:text-4xl font-bold text-[var(--text-main)]'>SKILLS</h2>
        <div className='w-24 mx-auto h-1 mt-2' style={{ backgroundColor: 'var(--accent)' }}></div>
        <p className='mt-4 text-[var(--text-muted)] text-lg font-semibold'>
          A showcase of my technical skills and creative expertise, refined through hands-on projects and real-world experience.
        </p>
      </div>

      {/* Skills categories */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 py-10'>
        {SkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}  // left or right based on index
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="backdrop-blur-md px-5 sm:px-6 py-6 rounded-2xl border shadow-[0_0_20px_1px_var(--hero-glow)]"
            style={{ backgroundColor: 'var(--panel-bg)', borderColor: 'var(--border-color)' }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--text-main)] mb-5">{category.title}</h3>

            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 w-full">
              {category.skills.map((skill) => {
                const Icon = skill.icon

                return (
                  <li
                    key={skill.name}
                    className="group relative rounded-xl p-[1px] transition-all duration-300 hover:scale-[1.03]"
                    style={{ background: 'linear-gradient(90deg, var(--accent), var(--accent-2))' }}
                  >
                      <div className="flex min-h-[64px] items-center justify-center gap-2 rounded-xl px-3 py-3 transition-all duration-300 group-hover:shadow-[0_0_18px_var(--hero-glow)]" style={{ backgroundColor: 'var(--surface-alt)' }}>
                      {skill.logo ? (
                        <img
                          src={skill.logo}
                          alt={skill.name}
                          className="w-7 h-7 object-contain"
                        />
                      ) : Icon ? (
                        <Icon className="h-5 w-5 text-[var(--accent-2)]" />
                      ) : null}

                      <span className="text-xs sm:text-sm text-[var(--text-main)] font-semibold text-center leading-tight">
                        {skill.name}
                      </span>
                    </div>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Skills
