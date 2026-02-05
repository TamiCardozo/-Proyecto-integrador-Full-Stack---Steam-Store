import React from "react";
import "../styles/components/About.css";
import { FaGamepad, FaBolt, FaShippingFast, FaUsers } from "react-icons/fa";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="about-bg"></div>
      <div className="overlay"></div>

      <div className="about-header">
        <h1>Somos <span>Zona Gaming</span></h1>
        <h2>Donde la Pasión se Convierte en Juego</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <h3>🔥 Nuestro Manifiesto</h3>
          <p>
            En Zona Gaming, no solo vendemos videojuegos; vivimos el gaming.
            Nacimos de una simple idea: crear el lugar donde los jugadores de
            verdad puedan encontrar lo mejor del universo gamer. Somos un equipo
            de apasionados que entiende tu sed de nuevas aventuras y la
            importancia de jugar con el mejor equipo.
          </p>

          <h3> Nuestra Misión</h3>
          <p>
            Ser tu <strong>hub principal</strong> para todo lo relacionado con videojuegos:
            desde los últimos lanzamientos y ediciones de coleccionista, hasta
            el hardware que te da la ventaja competitiva. Queremos potenciar tu
            juego.
          </p>

          <h3> Nuestra Historia</h3>
          <p>
            Todo comenzó en <strong>2020</strong>, en <em>un pequeño garaje digital</em>.
            Un grupo de amigos cansados de las tiendas genéricas decidió crear
            un espacio para jugadores reales. Así nació <strong>Zona Gaming</strong>:
            con ediciones limitadas, asesoramiento real y una comunidad unida
            por la pasión del juego.
          </p>
        </div>
      </div>

      <div className="about-features">
        <div className="feature">
          <FaBolt className="icon" />
          <h4>Promos Épicas</h4>
          <p>Ofertas, preventas y beneficios exclusivos que te harán subir de nivel.</p>
        </div>

        <div className="feature">
          <FaShippingFast className="icon" />
          <h4>Envíos Rápidos</h4>
          <p>Tu pedido llega tan rápido como un speedrun. Seguro y confiable.</p>
        </div>

        <div className="feature">
          <FaUsers className="icon" />
          <h4>Comunidad Gamer</h4>
          <p>Síguenos, suscríbete y forma parte del universo Zona Gaming.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
