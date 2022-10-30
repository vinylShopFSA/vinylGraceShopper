import React, {useState, useEffect} from "react";
import Navbar from "../features/navbar/Navbar";

import { useSelector, useDispatch } from "react-redux";

import AppRoutes from "./AppRoutes";
import CartComponent from "../features/cart/Cart";

const App = () => {
  // const [cartItems, setCartItems] = useState([]);
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cart);
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
      <Navbar 
      countCartItems={getTotalQuantity() || 0} 
      />
      {/* countCartItems={cartItems.length} */}
      <AppRoutes />
    </div>
  );
};
// onAdd={onAdd} onRemove={onRemove} 

export default App;
