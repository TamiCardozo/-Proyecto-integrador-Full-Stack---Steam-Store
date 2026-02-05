import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup"; 
import "../styles/components/Footer.css";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [error, setError] = useState("");

  //  validaciónes //

  const emailSchema = Yup.string()
    .email("El formato del correo no es válido (ejemplo@mail.com)")
    .required("Por favor, ingresa un correo electrónico");

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setError("");

    try {

      // Validaciòn  el  email 

      await emailSchema.validate(email);
      
      
      console.log("Suscrito con éxito:", email);
      setEnviado(true);
      setEmail("");
    } catch (err) {

      // error 
      
      setError(err.message);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-logo">
          <img
            src="/imagenes/Logo_control_de_videojuego_pixel_retro_amarillo-removebg-preview.webp"
            alt="Zona Gaming Logo"
          />
          <p className="footer-titulo">Tu universo gamer en un solo lugar</p>
        </div>

        <div className="footer-subscribe">
          <h3>Suscribite para recibir novedades</h3>
          
          {!enviado ? (
            <form className="subscribe-form" onSubmit={handleSubscribe} noValidate>
              <div className="input-group">
                <input 
                  type="email" 
                  placeholder="Tu correo electrónico" 
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(""); 
                  }}
                  className={error ? "input-error" : ""}
                />
                <button type="submit">Suscribirse</button>
              </div>
              {error && <span className="error-text">{error}</span>}
            </form>
          ) : (
            <div className="thanks-container">
              <p className="thanks-message">¡Muchas gracias! Revisá tu casilla para confirmar 🔥</p>
              <button onClick={() => setEnviado(false)} className="back-btn">Usar otro correo</button>
            </div>
          )}
        </div>

        <div className="footer-social">
          <h3>Síguenos</h3>
          <div className="social-icons">
            <a href="https://facebook.com/zonagaming" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            <a href="https://instagram.com/zonagaming" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://youtube.com/zonagaming" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <hr className="footer-divider" />

      <div className="footer-middle">
        <div className="footer-links">
          <Link to="/store">Tienda</Link>
          <Link to="/about">Nosotros</Link>
          <Link to="/contact">Contacto</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Zona Gaming. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;