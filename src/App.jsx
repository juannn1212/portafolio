import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import CustomCursor from './components/CustomCursor'
import { useSectionTransition } from './hooks/useSectionTransition'

function App() {
  const { currentSection, isTransitioning, transitionDirection } = useSectionTransition()

  return (
    <div className="App">
      <CustomCursor />
      <Header />
      <main className={`main-content ${isTransitioning ? 'section-transitioning' : ''}`}>
        {/* Efectos de transición entre secciones */}
        {isTransitioning && (
          <div className={`section-transition-overlay ${transitionDirection}`}>
            <div className="transition-particles">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="transition-particle"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 0.3}s`,
                    '--particle-color': `hsl(${Math.random() * 360}, 70%, 60%)`
                  }}
                />
              ))}
            </div>
            <div className="transition-wave"></div>
          </div>
        )}
        
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
