import React from "react";
import "../../css/CheckoutForm/Checkout .css";
import Input from "../Input/Input";
import Zoom from "react-reveal/Zoom";
const Checkout = (props) => {
  return (
    <>
      {props.showform && (
        <div className="checkout-form">
          <span className="close-icon" onClick={() => props.setshowform(false)}>
            &times;
          </span>
          <Zoom bottom>
            <form onSubmit={props.submitorder}>
              <Input
                label="Name"
                type="text"
                onChange={props.handelchange}
                name="name"
              />
              <Input
                label="Email"
                type="email"
                onChange={props.handelchange}
                name="email"
              />

              <div>
                <button type="submit">Checkout</button>{" "}
              </div>
            </form>
          </Zoom>
        </div>
      )}
    </>
  );
};

export default Checkout;
