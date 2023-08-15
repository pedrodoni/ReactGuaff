import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { getFirestore,  } from "firebase/firestore";
import saveOrder from "../components/NewOrder";
import { useState } from "react";
import Swal from "sweetalert2";

import { collection , getFirestore, addDoc, Timestamp } from "firebase/firestore";






const Cart = () => {
  const [purchase, setPurchase]= useState(false)


  
  const { cartArray, DELETEItem, lenght, clearCart,CheckOut,setCartArrray,order } = useContext(CartContext);
  
 
  


  const buyOrder={
    buyer: {
      name :  "Lionel Andres Messi",
      email :  "client@gmail.com",
      phone :  "3517464477"
    },
    
    items: cartArray.map(p=>({id:p.Item.id,  name: p.Item.name,price:p.Item.price, cantidad:p.cantidad})),


    
   };
   const handlePurchase = async () => {
     const db = getFirestore();
     const ordersCollection = collection(db, 'orders');
     
     try {
      console.log(buyOrder)
      const docRef = await addDoc(ordersCollection, buyOrder);
      Swal.fire("Orden agregada", `Su nro de orden es: ${docRef.id}`, "success");
      setPurchase(true);
    } catch (error) {
      console.error("Error al agregar orden: ", error);
      Swal.fire("Error", `Ocurrió un error al procesar la orden: ${error.message}`, "error");
    }
  };
 
  if(purchase=== true){
    return <CheckOut order={buyOrder}/>

   }
  
  if (lenght === 0) {
    return (
      <h2>
        El Carrito esta vacio,<Link to={"/item"}>Compre Aqui</Link>{" "}
      </h2>
    );
  }
   
  

  return (
  
    <Card>
      <Container>
        <Row>
          <Col>Producto</Col>
          <Col>Cantidad</Col>
          <Col>Precio</Col>
          <Col>Eliminar</Col>
        </Row>
      </Container>
      {cartArray.map((prAL) => (
        <CartItem key={prAL.Item.id} prAl={prAL} Delete={DELETEItem} />
      ))}
      
      <Row>
        <Col>
        
        </Col>
        <Col>
        <Button onClick={handlePurchase}>Ordenar</Button>

        </Col>
        <Col>
        <Button onClick={clearCart}>Vaciar Carrito</Button>
        </Col>
        <Col>
        </Col>
      </Row>
    </Card>
  );
};
export default Cart;

