import Header from "./components/Header/Header";
import MealsMenu from "./components/Menu/MealsMenu";
import Footer from "./components/Footer/Footer";

import "./App.css";
import React from "react";

function App() {
  return (
    <div className="App">
      <Header />
      <MealsMenu />
      <Footer />
    </div>
  );
}

export default App;
