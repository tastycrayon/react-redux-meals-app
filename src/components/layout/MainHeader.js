import React from "react";
import Container from "../ui/Container";
import "./MainHeader.css";
import CartButton from "../cart/CartButton";

export default function MainHeader({ onShowCart }) {
  return (
    <header id="masthead" className="site-header">
      <Container>
        <div className="primary-header">
          <div className="logo">ReactMeals</div>
          <CartButton onShowCart={onShowCart} />
        </div>
      </Container>
    </header>
  );
}
