import React, { useEffect, useRef } from 'react'
import { Brain, Truck, Globe, ExternalLink } from 'lucide-react'

const ElegantProjects = () => {
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
              }, index * 200)
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

  const projects = [
    {
      id: 1,
      title: "AI Personal Assistant",
      description: "Asistente psicológico inteligente con análisis emocional usando TensorFlow. Combina productividad con apoyo psicológico personalizado.",
      icon: Brain,
      technologies: ["React Native", "FastAPI", "TensorFlow", "Python", "SQLite"],
      link: "https://github.com/juannn1212/AI-Powered_Personal_Assistant",
      featured: true
    },
    {
      id: 2,
      title: "Sistema Gestión Biblioteca",
      description: "Plataforma completa para gestión de bibliotecas con Spring Boot y React. Sistema de préstamos, reservas y catálogo digital.",
      icon: Globe,
      technologies: ["Spring Boot", "React", "PostgreSQL", "JWT", "Spring Security"],
      link: "https://github.com/juannn1212/sistema_gestion_biblioteca",
      featured: true
    },
    {
      id: 3,
      title: "DHL Tracking System",
      description: "Sistema full-stack para cotizar envíos y tracking usando DHL Express API. Creación de envíos con etiquetas PDF.",
      icon: Truck,
      technologies: [".NET 8", "React", "TypeScript", "SQL Server", "DHL API"],
      link: "https://github.com/juannn1212/proyectoSeguimiento",
      featured: true
    }
  ]

  return (
    <section id="projects" className="section" ref={sectionRef}>
      <div className="section-container">
        <div className="section-header scroll-reveal">
          <h2 className="section-title">Proyectos Destacados</h2>
          <p className="section-subtitle">
            Una selección de mis trabajos más recientes y significativos
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div key={project.id} className="project-card scroll-reveal">
                <div className="project-image">
                  <div className="project-icon">
                    <IconComponent size={32} />
                  </div>
                </div>
                
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-tech">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Ver Proyecto
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ElegantProjects
