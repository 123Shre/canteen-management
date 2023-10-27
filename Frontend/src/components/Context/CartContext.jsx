// CartContext.js
import React, { createContext, useContext, useReducer } from "react";

export const CartContext = createContext();

const initialCartState = {
  items: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.items.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity = ++existingItem.quantity;
        return { items: [...state.items] };
      } else {
        // If it doesn't exist, add it to the cart
        action.payload.quantity = 1;
        return { items: [...state.items, action.payload] };
      }
      case "DECREASE_QUANTITY":
        // Find the item by its _id and decrease its quantity
        return {
          items: state.items.map((item) => {
            if (item._id === action.payload._id && item.quantity > 1) {
              item.quantity -= 1;
            }
            return item;
          }),
        };

    case "REMOVE_FROM_CART":
      // Remove the item from the cart
      return {
        items: state.items.filter((item) => item._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
