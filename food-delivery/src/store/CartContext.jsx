import React from "react";

const CartContext = React.createContext({
  items: [], // Array of cart items
  totalAmount: 0, // Initial amount of items present in the cart
  removeItem: (id) => {}, // Function that receives an id to identify the item that should be removed from the cart
  removeAllItems: () => {}, // Function that removes all items from the cart
});

export default CartContext;
