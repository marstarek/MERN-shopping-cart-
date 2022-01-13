import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";
import Filter from "./components/Filter/Filter";
import { words } from "./words";
import data from "./data.json";

function App() {
  const [products, setproducts] = useState(data);
  console.log(products);

  return (
    <div className="layout">
      <Header> </Header>{" "}
      <main>
        {" "}
        <div className="wrapper">
          <Products products={products} /> <Filter />
        </div>{" "}
      </main>{" "}
      <Footer> </Footer>{" "}
    </div>
  );
}

export default App;
