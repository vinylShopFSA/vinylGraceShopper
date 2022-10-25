import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchVinyls, selectVinyls } from "../../features/vinyl/vinylSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

/**
 * COMPONENT
 */
const AllVinyls = () => {
  const dispatch = useDispatch();
  // const vinyls = useSelector(selectVinyls);
  const vinyls = useSelector((state) => {
    console.log("state", state);
    return state.vinyl;
  });

  useEffect(() => {
    dispatch(fetchVinyls());
  }, []);

  console.log("vinyls", vinyls);

  // console.log(fetchVinyls(), "vinyls")
  return (
    <div>
      <div>
        <h1>All Albums</h1>
        <ul>
          {vinyls && vinyls.length
            ? vinyls.map((album) => {
                console.log("album", vinyls);
                return (
                  <li key={album.id}>
                    <Link to={`/${album.id}`}>
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
