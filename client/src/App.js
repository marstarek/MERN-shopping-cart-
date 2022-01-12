import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { words } from "./words";

function App() {
  return (
    <div className="layout">
      <Header> </Header> <main> {words.content} </main> <Footer> </Footer>{" "}
    </div>
  );
}

export default App;
