import React from "react";
import "../../css/Cart/Cart.css";
const Cart = (props) => {
  return (
    <div className="cart-wrapper">
      <div className="cart-tittle">
        {props.cartItems.length === 0 ? (
          "Cart Empty"
        ) : (
          <p>there is{props.cartItems.length} in yuor cart</p>
        )}
      </div>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item">
            <img src={item.imageUrl} alt={item.tittle} />
            <div className="cart-info">
              <div className="cart-desc">
                <p>Tittel: {item.tittle}</p>
                <p>Price: ${item.price}</p>
                <p>Qy{item.qty}</p>
              </div>
              <div className="cart-btn">
                <button onClick={() => props.removeFromCart(item)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
