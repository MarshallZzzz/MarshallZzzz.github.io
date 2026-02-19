import { useRef } from "react"
import IntroGate from './IntroGate.js'
import Hero from './components/Hero.tsx'
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education.js'
import Projects from './components/Projects.js'
import Games from './components/Games.js'
import Skills from './components/Skills.js'
import Contact from './components/Contact.js'

function App() {
  const profileRef = useRef<HTMLImageElement>(null)

  return (
    <IntroGate profileRef={profileRef}>
      <div className='relative bg-[#000001] opacity-90 min-h-screen overflow-x-hidden text-white'>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(77,247,199,0.08),transparent_60%)]" />
        <Navbar />
        <Hero profileRef={profileRef} />
        <About />
        <Education/>
        <Projects />
        <Games />
        <Skills/>
        <Contact />
      </div>
    </IntroGate>
  )
}

export default App
