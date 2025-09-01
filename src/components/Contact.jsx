import React, { useState, useEffect } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Zap, Send, Clock, Star, Sparkles, Target, Rocket } from 'lucide-react'

const Contact = () => {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [activeCard, setActiveCard] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Juanmartinezciro657@gmail.com',
      href: 'mailto:Juanmartinezciro657@gmail.com',
      color: '#00d4ff',
      description: 'Envíame un mensaje directo'
    },
    {
      icon: Phone,
      label: 'Teléfono',
      value: '301 725 1504',
      href: 'tel:+573017251504',
      color: '#ff6b6b',
      description: 'Llamada o WhatsApp'
    },
    {
      icon: MapPin,
      label: 'Ubicación',
      value: 'Medellín, Antioquia',
      href: '#',
      color: '#51cf66',
      description: 'Disponible para proyectos remotos'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/juannn1212',
      description: 'Revisa mis proyectos y contribuciones',
      color: '#333',
      bgColor: 'rgba(51, 51, 51, 0.1)'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/juandavid-martinez',
      description: 'Conectemos profesionalmente',
      color: '#0077b5',
      bgColor: 'rgba(0, 119, 181, 0.1)'
    },
    {
      icon: MessageCircle,
      name: 'WhatsApp',
      href: 'https://wa.me/573017251504',
      description: 'Conversemos por WhatsApp',
      color: '#25d366',
      bgColor: 'rgba(37, 211, 102, 0.1)'
    }
  ]

  const availabilityStats = [
    { icon: Clock, label: 'Respuesta', value: '< 24h', color: '#00d4ff' },
    { icon: Star, label: 'Disponibilidad', value: '100%', color: '#ff6b6b' },
    { icon: Target, label: 'Proyectos', value: 'Abiertos', color: '#51cf66' },
    { icon: Rocket, label: 'Modalidad', value: 'Remoto', color: '#ae8cff' }
  ]

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % availabilityStats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <div className="section-header">
          <h2>
            <span className="gradient-text">Contacto</span>
          </h2>
          <p>
            ¿Tienes una idea innovadora o quieres colaborar en proyectos revolucionarios? 
            ¡Me encantaría escuchar sobre tu visión!
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="contact-grid">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className={`contact-card ${hoveredItem === index ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{ '--card-color': info.color }}
            >
              <div className="contact-card-header">
                <div className="contact-icon-wrapper">
                  <info.icon size={28} />
                  <div className="icon-glow"></div>
                  <div className="icon-particles">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="contact-particle" style={{ '--delay': `${i * 0.2}s` }}></div>
                    ))}
                  </div>
                </div>
                <div className="contact-info">
                  <h3>{info.label}</h3>
                  <p className="contact-description">{info.description}</p>
                </div>
              </div>
              <div className="contact-card-content">
                <a href={info.href} className="contact-link">
                  {info.value}
                  <div className="link-arrow">
                    <Send size={16} />
                  </div>
                </a>
              </div>
              <div className="contact-card-decoration"></div>
            </div>
          ))}
        </div>

        {/* Availability Stats */}
        <div className="availability-section">
          <div className="availability-header">
            <h3>Disponibilidad y Respuesta</h3>
            <p>Estoy listo para tu próximo proyecto innovador</p>
          </div>
          <div className="availability-grid">
            {availabilityStats.map((stat, index) => (
              <div
                key={index}
                className={`availability-card ${activeCard === index ? 'active' : ''}`}
                style={{ '--stat-color': stat.color }}
              >
                <div className="availability-icon">
                  <stat.icon size={24} />
                  <div className="availability-glow"></div>
                </div>
                <div className="availability-content">
                  <div className="availability-value">{stat.value}</div>
                  <div className="availability-label">{stat.label}</div>
                </div>
                <div className="availability-particles">
                  {[...Array(2)].map((_, i) => (
                    <div key={i} className="availability-particle" style={{ '--delay': `${i * 0.3}s` }}></div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="social-section">
          <div className="social-header">
            <h3>Sígueme en redes sociales</h3>
            <p>Conectemos y compartamos ideas innovadoras</p>
          </div>
          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-card ${hoveredItem === `social-${index}` ? 'hovered' : ''}`}
                onMouseEnter={() => setHoveredItem(`social-${index}`)}
                onMouseLeave={() => setHoveredItem(null)}
                style={{ '--social-color': social.color, '--social-bg': social.bgColor }}
              >
                <div className="social-icon-wrapper">
                  <social.icon size={32} />
                  <div className="social-glow"></div>
                </div>
                <div className="social-content">
                  <h4>{social.name}</h4>
                  <p>{social.description}</p>
                </div>
                <div className="social-decoration">
                  <Sparkles size={16} />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section">
          <div className="cta-card">
            <div className="cta-header">
              <div className="cta-icon">
                <Rocket size={40} />
                <div className="cta-glow"></div>
              </div>
              <h3>¡Creemos algo increíble juntos!</h3>
              <p>
                Ya sea que necesites un desarrollador web, móvil o full stack para tu 
                próximo proyecto innovador, estoy aquí para ayudarte a hacer realidad 
                tu visión y crear experiencias digitales que marquen la diferencia.
              </p>
            </div>
            <div className="cta-actions">
              <a href="mailto:Juanmartinezciro657@gmail.com" className="cta-btn primary">
                <Zap size={20} />
                Iniciar proyecto
              </a>
              <a href="tel:+573017251504" className="cta-btn secondary">
                <Phone size={20} />
                Llamar ahora
              </a>
            </div>
            <div className="cta-particles">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="cta-particle" style={{ '--delay': `${i * 0.2}s` }}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact