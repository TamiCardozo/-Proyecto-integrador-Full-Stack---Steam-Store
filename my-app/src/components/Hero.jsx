import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import { FaHeart, FaUsers, FaGamepad } from "react-icons/fa";
import "../styles/components/Hero.css";

const slides = [
  {
    id: 1,
    title: "Crea y gestiona partidas",
    subtitle: "Encontrá jugadores o tecnología para tus proyectos digitales",
    image: "my-app/public/imagenes/game1.webp",
  },
  {
    id: 2,
    title: "Liberá tu poder",
    subtitle: "Competí y dominá en cada batalla",
    image: "my-app/public/imagenes/game2.webp",
  },
  {
    id: 3,
    title: "Unite a la revolución",
    subtitle: "Donde cada partida es una nueva historia",
    image: "my-app/public/imagenes/game3.webp",
  },
];

const Hero = () => {
  const [actual, setActual] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); 

  // presentacion de imagenes

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(intervalo);
  }, []);

  //  scroll 

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("statsSection");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 150) {
          setStatsVisible(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Contador reloj

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <>
      {/* HERO  */}

      <section className="hero-section">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slide ${index === actual ? "active" : ""}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="hero-overlay" />
            <div className="slide-content">
              <h2 className="hero-subtitle">ZONA GAMING</h2>
              <h1 className="hero-title">{slide.title}</h1>
              <p className="hero-text">{slide.subtitle}</p>
              <Link to="/about" className="hero-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
                CONOCENOS
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section id="statsSection" className="stats-section">
        <div className="stats-bg" />
        <div className="stats-overlay" />
        <div className="stats-container">
          <div className={`stats-left ${statsVisible ? "fade-in" : ""}`}>
            <div className="stats-header">
              <h2>Nuestra comunidad gamer sigue creciendo</h2>
              <p>Saca al maximo las experiencias que podes vivir  en Zona Gaming</p>
            </div>

            <div className="feature-box">
              <div className="feature-item">
                <FaGamepad className="feature-icon" />
                <h3 className="feature-title">Batallas Dinámicas</h3>
              </div>

              <div className="feature-item">
                <FaHeart className="feature-icon" />
                <h3 className="feature-title">Atmósfera Increíble</h3>
              </div>

              <div className="feature-item">
                <FaUsers className="feature-icon" />
                <h3 className="feature-title">Jugá con tus Amigos</h3>
              </div>
            </div>

            {/* reloj de ofertas */}
            
            <div className="offer-timer">
              <h3>🔥 DESCUENTOS Y OFERTAS 🔥</h3>
              <h4>Hasta un 5% 10% de Descuentos </h4>
              <div className="timer-display">{formatTime(timeLeft)}</div>
              <Link to="/store" className="offer-btn" style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}>
                VER MÁS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;