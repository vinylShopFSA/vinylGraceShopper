import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchVinyls, selectVinyls } from "../../features/vinyl/vinylSlice";
import { useDispatch } from "react-redux";

/**
 * COMPONENT
 */
const AllVinyls = () => {
  const dispatch = useDispatch();
  const vinyls = useSelector(selectVinyls);

  useEffect(() => {
    dispatch(fetchVinyls());
  }, []);
  // const vinyls = useSelector((state) => state.AllVinyls);

  console.log("vinyls", vinyls);

  // console.log(fetchVinyls(), "vinyls")
  return (
    <div>
      <div>
        All Albums
        <ul>
          {vinyls && vinyls.length
            ? vinyls.map((album) => {
                return <div key={album.id}>{album.name}</div>;
              })
            : null}
        </ul>
      </div>
    </div>
  );
};

export default AllVinyls;
