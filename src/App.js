import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartvisiblity,
  showCart,
  hideCart,
} from "./features/cart/cartSlice";
import { selectMeals, selectMealStatus } from "./features/meal/mealSlice";

import Cart from "./components/cart/Cart";
import MainHeader from "./components/layout/MainHeader";
import Banner from "./components/layout/Banner";
import Container from "./components/ui/Container";
import Meals from "./components/meals/Meals";
import Footer from "./components/layout/Footer";

function App() {
  const meals = useSelector(selectMeals);
  const mealStatus = useSelector(selectMealStatus);
  const cartIsShown = useSelector(selectCartvisiblity);
  const isLoading = mealStatus === "loading";
  const isError = mealStatus === "failed";
  const dispatch = useDispatch();

  const showCartHandler = () => {
    dispatch(showCart());
  };
  const hideCartHandler = () => {
    dispatch(hideCart());
  };

  return (
    <>
      {cartIsShown && <Cart onCartClose={hideCartHandler} />}
      <MainHeader onShowCart={showCartHandler} />
      <main>
        <Banner />
        {isLoading && (
          <Container>
            <p className="text-center">loading</p>
          </Container>
        )}
        {!isLoading && !isError && <Meals itemList={meals} />}
        {isError && (
          <Container>
            <p className="text-center">Something went wrong</p>
          </Container>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
