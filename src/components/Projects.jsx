import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Github, Eye, Filter, Star } from 'lucide-react'
import { projects, categories, getProjectsByCategory, getFeaturedProjects } from '../data/projects'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [selectedProject, setSelectedProject] = useState(null)
  const [showFeatured, setShowFeatured] = useState(false)

  const filteredProjects = showFeatured 
    ? getFeaturedProjects() 
    : getProjectsByCategory(selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  const ProjectCard = ({ project }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -10, scale: 1.02 }}
      className="glass rounded-2xl overflow-hidden group cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      {/* Imagen del proyecto */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badge de categoría */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-purple-500/80 backdrop-blur-sm rounded-full text-xs font-medium text-white">
            {project.category}
          </span>
        </div>

        {/* Badge de destacado */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <Star size={16} className="text-yellow-400 fill-current" />
          </div>
        )}

        {/* Botones de acción en hover */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <motion.a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={20} />
          </motion.a>
          <motion.a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={20} />
          </motion.a>
        </div>
      </div>

      {/* Contenido del proyecto */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-800/50 rounded-md text-xs text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-800/50 rounded-md text-xs text-gray-400">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        {/* Call to action */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-purple-400 font-medium group-hover:text-purple-300 transition-colors">
            Ver detalles
          </span>
          <Eye size={16} className="text-purple-400 group-hover:text-purple-300 transition-colors" />
        </div>
      </div>
    </motion.div>
  )

  const ProjectModal = ({ project, onClose }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="glass-strong rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen principal */}
        <div className="relative h-64 md:h-80">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Botón de cerrar */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
          >
            ×
          </button>
        </div>

        {/* Contenido */}
        <div className="p-8">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <h2 className="text-3xl font-bold text-white">{project.title}</h2>
            <span className="px-3 py-1 bg-purple-500/20 border border-purple-500/30 rounded-full text-sm text-purple-300">
              {project.category}
            </span>
            {project.featured && (
              <div className="flex items-center gap-1 text-yellow-400">
                <Star size={16} className="fill-current" />
                <span className="text-sm">Destacado</span>
              </div>
            )}
          </div>

          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            {project.description}
          </p>

          {/* Detalles del proyecto */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">El Desafío</h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                {project.details.challenge}
              </p>
              
              <h3 className="text-xl font-bold text-white mb-4">La Solución</h3>
              <p className="text-gray-400 leading-relaxed">
                {project.details.solution}
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold text-white mb-4">Características</h3>
              <ul className="space-y-2">
                {project.details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-400">
                    <span className="text-purple-400 mt-1">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tecnologías */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-4">Tecnologías Utilizadas</h3>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg text-white font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Botones de acción */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              <ExternalLink size={20} />
              Ver Demo
            </motion.a>
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline"
            >
              <Github size={20} />
              Ver Código
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-7xl mx-auto"
        >
          {/* Título de sección */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gradient">Mis Proyectos</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Una colección de proyectos que demuestran mis habilidades y pasión por el desarrollo
            </p>

            {/* Filtros */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {/* Toggle proyectos destacados */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowFeatured(!showFeatured)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 ${
                  showFeatured 
                    ? 'bg-yellow-500/20 border border-yellow-500/30 text-yellow-300' 
                    : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white'
                }`}
              >
                <Star size={16} className={showFeatured ? 'fill-current' : ''} />
                Destacados
              </motion.button>

              {/* Filtros de categoría */}
              <div className="flex items-center gap-2">
                <Filter size={16} className="text-gray-400" />
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setSelectedCategory(category)
                      setShowFeatured(false)
                    }}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${
                      selectedCategory === category && !showFeatured
                        ? 'bg-purple-500/20 border border-purple-500/30 text-purple-300' 
                        : 'bg-gray-800/50 border border-gray-700 text-gray-400 hover:text-white'
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Grid de proyectos */}
          <AnimatePresence mode="wait">
            <motion.div
              key={showFeatured ? 'featured' : selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Mensaje cuando no hay proyectos */}
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <p className="text-gray-400 text-lg">
                No hay proyectos en esta categoría aún. ¡Pronto habrá más!
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Modal de proyecto */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  )
}

export default Projects
