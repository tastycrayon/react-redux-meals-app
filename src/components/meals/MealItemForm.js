import React, { useRef, useState } from "react";
import { AddToCartIcon } from "../cart/CartIcon";
import { BtnIcon } from "../ui/Button";
import Input from "../ui/Input";

export default function MealItemForm({ input, onAddToCart }) {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const ammountInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();
    const currentAmmout = parseInt(ammountInputRef.current.value);
    if (
      !Number.isInteger(currentAmmout) ||
      currentAmmout < 1 ||
      currentAmmout > 5
    ) {
      return setAmountIsValid(false);
    }
    !amountIsValid && alert("inavid amount");
    onAddToCart(currentAmmout);
  };

  return (
    <form onSubmit={submitFormHandler}>
      <Input ref={ammountInputRef} input={input} />
      <BtnIcon type="submit">
        <AddToCartIcon />
      </BtnIcon>
    </form>
  );
}
