import React from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const UltraContact = ({ scrollY }) => {
  const contacts = [
    {
      icon: Github,
      label: "GitHub",
      value: "@juannn1212",
      link: "https://github.com/juannn1212"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Juan Nicolás",
      link: "https://linkedin.com/in/juan-nicolas"
    },
    {
      icon: Mail,
      label: "Email",
      value: "contact@example.com",
      link: "mailto:contact@example.com"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+57 123 456 7890",
      link: "https://wa.me/571234567890"
    }
  ]

  return (
    <section 
      id="contact" 
      className="ultra-contact"
    >
      <div className="contact-container">
        <h2 className="contact-title">
          Contáctanos
        </h2>
        <p className="contact-subtitle">
          ¿Tienes un proyecto en mente? Hablemos y hagámoslo realidad.
        </p>

        <div className="contact-links">
          {contacts.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <a
                key={index}
                href={contact.link}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <IconComponent size={24} />
                <div>
                  <div style={{ fontSize: '0.9rem', opacity: 0.8 }}>
                    {contact.label}
                  </div>
                  <div style={{ fontWeight: '600' }}>
                    {contact.value}
                  </div>
                </div>
              </a>
            )
          })}
        </div>

        {/* Elementos decorativos con parallax */}
        <div 
          className="contact-decoration"
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(0, 255, 136, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            transform: `translateY(${scrollY * -0.1}px) rotate(${scrollY * 0.02}deg)`,
            pointerEvents: 'none'
          }}
        />
      </div>
    </section>
  )
}

export default UltraContact
