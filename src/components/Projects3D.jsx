import React from 'react'
import { Brain, Truck, Globe, ExternalLink } from 'lucide-react'

const Projects3D = ({ scrollY }) => {
  const projects = [
    {
      id: 1,
      title: "AI Personal Assistant",
      description: "Asistente psicológico inteligente con análisis emocional usando TensorFlow y React Native. Combina productividad con apoyo psicológico personalizado.",
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
    <section 
      id="projects" 
      className="glass-section"
    >
      <div className="section-container">
        <h2 
          className="section-title-3d cyber-glitch" 
          data-text="Proyectos"
        >
          Proyectos
        </h2>

        <div className="projects-grid-3d">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div 
                key={project.id} 
                className="project-card-3d"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="project-header-3d">
                  <div className="project-icon-3d">
                    <IconComponent size={32} />
                  </div>
                  <div>
                    <h3 className="project-title-3d">{project.title}</h3>
                  </div>
                </div>

                <p className="project-description-3d">
                  {project.description}
                </p>

                <div className="project-tech-3d">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag-3d">
                      {tech}
                    </span>
                  ))}
                </div>

                <a 
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link-3d"
                >
                  Ver Proyecto
                  <ExternalLink size={20} />
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects3D
