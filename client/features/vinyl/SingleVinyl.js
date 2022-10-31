import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSingleVinyl } from "./singleVinylSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addVinylOrder, fetchVinylOrders } from "../order/vinylOrderSlice";
import { Button, Stack, Item, Typography, ListItemText } from "@mui/material/";


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
<Typography fontFamily="Barlow Condensed">
      <Typography
        sx={{
          fontStyle: "oblique",
          fontFamily: "Barlow Condensed",
          fontWeight: "800",
          fontSize: "20px",
        }}
      >
        <h1>{vinylName}</h1>
        <h2>{artist}</h2>
      </Typography>
      <img src={imageUrl}></img>
      <h2>About this album:</h2>
      <h3>Genre: {genre}</h3>
      <h3>Release Year: {year}</h3>
      <h3>Description: {description}</h3>
      <h3>Record Label: {label}</h3>

      <h3>Items in Stock: {quantity}</h3>
      <Typography
        sx={{
          fontWeight: "Bold",
          fontFamily: "Barlow Condensed",
          fontSize: "20px",
          justifyContent: "flex-start",
        }}
      >
        <Button
          variant="outlined"
          onClick={async () => {
            await dispatch(
              addVinylOrder({ userId, VinylId: parseInt(id), quantity: 1 })
            );
            await dispatch(fetchVinylOrders(userId));
          }}
        >
          <Typography
            sx={{
              fontFamily: "Barlow Condensed",
              fontWeight: "Bold",
              fontSize: "18px",
              justifyContent: "flex-start",
            }}
          >
            Add to Cart
          </Typography>
        </Button>{" "}
        to purchase today for the low price of ${price}
      </Typography>
    </Typography>
  );
};

export default SingleVinyl;
