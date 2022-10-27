import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchVinyls } from "./vinylSlice";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../cart/cartSlice";
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
                      onClick={() =>
                        dispatch(
                          addToCart({ id, artist, vinylName, price, imageUrl })
                        )
                      }
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
