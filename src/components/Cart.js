import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Card, Col, Container, Row } from "react-bootstrap";

const Cart = () => {
  const { cartArray, DELETEItem } = useContext(CartContext);

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
    </Card>
  );
};

export default Cart;
