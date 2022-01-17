import React from "react";
import Modal from "react-modal";
import "../../css/Products/Products.css";
import { useState } from "react";
import Pulse from "react-reveal/Pulse";
const ProductsModal = (props) => {
  const { product, closeModal } = props;
  return (
    <Modal className="Modal" isOpen={product} onRequestClose={closeModal}>
      <Pulse>
        <span className="close-icon" onClick={closeModal}>
          &times;
        </span>
        <div className="product-info">
          <img src={product.imageUrl} alt={product.tittle} />
          <h2> {product.tittle}</h2>
          <p>{product.desc}</p>
          <p>${product.price}</p>
        </div>
      </Pulse>
    </Modal>
  );
};

export default ProductsModal;
