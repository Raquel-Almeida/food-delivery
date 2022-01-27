import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  removeItem: (id) => {},
  removeAllItems: () => {},
});

export default CartContext;
