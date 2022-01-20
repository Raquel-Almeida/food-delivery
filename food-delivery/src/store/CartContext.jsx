import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  removeItem: (id) => {},
});

export default CartContext;
