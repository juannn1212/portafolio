export const projects = [
  {
    id: 1,
    title: "E-Commerce Moderno",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pagos seguros y panel de administración.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop&crop=center",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    category: "Full Stack",
    featured: true,
    demoUrl: "https://demo-ecommerce.com",
    githubUrl: "https://github.com/juannn1212/ecommerce-project",
    details: {
      challenge: "Crear una experiencia de compra fluida y segura",
      solution: "Implementé un sistema completo con autenticación JWT, integración de pagos y dashboard administrativo",
      features: [
        "Autenticación segura con JWT",
        "Carrito de compras persistente",
        "Integración con Stripe para pagos",
        "Panel de administración completo",
        "Búsqueda y filtros avanzados",
        "Diseño responsive y accesible"
      ]
    }
  },
  {
    id: 2,
    title: "App de Gestión de Tareas",
    description: "Aplicación web para la gestión de proyectos y tareas con colaboración en tiempo real y seguimiento de progreso.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop&crop=center",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    category: "Frontend",
    featured: true,
    demoUrl: "https://task-manager-demo.com",
    githubUrl: "https://github.com/juannn1212/task-manager",
    details: {
      challenge: "Facilitar la colaboración en equipo para proyectos complejos",
      solution: "Desarrollé una interfaz intuitiva con actualizaciones en tiempo real y sistema de notificaciones",
      features: [
        "Colaboración en tiempo real",
        "Tableros Kanban interactivos",
        "Sistema de notificaciones",
        "Seguimiento de tiempo",
        "Reportes y analíticas",
        "Integración con calendario"
      ]
    }
  },
  {
    id: 3,
    title: "Dashboard de Analíticas",
    description: "Dashboard interactivo para visualización de datos con gráficos dinámicos y reportes personalizables.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    technologies: ["Vue.js", "D3.js", "Express", "PostgreSQL"],
    category: "Data Visualization",
    featured: false,
    demoUrl: "https://analytics-dashboard.com",
    githubUrl: "https://github.com/juannn1212/analytics-dashboard",
    details: {
      challenge: "Presentar datos complejos de forma clara y actionable",
      solution: "Creé visualizaciones interactivas con filtros dinámicos y exportación de reportes",
      features: [
        "Gráficos interactivos con D3.js",
        "Filtros dinámicos en tiempo real",
        "Exportación de reportes PDF/Excel",
        "Alertas automáticas",
        "Dashboard personalizable",
        "API REST robusta"
      ]
    }
  },
  {
    id: 4,
    title: "App Móvil de Fitness",
    description: "Aplicación móvil para seguimiento de ejercicios y rutinas personalizadas con sincronización en la nube.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&crop=center",
    technologies: ["React Native", "Redux", "Firebase", "Expo"],
    category: "Mobile",
    featured: false,
    demoUrl: "https://fitness-app-demo.com",
    githubUrl: "https://github.com/juannn1212/fitness-app",
    details: {
      challenge: "Crear una experiencia móvil fluida para el seguimiento de fitness",
      solution: "Desarrollé una app nativa con sincronización offline y rutinas personalizadas",
      features: [
        "Seguimiento de ejercicios",
        "Rutinas personalizadas",
        "Sincronización offline",
        "Estadísticas de progreso",
        "Recordatorios push",
        "Integración con wearables"
      ]
    }
  },
  {
    id: 5,
    title: "Plataforma de Aprendizaje",
    description: "Sistema de gestión de aprendizaje (LMS) con cursos interactivos, evaluaciones y seguimiento de progreso.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=center",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Tailwind CSS"],
    category: "Full Stack",
    featured: true,
    demoUrl: "https://learning-platform.com",
    githubUrl: "https://github.com/juannn1212/learning-platform",
    details: {
      challenge: "Crear una plataforma educativa completa y escalable",
      solution: "Implementé un LMS completo con video streaming, evaluaciones y gamificación",
      features: [
        "Cursos multimedia interactivos",
        "Sistema de evaluaciones",
        "Seguimiento de progreso",
        "Certificaciones automáticas",
        "Foros de discusión",
        "Gamificación con badges"
      ]
    }
  },
  {
    id: 6,
    title: "API REST de Blog",
    description: "API completa para sistema de blog con autenticación, comentarios, categorías y sistema de likes.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&crop=center",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    category: "Backend",
    featured: false,
    demoUrl: "https://blog-api-docs.com",
    githubUrl: "https://github.com/juannn1212/blog-api",
    details: {
      challenge: "Desarrollar una API robusta y bien documentada",
      solution: "Creé una API RESTful completa con documentación automática y testing",
      features: [
        "CRUD completo de posts",
        "Sistema de autenticación JWT",
        "Comentarios anidados",
        "Upload de imágenes",
        "Búsqueda full-text",
        "Documentación con Swagger"
      ]
    }
  }
]

export const categories = [
  "Todos",
  "Full Stack",
  "Frontend",
  "Backend", 
  "Mobile",
  "Data Visualization"
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
