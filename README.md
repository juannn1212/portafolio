# 🚀 Portafolio Personal - Juan

Un portafolio moderno y responsivo construido con React, Framer Motion y tecnologías web modernas.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz elegante con efectos glassmorphism y gradientes
- **🌙 Tema Oscuro**: Diseño optimizado para tema oscuro
- **📱 Totalmente Responsivo**: Se adapta perfectamente a todos los dispositivos
- **🎭 Animaciones Fluidas**: Transiciones suaves con Framer Motion
- **⚡ Alto Rendimiento**: Optimizado para velocidad y SEO
- **🎯 Navegación Intuitiva**: Menú sticky con smooth scrolling
- **📊 Sección de Proyectos Dinámica**: Fácil de actualizar y mantener
- **📧 Formulario de Contacto**: Funcional y con validación

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Framer Motion** - Biblioteca de animaciones para React
- **Lucide React** - Iconos modernos y consistentes
- **CSS3** - Estilos avanzados con variables CSS y gradientes

### Herramientas de Desarrollo
- **Vite** - Build tool ultrarrápido
- **ESLint** - Linting de código
- **Git** - Control de versiones

## 🚀 Instalación y Uso

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

```bash
# Clona el repositorio
git clone https://github.com/juannn1212/portafolio.git

# Navega al directorio
cd portafolio

# Instala las dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev

# Para construir para producción
npm run build

# Para previsualizar la build de producción
npm run preview
```

El proyecto estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
portafolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navegación principal
│   │   ├── Hero.jsx        # Sección de presentación
│   │   ├── About.jsx       # Sobre mí
│   │   ├── Projects.jsx    # Portafolio de proyectos
│   │   ├── Skills.jsx      # Habilidades técnicas
│   │   └── Contact.jsx     # Formulario de contacto
│   ├── data/
│   │   └── projects.js     # Datos de proyectos
│   ├── styles/
│   │   ├── index.css       # Estilos globales
│   │   └── App.css         # Estilos del componente principal
│   ├── App.jsx             # Componente principal
│   └── main.jsx            # Punto de entrada
├── index.html              # HTML principal
├── package.json
└── README.md
```

## 🎨 Personalización

### Agregar Nuevos Proyectos
Edita el archivo `src/data/projects.js` para agregar, modificar o eliminar proyectos:

```javascript
export const projects = [
  {
    id: 1,
    title: "Nombre del Proyecto",
    description: "Descripción breve del proyecto",
    image: "URL_de_la_imagen",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "Full Stack",
    featured: true,
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com/usuario/proyecto",
    details: {
      challenge: "El desafío que resolviste",
      solution: "Cómo lo resolviste",
      features: ["Característica 1", "Característica 2"]
    }
  }
  // ... más proyectos
]
```

### Modificar Información Personal
Actualiza los siguientes archivos:
- `src/components/Header.jsx` - Links de redes sociales
- `src/components/Hero.jsx` - Información de presentación
- `src/components/About.jsx` - Biografía y estadísticas
- `src/components/Contact.jsx` - Información de contacto

### Personalizar Colores y Estilos
Las variables CSS están definidas en `src/styles/index.css`:

```css
:root {
  --primary-color: #6366f1;
  --primary-dark: #4f46e5;
  --bg-primary: #0f0f23;
  /* ... más variables */
}
```

## 📱 Responsive Design

El portafolio está optimizado para:
- 📱 Móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Desktop (1440px+)

## 🌟 Características Destacadas

### Animaciones
- Entrada progresiva de elementos
- Hover effects en botones y tarjetas
- Parallax suave en el hero
- Transiciones fluidas entre secciones

### UX/UI
- Navegación sticky intuitiva
- Smooth scrolling
- Estados de carga y feedback
- Formulario con validación en tiempo real

### Performance
- Lazy loading de imágenes
- Componentes optimizados
- Bundle size minimizado
- SEO friendly

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el portafolio:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📧 Contacto

- **Email**: juan@ejemplo.com
- **LinkedIn**: [linkedin.com/in/juan](https://linkedin.com/in/juan)
- **GitHub**: [github.com/juannn1212](https://github.com/juannn1212)

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

⭐ Si te gusta este portafolio, ¡no olvides darle una estrella en GitHub!