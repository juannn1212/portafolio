export const projects = [
  {
    id: 1,
    title: "AI-Powered Personal Assistant",
    description: "Asistente psicológico inteligente con análisis emocional avanzado usando TensorFlow. Combina productividad con apoyo psicológico y motivacional en una app móvil completa.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
    technologies: ["React Native", "FastAPI", "TensorFlow", "Python", "SQLite/PostgreSQL"],
    category: "AI/ML",
    featured: true,
    demoUrl: "https://ai-assistant-demo.com",
    githubUrl: "https://github.com/juannn1212/AI-Powered_Personal_Assistant",
    details: {
      challenge: "Crear un asistente psicológico inteligente que combine productividad con apoyo emocional usando IA avanzada",
      solution: "Desarrollé una aplicación móvil completa con análisis emocional usando TensorFlow, gestión de tareas/hábitos y soporte psicológico personalizado",
      features: [
        "Análisis emocional inteligente con TensorFlow y detección de estados emocionales",
        "Soporte psicológico especializado para situaciones difíciles (pérdida, ansiedad, tristeza)",
        "Gestión completa de tareas y hábitos con categorización y prioridades",
        "Analytics avanzados con gráficos interactivos y seguimiento de productividad",
        "Aplicación móvil React Native con autenticación JWT y persistencia de datos"
      ]
    }
  },
  {
    id: 2,
    title: "Sistema de Gestión de Biblioteca",
    description: "Plataforma web completa para gestión de bibliotecas con préstamos, reservas, catálogo digital y sistema de usuarios.",
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&fit=crop&crop=center",
    technologies: ["Spring Boot", "React", "PostgreSQL", "JWT", "Spring Security"],
    category: "Full Stack",
    featured: false,
    demoUrl: "https://library-management-demo.com",
    githubUrl: "https://github.com/juannn1212/sistema_gestion_biblioteca",
    details: {
      challenge: "Crear un sistema robusto para gestión de bibliotecas con múltiples funcionalidades",
      solution: "Desarrollé una plataforma completa con Spring Boot, gestión de préstamos y catálogo digital",
      features: [
        "Gestión completa de libros, usuarios y préstamos",
        "Sistema de reservas y renovaciones automáticas",
        "Catálogo digital con búsqueda avanzada",
        "Sistema de multas y notificaciones",
        "API RESTful con documentación Swagger"
      ]
    }
  },
  {
    id: 3,
    title: "Plataforma de Streaming Personal",
    description: "Sistema de streaming de video personal con transcodificación automática, múltiples calidades y chat en tiempo real.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center",
    technologies: ["React", "Node.js", "FFmpeg", "WebRTC", "Socket.io"],
    category: "Full Stack",
    featured: false,
    demoUrl: "https://streaming-platform-demo.com",
    githubUrl: "https://github.com/juannn1212/personal-streaming",
    details: {
      challenge: "Crear una plataforma de streaming con transcodificación automática",
      solution: "Implementé un sistema completo con múltiples calidades y chat interactivo",
      features: [
        "Transcodificación automática de video con FFmpeg",
        "Múltiples calidades de streaming (720p, 1080p, 4K)",
        "Chat en tiempo real con moderación",
        "Sistema de donaciones y suscripciones",
        "Dashboard de estadísticas en tiempo real"
      ]
    }
  },
  {
    id: 4,
    title: "App de Gestión de Eventos",
    description: "Aplicación móvil para gestión completa de eventos con venta de tickets, check-in QR y análisis de asistencia.",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop&crop=center",
    technologies: ["React Native", "Firebase", "Stripe", "QR Code API", "Google Maps"],
    category: "Mobile",
    featured: false,
    demoUrl: "https://event-management-demo.com",
    githubUrl: "https://github.com/juannn1212/event-management",
    details: {
      challenge: "Crear una app completa para gestión de eventos con múltiples funcionalidades",
      solution: "Desarrollé una plataforma integral con venta de tickets y análisis de datos",
      features: [
        "Venta de tickets con Stripe",
        "Check-in con códigos QR",
        "Mapas interactivos de ubicaciones",
        "Análisis de asistencia en tiempo real",
        "Sistema de notificaciones push"
      ]
    }
  },
  {
    id: 5,
    title: "Dashboard de Monitoreo IoT",
    description: "Dashboard web para monitoreo de dispositivos IoT con visualización de datos, alertas y control remoto.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    technologies: ["React", "Node.js", "MQTT", "Chart.js", "WebSocket"],
    category: "IoT",
    featured: false,
    demoUrl: "https://iot-dashboard-demo.com",
    githubUrl: "https://github.com/juannn1212/iot-monitoring",
    details: {
      challenge: "Crear un dashboard para monitoreo de dispositivos IoT en tiempo real",
      solution: "Implementé un sistema completo con visualización de datos y control remoto",
      features: [
        "Monitoreo en tiempo real de dispositivos IoT",
        "Visualización de datos con gráficos interactivos",
        "Sistema de alertas personalizables",
        "Control remoto de dispositivos",
        "Historial de datos y reportes"
      ]
    }
  },
  {
    id: 6,
    title: "Proyecto Seguimiento DHL - Full Stack .NET + React",
    description: "Sistema full-stack para cotizar envíos, crear envíos con etiqueta y hacer tracking usando DHL Express (MyDHL API).",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center",
    technologies: [".NET 8", "React", "TypeScript", "Entity Framework", "SQL Server", "DHL API"],
    category: "Full Stack",
    featured: false,
    demoUrl: "https://dhl-tracking-demo.com",
    githubUrl: "https://github.com/juannn1212/proyectoSeguimiento",
    details: {
      challenge: "Crear un sistema completo de gestión de envíos con integración a DHL Express API",
      solution: "Desarrollé una aplicación full-stack con backend .NET 8 y frontend React para cotizar, crear envíos y hacer tracking",
      features: [
        "Cotización de envíos con persistencia en base de datos",
        "Creación de envíos con generación de etiquetas PDF",
        "Sistema de tracking con timeline de eventos",
        "Historial completo de cotizaciones y envíos",
        "UI responsive con tema DHL y validaciones robustas",
        "Integración completa con MyDHL API"
      ]
    }
  }
]

export const categories = [
  "Todos",
  "AI/ML",
  "Full Stack",
  "Mobile",
  "IoT"
]

// Función helper para obtener proyectos por categoría
export const getProjectsByCategory = (category) => {
  if (category === "Todos") return projects
  return projects.filter(project => project.category === category)
}

// Función helper para obtener proyectos destacados
export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured)
}

// Función helper para obtener proyecto por ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id))
}
