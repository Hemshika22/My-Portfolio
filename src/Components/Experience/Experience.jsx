// import React from 'react'
// import { experiences } from '../../constants'

// const Experience = () => {
//   return (
//     <section
//     id="experience"
//     className='py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom'>

//     {/* SECTION TITLE */}
//     <div className='text-center mb-16'>
//       <h2 className='text-4xl sm:text-4xl font-bold text-white'>EXPERIENCE</h2>
//       <div className='w-32 mx-auto h-1 bg-[#9929EA] mt-2'></div>
//       <p className='mt-4 text-gray-400 text-lg font-semibold'>A showcase of my technical skills and creative expertise, refined through hands-on projects and real-world experience.</p>
//     </div>

//     {/* EXPERIENCE CONTENT */}
//     <div className='relative'>
//     {/* vrtical line */}
//     <div className='absolute sm:left-1/2 left-0 transform -translate-x-2 sm:translate-x-0 w-1 bg-white h-full'></div>
//     {/* experience items */}
//     {experiences.map((experience, index) => (
//       <div 
//       key={experience.id} 
//       className={`flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-center ${index % 2 === 0 ? 'sm:justify-end' : 'sm:justify-start'}`}>
//         {/* dot */ }   
//         <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 border-#9929EA w-6 h-6 rounded-full z-10 sm:w-16 sm:h-16'>
//           <img 
//           src={experience.logo} 
//           alt={experience.company} 
//           className='w-full h-full object-contain' />
//         </div>

//         {/* content section */}
//         <div className={`w-full sm:max-w-md p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-900 backdrop-blur-md 
//         ${index % 2 === 0 ? 'sm:ml-16' : 'sm:mr-16'} sm:ml-44 sm:mr-44 ml-8 transform transition-transform duration-300 hover:scale-105`}>
       
//        {/* Flex container for image and text */}
//        <div className='flex items-center space-x-6'>
//        {/* Image */}
//        <div className='w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden'>
//          <img 
//          src={experience.logo} 
//          alt={experience.company} 
//          className='w-full h-full object-cover' />
//        </div>

//        {/* Text */}
//        <div>
//          <h3 className='text-lg font-semibold text-white'>{experience.company}</h3>
//          <p className='text-sm text-gray-400'>{experience.position}</p>
//        </div>
//      </div>

//         </div>
//       </div>
//     ))}
//     </div>
//     </section>
//   )
// }

// export default Experience
