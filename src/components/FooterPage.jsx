import React from "react";
import "./styles/footer.css";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">
        <p>Desarrollado por Gabriel Nassri</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/gabriel-nassri-a27416280/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src="https://img.icons8.com/ios-filled/50/000000/linkedin.png" alt="LinkedIn" />
          </a>
          <a
            href="https://github.com/gabrielnassri"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src="https://img.icons8.com/ios-filled/50/000000/github.png" alt="GitHub" />
          </a>
        </div>
        <p>&copy; 2024 Gabriel Nassri. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
