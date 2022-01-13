import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import { words } from "./words";
import data from "./data.json";

function App() {
  const [products, setproducts] = useState(data);
  // filter
  const [order, setorder] = useState("");
  const [size, setsize] = useState("");
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

  return (
    <div className="layout">
      <Header> </Header>{" "}
      <main>
        {" "}
        <div className="wrapper">
          <Products products={products} />{" "}
          <Filter
            handleFilterBySize={handleFilterBySize}
            size={size}
            order={order}
            handleFilterByOrder={handleFilterByOrder}
          />{" "}
        </div>{" "}
      </main>{" "}
      <Footer> </Footer>{" "}
    </div>
  );
}

export default App;
