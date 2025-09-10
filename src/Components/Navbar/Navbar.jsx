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

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.mobile-menu-container') && 
          !event.target.closest('.mobile-menu-button')) {
        setIsOpen(false)
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 
        px-4 sm:px-6 md:px-12 lg:px-32
        ${isScrolled ? 
        'bg-[#0a192f]/90 backdrop-blur-md border-b border-white/10 shadow-lg' : 'bg-transparent'}`}
    >
      <div className='text-white py-3 sm:py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-base sm:text-lg font-semibold cursor-pointer' onClick={() => handleMenuItemClick('home')}>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Hemshika</span>
          <span className='text-[#8245ec]'>/&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className='hidden md:flex space-x-4 lg:space-x-8 text-gray-300'>
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
            <FaGithub size={20} className="sm:text-xl lg:text-2xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/hemshika-gautam/"
            target="_blank"
            rel="noopener noreferrer"
            className='text-gray-300 hover:text-[#8245ec] transition-colors'
          >
            <FaLinkedin size={20} className="sm:text-xl lg:text-2xl" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className='md:hidden mobile-menu-button'>
          {isOpen ? (
            <FiX
              className='text-gray-300 hover:text-[#8245ec] cursor-pointer'
              size={24}
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FiMenu
              className='text-gray-300 hover:text-[#8245ec] cursor-pointer'
              size={24}
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className='absolute top-14 sm:top-16 left-0 right-0 mx-auto 
            w-[95%] sm:w-[90%] max-w-sm bg-[#0a192f] 
            shadow-lg rounded-lg py-4 px-4 sm:py-6 sm:px-6 z-50 
            border border-white/10 backdrop-blur-md 
            transition-all duration-300 mobile-menu-container'
        >
          <ul className='flex flex-col space-y-3 sm:space-y-4 text-gray-300'>
            {menuItems.map((item) => (
              <li
                key={item.id}
                className={`cursor-pointer hover:text-[#8245ec] transition-colors 
                  ${activeSection === item.id ? 'text-[#8245ec]' : ''}`}
              >
                <button 
                  onClick={() => handleMenuItemClick(item.id)}
                  className="w-full text-left py-1 px-2 hover:bg-white/5 rounded transition-colors"
                >
                  {item.label}
                </button>
              </li>
            ))}

            {/* Mobile Social Icons */}
            <div className='flex space-x-4 pt-2 sm:pt-4 border-t border-white/10 mt-2'>
              <a
                href="https://github.com/Hemshika22"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-[#8245ec] transition-colors p-2'
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/hemshika-gautam/"
                target="_blank"
                rel="noopener noreferrer"
                className='text-gray-300 hover:text-[#8245ec] transition-colors p-2'
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar
