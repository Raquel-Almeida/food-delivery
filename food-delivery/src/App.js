import React from "react";

import Header from "./components/Header/Header";
import MealsMenu from "./components/Menu/MealsMenu";
import Footer from "./components/Footer/Footer";
import CartProvider from "./store/CartProvider";

import "./App.css";

function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <MealsMenu />
      </CartProvider>
      <Footer />
    </>
  );
}

export default App;
