import React from "react";
import CartItem from "./CartItem";
import { Typography } from "@mui/material";

import { useSelector } from "react-redux";

const CartComponent = () => {
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);
  return (
    <div>
      <div>
        <br></br>
        <img src="https://i.ibb.co/7zxLkB9/Albums-4.png" width="150px"></img>
        <br></br>
        <br></br>
        {cart.map(({ id, vinylName, imageUrl, price, quantity }) => (
          <CartItem
            key={id}
            id={id}
            vinylName={vinylName}
            imageUrl={imageUrl}
            price={price}
            quantity={quantity}
          />
        ))}
      </div>
    </div>
  );
};

export default CartComponent;
