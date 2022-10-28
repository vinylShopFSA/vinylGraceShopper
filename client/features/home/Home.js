import React from "react";
import { useSelector } from "react-redux";
import AllVinyls from "../vinyl/AllVinyl";
/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => {
    console.log(state, "state")
    return state.auth.me.username;
  });

  return (
    <div>
      <h3>Welcome, {username}</h3>
      <AllVinyls />
    </div>
  );
};

export default Home;
