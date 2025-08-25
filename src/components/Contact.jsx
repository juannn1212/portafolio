import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MessageCircle,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success' | 'error' | null

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'juan@ejemplo.com',
      href: 'mailto:juan@ejemplo.com',
      description: 'Envíame un correo'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      description: 'Llamada o WhatsApp'
    },
    {
      icon: MapPin,
      title: 'Ubicación',
      value: 'Ciudad, País',
      href: '#',
      description: 'Disponible remotamente'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/juannn1212',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/juan',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com/juan',
      color: 'hover:text-blue-400'
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      href: '#',
      color: 'hover:text-purple-400'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Aquí iría la lógica real de envío del formulario
      // Por ejemplo, usando EmailJS, Netlify Forms, o tu propia API
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      
      // Limpiar el estado después de 5 segundos
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

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
    <section id="contact" className="section-padding">
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
              <span className="text-gradient">Contacto</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? ¡Hablemos! Estoy disponible para nuevas oportunidades
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Información de contacto */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Información de contacto</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center gap-4 p-4 glass rounded-xl hover:glass-strong transition-all duration-300 group"
                    >
                      <div className="p-3 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <info.icon size={24} className="text-purple-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                          {info.title}
                        </h4>
                        <p className="text-gray-300">{info.value}</p>
                        <p className="text-sm text-gray-500">{info.description}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Redes sociales */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Sígueme en</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-3 p-4 glass rounded-xl hover:glass-strong transition-all duration-300 text-gray-400 ${social.color}`}
                    >
                      <social.icon size={20} />
                      <span className="font-medium">{social.name}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Disponibilidad */}
              <motion.div
                variants={itemVariants}
                className="glass p-6 rounded-xl"
              >
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  Disponible para proyectos
                </h4>
                <p className="text-gray-400 leading-relaxed">
                  Actualmente estoy disponible para nuevos proyectos y colaboraciones. 
                  Tiempo de respuesta promedio: <span className="text-white font-semibold">24 horas</span>
                </p>
              </motion.div>
            </motion.div>

            {/* Formulario de contacto */}
            <motion.div variants={itemVariants}>
              <div className="glass-strong p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Envíame un mensaje</h3>
                
                {/* Estado del formulario */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-center gap-3 p-4 rounded-lg mb-6 ${
                      submitStatus === 'success' 
                        ? 'bg-green-500/20 border border-green-500/30 text-green-300'
                        : 'bg-red-500/20 border border-red-500/30 text-red-300'
                    }`}
                  >
                    {submitStatus === 'success' ? (
                      <CheckCircle size={20} />
                    ) : (
                      <AlertCircle size={20} />
                    )}
                    <span>
                      {submitStatus === 'success' 
                        ? '¡Mensaje enviado correctamente! Te responderé pronto.'
                        : 'Hubo un error al enviar el mensaje. Inténtalo de nuevo.'}
                    </span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Nombre */}
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                      placeholder="Tu nombre completo"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                      placeholder="tu@email.com"
                    />
                  </div>

                  {/* Asunto */}
                  <div>
                    <label htmlFor="subject" className="block text-white font-medium mb-2">
                      Asunto *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300"
                      placeholder="¿De qué quieres hablar?"
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2">
                      Mensaje *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all duration-300 resize-none"
                      placeholder="Cuéntame sobre tu proyecto, ideas o cualquier cosa que tengas en mente..."
                    />
                  </div>

                  {/* Botón de envío */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full flex items-center justify-center gap-3 py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl'
                    } text-white`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send size={20} />
                        Enviar mensaje
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
