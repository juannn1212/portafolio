import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Code2, 
  Database, 
  Palette, 
  Smartphone, 
  Cloud, 
  GitBranch,
  Monitor,
  Server,
  Layers,
  Zap
} from 'lucide-react'

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('Frontend')

  const skillCategories = {
    Frontend: {
      icon: Monitor,
      color: 'from-blue-400 to-cyan-400',
      skills: [
        { name: 'React', level: 95, description: 'Hooks, Context API, Redux' },
        { name: 'JavaScript', level: 90, description: 'ES6+, Async/Await, DOM' },
        { name: 'TypeScript', level: 85, description: 'Tipos, Interfaces, Generics' },
        { name: 'HTML/CSS', level: 95, description: 'Semantic HTML, Flexbox, Grid' },
        { name: 'Tailwind CSS', level: 90, description: 'Responsive Design, Components' },
        { name: 'Vue.js', level: 80, description: 'Composition API, Vuex' },
        { name: 'Next.js', level: 85, description: 'SSR, SSG, API Routes' },
        { name: 'Sass/SCSS', level: 88, description: 'Variables, Mixins, Nesting' }
      ]
    },
    Backend: {
      icon: Server,
      color: 'from-green-400 to-emerald-400',
      skills: [
        { name: 'Node.js', level: 90, description: 'Express, Middleware, Streams' },
        { name: 'Python', level: 85, description: 'Django, FastAPI, Flask' },
        { name: 'MongoDB', level: 88, description: 'Aggregation, Indexing, Mongoose' },
        { name: 'PostgreSQL', level: 82, description: 'Queries, Relations, Optimization' },
        { name: 'REST APIs', level: 92, description: 'Design, Documentation, Testing' },
        { name: 'GraphQL', level: 78, description: 'Queries, Mutations, Apollo' },
        { name: 'Firebase', level: 85, description: 'Auth, Firestore, Functions' },
        { name: 'JWT', level: 90, description: 'Authentication, Authorization' }
      ]
    },
    Mobile: {
      icon: Smartphone,
      color: 'from-purple-400 to-pink-400',
      skills: [
        { name: 'React Native', level: 85, description: 'Navigation, AsyncStorage, APIs' },
        { name: 'Expo', level: 88, description: 'Development, Building, Publishing' },
        { name: 'Flutter', level: 75, description: 'Widgets, State Management' },
        { name: 'iOS Development', level: 70, description: 'Swift, UIKit, Core Data' },
        { name: 'Android', level: 72, description: 'Kotlin, Jetpack Compose' }
      ]
    },
    Tools: {
      icon: Layers,
      color: 'from-orange-400 to-red-400',
      skills: [
        { name: 'Git', level: 92, description: 'Branching, Merging, Workflows' },
        { name: 'Docker', level: 80, description: 'Containers, Compose, Images' },
        { name: 'AWS', level: 75, description: 'EC2, S3, Lambda, RDS' },
        { name: 'Webpack', level: 85, description: 'Bundling, Optimization, Plugins' },
        { name: 'Jest', level: 88, description: 'Unit Testing, Mocking, Coverage' },
        { name: 'Figma', level: 82, description: 'Design Systems, Prototyping' },
        { name: 'VS Code', level: 95, description: 'Extensions, Debugging, Shortcuts' }
      ]
    }
  }

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

  const SkillBar = ({ skill, index }) => (
    <motion.div
      variants={itemVariants}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="text-white font-semibold">{skill.name}</h4>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-gray-800 rounded-full overflow-hidden mb-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className={`h-full bg-gradient-to-r ${skillCategories[selectedCategory].color} rounded-full relative`}
        >
          <div className="absolute inset-0 bg-white/20 animate-pulse" />
        </motion.div>
      </div>
      <p className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
        {skill.description}
      </p>
    </motion.div>
  )

  const CategoryButton = ({ category, isActive, onClick }) => {
    const CategoryIcon = skillCategories[category].icon
    return (
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
        onClick={onClick}
        className={`flex items-center gap-3 p-4 rounded-xl transition-all duration-300 ${
          isActive 
            ? 'glass-strong border-2 border-purple-500/30' 
            : 'glass hover:glass-strong'
        }`}
      >
        <div className={`p-2 rounded-lg bg-gradient-to-r ${skillCategories[category].color}`}>
          <CategoryIcon size={20} className="text-white" />
        </div>
        <div className="text-left">
          <h3 className="font-semibold text-white">{category}</h3>
          <p className="text-xs text-gray-400">
            {skillCategories[category].skills.length} habilidades
          </p>
        </div>
      </motion.button>
    )
  }

  return (
    <section id="skills" className="section-padding bg-gradient-to-b from-transparent to-gray-900/20">
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
              <span className="text-gradient">Habilidades</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Tecnologías y herramientas que domino para crear soluciones completas
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Categorías */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <h3 className="text-2xl font-bold text-white mb-6">Categorías</h3>
              <div className="space-y-4">
                {Object.keys(skillCategories).map((category) => (
                  <CategoryButton
                    key={category}
                    category={category}
                    isActive={selectedCategory === category}
                    onClick={() => setSelectedCategory(category)}
                  />
                ))}
              </div>

              {/* Estadísticas generales */}
              <motion.div
                variants={itemVariants}
                className="mt-8 glass p-6 rounded-xl"
              >
                <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Zap className="text-yellow-400" size={20} />
                  Estadísticas
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total de habilidades</span>
                    <span className="text-white font-semibold">
                      {Object.values(skillCategories).reduce((acc, cat) => acc + cat.skills.length, 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Años de experiencia</span>
                    <span className="text-white font-semibold">3+</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Proyectos completados</span>
                    <span className="text-white font-semibold">50+</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Skills de la categoría seleccionada */}
            <motion.div
              key={selectedCategory}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-xl bg-gradient-to-r ${skillCategories[selectedCategory].color}`}>
                  {React.createElement(skillCategories[selectedCategory].icon, { size: 24, className: "text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedCategory}</h3>
                  <p className="text-gray-400">
                    {skillCategories[selectedCategory].skills.length} habilidades en esta categoría
                  </p>
                </div>
              </div>

              <div className="grid gap-6">
                {skillCategories[selectedCategory].skills.map((skill, index) => (
                  <SkillBar key={skill.name} skill={skill} index={index} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16"
          >
            <div className="glass p-8 rounded-2xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¿Tienes un proyecto en mente?
              </h3>
              <p className="text-gray-400 mb-6">
                Estas son solo algunas de mis habilidades. Siempre estoy aprendiendo nuevas tecnologías 
                y adaptándome a las necesidades de cada proyecto.
              </p>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                Trabajemos juntos
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
