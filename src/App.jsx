import React from "react";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import FooterPage from "./components/FooterPage";
import HeaderPage from "./components/HeaderPage";
import PortfolioPage from "./components/PortfolioPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Bienvenido a mi página</h1>
      <HeaderPage />
      <AboutMe />
      <ContactForm />
      <FooterPage />
      <PortfolioPage />

    </div>
  );
};

export default App;
