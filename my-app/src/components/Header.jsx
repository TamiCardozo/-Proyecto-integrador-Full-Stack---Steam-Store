import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/components/Header.css";
import Cart from "./Cart";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".nav-mobile") && !event.target.closest(".hamburger")) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("click", handleClickOutside);
    else document.removeEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [menuOpen]);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <Link to="/">
            <img src="/imagenes/Logo_control_de_videojuego_pixel_retro_amarillo-removebg-preview.webp" alt="Logo" />
          </Link>
        </div>

        <nav className="nav-desktop">
          <Link to="/">Inicio</Link>
          <Link to="/store">Tienda</Link>
          <Link to="/about">Nosotros</Link>
          <Link to="/contact">Contacto</Link>
        </nav>

        <div className="hamburger" onClick={(e) => { e.stopPropagation(); setMenuOpen(!menuOpen); }}>
          <span></span><span></span><span></span>
        </div>

        <nav className={`nav-mobile ${menuOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setMenuOpen(false)}>Inicio</Link>
          <Link to="/store" onClick={() => setMenuOpen(false)}>Tienda</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>Sobre mí</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contacto</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
