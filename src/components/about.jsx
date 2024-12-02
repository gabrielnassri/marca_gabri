import React from 'react';
import './styles/about.css';

const About = () => {
  return (
    <section id="about">
      <h1>Sobre Mí</h1>
      <p>
        ¡Hola! Soy Gabriel Nassri, un desarrollador frontend apasionado por crear experiencias web
        dinámicas, modernas y accesibles. Con experiencia en HTML, CSS, JavaScript, React y otras
        tecnologías, me esfuerzo por escribir código limpio y eficiente mientras diseño interfaces
        atractivas.
      </p>
      <p>
        Cuando no estoy programando, me encontrarás aprendiendo nuevas herramientas, explorando
        tendencias en tecnología o disfrutando de [tu pasatiempo favorito].
      </p>
      <a className="btn" href="www.linkedin.com/in/gabriel-nassri-a27416280" target="_blank" rel="noopener noreferrer">
        Visita mi LinkedIn
      </a>
    </section>
  );
};

export default About;