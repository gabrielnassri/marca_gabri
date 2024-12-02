import React, { useState } from "react";
import "./styles/header.css";

function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen); // Cambia el estado del menú cuando se hace clic
  };

  return (
    <header id="header">
      <div className="logo">
        <h1>Gabriel Nassri</h1>
      </div>
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#sobre-mi">Sobre mí</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contacta-conmigo">Contacto</a>
          </li>
        </ul>
      </nav>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <span className={`bar ${isMenuOpen ? "change" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "change" : ""}`}></span>
        <span className={`bar ${isMenuOpen ? "change" : ""}`}></span>
      </div>
    </header>
  );
}

export default HeaderPage;
