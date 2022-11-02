import React, { useEffect } from "react";
import Navbar from "../features/navbar/Navbar";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { me } from "./store";
import AppRoutes from "./AppRoutes";
import { fetchVinylOrders } from "../features/order/vinylOrderSlice";

const App = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const dispatch = useDispatch();

  const user = useSelector((state) => state.auth.me);
  const userId = user.id;
  useEffect(() => {
    dispatch(me());
  }, []);

  let cart = useSelector((state) => {
    return state.vinylOrder;
  });

  if (userId) {
    cart = useSelector((state) => state.vinylOrder);
  } else {
    cart = useSelector((state) => state.cart);
  }

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(fetchVinylOrders());
    }
  }, []);

  //if vistor
  if (!isLoggedIn) {
    if (localStorage.getItem("cart")) {
      cart = JSON.parse(localStorage.getItem("cart"));
    }
  }

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });

    return total;
  };

  return (
    <div>
      <Navbar countCartItems={getTotalQuantity() || 0} />
      <AppRoutes />
    </div>
  );
};

export default App;
