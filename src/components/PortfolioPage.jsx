// PortfolioPage.jsx
import React from "react";
import "./styles/portfolio.css";

const projects = [
  {
    id: 1,
    title: "A* Algorithm",
    description:
      "Aplicación interactiva para visualizar el funcionamiento del algoritmo A* en la búsqueda de rutas óptimas.",
    link: "https://github.com/gabrielnassri/fuzzy-chickpea",
  },
  {
    id: 2,
    title: "Spotify Song Recommender",
    description:
      "Sistema de recomendación de canciones basado en el análisis de datos de Spotify utilizando Python y Machine Learning.",
    link: "https://github.com/gabrielnassri/SpotifyProyectosProg",
  },
];

const PortfolioPage = () => {
  return (
    <section id="portfolio">
      <h2>Mis Proyectos</h2>
      <div className="portfolio-container">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-link"
            >
              Accede a mis proyectos
            </a>
          </div>
        ))}
      </div>

      {}
      <div className="github-section">
        <h3>Visita mi GitHub</h3>
        <p>
          Explora más de mis proyectos, ideas y experimentos en mi perfil de GitHub.
        </p>
        <a
          href="https://github.com/gabrielnassri"
          target="_blank"
          rel="noopener noreferrer"
          className="github-link"
        >
          Visitar mi GitHub
        </a>
      </div>
    </section>
  );
};

export default PortfolioPage;
