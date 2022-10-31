import React from "react";
import { useSelector } from "react-redux";
import AllVinyls from "../vinyl/AllVinyl";
/**
 * COMPONENT
 */
const Home = () => {
  const username = useSelector((state) => {
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
