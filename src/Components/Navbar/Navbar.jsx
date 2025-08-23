import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId)
    setIsOpen(false)
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 
        px-6 md:px-12 lg:px-32
        ${isScrolled ? 
        'bg-[#0a192f]/90 bg-opacity-90 backdrop-blur-md border border-white/10 shadow-lg' : 'bg-transparent'}`}
    >
      <div className='text-white py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-lg font-semibold cursor-pointer'>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Hemshika</span>
          <span className='text-[#8245ec]'>/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-8 text-gray-300'>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] transition-colors 
                ${activeSection === item.id ? 'text-[#8245ec]' : ''}`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
            </li>
          ))}
        </ul>

        {/* Desktop Social Icons */}
        <div className='hidden md:flex space-x-4 items-center'>
          <a
            href="https://github.com/Hemshika22"
            target="_blank"
            rel="noopener noreferrer"
            className='text-gray-300 hover:text-[#8245ec] transition-colors'
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/hemshika-gautam/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-gray-300 hover:text-[#8245ec] transition-colors'
          >
            <FaLinkedin size={22} />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden'>
          {isOpen ? (
            <FiX
              className='text-gray-300 hover:text-[#8245ec] cursor-pointer'
              size={26}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className='text-gray-300 hover:text-[#8245ec] cursor-pointer'
              size={26}
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className='absolute top-16 left-1/2 transform -translate-x-1/2 
            w-[90%] max-w-sm bg-[#0a192f] bg-opacity-10 
            shadow-md rounded-lg py-6 px-6 z-50 animate-fadeIn'
        >
          <ul className='flex flex-col space-y-4 text-gray-300'>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-white transition-colors 
                  ${activeSection === item.id ? 'text-[#8245ec]' : ''}`}
              >
                <button onClick={() => handleMenuItemClick(item.id)}>{item.label}</button>
              </li>
            ))}

            {/* Mobile Social Icons */}
            <div className='flex space-x-4 pt-4'>
              <a
                href="https://github.com/Hemshika22"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/hemshika-gautam/"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-white transition-colors'
              >
                <FaLinkedin size={22} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
