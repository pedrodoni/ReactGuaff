import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { serverTimestamp } from "firebase/firestore";
import saveOrder from "../components/NewOrder";
import { useState } from "react";
import Swal from "sweetalert2";
import CheckOut from "./CheckOut";







const Cart = () => {
  const [purchase, setPurchase]= useState(false)


  
  const { cartArray, DELETEItem, lenght, clearCart,cartTotalPrice,setCartArrray,order } = useContext(CartContext);
  if (lenght === 0) {
    return (
      <h2>
        El Carrito esta vacio,<Link to={"/item"}>Compre Aqui</Link>{" "}
      </h2>
    );
  }


  const buyOrder={
    buyer: {
      name :  "Lionel Andres Messi",
      email :  "client@gmail.com",
      phone :  "3517464477"
    },
    total: cartTotalPrice(),
    items: cartArray.map(p=>({id:p.id,  name: p.name,price:p.price, cantidad:p.cantidad})),
    date:serverTimestamp()
    
   };
   const handlePurchase = async()=>{
    const orderId= await saveOrder(buyOrder,setCartArrray);
    if(orderId){
      Swal.fire("Su nro de orden es: ", orderId);
      setPurchase(true)
    }else{
      Swal.fire("Erro al solicitar la orden");
    }
   };
   if(purchase=== true){
    return <CheckOut order={buyOrder}/>
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
        <Button  onClick={handlePurchase}>Ordenar</Button>
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
