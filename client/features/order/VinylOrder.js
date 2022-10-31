import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementVinylOrder,
  fetchVinylOrders,
  incrementVinylOrder,
  removeVinylOrder,
} from "./vinylOrderSlice";

function VinylOrderComponent(props) {
  const { userId } = props;
  const dispatch = useDispatch();

  const vinylOrder = useSelector((state) => {
    return state.vinylOrder;
  });

  useEffect(() => {
    if (userId) {
      dispatch(fetchVinylOrders(userId));
    }
  }, []);

  return (
    <>
      {vinylOrder?.map(({ Vinyl, quantity }) => (
        <div>
          {Vinyl ? (
            <div key={Vinyl.id}>
              <p className="price">Vinyl:{Vinyl.vinylName}</p>
              <img className="cartimage" src={Vinyl.imageUrl} alt="item" />
              <p className="price">Price: ${Vinyl.price}</p>{" "}
              <button
                onClick={async () => {
                  await dispatch(
                    decrementVinylOrder({ userId, VinylId: Vinyl.id, quantity })
                  );
                  await dispatch(fetchVinylOrders(userId));
                }}
              >
                -
              </button>
              <p>{quantity}</p>
              <button
                onClick={async () => {
                  await dispatch(
                    incrementVinylOrder({ userId, VinylId: Vinyl.id, quantity })
                  );
                  await dispatch(fetchVinylOrders(userId));
                }}
              >
                +
              </button>
              <button
                onClick={async () => {
                  await dispatch(
                    removeVinylOrder({ userId, VinylId: Vinyl.id })
                  );
                  await dispatch(fetchVinylOrders(userId));
                }}
              >
                Remove from cart
              </button>
            </div>
          ) : null}
        </div>
      ))}
    </>
  );
}

export default VinylOrderComponent;
