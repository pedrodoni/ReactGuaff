import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

const CartItem = ({ prAl, Delete }) => {
  return (
    <Card>
      <Container>
        <Row>
          <Col>{prAl.Item.name}</Col>
          <Col>{prAl.cantidad}</Col>
          <Col>${prAl.Item.price * prAl.cantidad}</Col>
          <Col>
            <Button variant="danger" onClick={() => Delete(prAl.Item.id)}>
              Delete
            </Button>
          </Col>
        </Row>
      </Container>
    </Card>
  );
};

export default CartItem;
