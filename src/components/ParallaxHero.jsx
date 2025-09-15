import React from 'react'
import { ArrowRight } from 'lucide-react'

const ParallaxHero = ({ scrollY }) => {
  return (
    <section id="hero" className="parallax-hero">
      {/* Elementos parallax reales */}
      <div className="floating-orbs">
        <div 
          className="orb orb-1" 
          style={{ 
            transform: `translate3d(${scrollY * -0.3}px, ${scrollY * -0.2}px, 0) rotate(${scrollY * 0.1}deg)` 
          }} 
        />
        <div 
          className="orb orb-2" 
          style={{ 
            transform: `translate3d(${scrollY * 0.2}px, ${scrollY * -0.4}px, 0) rotate(${scrollY * -0.05}deg)` 
          }} 
        />
        <div 
          className="orb orb-3" 
          style={{ 
            transform: `translate3d(${scrollY * -0.1}px, ${scrollY * -0.6}px, 0) rotate(${scrollY * 0.08}deg)` 
          }} 
        />
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          Juan David Martinez
        </h1>
        <p className="hero-subtitle">
          Desarrollador Full Stack | Programador Web & Móvil
        </p>
        <a 
          href="#projects" 
          className="hero-cta"
          onClick={(e) => {
            e.preventDefault()
            document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
          }}
        >
          Ver Proyectos
          <ArrowRight size={20} />
        </a>
      </div>
    </section>
  )
}

export default ParallaxHero
