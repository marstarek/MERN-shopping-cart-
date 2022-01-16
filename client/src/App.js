import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import Cart from "./components/Cart/Cart";

import { words } from "./words";
import data from "./data.json";

function App() {
  const [products, setproducts] = useState(data);
  // filter
  const [order, setorder] = useState("");
  const [size, setsize] = useState("");
  const [cartItems, setcartItems] = useState(
    JSON.parse(localStorage.getItem("cartItems")) || []
  );
  const handleFilterBySize = (e) => {
    setsize(e.target.value);
    if (e.target.value == "ALL") {
      setproducts(data);
    } else {
      let clonedproducts = [...products];

      let newproducts = clonedproducts.filter(
        (p) => p.sizes.indexOf(e.target.value) != -1
      );
      setproducts(newproducts);
    }
  };
  const handleFilterByOrder = (e) => {
    let order = e.target.value;
    setorder(order);
    let clonedproducts = [...products];

    let newproducts = clonedproducts.sort(function (a, b) {
      if (order == "lowest") {
        return a.price - b.price;
      } else if (order == "highest") {
        return b.price - a.price;
      } else {
        return a.id < b.id ? 1 : -1;
      }
    });
    setproducts(newproducts);
  };
  const addToCart = (product) => {
    const cartItemsClone = [...cartItems];
    let isProductExist = false;
    cartItemsClone.forEach((p) => {
      if (p.id == product.id) {
        p.qty++;
        isProductExist = true;
      }
    });
    if (!isProductExist) {
      cartItemsClone.push({ ...product, qty: 1 });
    }
    setcartItems(cartItemsClone);
  };
  const removeFromCart = (product) => {
    const cartItemsClone = [...cartItems];

    setcartItems(cartItemsClone.filter((p) => p.id !== product.id));
  };
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  return (
    <div className="layout">
      <Header> </Header>{" "}
      <main>
        {" "}
        <div className="wrapper">
          <Products products={products} addToCart={addToCart} />{" "}
          <Filter
            productsNum={products.length}
            handleFilterBySize={handleFilterBySize}
            size={size}
            order={order}
            handleFilterByOrder={handleFilterByOrder}
          />{" "}
        </div>{" "}
        <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      </main>{" "}
      <Footer> </Footer>{" "}
    </div>
  );
}

export default App;
