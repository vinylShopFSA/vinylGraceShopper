import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchVinyls } from "./vinylSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addVinylOrder, fetchVinylOrders } from "../order/vinylOrderSlice";
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
        <h1>All Albums</h1>
        <ul>
          {vinyls && vinyls.length
            ? vinyls.map(({ id, artist, vinylName, price, imageUrl }) => {
                return (
                  <li key={id}>
                    <Link to={`/singleVinyl/${id}`}>
                      {artist}: {vinylName}
                      <br></br>
                      <img src={imageUrl} width="100px" />
                      <p>${price}</p>
                    </Link>
                    <button
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
                      Add to Cart
                    </button>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default AllVinyls;