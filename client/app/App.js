import React from "react";
import Navbar from "../features/navbar/Navbar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// require("typeface-barlow-condensed");

import AppRoutes from "./AppRoutes";

const App = () => {
  // const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
  console.log(cart);
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  // const onAdd = (product) => {
  //   const newCartItems = [...cartItems, { ...product, quantity: 1 }];
  //   setCartItems(newCartItems);
  // };

  // const onRemove = (product) => {};

  return (
    <div>
      <Navbar countCartItems={getTotalQuantity() || 0} />
      {/* countCartItems={cartItems.length} */}
      <AppRoutes />
    </div>
  );
};
// onAdd={onAdd} onRemove={onRemove}

export default App;
