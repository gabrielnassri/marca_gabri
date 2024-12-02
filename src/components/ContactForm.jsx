import React from 'react';
import './styles/contact.css';

function ContactForm() {
  const form = useRef();

const ContactForm = () => {
  return (
    <section id="contact">
      <h1>Contáctame</h1>
      <form>
        <input type="text" placeholder="Tu Nombre" required />
        <input type="email" placeholder="Tu Correo Electrónico" required />
        <textarea placeholder="Tu Mensaje" rows="5" required></textarea>
        <button type="submit">Enviar Mensaje</button>
      </form>
      <p className="info">
        También puedes enviarme un correo directamente a: <strong>tuemail@ejemplo.com</strong>
      </p>
    </section>
  );
}
};

export default ContactForm;
