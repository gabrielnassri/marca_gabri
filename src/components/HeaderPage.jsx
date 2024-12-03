import React, { useState } from "react";
import "./styles/header.css";

function HeaderPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header">
      <div className="logo">
        <h1>Gabriel Nassri</h1>
      </div>
      <nav className={`nav-links ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <a href="#contacta-conmigo">  Contacta Conmigo </a>
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
