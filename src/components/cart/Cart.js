import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  add_to_cart,
  remove_from_cart,
  reset_cart,
  selectCart,
  selectCartTotalAmount,
} from "../../features/cart/cartSlice";
import { BtnIcon, BtnPrimary, BtnSecondary } from "../ui/Button";
import Modal from "../ui/Modal";
import "./Cart.css";

import { AddToCartIcon, RemoveFromCartIcon } from "./CartIcon";
import Checkout from "./Checkout";

export default function Cart({ onCartClose }) {
  const cart = useSelector(selectCart);
  const totalAmmount = useSelector(selectCartTotalAmount);
  const dispatch = useDispatch();
  const [showCheckout, setshowCheckout] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [hasCheckout, setHasCheckout] = useState(false);

  const addToCartHandler = (item, qty = 1) => {
    dispatch(add_to_cart({ ...item, qty }));
  };
  const removeFromCartHandler = (_id) => {
    dispatch(remove_from_cart({ _id }));
  };

  const handleOrder = () => {
    setshowCheckout(true);
  };

  const checkoutFormHandler = async (userData) => {
    setIsCheckingOut(false);
    setHasCheckout(true);
    dispatch(reset_cart());
  };
  const cartList = () => {
    if (cart.length === 0) return <div className="empty">No item in cart.</div>;
    else
      return cart.map((e) => (
        <div className="cart-item h-flex" key={e.title}>
          <div className="h-flex">
            <img src={e.image} alt={e.title} />
            <div className="cart-item-content">
              <h3>{e.title}</h3>
              <div className="h-flex">
                <small>${e.price}</small>
                <small>X {e.qty}</small>
              </div>
            </div>
          </div>
          <hr />
          <div className="action h-flex">
            <BtnIcon onClick={() => removeFromCartHandler(e._id)}>
              <RemoveFromCartIcon />
            </BtnIcon>
            &nbsp;
            <BtnIcon onClick={() => addToCartHandler(e)}>
              <AddToCartIcon />
            </BtnIcon>
          </div>
        </div>
      ));
  };

  const showFullCart = (
    <div className="cart-list">
      {cartList()}
      <hr />
      <div className="total-amount h-flex">
        <span>Total Amount</span>
        <span>{totalAmmount.toFixed(2)}</span>
      </div>
      {showCheckout && (
        <>
          <hr />
          <Checkout
            onCartClose={onCartClose}
            onFormSubmit={checkoutFormHandler}
          />
        </>
      )}

      {!showCheckout && (
        <>
          <hr />
          <div className="h-flex actions">
            <BtnSecondary onClick={onCartClose}>Close</BtnSecondary>
            &nbsp;
            {!!cart?.length && (
              <BtnPrimary onClick={handleOrder}>Order</BtnPrimary>
            )}
          </div>
        </>
      )}
    </div>
  );

  return (
    <Modal onCartClose={onCartClose}>
      {!isCheckingOut && !hasCheckout && showFullCart}
      {isCheckingOut && !hasCheckout && <p>Submitting order...</p>}

      {hasCheckout && !isCheckingOut && (
        <>
          <p>Submitted order successfully</p>{" "}
          <BtnSecondary onClick={onCartClose}>Close</BtnSecondary>
        </>
      )}
    </Modal>
  );
}
