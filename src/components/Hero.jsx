import React, { useEffect, useState } from 'react'
import { ArrowDown, Download, Github, Smartphone, Globe, Sparkles, ChevronDown, Zap, Code, Smartphone as Phone } from 'lucide-react'

const Hero = () => {
  const roles = [
    { text: "Programador Web", icon: Globe, color: "#00d4ff" },
    { text: "Desarrollador Móvil", icon: Phone, color: "#ff6b6b" },
    { text: "Full Stack Developer", icon: Code, color: "#ae8cff" },
    { text: "UI/UX Enthusiast", icon: Zap, color: "#51cf66" }
  ]

  const [currentRole, setCurrentRole] = useState(0)
  const [showScrollIndicator, setShowScrollIndicator] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isTyping, setIsTyping] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true)
      setTimeout(() => {
        setCurrentRole((prev) => (prev + 1) % roles.length)
        setIsTyping(false)
      }, 500)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      
      if (scrollY > windowHeight * 0.2) {
        setShowScrollIndicator(true)
      } else {
        setShowScrollIndicator(false)
      }
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const currentRoleData = roles[currentRole]

  return (
    <section id="home" className="hero">
      {/* Animated background elements */}
      <div className="hero-bg-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
        <div className="floating-shape shape-5"></div>
      </div>

      <div className="container">
        <div className="hero-content">

          
          {/* Enhanced title */}
          <h1 className="hero-title">
            <span className="greeting">Hola, soy</span>
            <div className="name-container">
              <span className="name">Juan David</span>
              <span className="name-glow"></span>
            </div>
            <span className="lastname">Martinez</span>
          </h1>
          
          {/* Enhanced role display */}
          <div className="role-container">
            <div className="role-icon">
              <currentRoleData.icon 
                size={24} 
                style={{ color: currentRoleData.color }}
                className={isTyping ? 'icon-typing' : 'icon-visible'}
              />
            </div>
            <div className="role-text-container">
              <span 
                className={`role-text ${isTyping ? 'typing' : 'visible'}`}
                style={{ '--role-color': currentRoleData.color }}
              >
                {currentRoleData.text}
              </span>
              <div className="role-cursor"></div>
            </div>
          </div>
          
          {/* Enhanced description */}
          <p className="description enhanced">
            Desarrollador apasionado por crear experiencias digitales únicas. 
            Especializado en aplicaciones web y móviles con tecnologías modernas 
            como React, Node.js, Python y desarrollo nativo multiplataforma.
          </p>
          
          {/* Enhanced buttons */}
          <div className="hero-buttons enhanced">
            <a href="#projects" className="btn btn-primary enhanced">
              <div className="btn-content">
                <Globe size={20} />
                <span>Ver proyectos</span>
              </div>
              <div className="btn-glow"></div>
            </a>
            <a href="/cv.pdf" target="_blank" className="btn btn-secondary enhanced">
              <div className="btn-content">
                <Download size={20} />
                <span>Descargar CV</span>
              </div>
              <div className="btn-border"></div>
            </a>
          </div>

          
        </div>
      </div>

      {/* Enhanced scroll indicator */}
      <div style={{ 
        position: 'absolute',
        bottom: '60px',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '12px',
        cursor: 'pointer',
        opacity: showScrollIndicator ? 0 : 1,
        visibility: showScrollIndicator ? 'hidden' : 'visible',
        transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        zIndex: 10
      }}
      onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateX(-50%) scale(1.1)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateX(-50%) scale(1)'
      }}
      >
        {/* Enhanced animated text */}
        <div style={{
          position: 'relative',
          overflow: 'hidden'
        }}>
          <span style={{ 
            fontSize: '14px', 
            fontWeight: '600',
            color: 'var(--primary)',
            textShadow: '0 0 15px rgba(0, 212, 255, 0.6)',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            animation: 'textGlow 2s ease-in-out infinite alternate'
          }}>
            Descubre más
          </span>
          <div style={{
            position: 'absolute',
            top: '0',
            left: '-100%',
            width: '100%',
            height: '100%',
            background: 'linear-gradient(90deg, transparent, rgba(0, 212, 255, 0.3), transparent)',
            animation: 'textShine 3s ease-in-out infinite'
          }}></div>
        </div>

        {/* Enhanced arrow design */}
        <div style={{ 
          position: 'relative',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          {/* Multiple rings */}
          <div style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            border: '2px solid rgba(0, 212, 255, 0.3)',
            borderRadius: '50%',
            animation: 'pulseRing 2s ease-in-out infinite'
          }}></div>
          
          <div style={{
            position: 'absolute',
            width: '30px',
            height: '30px',
            border: '1px solid rgba(0, 212, 255, 0.5)',
            borderRadius: '50%',
            animation: 'pulseRing 2s ease-in-out infinite 0.5s'
          }}></div>
          
          <div style={{
            position: 'absolute',
            width: '20px',
            height: '20px',
            border: '1px solid rgba(0, 212, 255, 0.7)',
            borderRadius: '50%',
            animation: 'pulseRing 2s ease-in-out infinite 1s'
          }}></div>
          
          {/* Arrow container */}
          <div style={{
            position: 'relative',
            width: '20px',
            height: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'radial-gradient(circle, rgba(0, 212, 255, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            animation: 'arrowFloat 3s ease-in-out infinite'
          }}>
            <ChevronDown 
              size={16} 
              style={{ 
                color: 'var(--primary)',
                filter: 'drop-shadow(0 0 8px rgba(0, 212, 255, 0.8))',
                animation: 'arrowBounce 2s ease-in-out infinite'
              }} 
            />
          </div>
        </div>

        {/* Enhanced particle effects */}
        <div style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          pointerEvents: 'none'
        }}>
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                width: '3px',
                height: '3px',
                background: 'var(--primary)',
                borderRadius: '50%',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                animation: `particleFloat ${2.5 + i * 0.3}s ease-in-out infinite ${i * 0.15}s`,
                opacity: 0.7
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Enhanced mouse tracking effect */}
      <div style={{
        position: 'absolute',
        width: '30px',
        height: '30px',
        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.4) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        left: mousePosition.x - 15,
        top: mousePosition.y - 15,
        transition: 'all 0.15s ease-out',
        zIndex: 1,
        filter: 'blur(1px)'
      }}></div>
    </section>
  )
}

export default Hero