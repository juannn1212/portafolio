import React, { useEffect, useRef } from 'react'
import { Github, Linkedin, Mail, Phone } from 'lucide-react'

const ElegantContact = () => {
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
              }, index * 150)
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
      value: "juanmartinezciro657@gmail.com",
      link: "mailto:juanmartinezciro657@gmail.com"
    },
    {
      icon: Phone,
      label: "WhatsApp",
      value: "+57 301 725 1504",
      link: "https://wa.me/573017251504"
    }
  ]

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="section-container">
        <div className="contact-content">
          <div className="section-header scroll-reveal">
            <h2 className="section-title">Contáctanos</h2>
            <p className="section-subtitle">
              ¿Tienes un proyecto en mente? Me encantaría conocer más sobre tu idea y cómo puedo ayudarte a hacerla realidad.
            </p>
          </div>

          <div className="contact-grid">
            {contacts.map((contact, index) => {
              const IconComponent = contact.icon
              return (
                <a
                  key={index}
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-card scroll-reveal"
                >
                  <div className="contact-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="contact-label">{contact.label}</div>
                  <div className="contact-value">{contact.value}</div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ElegantContact
