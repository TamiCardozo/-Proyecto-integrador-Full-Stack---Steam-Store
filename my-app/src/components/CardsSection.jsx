import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/components/CardsSection.css";

const juegos = [
  {
    id: 1,
    titulo: "The Last of Us",
    categoria: "Acción-Aventura, Supervivencia, Survival Horror",
    modo: "Multijugador / PS5, Xbox, PC",
    calificacion: 5,
    descripcion:
      "El juego combina un combate brutal con una intensa necesidad de sigilo y gestión de recursos escasos, creando una atmósfera de tensión constante.",
    detalle:
      "Más que un juego de zombis, es un drama humano profundo sobre la pérdida, la moralidad gris y hasta dónde se puede llegar por amor.",
    imagen: "my-app/public/imagenes/libreria/dex3.webp",
  },
  {
    id: 2,
    titulo: "Mortal Kombat 11",
    categoria: "Lucha, Gore, Fantasía",
    modo: "Online / PC, PS5, Móvil",
    calificacion: 4,
    descripcion:
      "El juego presenta un épico modo historia cinemático donde la guardiana del tiempo, Kronika, desata una crisis temporal.",
    detalle:
      "Mortal Kombat 11 es la entrega más sangrienta y visualmente impactante de la icónica saga de lucha.",
    imagen: "my-app/public/imagenes/libreria/dex6.webp",
  },
  {
    id: 3,
    titulo: "Grand Theft Auto V (GTA V)",
    categoria: "Acción-Aventura, Mundo Abierto",
    modo: "Multijugador / PC, PS4, Xbox",
    calificacion: 4,
    descripcion:
      "Un juego sandbox con una vasta ciudad para explorar y misiones narrativas.",
    detalle:
      "Su inmenso mundo abierto detallado y su modo online lo mantienen vigente.",
    imagen: "my-app/public/imagenes/libreria/dex4.webp",
  },
  {
    id: 4,
    titulo: "Stray",
    categoria: "Aventura, Puzles, Exploración",
    modo: "Consolas y PC",
    calificacion: 5,
    descripcion:
      "Controlas a un gato en una ciudad ciberpunk resolviendo puzles.",
    detalle:
      "Exploración única desde la perspectiva de un felino.",
    imagen:"my-app/public/imagenes/libreria/dex2.webp",
  },
];

const CardsSection = () => {
  const [actual, setActual] = useState(0);
  const [juegoSeleccionado, setJuegoSeleccionado] = useState(null);
  const navigate = useNavigate();

  const siguiente = () => {
    setActual((prev) => (prev + 1) % juegos.length);
  };

  const anterior = () => {
    setActual((prev) => (prev - 1 + juegos.length) % juegos.length);
  };

  const irATienda = () => {
    setJuegoSeleccionado(null);
    navigate("/store");
  };

  return (
    <section className="cards-section">
      <h2 className="cards-title">
        JUEGOS <span>DESTACADOS</span>
      </h2>

      <p className="cards-description">
        Descubrí y disfrutá de experiencias únicas en cada partida.
      </p>

      <div className="carousel-container">
        <button className="carousel-btn left" onClick={anterior}>
          ❮
        </button>

        <div className="carousel">
          {juegos.map((juego, index) => {
            const posicion =
              index === actual
                ? "active"
                : index === (actual - 1 + juegos.length) % juegos.length
                ? "prev"
                : index === (actual + 1) % juegos.length
                ? "next"
                : "hidden";

            return (
              <div key={juego.id} className={`card ${posicion}`}>
                <div className="card-image">
                  <img
                    src={juego.imagen}
                    alt={juego.titulo}
                    onError={(e) => {
                      e.target.src = "/imagenes/libreria/default.webp";
                    }}
                  />
                </div>

                <div className="card-info">
                  <h3>{juego.titulo}</h3>
                  <p className="card-category">{juego.categoria}</p>
                  <p className="card-mode">{juego.modo}</p>
                  <p className="card-description">{juego.descripcion}</p>

                  <div className="card-rating">
                    {"★".repeat(juego.calificacion)}
                    {"☆".repeat(5 - juego.calificacion)}
                  </div>

                  <button
                    className="card-btn"
                    onClick={() => setJuegoSeleccionado(juego)}
                  >
                    EXPLORAR
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button className="carousel-btn right" onClick={siguiente}>
          ❯
        </button>
      </div>

      {/* MODAL */}
      {juegoSeleccionado && (
        <div
          className="modal-overlay"
          onClick={() => setJuegoSeleccionado(null)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setJuegoSeleccionado(null)}
            >
              ✖
            </button>

            <img
              src={juegoSeleccionado.imagen}
              alt={juegoSeleccionado.titulo}
              className="modal-image"
              onError={(e) => {
                e.target.src = "/imagenes/libreria/default.webp";
              }}
            />

            <h3>{juegoSeleccionado.titulo}</h3>
            <p className="modal-category">
              {juegoSeleccionado.categoria}
            </p>
            <p className="modal-detail">
              {juegoSeleccionado.detalle}
            </p>

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