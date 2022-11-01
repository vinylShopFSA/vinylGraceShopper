import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchVinyls } from "./vinylSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addVinylOrder, fetchVinylOrders } from "../order/vinylOrderSlice";
import { Button, CardContent, Grid, Typography } from "@mui/material";

/**
 * COMPONENT
 */
const AllVinyls = () => {
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;

  const dispatch = useDispatch();
  const vinyls = useSelector((state) => state.vinyl);

  useEffect(() => {
    dispatch(fetchVinyls());
  }, []);

  return (
    <div>
      <div>
        <img src="https://i.ibb.co/sj1f5kH/Albums-3.png" width="300px"></img>
        <Grid container>
          {vinyls && vinyls.length
            ? vinyls.map(({ id, artist, vinylName, price, imageUrl }) => {
                return (
                  <Grid item key={id} xs={12} sm={6} md={4} lg={4}>
                    <CardContent>
                      <Link to={`/singleVinyl/${id}`}>
                        <Button>
                          <Typography
                            variant="h6"
                            fontFamily="Barlow Condensed"
                          >
                            {artist}: {vinylName}
                          </Typography>
                        </Button>
                        <br></br>
                        <img
                          src={imageUrl}
                          loading="lazy"
                          width="350px"
                          height="350px"
                        />
                      </Link>
                      <br></br>
                      <Button
                        variant="outlined"
                        aria-label="Add to Collection"
                        onClick={async () => {
                          await dispatch(
                            addVinylOrder({
                              userId,
                              VinylId: id,
                              quantity: 1,
                            })
                          );
                          await dispatch(fetchVinylOrders(userId));
                        }}
                      >
                        <Typography fontFamily="Barlow Condensed">
                          Add to Cart ${price}
                        </Typography>
                      </Button>
                    </CardContent>
                  </Grid>
                );
              })
            : null}
        </Grid>
      </div>
    </div>
  );
};

export default AllVinyls;
