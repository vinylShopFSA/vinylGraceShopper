import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementVinylOrder,
  fetchVinylOrders,
  incrementVinylOrder,
  removeVinylOrder,
} from "./vinylOrderSlice";

import { Button, Typography } from "@mui/material";

function VinylOrderComponent(props) {
  const { userId } = props;
  const dispatch = useDispatch();

  const vinylOrder = useSelector((state) => {
    return state.vinylOrder;
  });

  const incrementVinylOrder = () => {
    dispatch(incrementVinylOrder({
      userId,
      VinylId: Vinyl.id,
      quantity,
    }));
  }
  const decrementVinylOrder = () => {
    dispatch(decrementVinylOrder({
      userId,
      VinylId: Vinyl.id,
      quantity,
    }));
  }
  const removeVinylOrder = () => {
    dispatch(removeVinylOrder({
      userId,
      VinylId: Vinyl.id,
    }));
  }
  useEffect(() => {
    if (userId) {
      dispatch(fetchVinylOrders(userId));
    }
  }, [userId]);

  return (
    <>
      {vinylOrder?.map(({ Vinyl, quantity }) => (
        <div key={Vinyl.id}>
            <div >
              <Typography fontFamily="Barlow Condensed">
                <div className="cartItem">
                  <img className="cartItem__image" src={
                    Vinyl.imageUrl} alt="item" />
                  <div className="cartItem__info">
                    <Typography
                      sx={{
                        fontSize: "20px",
                        fontFamily: "Barlow Condensed",
                        fontStyle: "italic",
                      }}
                    >
                      {Vinyl.vinylName}
                    </Typography>
                    <p className="cartItem__price">
                      <strong>${Vinyl.price}</strong>
                    </p>
                    <div>
                      <div width="auto" margin="auto"></div>
                      <Button
                        onClick={incrementVinylOrder}
                      > -
                      </Button>
                      {quantity}
                      <Button
                        onClick={incrementVinylOrder}
                      >
                        +{" "}
                      </Button>
                    </div>
                    <div>
                      <Button
                        className="cartItem__removeButton"
                        onClick={removeVinylOrder}
                      >
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
                ;
              </Typography>
            </div>
        </div>
      ))}
    </>
  );
 }





export default VinylOrderComponent
