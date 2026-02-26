export const personalInfo = {
  name: 'Andrés Felipe Echeverri Serrano',
  career: 'Estudiante de Ingeniería Informática (Noveno semestre)',
  university: 'Universidad de Caldas',
  location: 'La Dorada, Caldas – Colombia',
  email: 'echeverrifelipe53@gmail.com',
  phone: '3205606729',
}

// ID de Formspree para el formulario de contacto (formspree.io). Opcional: puedes usar VITE_FORMSPREE_ID en .env
export const formspreeFormId = import.meta.env.VITE_FORMSPREE_ID || ''

export const profileText =
  'Estudiante de Noveno Semestre de Ingeniería Informática con formación en desarrollo Full Stack (Node.js, React, PostgreSQL). Experiencia en construcción de APIs REST, dashboards interactivos y sistemas de gestión académica. Interés en desarrollo de software, análisis de datos y soluciones escalables orientadas a resultados. Actualmente en búsqueda de prácticas profesionales para aplicar conocimientos técnicos y aportar valor en entornos empresariales.'

export const skills = {
  languages: ['JavaScript', 'TypeScript'],
  frontend: ['React', 'Tailwind CSS', 'HTML5', 'CSS3'],
  backend: ['Node.js', 'Express.js'],
  databases: ['MySQL', 'PostgreSQL'],
  tools: ['Git', 'Swagger', 'APIs REST', 'Postman'],
}

export const softSkills = [
  'Trabajo en equipo',
  'Comunicación efectiva',
  'Adaptabilidad',
  'Resolución de problemas',
  'Pensamiento analítico',
  'Gestión del tiempo',
]

export const projects = [
  {
    id: 1,
    title: 'Sistema de Soporte a la Decisión (DSS)',
    description:
      'Diseño y desarrollo de un sistema orientado al análisis de datos de bienestar estudiantil para optimizar la asignación de recursos universitarios. Implementación de API RESTful para carga y procesamiento de archivos CSV, simulaciones what-if y visualizaciones interactivas para facilitar la toma de decisiones estratégicas.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'React'],
  },
  {
    id: 2,
    title: 'Dashboard Climático en Tiempo Real',
    description:
      'Desarrollo de dashboard interactivo que consume APIs externas (OpenWeather y Geolocation API). Incluye búsqueda de ciudades, pronóstico extendido, sistema de favoritos y visualización gráfica de datos meteorológicos. Diseño responsive y gestión eficiente de estados con TypeScript.',
    technologies: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 3,
    title: 'Sistema de Gestión Escolar',
    description:
      'Sistema académico con arquitectura cliente-servidor, implementación de API RESTful y operaciones CRUD completas para estudiantes, docentes y materias. Backend modular y base de datos relacional optimizada.',
    technologies: ['Node.js', 'Express', 'MySQL'],
  },
]
