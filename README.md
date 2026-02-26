# Currículum Web - Andrés Felipe Echeverri Serrano

Portfolio web profesional y moderno como **Desarrollador Full Stack Junior**. Desarrollado con React, Vite y Tailwind CSS, optimizado para GitHub Pages.

## Características

- Diseño minimalista y responsive (mobile first)
- Animaciones suaves al hacer scroll
- Navbar sticky con scroll suave
- Botón para volver arriba
- Formulario de contacto (Formspree o mailto)
- SEO básico (meta description, title)
- Listo para producción

## Tecnologías

- **React** + **Vite**
- **Tailwind CSS**
- **Lucide React** (iconos)

## Instalación local

1. Clona el repositorio (o descarga el proyecto).
2. Instala dependencias:

```bash
npm install
```

3. Inicia el servidor de desarrollo:

```bash
npm run dev
```

4. Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## Build para producción

```bash
npm run build
```

Los archivos se generan en la carpeta `dist/`.

Vista previa del build:

```bash
npm run preview
```

## Estructura del proyecto

```
src/
├── components/     # Navbar, Footer, ScrollToTop
├── sections/       # Hero, Profile, Skills, Projects, SoftSkills, Contact
├── hooks/          # useScrollAnimation
├── data/           # content.js (datos del CV)
├── App.jsx
├── main.jsx
└── index.css
```

## Personalización

- **Datos del CV**: edita `src/data/content.js` (nombre, perfil, habilidades, proyectos).
- **PDF**: el botón "Descargar CV" sirve el archivo `public/hoja-de-vida-felipe-echeverri.pdf`. Sustituye ese archivo por tu propio PDF (o renómbralo) para actualizar la hoja de vida.
- **Formulario de contacto**: ver sección "Formulario de contacto" más arriba (Formspree + secret `VITE_FORMSPREE_ID` en GitHub para el sitio desplegado; en local usa `.env` con `VITE_FORMSPREE_ID=tu-id`).
- **Redes**: GitHub ya apunta a [github.com/pipe-desarrollador](https://github.com/pipe-desarrollador). Actualiza LinkedIn en `src/components/Footer.jsx` si lo usas.

## Licencia

Uso personal / educativo.
