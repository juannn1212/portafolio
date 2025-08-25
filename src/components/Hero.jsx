import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Download, Play } from 'lucide-react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const roles = [
    "Desarrollador Full Stack",
    "Creador de Experiencias Web",
    "Solucionador de Problemas",
    "Apasionado por la Tecnología"
  ]

  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Elementos de fondo animados */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 1, 0.3],
              x: mousePosition.x * (i % 3),
              y: mousePosition.y * (i % 3),
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Círculos de fondo */}
      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * 2,
          y: mousePosition.y * 2,
          scale: [1, 1.2, 1],
        }}
        transition={{
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"
        animate={{
          x: mousePosition.x * -1.5,
          y: mousePosition.y * -1.5,
          scale: [1.2, 1, 1.2],
        }}
        transition={{
          scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          {/* Saludo */}
          <motion.div
            variants={textVariants}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full text-sm font-medium text-purple-300 border border-purple-400/30">
              👋 ¡Hola! Soy Juan
            </span>
          </motion.div>

          {/* Título principal */}
          <motion.h1
            variants={textVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gradient">
              Desarrollador
            </span>
            <br />
            <span className="text-white">
              Full Stack
            </span>
          </motion.h1>

          {/* Subtítulo animado */}
          <motion.div
            variants={textVariants}
            className="text-xl md:text-2xl text-gray-300 mb-8 h-16 flex items-center justify-center"
          >
            <motion.span
              key={currentRole}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gradient font-medium"
            >
              {roles[currentRole]}
            </motion.span>
          </motion.div>

          {/* Descripción */}
          <motion.p
            variants={textVariants}
            className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Creo experiencias web increíbles y aplicaciones que resuelven problemas reales. 
            Especializado en React, Node.js y tecnologías modernas.
          </motion.p>

          {/* Botones de acción */}
          <motion.div
            variants={textVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary group"
            >
              <Play size={20} className="group-hover:rotate-12 transition-transform" />
              Ver mis proyectos
            </motion.a>
            
            <motion.a
              href="/cv.pdf"
              target="_blank"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline group"
            >
              <Download size={20} className="group-hover:translate-y-1 transition-transform" />
              Descargar CV
            </motion.a>
          </motion.div>

          {/* Indicador de scroll */}
          <motion.div
            variants={textVariants}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-gray-400 mb-4">Descubre más</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="p-2 rounded-full border border-gray-600 cursor-pointer hover:border-purple-400 transition-colors"
              onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown size={20} className="text-gray-400" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Código de fondo decorativo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute top-1/4 left-10 text-xs font-mono text-gray-600 transform -rotate-12"
        >
          {`const developer = {
  name: 'Juan',
  skills: ['React', 'Node.js', 'MongoDB'],
  passion: 'coding',
  coffee: '∞'
};`}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1.5 }}
          className="absolute bottom-1/4 right-10 text-xs font-mono text-gray-600 transform rotate-12"
        >
          {`function createAwesomeApps() {
  return innovation + creativity;
}`}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
