import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const ElegantNav = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
      setIsMobileMenuOpen(false) // Cerrar menú móvil al hacer clic
    }
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className={`elegant-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <a href="#hero" className="nav-logo">
          Juan David
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

        {/* Botón del menú móvil */}
        <button 
          className="mobile-menu-btn"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menú móvil desplegable */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-content">
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('hero')}
          >
            Inicio
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('about')}
          >
            Sobre Mí
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('projects')}
          >
            Proyectos
          </button>
          <button 
            className="mobile-nav-link" 
            onClick={() => scrollToSection('contact')}
          >
            Contacto
          </button>
        </div>
      </div>
    </nav>
  )
}

export default ElegantNav
