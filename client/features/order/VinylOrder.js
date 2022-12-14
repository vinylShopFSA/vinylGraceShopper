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
  const {} = props;
  const dispatch = useDispatch();

  const vinylOrder = useSelector((state) => {
    return state.vinylOrder;
  });

  useEffect(() => {
    dispatch(fetchVinylOrders());
  }, []);

  return (
    <>
      <Typography fontFamily="Barlow Condensed">
        {vinylOrder?.map(({ Vinyl, quantity }) => (
          <div key={Vinyl.id}>
            {Vinyl ? (
              <div>
                <Typography
                  variant="h1"
                  sx={{
                    fontSize: "36px",
                    fontFamily: "Barlow Condensed",
                    fontStyle: "italic",
                  }}
                >
                  {Vinyl.vinylName}
                </Typography>
                <img
                  className="cartimage"
                  src={Vinyl.imageUrl}
                  alt="item"
                  width="400px"
                  height="400px"
                />
                <p className="price">Price: ${Vinyl.price}</p>{" "}
                <Button
                  onClick={async () => {
                    await dispatch(
                      decrementVinylOrder({
                        VinylId: Vinyl.id,
                        quantity,
                      })
                    );
                    await dispatch(fetchVinylOrders());
                  }}
                >
                  -
                </Button>
                {quantity}
                <Button
                  onClick={async () => {
                    await dispatch(
                      incrementVinylOrder({
                        VinylId: Vinyl.id,
                        quantity,
                      })
                    );
                    dispatch(fetchVinylOrders());
                  }}
                >
                  +
                </Button>
                <Button
                  onClick={async () => {
                    await dispatch(removeVinylOrder({ VinylId: Vinyl.id }));
                    await dispatch(fetchVinylOrders());
                  }}
                >
                  Remove from cart
                </Button>
              </div>
            ) : null}
          </div>
        ))}
      </Typography>
    </>
  );
}

export default VinylOrderComponent;
