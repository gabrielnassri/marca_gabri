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
        <h2>🛠️ Mi Portafolio</h2>
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
                Ver proyecto
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  };

export default PortfolioPage;
