import React, { useEffect, useRef } from 'react'
import { Calendar, Award, Code, MapPin } from 'lucide-react'

const ElegantAbout = () => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.scroll-reveal')
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed')
              }, index * 100)
            })
          }
        })
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header scroll-reveal">
          <h2 className="section-title">Sobre Mí</h2>
          <p className="section-subtitle">
            Programador web y móvil apasionado por crear experiencias digitales innovadoras
          </p>
        </div>

        <div className="about-grid">
          <div className="about-content scroll-reveal">
            <h3>Mi Historia</h3>
            <p className="about-text">
              Soy un desarrollador full stack con más de 2 años de experiencia creando aplicaciones web y móviles. 
              Me especializo en React, React Native y tecnologías modernas del ecosistema JavaScript.
            </p>
            <p className="about-text">
              Mi pasión es transformar ideas en experiencias digitales que impacten positivamente a los usuarios. 
              Me mantengo actualizado con las últimas tendencias tecnológicas y mejores prácticas de desarrollo.
            </p>

            <div className="stats-grid">
              <div className="stat-card">
                <span className="stat-number">2+</span>
                <span className="stat-label">Años Experiencia</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">8+</span>
                <span className="stat-label">Proyectos</span>
              </div>
              <div className="stat-card">
                <span className="stat-number">15+</span>
                <span className="stat-label">Tecnologías</span>
              </div>
            </div>
          </div>

          <div className="scroll-reveal">
            <div className="experience-card">
              <h4>Desarrollador Full Stack</h4>
              <p className="company">Disruptive</p>
              <p className="period">Agosto 2023 – Agosto 2025 • Medellín</p>
              
              <ul className="achievements">
                <li>Desarrollo de aplicaciones web y móviles con React y React Native</li>
                <li>Implementación de APIs RESTful con Node.js y Python</li>
                <li>Optimización de rendimiento y experiencia de usuario</li>
                <li>Integración con servicios cloud (AWS, Google Cloud)</li>
                <li>Colaboración en equipos ágiles y metodologías Scrum</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ElegantAbout
