import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchVinyls } from "../../features/vinyl/vinylSlice";
import { useDispatch } from "react-redux";

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
        All Albums
        <ul>
          {vinyls && vinyls.length
            ? vinyls.map((album) => {
                console.log("album", vinyls);
                return <li key={album.id}>{album.vinylName}</li>;
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default AllVinyls;