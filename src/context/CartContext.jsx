
import React, { createContext, useState } from "react";
import { Link } from "react-router-dom";
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
  const CheckOut = ({order}) => {
    
    return (
        <div>
           <div>
            <h3>Información del Comprador:</h3>
            <p><strong>Nombre:</strong> {order.buyer.name}</p>
            <p><strong>Email:</strong> {order.buyer.email}</p>
            <p><strong>Teléfono:</strong> {order.buyer.phone}</p>
            </div>
            
            
            
            {clearCart()}
            <Link to={'/item'}><h3>Seguir Comprando</h3></Link>
        </div>
      );
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
    CheckOut
        
   

  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartProvider;
