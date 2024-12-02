import React from 'react';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';

const App = () => {
  return (
    <>
      {/* Sección Sobre Mí */}
      <About />

      {/* Portafolio */}
      <Portfolio />

      {/* Contacto */}
      <ContactForm />

      {/* Pie de página */}
      <Footer />
    </>
  );
};

export default App;
