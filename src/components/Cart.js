import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartArray, DELETEItem, lenght } = useContext(CartContext);
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
    </Card>
  );
};

export default Cart;
