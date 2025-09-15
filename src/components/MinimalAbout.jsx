import React, { useEffect, useRef } from 'react'

const MinimalAbout = ({ scrollY }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up')
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      id="about" 
      className="minimal-about"
      ref={sectionRef}
    >
      <div className="about-container">
        <div className="about-content">
          <h2>Sobre Mí</h2>
          <p className="about-text">
            Soy un desarrollador full stack con más de un año de experiencia creando aplicaciones web y móviles. 
            Me especializo en React, React Native y tecnologías modernas del ecosistema JavaScript.
          </p>
          <p className="about-text">
            Trabajo en Disruptive desde enero 2024, donde desarrollo aplicaciones web y móviles, 
            implemento APIs RESTful y colaboro en equipos ágiles. Mi pasión es transformar ideas 
            en experiencias digitales que impacten positivamente a los usuarios.
          </p>

          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">1+</span>
              <span className="stat-label">Año Experiencia</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Tecnologías</span>
            </div>
          </div>

          <div className="experience-info">
            <h3>Experiencia Actual</h3>
            <div className="current-job">
              <h4>Desarrollador Full Stack - Disruptive</h4>
              <p>Enero 2024 – Actualidad | Medellín</p>
              <ul>
                <li>Desarrollo de aplicaciones web y móviles con React y React Native</li>
                <li>Implementación de APIs RESTful con Node.js y Python</li>
                <li>Integración con servicios cloud (AWS, Google Cloud)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="about-visual">
          <div className="floating-elements">
            <div 
              className="floating-element"
              style={{
                transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.05}deg)`
              }}
            />
            <div 
              className="floating-element"
              style={{
                transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.03}deg)`
              }}
            />
            <div 
              className="floating-element"
              style={{
                transform: `translateY(${scrollY * 0.08}px) rotate(${scrollY * 0.02}deg)`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default MinimalAbout
