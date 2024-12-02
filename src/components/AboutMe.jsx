import React, { useRef } from "react";
import "./styles/about.css";
import image from "../images/foto_gabri.jpg";

function AboutMe() {
  const linkedinRef = useRef(null);

  // Maneja el movimiento del cursor
  const handleMouseMove = (event) => {
    const rect = linkedinRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left; // Posición del cursor dentro de la caja (X)
    const y = event.clientY - rect.top; // Posición del cursor dentro de la caja (Y)

    const centerX = rect.width / 2; // Centro horizontal de la caja
    const centerY = rect.height / 2; // Centro vertical de la caja

    const rotateX = ((y - centerY) / centerY) * 10; // Rotación vertical
    const rotateY = ((x - centerX) / centerX) * -10; // Rotación horizontal (negativo para invertir)

    linkedinRef.current.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  // Restaura la posición al salir de la caja
  const handleMouseLeave = () => {
    linkedinRef.current.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
  };

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
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <h3>
          <img
            src={require("../images/linkedin.png")} // Asegúrate de tener esta imagen
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
