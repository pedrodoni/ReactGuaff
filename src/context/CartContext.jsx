
import React, { createContext, useState } from "react";
import Swal from "sweetalert2";




export const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [cartArray, setCartArrray] = useState([]);
  const lenght = cartArray.length;
  

  const addCarrito = (items, alimento) => {
    if (items === 0) {
      Swal.fire("Debes Elegir una cantidad valida");
    } else {
      Swal.fire(`Agregaste ${items} items a tu carrito`);
    }
    if (stay(alimento.id)) {
      Swal.fire("Este Producto ya se encuentra en el carrito");
    } else {
      const newItem = {
        Item: alimento,
        cantidad: items,
      };

      setCartArrray([...cartArray, newItem]);
    }
  };
  const cartTotalPrice = () => {
    let total = 0;
    cartArray.forEach(elem => {
        total += elem.price * elem.quantity;
    });
    return total;
}

  const DELETEItem = (id) => {
    const refresh = cartArray.filter((item) => item.Item.id !== id);
    setCartArrray(refresh);
  };
  const clearCart = () => {
    setCartArrray([]);
  };
  const stay = (id) => {
    return cartArray.some((item) => item.Item.id === id);
  };
  const order = ()=>{
    setCartArrray([])
    Swal.fire("Felicitaciones por su compra");
  }


  const value = {
    cartArray,
    addCarrito,
    clearCart,
    stay,
    DELETEItem,
    lenght,
    order,
        cartTotalPrice,
   

  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
