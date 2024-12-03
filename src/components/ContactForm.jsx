import React, { useRef } from "react";
import "./styles/contact.css";

function ContactForm() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_y21rwxb";
    const templateID = "template_5ftku8q";

    window.emailjs
      .sendForm(serviceID, templateID, form.current)
      .then(
        (response) => {
          alert("Mensaje enviado correctamente. ¡Gracias por contactarme!");
          console.log("SUCCESS!", response.status, response.text);
          form.current.reset();
        },
        (error) => {
          alert("Error al enviar el mensaje. Intenta nuevamente.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <section id="contacta-conmigo" className="contact-section">
      <header className="contact-header">
        <h2>Contacta conmigo</h2>
        <p>Estoy aquí para responder a tus preguntas y escuchar tus comentarios.</p>
      </header>

      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        <fieldset className="form-fieldset">
          <legend className="form-legend">Información personal</legend>

          <div className="form-group">
            <label htmlFor="name">Nombre completo:</label>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Tu nombre"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="reply_to"
              placeholder="Tu email"
              required
            />
          </div>
        </fieldset>

        <fieldset className="form-fieldset">
          <legend className="form-legend">Tu mensaje</legend>

          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea
              id="message"
              name="message"
              placeholder="Escribe tu mensaje aquí..."
              required
            ></textarea>
          </div>
        </fieldset>

        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
