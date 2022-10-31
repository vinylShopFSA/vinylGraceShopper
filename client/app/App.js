<<<<<<< HEAD
import React, {useState, useEffect} from "react";
=======
import React, { useEffect } from "react";
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29
import Navbar from "../features/navbar/Navbar";

import { useSelector, useDispatch } from "react-redux";
import { me } from "./store";

import AppRoutes from "./AppRoutes";
<<<<<<< HEAD
import CartComponent from "../features/cart/Cart";
=======
import { fetchVinylOrders } from "../features/order/vinylOrderSlice";
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const dispatch = useDispatch();

<<<<<<< HEAD
  const cart = useSelector((state) => state.cart.cart);
=======
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  useEffect(() => {
    dispatch(me());
  }, []);

  let cart = useSelector((state) => {
    return state.vinylOrder;
  });

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchVinylOrders(userId));
    }
  }, []);

  //if vistor
  if (!isLoggedIn) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
  }

>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <div>
<<<<<<< HEAD
      <Navbar 
      countCartItems={getTotalQuantity() || 0} 
      />
      {/* countCartItems={cartItems.length} */}
=======
      <Navbar countCartItems={getTotalQuantity() || 0} />
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29
      <AppRoutes />
    </div>
  );
};

export default App;
