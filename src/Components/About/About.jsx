import React from 'react'
import TypeWriter from 'typewriter-effect';
import Tilt from 'react-parallax-tilt';
import robo from "../../assets/robo.png";
import { motion } from "framer-motion";
import  Resume  from '../../assets/Resume.pdf';
import Resume2 from '../../assets/HEMSHIKA_Python_FullStackDeveloper.pdf';

const About = () => {
  return (
    <section 
    id="about"
    className='py-6 px-5 sm:px-8 lg:px-[14vw] font-poppins mt-16 md:mt-24'
    >

    <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-10'>
   

{/* left side */}
<div className='w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
  
  {/* Greetings */}
  <motion.h1
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-2 leading-tight"
  >
    😎Yo, I'm <span className='text-[var(--accent)]'>Hemshika 👋</span>
  </motion.h1>

  {/* Skills heading with typing effect */}
  <motion.h3
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
    className='text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--text-main)] leading-tight'
  >
    I am a{" "}
    <span className="text-[var(--accent)] inline-block">
      <TypeWriter
        options={{
          strings: [
            '<span style="color:var(--accent)">Frontend Developer</span>',
            '<span style="color:var(--accent-2)">UI/UX Designer</span>',
            '<span style="color:var(--accent)">Full Stack Developer</span>',
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
          delay: 75,
        }}
      />
    </span>
  </motion.h3>

  {/* Description */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 1 }}
    className='text-base sm:text-lg md:text-lg text-[var(--text-muted)] mb-10 mt-8 leading-relaxed'
  >
    I’m Hemshika — a creative mind and problem-solver who blends design and code
    to build sleek, responsive, and user-focused digital experiences.
  </motion.p>

  {/* Resume Button */}
  <motion.a
    href={Resume2}
    target='_blank'
    rel='noopenernoreferrer'
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 1.3 }}
    className='px-8 py-3 mt-5 inline-block text-[var(--accent-contrast)] font-bold rounded-full transition duration-300 ease-in-out hover:scale-105 transform shadow-md hover:shadow-lg'
    style={{
      transition: "background-color 0.3s ease-in-out",
      background: "linear-gradient(90deg, var(--accent), var(--accent-2))",
      boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    }}
  >
    DOWNLOAD CV
  </motion.a>
</div>



{/* right side */}
<div className="w-full md:w-1/2 flex justify-center md:justify-end items-center">
  <Tilt
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    perspective={1000}
    scale={1.05}
    transitionSpeed={1000}
    className="relative"
  >
    {/* Outer gradient circle */}
    <div className="w-[17rem] h-[17rem] sm:w-[21rem] sm:h-[21rem] md:w-[24rem] md:h-[24rem] p-2">
      {/* Inner circle with border */}
      <div className="w-full h-full  overflow-hidden">
        <img
          src={robo}
          alt="Hemshika"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  </Tilt>
</div>

    </div>
    </section>
  )
}

export default About



// <div className="w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full p-[10px] bg-gradient-to-r from-purple-500 to-cyan-400">
//   <div className="w-full h-full rounded-full border-4 border-gray-300 overflow-hidden"></div>