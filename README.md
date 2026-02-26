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

## Despliegue en GitHub Pages (pipe-desarrollador)

### 1. Crear el repositorio en GitHub

1. Entra en [github.com/pipe-desarrollador](https://github.com/pipe-desarrollador).
2. Clic en **New repository**.
3. Nombre del repo: **Curriculum** (o el que prefieras; si cambias, ajusta `VITE_BASE_PATH` en `.github/workflows/deploy.yml`).
4. No marques "Add a README" (ya tienes uno en el proyecto). Clic en **Create repository**.

### 2. Subir el código

En la terminal, desde la carpeta del proyecto:

```bash
git init
git add .
git commit -m "Portfolio Full Stack Junior - Curriculum web"
git branch -M main
git remote add origin https://github.com/pipe-desarrollador/Curriculum.git
git push -u origin main
```

(Si el repo tiene otro nombre, cambia `Curriculum` en la URL por el nombre del repo.)

### 3. Activar GitHub Pages

1. En el repo: **Settings → Pages**.
2. En **Source** elige **GitHub Actions**.
3. Guarda. Con el siguiente push a `main` se desplegará solo.

Tu sitio quedará en: **https://pipe-desarrollador.github.io/Curriculum/**

### 4. Formulario de contacto: recibir mensajes en tu correo

Para que los envíos del formulario lleguen a **echeverrifelipe53@gmail.com**:

1. Entra en [formspree.io](https://formspree.io) y crea una cuenta (gratis).
2. **Create a new form** → asigna el email **echeverrifelipe53@gmail.com** como destinatario.
3. Formspree te da un **Form ID** (ej: `xyzabcde`). Cópialo.
4. En tu repo de GitHub: **Settings → Secrets and variables → Actions**.
5. **New repository secret**:
   - Name: `VITE_FORMSPREE_ID`
   - Value: pega el Form ID (ej: `xyzabcde`).
6. Para que el cambio surta efecto en la web desplegada: haz un nuevo commit y push (o en **Actions** re-ejecuta el workflow "Deploy to GitHub Pages").

A partir de ahí, cada envío del formulario llegará a **echeverrifelipe53@gmail.com**. Sin este paso, el formulario sigue funcionando con **mailto** (se abre el cliente de correo del visitante).

---

### Opción alternativa: Build manual y subida de `dist/`

1. En `vite.config.js` usa `base: '/Curriculum/'` (o el nombre de tu repo).
2. Ejecuta `npm run build`.
3. En el repo: **Settings → Pages** → Source: rama `main`, carpeta **`/dist`**.

### Importante

- Si el nombre del repositorio **no** es `Curriculum`, cambia `VITE_BASE_PATH` en el workflow y/o `base` en `vite.config.js` al nombre correcto (ej: `'/mi-cv/'`).
- La URL final será: `https://<usuario>.github.io/<nombre-repo>/`

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
