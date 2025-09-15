import React from 'react'
import { ArrowRight, Download } from 'lucide-react'

const ElegantHero = () => {
  return (
    <section id="hero" className="hero-elegant">
      <div className="hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hola, soy</p>
          <h1 className="hero-name">Juan David Martinez</h1>
          <h2 className="hero-title">Desarrollador Full Stack & Líder de Proyectos</h2>
          <p className="hero-description">
            Desarrollador Full Stack con experiencia en liderazgo de proyectos y entusiasta de la IA. 
            Especializado en aplicaciones web y móviles, tanto nativas como híbridas, integrando 
            soluciones escalables centradas en el usuario. Experto en arquitecturas de software, 
            APIs y optimización de rendimiento.
          </p>
          <div className="hero-actions">
            <a 
              href="#projects" 
              className="btn-primary"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Ver Proyectos
              <ArrowRight size={18} />
            </a>
            <a 
              href="/CV_JuanDavid_Martinez_Ciroo (1).pdf" 
              download="CV_Juan_David_Martinez.pdf"
              className="btn-secondary"
            >
              <Download size={18} />
              Descargar CV
            </a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="tech-cube-container">
            {/* Cubo 3D central */}
            <div className="tech-cube">
              <div className="cube-face front">
                <div className="face-content">
                  <div className="tech-logo">⚛️</div>
                  <span>React</span>
                </div>
              </div>
              <div className="cube-face back">
                <div className="face-content">
                  <div className="tech-logo">🟢</div>
                  <span>Node.js</span>
                </div>
              </div>
              <div className="cube-face right">
                <div className="face-content">
                  <div className="tech-logo">🐍</div>
                  <span>Python</span>
                </div>
              </div>
              <div className="cube-face left">
                <div className="face-content">
                  <div className="tech-logo">💜</div>
                  <span>C#</span>
                </div>
              </div>
              <div className="cube-face top">
                <div className="face-content">
                  <div className="tech-logo">☕</div>
                  <span>Java</span>
                </div>
              </div>
              <div className="cube-face bottom">
                <div className="face-content">
                  <div className="tech-logo">🐳</div>
                  <span>Docker</span>
                </div>
              </div>
            </div>

            {/* Tecnologías orbitales */}
            <div className="orbital-techs">
              <div className="orbit-tech orbit-1" style={{'--delay': '0s'}}>
                <div className="orbit-icon">🅰️</div>
                <span>Angular</span>
              </div>
              <div className="orbit-tech orbit-2" style={{'--delay': '0.5s'}}>
                <div className="orbit-icon">⚡</div>
                <span>Next.js</span>
              </div>
              <div className="orbit-tech orbit-3" style={{'--delay': '1s'}}>
                <div className="orbit-icon">📱</div>
                <span>React Native</span>
              </div>
              <div className="orbit-tech orbit-4" style={{'--delay': '1.5s'}}>
                <div className="orbit-icon">🚀</div>
                <span>FastAPI</span>
              </div>
              <div className="orbit-tech orbit-5" style={{'--delay': '2s'}}>
                <div className="orbit-icon">☁️</div>
                <span>AWS</span>
              </div>
              <div className="orbit-tech orbit-6" style={{'--delay': '2.5s'}}>
                <div className="orbit-icon">🗄️</div>
                <span>MySQL</span>
              </div>
              <div className="orbit-tech orbit-7" style={{'--delay': '3s'}}>
                <div className="orbit-icon">🔧</div>
                <span>Git</span>
              </div>
              <div className="orbit-tech orbit-8" style={{'--delay': '3.5s'}}>
                <div className="orbit-icon">📘</div>
                <span>TypeScript</span>
              </div>
            </div>

            {/* Efectos de conexión */}
            <div className="cube-connections">
              <div className="connection-line line-1"></div>
              <div className="connection-line line-2"></div>
              <div className="connection-line line-3"></div>
              <div className="connection-line line-4"></div>
            </div>

            {/* Efectos de fondo */}
            <div className="cube-bg-effects">
              <div className="bg-glow glow-1"></div>
              <div className="bg-glow glow-2"></div>
              <div className="bg-glow glow-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ElegantHero
