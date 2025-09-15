import React, { useEffect, useState } from 'react'
import ElegantNav from './components/ElegantNav'
import ElegantHero from './components/ElegantHero'
import ElegantAbout from './components/ElegantAbout'
import ElegantProjects from './components/ElegantProjects'
import ElegantContact from './components/ElegantContact'

function App() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
      
      // Parallax sutil para el fondo
      const parallaxBg = document.querySelector('.parallax-bg')
      if (parallaxBg) {
        const yPos = -(window.scrollY * 0.1)
        parallaxBg.style.transform = `translateY(${yPos}px)`
      }

      // Efectos sutiles en formas flotantes
      const shapes = document.querySelectorAll('.shape')
      shapes.forEach((shape, index) => {
        const speed = 0.05 + (index * 0.02)
        const yPos = window.scrollY * speed
        shape.style.transform = `translateY(${yPos}px)`
      })
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="elegant-app">
      {/* Fondo parallax sutil */}
      <div className="parallax-bg"></div>
      
      <ElegantNav />
      <ElegantHero />
      <ElegantAbout />
      <ElegantProjects />
      <ElegantContact />
    </div>
  )
}

export default App
