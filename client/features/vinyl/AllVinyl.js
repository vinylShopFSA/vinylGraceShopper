import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchVinyls } from "./vinylSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const AllVinyls = () => {
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
