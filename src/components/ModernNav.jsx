import React, { useState, useEffect } from 'react'

const ModernNav = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={`modern-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          JN.DEV
        </a>
        
        <ul className="nav-links">
          <li>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('hero')}
            >
              Inicio
            </button>
          </li>
          <li>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('about')}
            >
              Sobre Mí
            </button>
          </li>
          <li>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('projects')}
            >
              Proyectos
            </button>
          </li>
          <li>
            <button 
              className="nav-link" 
              onClick={() => scrollToSection('contact')}
            >
              Contacto
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default ModernNav
