import React, { useState } from "react";
import "../../css/Cart/Cart.css";
import Checkout from "../CheckoutForm/Checkout";
const Cart = (props) => {
  const [showform, setshowform] = useState(false);
  const [value, setvalue] = useState("");
  const submitorder = (e) => {
    e.preventDefault();
    console.log(value);
    const order = {
      name: value.name,
      email: value.email,
    };
  };
  const handelchange = (e) => {
    setvalue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
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
      {props.cartItems.length ? (
        <div className="cart-footer">
          {" "}
          <div className="total">
            Total :
            {props.cartItems.reduce((acc, p) => {
              return acc + p.price;
            }, 0)}
            $
          </div>
          <button className="select-product" onClick={() => setshowform(true)}>
            select-product
          </button>
        </div>
      ) : null}
      {showform && (
        <div className="checkout-form">
          <span className="close-icon" onClick={() => setshowform(false)}>
            &times;
          </span>
          <form onSubmit={submitorder}>
            <div>
              <label>Name</label>
              <input type="text" name="name" required onChange={handelchange} />
            </div>
            <div>
              <label>Email</label>
              <input
                type="email"
                name="Email"
                required
                onChange={handelchange}
              />
            </div>
            <div>
              <button type="submit">Checkout</button>{" "}
            </div>
          </form>
        </div>
      )}
      <Checkout
        value={value}
        showform={showform}
        setshowform={setshowform}
        submitorder={submitorder}
        handelchange={handelchange}
      />
    </div>
  );
};

export default Cart;
