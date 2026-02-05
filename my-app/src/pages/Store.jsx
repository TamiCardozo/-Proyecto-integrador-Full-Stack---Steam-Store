import React, { useRef, useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import "../styles/pages/Store.css";

/* =========================
   SECCIÓN DEL CARRUSEL
========================= */
const StoreSection = ({ title, games }) => {
  const trackRef = useRef(null);

  const loopGames = [...games, ...games];

  const scroll = (dir) => {
    const container = trackRef.current;
    const scrollAmount = 320;

    container.scrollLeft += dir === "right" ? scrollAmount : -scrollAmount;

    if (container.scrollLeft <= 0) {
      container.scrollLeft = container.scrollWidth / 2;
    }

    if (
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 10
    ) {
      container.scrollLeft =
        container.scrollWidth / 2 - container.clientWidth;
    }
  };

  return (
    <section className="store-section">
      <h3>{title}</h3>

      <div className="carousel-box">
        <button className="arrow left" onClick={() => scroll("left")}>
          ‹
        </button>

        <div className="carousel-track" ref={trackRef}>
          {loopGames.map((game, index) => (
            <div className="carousel-item" key={`${game.id}-${index}`}>
              <GameCard game={game} />
            </div>
          ))}
        </div>

        <button className="arrow right" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </section>
  );
};

/* =========================
   STORE PRINCIPAL
========================= */
const Store = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/products")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setGames(data);
        } else {
          console.error("La API no devolvió un array:", data);
          setGames([]);
        }
      })
      .catch((err) => {
        console.error("Error cargando productos:", err);
        setGames([]);
      })
      .finally(() => setLoading(false));
  }, []);

  // 🛡️ filtros seguros
  const descuentos = Array.isArray(games)
    ? games.filter((g) => g.discount > 0).slice(0, 10)
    : [];

  const lanzamientos = Array.isArray(games)
    ? games.filter((g) => g.is_new === 1).slice(0, 10)
    : [];

  const todos = Array.isArray(games) ? games.slice(0, 10) : [];

  if (loading) {
    return <p style={{ padding: "2rem" }}>Cargando tienda...</p>;
  }

  return (
    <main className="store-container">
      <h2>Tienda de Videojuegos 🎮</h2>

      <StoreSection title="🔥 Descuentos" games={descuentos} />
      <StoreSection title="🚀 Lanzamientos" games={lanzamientos} />
      <StoreSection title="🕹️ Todos los Juegos" games={todos} />
    </main>
  );
};

export default Store;
