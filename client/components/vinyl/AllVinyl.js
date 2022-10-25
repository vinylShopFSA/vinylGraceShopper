import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchVinyls, selectVinyls } from "../../features/vinyl/vinylSlice";
import { useDispatch } from "react-redux";

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
