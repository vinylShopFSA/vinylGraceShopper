import React from "react";
import CartItem from "./CartItem";

import { useSelector } from "react-redux";

const CartComponent = () => {
  const cart = useSelector((state) => state.cart.cart);
  // console.log(cart);
  return (
    <div className="cart__left">
      <div>
        <h3>Shopping Cart</h3>
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
