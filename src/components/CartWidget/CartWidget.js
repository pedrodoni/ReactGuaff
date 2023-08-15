import React, { useContext } from "react";
import { Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../Cart";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { lenght } = useContext(CartContext);
  return (
    <div className="cartWid">
      {" "}
      <Link to={"/cart"}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-shopping-cart"
        width="44"
        height="44"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2c3e50"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l14 1l-1 7h-13" />
      </svg>
      
        <Badge>{lenght}</Badge>
      </Link>
    </div>
  );
};

export default CartWidget;
