import React from "react";
import { useState } from "react";
import ProductsModal from "./ProductsModal";
import "../../css/Products/Products.css";
import Bounce from "react-reveal/Bounce";

function Products(props) {
  const [product, setproduct] = useState("");
  const openModal = (product) => {
    setproduct(product);
  };
  const closeModal = () => {
    setproduct(false);
  };
  return (
    <Bounce left cascade>
      <div className="products-wrapper">
        {props.products.map((product) => (
          <div className="product-item" key={product.id}>
            <a href="#" onClick={() => openModal(product)}>
              <img src={product.imageUrl} alt={product.tittle} />
            </a>
            <div className="product-desc">
              <p> {product.tittle}</p>
              <span>${product.price}</span>
            </div>
            <button onClick={() => props.addToCart(product)}>
              add to cart{" "}
            </button>
          </div>
        ))}
        <ProductsModal product={product} closeModal={closeModal} />
      </div>
    </Bounce>
  );
}

export default Products;
