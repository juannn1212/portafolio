import React, { useEffect, useRef } from 'react'

const About3D = ({ scrollY }) => {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('load-in')
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
      className="glass-section"
      ref={sectionRef}
    >
      <div className="section-container">
        <h2 
          className="section-title-3d cyber-glitch" 
          data-text="Sobre Mí"
        >
          Sobre Mí
        </h2>

        <div className="about-grid-3d">
          <div className="about-content-3d">
            <p className="about-text-3d">
              Soy un desarrollador full stack con más de un año de experiencia creando aplicaciones web y móviles. 
              Me especializo en React, React Native y tecnologías modernas del ecosistema JavaScript.
            </p>
            <p className="about-text-3d">
              Trabajo en Disruptive desde enero 2024, donde desarrollo aplicaciones web y móviles, 
              implemento APIs RESTful y colaboro en equipos ágiles. Mi pasión es transformar ideas 
              en experiencias digitales que impacten positivamente a los usuarios.
            </p>
            <p className="about-text-3d">
              Me mantengo actualizado con las últimas tendencias tecnológicas y mejores prácticas de desarrollo,
              siempre buscando la innovación y la excelencia en cada proyecto.
            </p>

            <div className="stats-3d">
              <div className="stat-card-3d">
                <span className="stat-number-3d">1+</span>
                <span className="stat-label-3d">Año Experiencia</span>
              </div>
              <div className="stat-card-3d">
                <span className="stat-number-3d">8+</span>
                <span className="stat-label-3d">Proyectos</span>
              </div>
              <div className="stat-card-3d">
                <span className="stat-number-3d">15+</span>
                <span className="stat-label-3d">Tecnologías</span>
              </div>
            </div>
          </div>

          <div className="experience-3d">
            <div className="experience-card-3d">
              <h3>Experiencia Actual</h3>
              <div className="job-info-3d">
                <h4>Desarrollador Full Stack</h4>
                <p className="company-3d">Disruptive</p>
                <p className="period-3d">Enero 2024 – Actualidad</p>
                <p className="location-3d">Medellín, Colombia</p>
                
                <div className="achievements-3d">
                  <div className="achievement-item-3d">
                    <span>→</span>
                    <p>Desarrollo de aplicaciones web y móviles con React y React Native</p>
                  </div>
                  <div className="achievement-item-3d">
                    <span>→</span>
                    <p>Implementación de APIs RESTful con Node.js y Python</p>
                  </div>
                  <div className="achievement-item-3d">
                    <span>→</span>
                    <p>Optimización de rendimiento y experiencia de usuario</p>
                  </div>
                  <div className="achievement-item-3d">
                    <span>→</span>
                    <p>Integración con servicios cloud (AWS, Google Cloud)</p>
                  </div>
                  <div className="achievement-item-3d">
                    <span>→</span>
                    <p>Colaboración en equipos ágiles y metodologías Scrum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About3D
