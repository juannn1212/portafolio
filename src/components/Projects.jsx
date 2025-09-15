import React from 'react'
import { Github, Brain, Smartphone, Globe, Zap, Eye, Heart, Truck } from 'lucide-react'
import { projects } from '../data/projects'

const Projects = () => {
  const iconMap = {
    'AI-Powered Personal Assistant': Brain,
    'Sistema de Gestión de Biblioteca': Globe,
    'Plataforma de Streaming Personal': Zap,
    'App de Gestión de Eventos': Smartphone,
    'Dashboard de Monitoreo IoT': Eye,
    'Proyecto Seguimiento DHL - Full Stack .NET + React': Truck
  }

  const handleProjectClick = (projectId) => {
    console.log('=== CLIC DETECTADO ===');
    console.log('Proyecto ID:', projectId);
    console.log('Timestamp:', new Date().toISOString());
    
    if (projectId === 1) {
      console.log('✅ Proyecto 1 detectado, abriendo GitHub...');
      try {
        window.open('https://github.com/juannn1212/AI-Powered_Personal_Assistant', '_blank');
        console.log('✅ window.open ejecutado correctamente');
      } catch (error) {
        console.error('❌ Error al abrir GitHub:', error);
      }
    } else if (projectId === 2) {
      console.log('✅ Proyecto 2 (Biblioteca) detectado, abriendo GitHub...');
      try {
        window.open('https://github.com/juannn1212/sistema_gestion_biblioteca', '_blank');
        console.log('✅ window.open ejecutado correctamente');
      } catch (error) {
        console.error('❌ Error al abrir GitHub:', error);
      }
    } else if (projectId === 6) {
      console.log('✅ Proyecto 6 (DHL) detectado, abriendo GitHub...');
      try {
        window.open('https://github.com/juannn1212/proyectoSeguimiento', '_blank');
        console.log('✅ window.open ejecutado correctamente');
      } catch (error) {
        console.error('❌ Error al abrir GitHub:', error);
      }
    } else {
      console.log('❌ Proyecto no disponible:', projectId);
    }
  }

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-accent">Proyectos</span> Innovadores
          </h2>
          <p className="section-description">
            Descubre mis proyectos más ambiciosos y creativos, donde combino tecnología de vanguardia con soluciones prácticas.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => {
            const IconComponent = iconMap[project.title] || Globe
            return (
              <div key={project.id} className="project-card">
                <div className="project-header">
                  <div className="project-icon">
                    <IconComponent size={32} />
                  </div>
                </div>

                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  
                  <div className="project-features">
                    <h4>Características innovadoras:</h4>
                    <ul>
                      {project.details.features.map((feature, featureIndex) => (
                        <li key={featureIndex}>{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-technologies">
                    <div className="skills-list">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="skill-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="project-actions">
                  <button 
                    onClick={() => handleProjectClick(project.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 20px',
                      background: (project.id === 1 || project.id === 2 || project.id === 6) ? 'var(--primary)' : 'var(--bg-secondary)',
                      border: '1px solid var(--border)',
                      borderRadius: 'var(--radius)',
                      color: (project.id === 1 || project.id === 2 || project.id === 6) ? 'white' : 'var(--text-muted)',
                      textDecoration: 'none',
                      fontWeight: '500',
                      fontSize: '14px',
                      cursor: (project.id === 1 || project.id === 2 || project.id === 6) ? 'pointer' : 'not-allowed',
                      opacity: (project.id === 1 || project.id === 2 || project.id === 6) ? '1' : '0.6',
                      border: 'none',
                      outline: 'none',
                      userSelect: 'none',
                      position: 'relative',
                      zIndex: '10'
                    }}
                    disabled={project.id !== 1 && project.id !== 2 && project.id !== 6}
                  >
                    <Github size={20} />
                    {(project.id === 1 || project.id === 2 || project.id === 6) ? 'Ver código' : 'En desarrollo'}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects