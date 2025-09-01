import React, { useState, useEffect } from 'react'
import { Code, Server, Cloud, Smartphone, Globe, Database, Zap, Star, Sparkles, Target, Rocket, Palette } from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(0)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [isManualSelection, setIsManualSelection] = useState(false)

  const skillCategories = [
    {
      icon: Globe,
      title: 'Frontend',
      color: '#00d4ff',
      gradient: 'linear-gradient(135deg, #00d4ff 0%, #0099cc 100%)',
      skills: [
        { name: 'React', level: 95, icon: '⚛️' },
        { name: 'Next.js', level: 90, icon: '⚡' },
        { name: 'TypeScript', level: 88, icon: '📘' },
        { name: 'Tailwind CSS', level: 92, icon: '🎨' },
        { name: 'SASS', level: 85, icon: '💎' },
        { name: 'JavaScript', level: 95, icon: '🟨' }
      ]
    },
    {
      icon: Server,
      title: 'Backend',
      color: '#ff6b6b',
      gradient: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a52 100%)',
      skills: [
        { name: 'Node.js', level: 92, icon: '🟢' },
        { name: 'Express', level: 90, icon: '🚀' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Django', level: 80, icon: '🎯' },
        { name: 'C#', level: 75, icon: '💜' },
        { name: 'NestJS', level: 82, icon: '🪺' }
      ]
    },
    {
      icon: Smartphone,
      title: 'Móvil',
      color: '#51cf66',
      gradient: 'linear-gradient(135deg, #51cf66 0%, #40c057 100%)',
      skills: [
        { name: 'React Native', level: 88, icon: '📱' },
        { name: 'Flutter', level: 85, icon: '🦋' },
        { name: 'Ionic', level: 80, icon: '⚡' },
        { name: 'PWA', level: 90, icon: '🌐' },
        { name: 'Mobile UI/UX', level: 92, icon: '🎨' }
      ]
    },
    {
      icon: Database,
      title: 'Bases de Datos',
      color: '#ae8cff',
      gradient: 'linear-gradient(135deg, #ae8cff 0%, #9775fa 100%)',
      skills: [
        { name: 'MySQL', level: 88, icon: '🐬' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'PostgreSQL', level: 82, icon: '🐘' },
        { name: 'Redis', level: 80, icon: '🔴' },
        { name: 'Diseño de BD', level: 90, icon: '🗄️' }
      ]
    },
    {
      icon: Cloud,
      title: 'DevOps & Cloud',
      color: '#ffd43b',
      gradient: 'linear-gradient(135deg, #ffd43b 0%, #fcc419 100%)',
      skills: [
        { name: 'AWS', level: 85, icon: '☁️' },
        { name: 'Google Cloud', level: 80, icon: '🌤️' },
        { name: 'Docker', level: 88, icon: '🐳' },
        { name: 'CI/CD', level: 85, icon: '🔄' },
        { name: 'Git', level: 92, icon: '📝' }
      ]
    },
    {
      icon: Code,
      title: 'Herramientas',
      color: '#ff922b',
      gradient: 'linear-gradient(135deg, #ff922b 0%, #fd7e14 100%)',
      skills: [
        { name: 'Figma', level: 90, icon: '🎨' },
        { name: 'VS Code', level: 95, icon: '💻' },
        { name: 'Postman', level: 88, icon: '📮' },
        { name: 'Vite', level: 85, icon: '⚡' },
        { name: 'Webpack', level: 80, icon: '📦' }
      ]
    }
  ]

  const languages = [
    { name: 'Español', level: 'Nativo', flag: '🇪🇸', proficiency: 100 },
    { name: 'Inglés', level: 'Intermedio', flag: '🇺🇸', proficiency: 75 }
  ]

  const developmentFocus = [
    {
      icon: Target,
      title: 'Mobile-First',
      description: 'Diseño responsivo y desarrollo móvil nativo',
      color: '#00d4ff'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimización de velocidad y rendimiento',
      color: '#ff6b6b'
    },
    {
      icon: Palette,
      title: 'UX/UI',
      description: 'Experiencias de usuario intuitivas y atractivas',
      color: '#51cf66'
    },
    {
      icon: Rocket,
      title: 'Innovación',
      description: 'Implementación de tecnologías emergentes',
      color: '#ae8cff'
    }
  ]

  useEffect(() => {
    if (isManualSelection) {
      const timeout = setTimeout(() => {
        setIsManualSelection(false)
      }, 10000)
      return () => clearTimeout(timeout)
    }

    const interval = setInterval(() => {
      if (!isManualSelection) {
        setActiveCategory((prev) => (prev + 1) % skillCategories.length)
      }
    }, 5000)
    return () => clearInterval(interval)
  }, [isManualSelection, skillCategories.length])

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="gradient-text">Skills</span> & Tecnologías
          </h2>
          <p>
            Tecnologías y herramientas que domino para crear aplicaciones web y móviles 
            modernas e innovadoras
          </p>
        </div>

        {/* Category Navigation */}
        <div className="skills-categories-nav">
          {skillCategories.map((category, index) => (
            <button
              key={index}
              className={`category-nav-btn ${activeCategory === index ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(index)
                setIsManualSelection(true)
              }}
              style={{ '--category-color': category.color }}
            >
              <category.icon size={20} />
              <span>{category.title}</span>
              <div className="nav-btn-glow"></div>
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <div className="skills-display-container">
          <div className="skills-display">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`skills-category ${activeCategory === categoryIndex ? 'active' : ''}`}
                style={{ '--category-gradient': category.gradient }}
              >
                <div className="category-header">
                  <div className="category-icon">
                    <category.icon size={32} color="white" />
                    <div className="icon-glow"></div>
                  </div>
                  <h3 className="category-title">{category.title}</h3>
                  <div className="category-decoration"></div>
                </div>

                <div className="skills-grid">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`skill-item ${hoveredSkill === `${categoryIndex}-${skillIndex}` ? 'hovered' : ''}`}
                      onMouseEnter={() => setHoveredSkill(`${categoryIndex}-${skillIndex}`)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      style={{
                        '--skill-level': `${skill.level}%`,
                        '--animation-delay': `${skillIndex * 0.1}s`
                      }}
                    >
                      <div className="skill-header">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                        <span className="skill-level">{skill.level}%</span>
                      </div>
                      
                      <div className="skill-progress">
                        <div className="progress-bar">
                          <div className="progress-fill"></div>
                        </div>
                        <div className="progress-glow"></div>
                      </div>

                      <div className="skill-particles">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="particle" style={{ '--particle-delay': `${i * 0.2}s` }}></div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="skills-additional">
          <div className="languages-section">
            <h3 className="section-subtitle">
              <Star size={24} />
              Idiomas
            </h3>
            <div className="languages-grid">
              {languages.map((lang, index) => (
                <div key={index} className="language-card">
                  <div className="language-flag">{lang.flag}</div>
                  <div className="language-info">
                    <h4>{lang.name}</h4>
                    <p>{lang.level}</p>
                  </div>
                  <div className="language-progress">
                    <div 
                      className="language-progress-fill"
                      style={{ width: `${lang.proficiency}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="focus-section">
            <h3 className="section-subtitle">
              <Target size={24} />
              Enfoque de Desarrollo
            </h3>
            <div className="focus-grid">
              {developmentFocus.map((focus, index) => (
                <div key={index} className="focus-card">
                  <div className="focus-icon" style={{ '--focus-color': focus.color }}>
                    <focus.icon size={24} />
                    <div className="focus-glow"></div>
                  </div>
                  <h4>{focus.title}</h4>
                  <p>{focus.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="skills-bg-effects">
        <div className="floating-orbs">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="floating-orb" style={{ '--orb-delay': `${i * 2}s` }}></div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills