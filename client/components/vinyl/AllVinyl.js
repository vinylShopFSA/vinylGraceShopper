import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchVinyls } from "../../features/vinyl/vinylSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const AllVinyls = () => {
  const dispatch = useDispatch();
  // o: you can rewrite this as useSelector(state => state.vinyl)
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
          {/* o: you can rewrite this as vinyls?.map(...) and it would do this check
           for you https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining */}
          {vinyls && vinyls.length
            ? vinyls.map((album) => {
                console.log("album", vinyls);
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
