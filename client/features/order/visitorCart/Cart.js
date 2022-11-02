import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { decrementQuantity, incrementQuantity, removeItem } from "./cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const vinylOrder = useSelector((state) => state.cart);

  return (
    <>
      <Typography fontFamily="Barlow Condensed">
        {vinylOrder?.map(({ id, vinylName, imageUrl, price, quantity }) => (
          <div key={id}>
            <div>
              <Typography
                variant="h1"
                sx={{
                  fontSize: "36px",
                  fontFamily: "Barlow Condensed",
                  fontStyle: "italic",
                }}
              >
                {vinylName}
              </Typography>
              <img
                className="cartimage"
                src={imageUrl}
                alt="item"
                width="400px"
                height="400px"
              />
              <p className="price">Price: ${price}</p>{" "}
              <Button
                onClick={async () => {
                  dispatch(decrementQuantity(id));
                }}
              >
                -
              </Button>
              {quantity}
              <Button
                onClick={async () => {
                  dispatch(incrementQuantity(id));
                }}
              >
                +
              </Button>
              <Button
                onClick={async () => {
                  dispatch(removeItem(id));
                }}
              >
                Remove from cart
              </Button>
            </div>
          </div>
        ))}
      </Typography>
      <button
        onClick={async () => {
          checkout();
          navigate("/checkout");
        }}
      >
        Checkout
      </button>
    </>
  );
}

export default Cart;
