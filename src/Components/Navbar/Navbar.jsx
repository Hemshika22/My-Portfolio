import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const themeOptions = [
  { id: 'dark', label: 'Dark' },
  { id: 'light', label: 'Light' },
  { id: 'medium', label: 'Medium' },
  { id: 'green', label: 'Green' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [isScrolled, setIsScrolled] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'dark'
    }

    return window.localStorage.getItem('portfolio-theme') || 'dark'
  })

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

    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    // { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ]

  // Lock body scroll while drawer is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Close drawer on desktop/tablet resize.
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition duration-300 
        px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32
        ${isScrolled ? 'backdrop-blur-md shadow-lg' : 'bg-transparent'}`}
        style={isScrolled ? { backgroundColor: 'var(--nav-bg)', borderBottom: '1px solid var(--border-color)' } : undefined}
      >
        <div className='mx-auto max-w-7xl text-[var(--text-main)] py-3 sm:py-4 flex justify-between items-center gap-3'>
          {/* Logo */}
          <button
            type="button"
            className='text-base sm:text-lg font-semibold cursor-pointer'
            onClick={() => handleMenuItemClick('home')}
          >
            <span className='text-[var(--accent)]'>&lt;</span>
            <span className='text-[var(--text-main)]'>Hemshika</span>
            <span className='text-[var(--accent)]'>/&gt;</span>
          </button>

          {/* Desktop Menu */}
          <ul className='hidden md:flex items-center gap-5 lg:gap-8 text-[var(--text-muted)]'>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`cursor-pointer hover:text-[var(--accent)] transition-colors ${activeSection === item.id ? 'text-[var(--accent)]' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className='hidden md:flex items-center gap-3 lg:gap-4'>
            <div className='flex items-center gap-2 rounded-full border px-2 py-1' style={{ borderColor: 'var(--border-color)', backgroundColor: 'var(--surface-bg)' }}>
              {themeOptions.map((option) => (
                <button
                  key={option.id}
                  type='button'
                  onClick={() => setTheme(option.id)}
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${theme === option.id ? 'text-[var(--accent-contrast)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'}`}
                  style={theme === option.id ? { backgroundColor: 'var(--accent)' } : undefined}
                >
                  {option.label}
                </button>
              ))}
            </div>

          {/* Desktop Social Icons */}
          <div className='hidden md:flex space-x-4 items-center'>
            <a
              href="https://github.com/Hemshika22"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors'
            >
              <FaGithub size={20} className="sm:text-xl lg:text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/hemshika-gautam/"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors'
            >
              <FaLinkedin size={20} className="sm:text-xl lg:text-2xl" />
            </a>
          </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            className='md:hidden inline-flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors'
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
          >
            {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile backdrop */}
      <div
        className={`md:hidden fixed inset-0 bg-black/50 backdrop-blur-[1px] z-40 transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Mobile drawer */}
      <aside
        className={`md:hidden fixed top-0 right-0 h-screen w-[80%] max-w-xs shadow-2xl z-50 transition-transform duration-300 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ backgroundColor: 'var(--surface-bg)', borderLeft: '1px solid var(--border-color)' }}
      >
        <div
          className='flex items-center justify-between px-5 py-4'
          style={{ borderBottom: '1px solid var(--border-color)' }}
        >
          <p className='text-[var(--text-main)] font-semibold'>Menu</p>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className='text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors'
            aria-label='Close menu'
          >
            <FiX size={24} />
          </button>
        </div>

        <div className='px-5 py-5'>
          <div className='flex flex-wrap gap-2 mb-5'>
            {themeOptions.map((option) => (
              <button
                key={option.id}
                type='button'
                onClick={() => setTheme(option.id)}
                className={`rounded-full px-3 py-1 text-xs font-semibold transition-colors ${theme === option.id ? 'text-[var(--accent-contrast)]' : 'text-[var(--text-muted)] hover:text-[var(--text-main)]'}`}
                style={theme === option.id ? { backgroundColor: 'var(--accent)' } : { backgroundColor: 'var(--surface-alt)' }}
              >
                {option.label}
              </button>
            ))}
          </div>

          <ul className='flex flex-col space-y-2 text-[var(--text-muted)]'>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => handleMenuItemClick(item.id)}
                  className={`w-full text-left py-2.5 px-3 rounded-lg transition-colors hover:bg-white/5 hover:text-[var(--accent)] ${activeSection === item.id ? 'text-[var(--accent)] bg-white/5' : ''}`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className='flex space-x-4 pt-5 mt-5' style={{ borderTop: '1px solid var(--border-color)' }}>
            <a
              href="https://github.com/Hemshika22"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors p-2 rounded-full hover:bg-white/5'
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/hemshika-gautam/"
              target="_blank"
              rel="noopener noreferrer"
              className='text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors p-2 rounded-full hover:bg-white/5'
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar
