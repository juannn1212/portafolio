import { useState, useEffect } from 'react'

export const useSectionTransition = () => {
  const [currentSection, setCurrentSection] = useState('hero')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [transitionDirection, setTransitionDirection] = useState('down')

  useEffect(() => {
    let lastScrollY = window.scrollY
    let ticking = false
    let transitionTimeout = null

    const updateSection = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const sectionElements = sections.map(id => document.getElementById(id))
      
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const direction = scrollY > lastScrollY ? 'down' : 'up'
      
      // Encontrar la sección actual con mejor detección
      let newSection = 'hero'
      let maxVisible = 0
      
      sectionElements.forEach((element, index) => {
        if (element) {
          const rect = element.getBoundingClientRect()
          const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0)
          const centerDistance = Math.abs(rect.top + rect.height / 2 - windowHeight / 2)
          
          // Priorizar secciones más centradas en la pantalla
          if (visibleHeight > windowHeight * 0.4 && centerDistance < windowHeight * 0.3) {
            if (visibleHeight > maxVisible) {
              maxVisible = visibleHeight
              newSection = sections[index]
            }
          }
        }
      })
      
      // Solo activar transición si cambió la sección y no está en transición
      if (newSection !== currentSection && !isTransitioning) {
        // Limpiar timeout anterior si existe
        if (transitionTimeout) {
          clearTimeout(transitionTimeout)
        }
        
        setTransitionDirection(direction)
        setIsTransitioning(true)
        
        transitionTimeout = setTimeout(() => {
          setCurrentSection(newSection)
          setIsTransitioning(false)
        }, 400) // Ajustado al tiempo de la animación CSS
      }
      
      lastScrollY = scrollY
      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateSection)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (transitionTimeout) {
        clearTimeout(transitionTimeout)
      }
    }
  }, [currentSection, isTransitioning])

  return {
    currentSection,
    isTransitioning,
    transitionDirection
  }
}
