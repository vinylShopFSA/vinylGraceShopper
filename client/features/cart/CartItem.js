import React from "react";
import { incrementQuantity, decrementQuantity, removeItem } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";

function CartItem(props) {
  //   const { id, vinylName, imageUrl, price } = useSelector(
  //     (state) => state.cart.cart

  //   );

  const { id, vinylName, imageUrl, price, quantity } = props;
  const dispatch = useDispatch();
  return (
    <>
      <div className="cartItem">
        <img className="cartItem__image" src={imageUrl} alt="item" />
        <div className="cartItem__info">
          <p className="cartItem__title">{vinylName}</p>
          <p className="cartItem__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="cartItem__incrDec">
            <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
            <p>{quantity}</p>
            <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
          </div>
          <button
            className="cartItem__removeButton"
            onClick={() => dispatch(removeItem(id))}
          >
            Remove
          </button>
        </div>
      </div>
    </>
  );
}

export default CartItem;
