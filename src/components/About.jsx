import React from 'react'
import { motion } from 'framer-motion'
import { Code, Coffee, Heart, Zap, Users, Target } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '3+', label: 'Años de experiencia', icon: Code },
    { number: '50+', label: 'Proyectos completados', icon: Target },
    { number: '∞', label: 'Tazas de café', icon: Coffee },
    { number: '100%', label: 'Pasión por el código', icon: Heart }
  ]

  const values = [
    {
      icon: Code,
      title: 'Código Limpio',
      description: 'Escribo código mantenible, escalable y siguiendo las mejores prácticas de la industria.'
    },
    {
      icon: Zap,
      title: 'Innovación',
      description: 'Siempre busco las últimas tecnologías y metodologías para crear soluciones innovadoras.'
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajo mejor en equipo, comunicando ideas y aprendiendo de otros desarrolladores.'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-gray-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-6xl mx-auto"
        >
          {/* Título de sección */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Sobre mí</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Desarrollador apasionado por crear soluciones digitales que impacten positivamente en la vida de las personas
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Imagen y descripción personal */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="relative">
                <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center border border-purple-400/30">
                  <div className="w-72 h-72 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                    <span className="text-6xl">👨‍💻</span>
                  </div>
                </div>
                
                {/* Elementos decorativos */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-16 h-16 border-2 border-purple-400/30 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 border-2 border-pink-400/30 rounded-full"
                />
              </div>
            </motion.div>

            {/* Contenido textual */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¡Hola! Soy Juan, desarrollador Full Stack
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Mi pasión por la programación comenzó hace más de 3 años, y desde entonces 
                  he estado en constante aprendizaje y crecimiento en el mundo del desarrollo web.
                </p>
                
                <p>
                  Me especializo en crear aplicaciones web modernas, escalables y con excelente 
                  experiencia de usuario. Disfruto trabajando tanto en el frontend como en el backend, 
                  siempre buscando la mejor solución para cada proyecto.
                </p>
                
                <p>
                  Cuando no estoy programando, me gusta mantenerme actualizado con las últimas 
                  tendencias tecnológicas, contribuir a proyectos open source y compartir 
                  conocimiento con la comunidad de desarrolladores.
                </p>
              </div>

              {/* Botón de contacto */}
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 btn btn-primary mt-6"
              >
                <Heart size={20} />
                Trabajemos juntos
              </motion.a>
            </motion.div>
          </div>

          {/* Estadísticas */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass p-6 rounded-2xl text-center group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon size={24} className="text-purple-400" />
                </div>
                <h4 className="text-3xl font-bold text-gradient mb-2">{stat.number}</h4>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Valores y principios */}
          <motion.div variants={containerVariants} className="space-y-12">
            <motion.h3
              variants={itemVariants}
              className="text-3xl font-bold text-center text-white mb-12"
            >
              Mis principios de desarrollo
            </motion.h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="glass p-8 rounded-2xl text-center group cursor-pointer"
                >
                  <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon size={32} className="text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
