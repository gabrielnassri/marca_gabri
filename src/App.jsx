import React from 'react';
import Header from './components/HeaderPage'; // Ruta relativa correcta
import About from './components/AboutMe';
import PortfolioPage from './components/PortfolioPage';
import ContactForm from './components/ContactForm';
import FooterPage from './components/FooterPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <PortfolioPage />
        <ContactForm />
      </main>
      <FooterPage />
    </div>
  );
}

export default App;