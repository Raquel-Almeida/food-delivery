import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import MealsMenu from "./components/Menu/MealsMenu";

import "./App.css";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      {/* <Cart /> */}
      <Header />
      <MealsMenu />
      <Footer />
    </div>
  );
}

export default App;
