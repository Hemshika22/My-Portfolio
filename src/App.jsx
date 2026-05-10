import React from 'react'
import Navbar from '../src/Components/Navbar/Navbar'
import About from './Components/About/About'
import Skills from '../src/Components/Skills/Skills'
// import Experience from './Components/Experience/Experience'
import Education from './Components/Education/Education'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import BlurBlob from './BlurBlob'
import Certifications from './Components/Certifications/Certifications'
import Projects from './Components/Projects/Projects'

const App =() => {
  // const [count, setCount] = useState(0)

  return (

    <div className='relative min-h-screen bg-[var(--app-bg)] text-[var(--text-main)] overflow-x-hidden'>

      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

     <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,rgba(148,163,184,0.16)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.16)_1px,transparent_1px)] bg-[size:10px_20px]"></div>

      <div className='relative pt-20'>
        <Navbar />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Education />
        {/* <Certifications /> */}
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
