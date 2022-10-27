import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSingleVinyl } from "./singleVinylSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const SingleVinyl = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const vinyl = useSelector((state) => {
    return state.singleVinyl;
  });

  useEffect(() => {
    dispatch(fetchSingleVinyl(id));
  }, []);

  return (
    <>
      <div>
        <h1>{vinyl.vinylName}</h1>
        <h2>by {vinyl.artist}</h2>
      </div>
      <img src={vinyl.imageUrl}></img>
      <div>About this album:</div>
      <div>genre:{vinyl.genre}</div>
      <div>release year: {vinyl.year}</div>
      <p>{vinyl.description}</p>
      <p>Record Label: {vinyl.label}</p>

      <p>Items in Stock :{vinyl.quantity}</p>
      <p>
        <button> Buy Now </button> for the low price of ${vinyl.price}
      </p>
    </>
  );
};
export default SingleVinyl;
