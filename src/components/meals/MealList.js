import React from "react";
import { useDispatch } from "react-redux";
import { add_to_cart } from "../../features/cart/cartSlice";

import MealItemForm from "./MealItemForm";
import "./MealList.css";

export default function MealList({ meal }) {
  const dispatch = useDispatch();
  const { _id, title, image, price, description } = meal;

  const addToCartHandler = (amount) => {
    dispatch(
      add_to_cart({
        _id,
        title,
        price,
        description,
        qty: amount,
        image,
      })
    );
  };

  return (
    <div className="col-6 col-lg-3">
      <div className="meal">
        <img src={image} alt={title} />
        <div className="h-flex meal-content">
          <div>
            <p className="price">${price.toFixed(2)}</p>
            <h3>{title}</h3>
          </div>
          <div className="add-to-cart">
            <MealItemForm
              onAddToCart={addToCartHandler}
              input={{
                _id: "number-of-items_" + _id,
                type: "number",
                min: 1,
                max: 5,
                step: 1,
                defaultValue: 1,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
