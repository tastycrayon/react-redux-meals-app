import React, { useState } from "react";
import "./Checkout.css";
import { BtnPrimary, BtnSecondary } from "../ui/Button";

export default function Checkout({ onCartClose, onFormSubmit }) {
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [postalCode, setpostalCode] = useState("");

  const nameInputHandler = (event) => {
    setname(event.target.value);
  };
  const cityInputHandler = (event) => {
    setcity(event.target.value);
  };
  const addressInputHandler = (event) => {
    setaddress(event.target.value);
  };
  const postalCodeInputHandler = (event) => {
    setpostalCode(event.target.value);
  };

  const checkoutHandler = (event) => {
    event.preventDefault();

    onFormSubmit({
      name,
      address,
      city,
      postalCode,
    });
    setname("");
    setaddress("");
    setcity("");
    setpostalCode("");
  };

  return (
    <form className="checkout-form" onSubmit={checkoutHandler}>
      <div className="h-flex">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            value={name}
            type="text"
            id="name"
            onChange={nameInputHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input
            value={address}
            type="text"
            id="address"
            onChange={addressInputHandler}
          />
        </div>
      </div>
      <div className="h-flex">
        <div className="form-control">
          <label htmlFor="post-office">Postal code</label>
          <input
            value={postalCode}
            type="text"
            id="post-office"
            onChange={postalCodeInputHandler}
          />
        </div>
        <div className="form-control">
          <label htmlFor="city">City</label>
          <input
            value={city}
            type="text"
            id="city"
            onChange={cityInputHandler}
          />
        </div>
      </div>
      <div className="h-flex actions">
        <BtnSecondary onClick={onCartClose}>Close</BtnSecondary>
        &nbsp;
        <BtnPrimary type="submit">Checkout</BtnPrimary>
      </div>
    </form>
  );
}
