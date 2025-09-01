import React, { useState, useEffect } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: 'Inicio', href: '#home' },
    { name: 'Sobre mí', href: '#about' },
    { name: 'Proyectos', href: '#projects' },
    { name: 'Habilidades', href: '#skills' },
    { name: 'Contacto', href: '#contact' }
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com/juannn1212', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:tu-email@ejemplo.com', label: 'Email' }
  ]

  return (
    <header className="navbar-header">
      <nav className="navbar-nav">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <span className="text-gradient">{'<Juan />'}</span>
          </div>

          {/* Desktop Navigation */}
          <ul className="navbar-links">
            {navItems.map((item) => (
              <li key={item.name} className="navbar-item">
                <a
                  href={item.href}
                  className="navbar-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Social Links */}
          <div className="navbar-social">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="mobile-menu-btn"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-links">
            {navItems.map((item) => (
              <li key={item.name} className="mobile-nav-item">
                <a
                  href={item.href}
                  className="mobile-nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Social Links */}
          <div className="mobile-social-links">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
