import React, { useState } from "react";
import useCart from "../context/useCart";
import { Trash2, ShoppingCart, ArrowLeft } from "lucide-react";
import "../styles/components/Cart.css";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const [open, setOpen] = useState(false);
  const [checkout, setCheckout] = useState(false);

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-wrapper">

      {/* Botón flotante */}

      <button className="cart-button" onClick={() => setOpen(!open)}>
        <ShoppingCart size={22} />
        {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
      </button>

      {/* Contenedor del carrito */}

      <div className={`cart-container ${open ? "open" : ""}`}>
        {!checkout ? (
          <>
            <h3 className="cart-title">🛒 Tu Carrito</h3>

            {cart.length === 0 ? (
              <p className="empty-msg">Tu carrito está vacío.</p>
            ) : (
              <>
                <ul className="cart-list">
                  {cart.map((item) => (
                    <li key={item.id} className="cart-item">
                      <div className="cart-item-info">
                        <span className="cart-item-title">{item.title}</span>
                        <span className="cart-item-quantity">x{item.quantity}</span>
                        <span className="cart-item-price">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>

                      <button
                        className="cart-item-remove"
                        onClick={() => removeFromCart(item.id)}
                      >
                        <Trash2 size={16} />
                      </button>
                    </li>
                  ))}
                </ul>

                <h4 className="cart-total">Total: ${total.toFixed(2)}</h4>

                <button className="buy-btn" onClick={() => setCheckout(true)}>
                  Finalizar compra
                </button>

                <button className="clear-btn" onClick={clearCart}>
                  Vaciar carrito
                </button>
              </>
            )}
          </>
        ) : (

          /* CHECKOUT  */

          <div className="checkout-section">
            <button className="back-btn" onClick={() => setCheckout(false)}>
              <ArrowLeft size={18} /> Volver
            </button>

            <h3 className="checkout-title">💳 Finalizar compra</h3>

            <div className="payment-box">
              <h4>Medios de pago</h4>
              <p><strong>CBU:</strong> 0000003100022182910545</p>
              <p><strong>Alias:</strong> pixeltam.shop</p>
              <p><strong>Titular:</strong> Tamara Cardozo</p>
            </div>

            <div className="confirm-box">
              <p>
                Una vez realizado el pago, envíanos el comprobante por WhatsApp
                para activar tu compra 
              </p>

              <a
                href="https://wa.me/5490000000000?text=Hola!%20Te%20envío%20mi%20comprobante%20de%20pago"
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-btn"
              >
                Enviar comprobante
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
