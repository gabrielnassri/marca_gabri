import React, { useRef } from "react";
import "./styles/contact.css";

function ContactForm() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_y21rwxb";  // Cambia esto por tu propio serviceID
    const templateID = "template_5ftku8q"; // Cambia esto por tu propio templateID

    window.emailjs
      .sendForm(serviceID, templateID, form.current)
      .then(
        (response) => {
          alert("Mensaje enviado correctamente. ¡Gracias por contactarme!");
          console.log("SUCCESS!", response.status, response.text);
          form.current.reset(); // Limpia el formulario
        },
        (error) => {
          alert("Error al enviar el mensaje. Intenta nuevamente.");
          console.error("FAILED...", error);
        }
      );
  };

  return (
    <section id="contacta-conmigo">
      <h2>📬 Contacta conmigo</h2>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
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

        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea
            id="message"
            name="message"
            placeholder="Escribe tu mensaje aquí..."
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;

