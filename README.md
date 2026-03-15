# Plantilla de Portfolio en Angular

Este proyecto es una plantilla de portfolio en Angular pensada para que tus alumnos la descarguen, cambien la configuración y publiquen su propio portfolio sin tocar demasiados archivos.

Todo el contenido importante (nombre, experiencia, proyectos, contacto, orden de secciones, colores, tipografías) se configura desde un único archivo de configuración.

---

## 1. Requisitos

- Node.js y npm instalados
- Angular CLI (opcional pero recomendado):  
  `npm install -g @angular/cli`

---

## 2. Arrancar el proyecto en local

Desde esta carpeta (`angular-portfolio-template`):

```bash
npm install
npm start
```

Después abre `http://localhost:4200` en el navegador.

---

## 3. Dónde se configura todo

El archivo principal de configuración es:

- `src/app/config/portfolio.config.ts`

En este archivo puedes cambiar:

- Datos personales y de cabecera (nombre, rol, ubicación, disponibilidad, resumen)
- Experiencia profesional
- Proyectos
- Información de contacto y redes sociales
- Orden de las secciones de la landing
- Colores y tipografías del tema

No hace falta tocar componentes ni HTML si solo quieres adaptar el contenido.

---

## 4. Cambiar datos básicos del portfolio

Edita `src/app/config/portfolio.config.ts`:

- Sección `hero`: nombre, rol, ubicación, estado de disponibilidad, resumen y foto (`avatarUrl`).
  - En la plantilla se referencia por defecto a `'/image.png'`, un avatar de ejemplo que está en la carpeta `public`.
  - Para poner tu propia foto puedes sustituir `public/image.png` por tu imagen (manteniendo el mismo nombre) o cambiar la propiedad `avatarUrl` para que apunte a otro archivo dentro de `public` (por ejemplo `'/mi-foto.png'`).
- Sección `about`: texto “Sobre mí”
- Array `experience`: cada objeto es una experiencia (empresa, rol, fechas, descripción, tecnologías)
- Array `projects`: cada objeto es un proyecto (nombre, descripción, tecnologías y enlaces)
- Sección `contact`: email, GitHub, LinkedIn y ubicación
- Array `socials`: enlaces que se muestran como botones en la cabecera y en contacto

### 4.1. Editar experiencia (`experience`)

En `portfolio.config.ts`, la experiencia es un array de objetos:

```ts
experience: [
  {
    company: 'Empresa Demo',
    role: 'Desarrollador Front-End',
    startDate: 'Ene 2023',
    endDate: 'Actualidad',
    location: 'Remoto',
    description: 'Descripción corta de tus tareas y logros.',
    technologies: [
      { name: 'Angular', icon: '/icons/angular.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
      { name: 'HTML5', icon: '/icons/html5.svg' },
      { name: 'CSS', icon: '/icons/css_old.svg' },
    ],
  },
  // Más experiencias...
];
```

Para añadir una experiencia copia uno de los objetos, pégalo debajo y cambia los textos.  
Si no quieres mostrar la ubicación, puedes borrar la propiedad `location`.

### 4.2. Editar proyectos (`projects`)

Los proyectos también son un array de objetos:

```ts
projects: [
  {
    name: 'Nombre del proyecto',
    description: 'Descripción corta de qué hace y para qué sirve.',
    link: 'https://url-de-tu-proyecto.com', // opcional
    repository: 'https://github.com/tu-usuario/tu-repo', // opcional
    technologies: [
      { name: 'Angular', icon: '/icons/angular.svg' },
      { name: 'TypeScript', icon: '/icons/typescript.svg' },
    ],
  },
  // Más proyectos...
];
```

- `name`: nombre del proyecto que se muestra en la tarjeta.
- `description`: texto corto que explique el proyecto.
- `link`: URL pública donde se puede ver (deploy). Si no tienes, puedes borrar la propiedad.
- `repository`: enlace al código en GitHub (o similar). También es opcional.
- `technologies`: lista de tecnologías. Cada tecnología es un objeto con:
  - `name`: nombre que se muestra en la pill.
  - `icon` (opcional): ruta a un SVG en `public/icons` (por ejemplo `'/icons/angular.svg'`). Si no se indica, se mostrará solo el texto.

Guarda el archivo y el navegador recargará la página con los cambios.

---

## 5. Cambiar colores, tipografías y aspecto

En el mismo archivo `src/app/config/portfolio.config.ts`, dentro de `theme`:

- `primaryColor`: color principal (botones, enlaces destacados)
- `secondaryColor`: color de acentos secundarios
- `backgroundColor`: color de fondo de toda la página
- `surfaceColor`: color de las tarjetas de proyectos y experiencia
- `textColor`: color de texto principal
- `mutedTextColor`: color de texto secundario
- `fontFamily`: familia tipográfica global

Son cadenas CSS, por ejemplo `'#22d3ee'` o `"system-ui, -apple-system, 'Segoe UI', sans-serif"`.

---

## 6. Cambiar el orden de las secciones

En `portfolio.config.ts`, propiedad `sections.order`:

```ts
sections: {
  order: ['hero', 'experience', 'projects', 'about', 'contact'];
}
```

Puedes reordenar o eliminar secciones de este array:

- `'hero'`
- `'experience'`
- `'projects'`
- `'about'`
- `'contact'`

Por ejemplo, para poner proyectos justo debajo del héroe:

```ts
order: ['hero', 'projects', 'experience', 'about', 'contact'];
```

El menú de navegación superior se configura en `navigation.items` dentro del mismo archivo.

---

## 7. Preparar el proyecto para cada alumno, haz el proyecto tuyo.

1. Desde la carpeta `angular-portfolio-template`, borrar el historial de Git:

   ```bash
   rm -rf .git
   ```

2. Inicializar un repo nuevo:

   ```bash
   git init
   git add .
   git commit -m "Initial commit: mi portfolio"
   ```

Ahora el proyecto ya está listo para conectarse a un repositorio personal.

---

## 8. Crear un repositorio propio en GitHub

1. Entra en GitHub y crea un nuevo repositorio vacío (sin README, sin .gitignore).
2. Copia la URL del repositorio (HTTPS o SSH).
3. Desde `angular-portfolio-template`, conecta el remoto:

   ```bash
   git remote add origin TU_URL_DE_GITHUB
   ```

4. Sube el código:

   ```bash
   git branch -M main
   git push -u origin main
   ```

Cada alumno puede usar su propio usuario de GitHub y su propio repositorio.

---

## 9. Deploy en Vercel

Con el repo ya en GitHub:

1. Entra en [https://vercel.com](https://vercel.com) y haz login.
2. Pulsa en **"Add New" → "Project"**.
3. Importa el repositorio de GitHub que acabas de crear.
4. Vercel detectará automáticamente que es un proyecto Angular.
5. Pulsa **Deploy**.

Cada vez que hagas push a `main` en GitHub, Vercel volverá a desplegar el portfolio.

---

## 10. Comandos útiles de Angular

- Arrancar en desarrollo: `npm start` o `ng serve`
- Generar build de producción: `npm run build` o `ng build`


---

## 11. Cambiar el título del navegador y el favicon

Hay dos cosas que no se configuran desde `portfolio.config.ts` y que probablemente quieras personalizar:

- El título de la pestaña del navegador
- El icono favicon

Ambos se cambian desde `src/index.html`:

- Para cambiar el título, edita la etiqueta `<title>`:

  ```html
  <title>Mi Portfolio</title>
  ```

- Para cambiar el favicon, sustituye el archivo `public/favicon.ico` por tu propio icono (manteniendo el mismo nombre) o ajusta la ruta del atributo `href` en la etiqueta correspondiente de `src/index.html`:

  ```html
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  ```
