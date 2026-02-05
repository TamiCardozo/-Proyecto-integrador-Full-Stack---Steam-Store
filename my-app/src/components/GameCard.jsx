import { useCart } from "../context/CartContext";
import "../styles/components/GameCard.css";

const GameCard = ({ game }) => {
  const { addToCart } = useCart();

  const finalPrice = game.discount
    ? (game.price - (game.price * game.discount) / 100).toFixed(2)
    : game.price;

  const handleAddToCart = () => {
    addToCart({
      ...game,

      //  precio final
      
      price: Number(finalPrice), 
    });
  };

  return (
    <div className="game-card">
      {game.discount && (
        <span className="discount-badge">-{game.discount}%</span>
      )}

      <div className="game-image">
        <img src={game.image} alt={game.title} />
      </div>

      <div className="game-info">
        <h4>{game.title}</h4>

        {game.discount ? (
          <div className="prices">
            <span className="old-price">${game.price}</span>
            <span className="new-price">${finalPrice}</span>
          </div>
        ) : (
          <p className="new-price">${game.price}</p>
        )}
      </div>

      <button className="add-btn" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default GameCard;

