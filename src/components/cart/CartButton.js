import React, { useEffect, useState } from "react";
import { BtnIcon } from "../ui/Button";
import classes from "./CartButton.module.css";
import CartIcon from "./CartIcon";
import { selectCart } from "../../features/cart/cartSlice";
import { useSelector } from "react-redux";

export default function CartButton({ onShowCart }) {
  const cart = useSelector(selectCart);

  const [cartIsHighighted, setcartIsHighighted] = useState(false);

  const numberOfCartItems = cart.reduce((acc, item) => {
    return acc + item.qty;
  }, 0);

  const cartButtonHighter = cartIsHighighted ? "bump" : "";

  useEffect(() => {
    if (cart.length === 0) return;
    setcartIsHighighted(true);

    const removeHighlighter = setTimeout(() => {
      setcartIsHighighted(false);
    }, 300);
    return () => {
      // cleanup;
      clearTimeout(removeHighlighter);
    };
  }, [cart]);

  return (
    <div className={classes["header-cart"]}>
      <BtnIcon className={cartButtonHighter} onClick={onShowCart}>
        <CartIcon />
        <span className={classes["cart-items-number"]}>
          {numberOfCartItems}
        </span>
      </BtnIcon>
    </div>
  );
}
