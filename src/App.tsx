import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Awards from './components/Awards'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <div className="min-h-screen text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      <main>
        <section id="home">
          <Hero setActiveSection={setActiveSection} />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="awards">
          <Awards />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="bg-slate-900/80 backdrop-blur-sm border-t border-slate-700 py-8 text-center text-slate-400">
        <p>&copy; 2024 Swamalatha Chakradhar. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
