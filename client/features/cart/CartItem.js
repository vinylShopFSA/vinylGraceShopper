import React from "react";
import { incrementQuantity, decrementQuantity, removeItem } from "./cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";

function CartItem(props) {
  //   const { id, vinylName, imageUrl, price } = useSelector(
  //     (state) => state.cart.cart

  //   );

  const { id, vinylName, imageUrl, price, quantity } = props;
  const dispatch = useDispatch();
  return (
    <>
      <Typography fontFamily="Barlow Condensed">
        <div className="cartItem">
          <img className="cartItem__image" src={imageUrl} alt="item" />
          <div className="cartItem__info">
            <Typography
              sx={{
                fontSize: "20px",
                fontFamily: "Barlow Condensed",
                fontStyle: "italic",
              }}
            >
              {vinylName}
            </Typography>
            <p className="cartItem__price">
              {/* <small></small> */}
              <strong>${price}</strong>
            </p>
            <div>
              <div width="auto" margin="auto">
                <Button onClick={() => dispatch(decrementQuantity(id))}>
                  -
                </Button>
                {quantity}
                <Button onClick={() => dispatch(incrementQuantity(id))}>
                  +
                </Button>
              </div>
              <Button
                className="cartItem__removeButton"
                onClick={() => dispatch(removeItem(id))}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
        <br></br>
      </Typography>
    </>
  );
}

export default CartItem;
