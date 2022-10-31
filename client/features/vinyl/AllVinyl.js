import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchVinyls } from "./vinylSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../cart/cartSlice";
// import Button from "@mui/material/Button";
import {
  ImageList,
  Button,
  ImageListItem,
  CardContent,
  CardMedia,
  CardActionArea,
  Card,
  Grid,
  Typography,
} from "@mui/material";

/**
 * COMPONENT
 */
const AllVinyls = (props) => {
  const { onAdd, onRemove } = props;
  const dispatch = useDispatch();
  const vinyls = useSelector((state) => {
    return state.vinyl;
  });

  useEffect(() => {
    dispatch(fetchVinyls());
  }, []);
  return (
    <div>
      <div>
        {/* <Typography
          variant="h3"
          component="h2"
          gutterBottom
          fontFamily={("Georgia", "serif")}
        >
          All Albums
        </Typography> */}
        <img src="https://i.ibb.co/sj1f5kH/Albums-3.png" width="300px"></img>
        {/* <Grid container>
          <Grid item xs={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                {vinyls && vinyls.length
                  ? vinyls.map(({ id, artist, vinylName, price, imageUrl }) => {
                      return (
                        <>
                          <CardContent>
                            <Link to={`/singleVinyl/${id}`}>
                              <Typography variant="h6">
                                {artist}: {vinylName}
                              </Typography>

                              <br></br>
                              <img src={imageUrl} loading="lazy" />
                            </Link>

                            <Button
                              onClick={() =>
                                dispatch(
                                  addToCart({
                                    id,
                                    artist,
                                    vinylName,
                                    price,
                                    imageUrl,
                                  })
                                )
                              }
                            >
                              Add to Cart ${price}
                            </Button>
                          </CardContent>
                        </>
                      );
                    })
                  : null}
              </CardActionArea>
            </Card>
          </Grid>
        </Grid> */}

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
                        <img src={imageUrl} loading="lazy" />
                      </Link>
                      <br></br>

                      <Button
                        variant="outlined"
                        aria-label="Add to Collection"
                        onClick={() =>
                          dispatch(
                            addToCart({
                              id,
                              artist,
                              vinylName,
                              price,
                              imageUrl,
                            })
                          )
                        }
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
