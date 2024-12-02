import React from "react";
import AboutMe from "./components/AboutMe";
import ContactForm from "./components/ContactForm";
import FooterPage from "./components/FooterPage";
import HeaderPage from "./components/HeaderPage";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1>Bienvenido a mi página</h1>
      <AboutMe />
      <ContactForm />
      <FooterPage />
      <HeaderPage />
    </div>
  );
};

export default App;
