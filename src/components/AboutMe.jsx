import React, { useRef } from "react";
import "./styles/about.css";
import image from "../images/foto_gabri.jpg";

function AboutMe() {
  const linkedinRef = useRef(null);

  return (
    <section id="sobre-mi">
      <h1>👨🏻‍💻 Sobre mí</h1>
      <div className="about-container">
        <img
          src={image}
          alt="Gabriel Nassri"
          className="profile-photo"
        />
        <div>
          <p>
            Hola, soy Gabriel Nassri. Soy desarrollador web con experiencia en el desarrollo de soluciones
            frontend utilizando tecnologías como React, JavaScript y CSS. Me apasiona la creación de interfaces
            intuitivas y funcionales para mejorar la experiencia de los usuarios.
          </p>
        </div>
      </div>

      {/* Perfil de LinkedIn */}
      <div
        className="linkedin-profile"
        ref={linkedinRef}
  
      >
        <h3>
          <img
            src={require("../images/linkedin.png")}
            alt="Logo de LinkedIn"
            className="linkedin-logo"
          />
          Perfil de LinkedIn
        </h3>
        <p>
          <a
            href="www.linkedin.com/in/gabriel-nassri-a27416280"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver perfil en LinkedIn
          </a>
        </p>
      </div>
    </section>
  );
}

export default AboutMe;
