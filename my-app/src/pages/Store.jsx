import React, { useRef, useEffect, useState } from "react";
import GameCard from "../components/GameCard";
import "../styles/pages/Store.css";

/* =========================
   SECCIÓN DEL CARRUSEL
========================= */
const StoreSection = ({ title, games }) => {
  const trackRef = useRef(null);

  const scroll = (dir) => {
    if (!trackRef.current) return;

    const scrollAmount = 300;

    trackRef.current.scrollBy({
      left: dir === "right" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  // No renderiza la sección si no hay juegos
  if (!games || games.length === 0) return null;

  return (
    <section className="store-section">
      <h3>{title}</h3>

      <div className="carousel-box">
        <button className="arrow left" onClick={() => scroll("left")}>
          ‹
        </button>

        <div className="carousel-track" ref={trackRef}>
          {games.map((game) => (
            <div className="carousel-item" key={game.id}>
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

  // ✅ Usar variable de entorno
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    console.log("API_URL usada:", API_URL); // Depuración
    fetch(`${API_URL}/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setGames(Array.isArray(data) ? data : []);
      })
      .catch((err) => {
        console.error("Error cargando productos:", err);
        setGames([]);
      })
      .finally(() => setLoading(false));
  }, [API_URL]);

  const descuentos = games.filter((g) => Number(g.discount) > 0);
  const lanzamientos = games.filter((g) => g.is_new === 1 || g.is_new === true);
  const todos = games;

  if (loading) return <p style={{ padding: "2rem" }}>Cargando tienda...</p>;

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