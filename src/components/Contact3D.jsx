import React from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const Contact3D = ({ scrollY }) => {
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
      value: "Juan David Martinez",
      link: "https://linkedin.com/in/juan-david-martinez"
    },
    {
      icon: Mail,
      label: "Email",
      value: "juandavid@example.com",
      link: "mailto:juandavid@example.com"
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
      className="glass-section"
    >
      <div className="section-container">
        <div className="contact-content-3d">
          <h2 
            className="section-title-3d cyber-glitch" 
            data-text="Contáctanos"
          >
            Contáctanos
          </h2>
          <p className="contact-subtitle-3d">
            ¿Tienes un proyecto en mente? Conectemos y hagámoslo realidad con tecnología de vanguardia.
          </p>

          <div className="contact-links-3d">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card-3d"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <div className="contact-icon-3d">
                    <IconComponent size={40} />
                  </div>
                  <div className="contact-label-3d">
                    {contact.label}
                  </div>
                  <div className="contact-value-3d">
                    {contact.value}
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact3D
