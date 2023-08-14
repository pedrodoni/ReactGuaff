import React, { createContext, useState } from "react";
import Swal from "sweetalert2";

export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartArray, setCatArrray] = useState([]);
  const lenght = cartArray.length;

  const addCarrito = (items, alimento) => {
    if (items === 0) {
      Swal.fire("Debes Elegir una cantidad valida");
    } else {
      Swal.fire(`Agregaste ${items} items a tu carrito`);
    }
    if (stay(items.id)) {
      Swal.fire("Este Producto ya se encuentra en el carrito");
    } else {
      const newItem = {
        Item: alimento,
        cantidad: items,
      };

      setCatArrray([...cartArray, newItem]);
    }
  };

  const DELETEItem = (id) => {
    const refresh = cartArray.filter((item) => item.Item.id !== id);
    setCatArrray(refresh);
  };
  const clearCart = () => {
    setCatArrray([]);
  };
  const stay = (id) => {
    return cartArray.some((item) => item.id === id);
  };

  const value = {
    cartArray,
    addCarrito,
    clearCart,
    stay,
    DELETEItem,
    lenght,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
