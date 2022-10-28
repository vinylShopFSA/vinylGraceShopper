import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchVinylOrders } from "./vinylOrderSlice";

function VinylOrderComponent(props) {
  const { cartId } = props;
  const dispatch = useDispatch();

  const vinylOrder = useSelector((state) => {
    return state.vinylOrder;
  });

  useEffect(() => {
    dispatch(fetchVinylOrders(cartId));
  }, []);

  console.log("VINYLORDER", vinylOrder);
  return (
    <>
      {vinylOrder?.map(({ Vinyl, quantity }) => (
        <div>
          <p className="price">Vinyl:{Vinyl.vinylName}</p>
          <img className="cartimage" src={Vinyl.imageUrl} alt="item" />
          <p className="price">Price: ${Vinyl.price}</p>
          <p>{quantity}</p>
        </div>
      ))}
      {/* <div className="cartItem">
        <img className="cartItem__image" src={imageUrl} alt="item" />
        <div className="cartItem__info">
          <p className="cartItem__title">{vinylName}</p>
          <p className="cartItem__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
        </div>
      </div> */}
    </>
  );
}

export default VinylOrderComponent;
