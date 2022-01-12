import React from "react";

import "../../css/Products/Products.css";
function Products(props) {
  return (
    <div className="products-wrapper">
      {props.products.map((product) => (
        <div className="product-item" key={product.id}>
          <img src={product.imageUrl} alt={product.tittle} />
          <div className="product-desc">
            <p> {product.tittle}</p>
            <span>{product.price}</span>
          </div>
          <button>add to cart </button>
        </div>
      ))}
    </div>
  );
}

export default Products;
