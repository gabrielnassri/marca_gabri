import React from "react";
import "./App.css";

// Importamos los componentes
import HeaderPage from "./components/HeaderPage";
import AboutMe from "./components/AboutMe";
import PortfolioPage from "./components/PortfolioPage";
import ContactForm from "./components/ContactForm";
import FooterPage from "./components/FooterPage";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="app-container">
      {/* Cabecera */}
      <HeaderPage />
      
      <main>
      {/* Sección sobre mí */}
      <section id="about">
        <AboutMe />
      </section>

      {/* Sección de Proyectos / Portfolio */}
      <section id="portfolio">
        <PortfolioPage />
      </section>

      <section id="skills">
        <Skills />
      </section>

      {/* Sección de contacto */}
      <section id="contact">
        <ContactForm />
      </section>

      </main>

      {/* Pie de página */}
      <FooterPage />
    </div>
  );
}

export default App;
