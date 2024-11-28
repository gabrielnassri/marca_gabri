import React from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <>
      {/* Barra de navegación */}
      <Navbar />

      {/* Sección Sobre Mí */}
      <About />

      {/* Portafolio */}
      <Portfolio />

      {/* Contacto */}
      <Contact />

      {/* Pie de página */}
      <Footer />
    </>
  );
};

export default App;
