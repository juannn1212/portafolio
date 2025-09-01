import React from 'react'
import { MapPin, Calendar, Award, Code, User, Rocket, Star, Sparkles, Target, Zap, Palette, Globe, Smartphone, Database, Cloud } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Calendar, label: 'Experiencia', value: '1+ año', color: '#3b82f6' },
    { icon: Award, label: 'Proyectos', value: '8+', color: '#ef4444' },
    { icon: Code, label: 'Tecnologías', value: '15+', color: '#10b981' },
    { icon: MapPin, label: 'Ubicación', value: 'Medellín', color: '#8b5cf6' }
  ]

  const experience = {
    company: 'Disruptive',
    role: 'Desarrollador Full Stack',
    period: 'Enero 2024 – Actualidad',
    location: 'Medellín',
    achievements: [
      'Desarrollo de aplicaciones web y móviles con React y React Native',
      'Implementación de APIs RESTful con Node.js y Python',
      'Optimización de rendimiento y experiencia de usuario',
      'Integración con servicios cloud (AWS, Google Cloud)',
      'Colaboración en equipos ágiles y metodologías Scrum'
    ]
  }

  const techCategories = [
    {
      icon: Globe,
      title: 'Frontend',
      color: '#3b82f6',
      technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'SASS']
    },
    {
      icon: Smartphone,
      title: 'Móvil',
      color: '#ef4444',
      technologies: ['React Native', 'Flutter', 'Ionic', 'PWA']
    },
    {
      icon: Database,
      title: 'Backend',
      color: '#10b981',
      technologies: ['Node.js', 'Python', 'Express', 'Django', 'C#']
    },
    {
      icon: Cloud,
      title: 'DevOps',
      color: '#8b5cf6',
      technologies: ['AWS', 'Docker', 'Git', 'CI/CD', 'MongoDB']
    }
  ]

  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">
            <span className="title-accent">Sobre</span> Mí
          </h2>
          <p className="section-description">
            Programador web y móvil apasionado por crear experiencias digitales innovadoras
          </p>
        </div>

        <div className="about-content">
          {/* Información Personal */}
          <div className="about-main">
            <div className="about-text">
              <h3>Mi Historia</h3>
              <p>
                Soy un desarrollador full stack con más de un año de experiencia creando aplicaciones web y móviles. 
                Me especializo en React, React Native y tecnologías modernas del ecosistema JavaScript.
              </p>
              <p>
                Mi pasión es transformar ideas en experiencias digitales que impacten positivamente a los usuarios. 
                Me mantengo actualizado con las últimas tendencias tecnológicas y mejores prácticas de desarrollo.
              </p>
            </div>

            {/* Estadísticas */}
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-icon" style={{ color: stat.color }}>
                    <stat.icon size={24} />
                  </div>
                  <div className="stat-content">
                    <div className="stat-value">{stat.value}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experiencia */}
          <div className="experience-section">
            <h3>Experiencia Profesional</h3>
            <div className="experience-card">
              <div className="experience-header">
                <div className="experience-title">
                  <h4>{experience.role}</h4>
                  <span className="company">{experience.company}</span>
                </div>
                <div className="experience-meta">
                  <span className="period">{experience.period}</span>
                  <span className="location">
                    <MapPin size={16} />
                    {experience.location}
                  </span>
                </div>
              </div>
              <ul className="achievements-list">
                {experience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="technologies-section">
            <h3>Stack Tecnológico</h3>
            <div className="tech-grid">
              {techCategories.map((category, index) => (
                <div key={index} className="tech-category">
                  <div className="tech-header">
                    <category.icon size={20} style={{ color: category.color }} />
                    <span>{category.title}</span>
                  </div>
                  <div className="tech-list">
                    {category.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About