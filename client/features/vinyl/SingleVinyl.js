import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSingleVinyl } from "./singleVinylSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../cart/cartSlice";

const SingleVinyl = (props) => {
  const { onAdd, onRemove } = props;
  // const { id } = useParams();
  const dispatch = useDispatch();
  const {
    id,
    artist,
    vinylName,
    price,
    imageUrl,
    genre,
    year,
    label,
    description,
    quantity,
  } = useSelector((state) => {
    return state.singleVinyl;
  });

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
        <button onClick={() => dispatch(addToCart({id,artist, vinylName, price, imageUrl}))}> Buy Now </button> for
        the low price of ${price}
      </p>
    </>
  );
};
export default SingleVinyl;
