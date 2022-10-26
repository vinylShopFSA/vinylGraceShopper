import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSingleVinyl } from "../../features/vinyl/singleVinylSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

const SingleVinyl = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  // o: I would destructure this for readability
  // o: you can rewrite this as useSelector(state => state.singleVinyl)
  const vinyl = useSelector((state) => {
    // o: once the code is working, please remove console.log statements that
    //  are for debugging
    console.log("state", state);
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
