import React from 'react'
import { Brain, Truck, Globe, ExternalLink } from 'lucide-react'

const ModernProjects = ({ scrollY }) => {
  const projects = [
    {
      id: 1,
      title: "AI Personal Assistant",
      description: "Asistente psicológico inteligente con análisis emocional usando TensorFlow y React Native.",
      icon: Brain,
      technologies: ["React Native", "FastAPI", "TensorFlow", "Python"],
      link: "https://github.com/juannn1212/AI-Powered_Personal_Assistant",
      featured: true
    },
    {
      id: 2,
      title: "Sistema Biblioteca",
      description: "Plataforma completa para gestión de bibliotecas con Spring Boot y React.",
      icon: Globe,
      technologies: ["Spring Boot", "React", "PostgreSQL", "JWT"],
      link: "https://github.com/juannn1212/sistema_gestion_biblioteca",
      featured: true
    },
    {
      id: 3,
      title: "DHL Tracking System",
      description: "Sistema full-stack para cotizar envíos y tracking usando DHL Express API.",
      icon: Truck,
      technologies: [".NET 8", "React", "TypeScript", "SQL Server"],
      link: "https://github.com/juannn1212/proyectoSeguimiento",
      featured: true
    }
  ]

  return (
    <section 
      id="projects" 
      className="modern-projects"
    >
      <div className="projects-container">
        <div className="projects-header">
          <h2 className="projects-title">Proyectos Destacados</h2>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const IconComponent = project.icon
            return (
              <div 
                key={project.id} 
                className="project-card"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="project-header">
                  <div className="project-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-description">
                  {project.description}
                </p>

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
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ModernProjects
