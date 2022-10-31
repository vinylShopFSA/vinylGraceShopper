import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchVinyls } from "./vinylSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
<<<<<<< HEAD

=======
import { addVinylOrder, fetchVinylOrders } from "../order/vinylOrderSlice";
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29
/**
 * COMPONENT
 */
const AllVinyls = () => {
<<<<<<< HEAD
=======
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;

>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29
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
            ? vinyls.map((album) => {
                return (
                  <li key={album.id}>
                    <Link to={`/singleVinyl/${album.id}`}>
                      {album.artist}: {album.vinylName}
                      <br></br>
                      <img src={album.imageUrl} width="100px" />
                      <p>${album.price}</p>
                    </Link>
<<<<<<< HEAD
=======
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
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29
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
