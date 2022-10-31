import React from "react";
import { useSelector } from "react-redux";
import SingleUser from "../user/SingleUser";
import AllVinyls from "../vinyl/AllVinyl";
/**
 * COMPONENT
 */
const Home = () => {
  const username = useSelector((state) => {
    return state.auth.me.username;
  });
  const me = useSelector((state) => {
    return state.auth.me;
  })

  const {
    firstName,lastName,email,
  } = me

  return (
    <div>
      <h3>Welcome{username ?" " + username : ", Stranger"}</h3>
      <h3>  {firstName} here's your shopping experience </h3>
      <AllVinyls  />
    </div>
  );
};

export default Home;
