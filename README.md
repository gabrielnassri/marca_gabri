# Portfolio Personal

## Descripción

Este es un proyecto de desarrollo frontend para crear una **marca personal** que incluye una página personal, un portfolio de proyectos y enlaces a redes sociales como LinkedIn. El proyecto está diseñado usando tecnologías web como HTML, CSS, JavaScript (vanilla y React), AJAX, y jQuery, además de Bootstrap para un diseño responsivo.

### Tecnologías utilizadas:
- **HTML5**: Estructuración del contenido.
- **CSS3**: Estilos y diseño responsivo.
- **JavaScript**: Manipulación del DOM, interactividad.
- **React**: Framework para construir componentes interactivos.
- **Bootstrap**: Framework para un diseño responsivo.
- **EmailJS**: Integración para enviar mensajes a través del formulario de contacto.
- **GitHub Pages**: Publicación del sitio web.
- **jQuery**: Para manipulación del DOM y efectos adicionales.

## Enlaces

- **Código fuente en GitHub**: [GitHub Repository](https://github.com/gabrielnassri/marca_gabri)
- **Página web publicada**: [GitHub Pages]("https://gabrielnassri.github.io/marca_gabri/")
- **Perfil de LinkedIn**: [LinkedIn]((https://www.linkedin.com/in/gabriel-nassri-a27416280/))

## Características
- **Página de inicio** con enlaces de navegación hacia las secciones de Portfolio, Habilidades y Contacto.
- **Portfolio**: Muestra proyectos realizados con descripciones y enlaces a los repositorios.
- **Formulario de contacto** integrado con **EmailJS** para enviar mensajes a través de la página web.
- **Diseño responsivo** usando **Bootstrap** para garantizar la accesibilidad en dispositivos móviles y de escritorio.
- Uso de **React** para una estructura modular y dinámica.

## Instalación

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/gabrielnassri/portfolio.git
   Instala las dependencias:
   ```
   ```bash
   npm install
   Ejecuta la aplicación:
   ```
   
   ```bash
   npm start
   Accede a la aplicación en tu navegador en http://localhost:3000.
   ```
🛠 Configuración de EmailJS
Regístrate en EmailJS y crea un nuevo servicio y plantilla.
Configura las claves serviceID y templateID en el archivo ContactForm.jsx.
🌐 Despliegue
El proyecto está alojado en GitHub Pages. Para desplegar:

Instala gh-pages:

``` bash
npm install gh-pages --save-dev
Configura el script de despliegue en el archivo package.json:

json
Copiar código
"homepage": "https://tu-usuario.github.io/tu-repositorio",
"scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d build"
}
Despliega la aplicación:
```
```bash
npm run deploy
```

📌 Próximas mejoras
Añadir animaciones más dinámicas.

Mejorar la accesibilidad (WCAG).

Agregar un sistema de blog.

👨‍💻 Autor
Creado con 💻  por Gabriel Nassri.
