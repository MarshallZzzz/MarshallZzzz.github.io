import { useState } from 'react'
import Hero from './components/Hero.tsx'
import CaseStudyCard from './components/CaseStudyCard.js'
import About from './components/About'
import Navbar from './components/Navbar'
import Games from './components/Games.js'
import Projects from './components/Projects.js'
import Contact from './components/Contact.js'
import { Meteors } from './components/ui/shadcn-io/meteors/Meteors.js'

function App() {

  return (
    <div className='relative bg-[#000001] opacity-90 min-h-screen overflow-x-hidden text-white'>
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <Meteors number={50} />
      </div>


      <Navbar />

      <Hero />
      <About />
      {/* Projects */}
      <section id='projects' className=''>
        {/* <div className='p-8'/> */}
        <Projects />
      </section>


      <section id='gameDesign' className='pb-16'>
        <Games />
      </section>
      <section id='Contact' className=''>
        {/* <div className='p-8'/> */}
        <Contact />
      </section>

    </div>
  )
}

export default App
