import React from "react";
import { useState, useEffect } from "react";
import ProductsModal from "./ProductsModal";
import "../../css/Products/Products.css";
import Bounce from "react-reveal/Bounce";
import { connect } from "react-redux";
import { fetchProducts } from "../../store/actions/products";
import { addToCart } from "../../store/actions/cart";
function Products(props) {
  const [product, setproduct] = useState("");
  const openModal = (product) => {
    setproduct(product);
  };
  const closeModal = () => {
    setproduct(false);
  };
  useEffect(() => {
    props.fetchProducts();
  }, []);

  return (
    <Bounce left cascade>
      <div className="products-wrapper">
        {props.products && props.products.length
          ? props.products.map((product) => (
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
            ))
          : "loading"}
        <ProductsModal product={product} closeModal={closeModal} />
      </div>
    </Bounce>
  );
}
export default connect(
  (state) => {
    return {
      products: state.products.filterProducts,
    };
  },
  { fetchProducts, addToCart }
)(Products);
