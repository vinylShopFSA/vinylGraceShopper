import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSingleVinyl } from "./singleVinylSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addVinylOrder, fetchVinylOrders } from "../order/vinylOrderSlice";

const SingleVinyl = () => {
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;

  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    // id,
    artist,
    vinylName,
    price,
    imageUrl,
    genre,
    year,
    label,
    description,
    quantity,
  } = useSelector((state) => state.singleVinyl);

  useEffect(() => {
    dispatch(fetchSingleVinyl(id));
  }, []);

  return (
    <>
      <div>
        <h1>{vinylName}</h1>
        <h2>by {artist}</h2>
      </div>
      <img src={imageUrl}></img>
      <div>About this album:</div>
      <div>genre:{genre}</div>
      <div>release year: {year}</div>
      <p>{description}</p>
      <p>Record Label: {label}</p>

      <p>Items in Stock :{quantity}</p>
      <p>
        <button
          onClick={async () => {
            await dispatch(
              addVinylOrder({ userId, VinylId: parseInt(id), quantity: 1 })
            );
            await dispatch(fetchVinylOrders(userId));
          }}
        >
          {" "}
          Add to Cart{" "}
        </button>{" "}
        to purchase today for the low price of ${price}
      </p>
    </>
  );
};
export default SingleVinyl;
