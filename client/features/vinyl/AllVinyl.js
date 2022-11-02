import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { fetchVinyls } from "./vinylSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addVinylOrder, fetchVinylOrders } from "../order/vinylOrderSlice";
import {
  Button,
  CardContent,
  Grid,
  Typography,
  Pagination,
  Box,
} from "@mui/material";

/**
 * COMPONENT
 */
const AllVinyls = () => {
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;

  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const dispatch = useDispatch();
  const vinyls = useSelector((state) => state.vinyl);

  useEffect(() => {
    dispatch(fetchVinyls());
  }, []);

  useEffect(() => {
    if (vinyls.length > 0) {
      setLoading(false);
    }
  }, [vinyls]);

  // checking whether we've loaded
  useEffect(() => {
    if (vinyls.length > 0) {
      setLoading(false);
    }
  }, [vinyls]);

  //Get current posts

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  return loading ? (
    <Typography>
      <img src="https://i.ibb.co/3F9Q14c/Albums-2.gif"></img>
    </Typography>
  ) : (
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
              }).slice(indexOfFirstPost, indexOfLastPost)
            : null}
        </Grid>
        <Box
          justifyContent={"center"}
          alignItems="center"
          display={"flex"}
          sx={{ margin: "20px 0px" }}
        >
          <Pagination
            count={Math.ceil(vinyls.length / 9)}
            onChange={(e, value) => setCurrentPage(value)}
          />
        </Box>
      </div>
    </div>
  );
};

export default AllVinyls;
