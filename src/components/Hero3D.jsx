import React from 'react'
import { ArrowRight } from 'lucide-react'

const Hero3D = ({ scrollY, mousePosition }) => {
  return (
    <section id="hero" className="hero-3d">
      {/* Elementos 3D flotantes */}
      <div className="floating-elements-3d">
        <div className="element-3d"></div>
        <div className="element-3d"></div>
        <div className="element-3d"></div>
      </div>
      
      <div className="hero-content-3d">
        <h1 
          className="hero-title-3d cyber-glitch" 
          data-text="Juan David Martinez"
        >
          Juan David Martinez
        </h1>
        <p className="hero-subtitle-3d">
          Desarrollador Full Stack | Programador Web & Móvil
        </p>
        <a 
          href="#projects" 
          className="hero-cta-3d"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Ver Proyectos
          <ArrowRight size={24} />
        </a>
      </div>

      {/* Cursor 3D personalizado */}
      <div 
        className="cursor-3d"
        style={{
          position: 'fixed',
          left: mousePosition.x - 10,
          top: mousePosition.y - 10,
          width: '20px',
          height: '20px',
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.8) 0%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          filter: 'blur(1px)',
          transition: 'all 0.1s ease-out'
        }}
      />
    </section>
  )
}

export default Hero3D
