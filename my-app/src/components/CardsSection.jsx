import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/CardsSection.css";

const juegos = [
  {
    id: 1,
    titulo: "The Last of Us",
    categoria: "Acción-Aventura, Supervivencia",
    descripcion: "El juego combina un combate brutal con una intensa necesidad de sigilo.",
    detalle: "Más que un juego de zombis, es un drama humano profundo que redefine el género.",
    calificacion: 5,
    imagen: "/imagenes/libreria/juego1.webp",
  },
  {
    id: 2,
    titulo: "Mortal Kombat 11",
    categoria: "Lucha, Gore, Fantasía",
    descripcion: "Modo historia cinemático con crisis temporal.",
    detalle: "La entrega más sangrienta de la saga con un sistema de personalización profundo.",
    calificacion: 4,
    imagen: "/imagenes/libreria/juego2.webp",
  },
  {
    id: 3,
    titulo: "GTA V",
    categoria: "Acción-Aventura, Mundo Abierto",
    descripcion: "Sandbox con ciudad enorme.",
    detalle: "Un mundo abierto increíblemente detallado con una narrativa entrelazada de tres personajes.",
    calificacion: 4,
    imagen: "/imagenes/libreria/juego3.webp",
  },
  {
    id: 4,
    titulo: "Stray",
    categoria: "Aventura, Exploración",
    descripcion: "Controlás un gato en una ciudad ciberpunk.",
    detalle: "Una aventura única donde la agilidad felina es la clave para resolver acertijos.",
    calificacion: 5,
    imagen: "/imagenes/libreria/juego4.webp",
  },
];

const CardsSection = () => {
  const [actual, setActual] = useState(0);
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
  const navigate = useNavigate();

  const siguiente = () => setActual((prev) => (prev + 1) % juegos.length);
  const anterior = () => setActual((prev) => (prev - 1 + juegos.length) % juegos.length);

  const irATienda = () => {
    setJuegoSeleccionado(null);
    navigate("/store");
  };

  return (
    <section className="cards-section">
      <h2 className="cards-title">
        JUEGOS <span>DESTACADOS</span>
      </h2>

      <div className="carousel-container">
        <button className="carousel-btn left" onClick={anterior}>❮</button>

        <div className="carousel">
          {juegos.map((juego, index) => {
            const posicion =
              index === actual ? "active" : 
              index === (actual - 1 + juegos.length) % juegos.length ? "prev" : 
              index === (actual + 1) % juegos.length ? "next" : "hidden";

            return (
              <div key={juego.id} className={`card ${posicion}`}>
                <div className="card-image">
                  <img 
                    src={juego.imagen} 
                    alt={juego.titulo} 
                    onError={(e) => { e.target.src = "/imagenes/default.webp"; }}
                  />
                </div>
                <div className="card-info">
                  <h3>{juego.titulo}</h3>
                  <p>{juego.categoria}</p>
                  <div className="stars">
                    {"★".repeat(juego.calificacion)}{"☆".repeat(5 - juego.calificacion)}
                  </div>
                  <button className="card-btn" onClick={() => setJuegoSeleccionado(juego)}>
                    EXPLORAR
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button className="carousel-btn right" onClick={siguiente}>❯</button>
      </div>

      {/* MODAL CORREGIDO */}
      {juegoSeleccionado && (
        <div className="modal-overlay" onClick={() => setJuegoSeleccionado(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setJuegoSeleccionado(null)}>×</button>
            
            <img 
              src={juegoSeleccionado.imagen} 
              alt={juegoSeleccionado.titulo}
              onError={(e) => { e.target.src = "/imagenes/default.webp"; }}
            />

            <h3>{juegoSeleccionado.titulo}</h3>
            <p>{juegoSeleccionado.detalle}</p>

            <button className="modal-btn" onClick={irATienda}>
              IR A LA TIENDA
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default CardsSection;