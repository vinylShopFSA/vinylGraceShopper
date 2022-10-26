import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => {
    console.log(state.auth.me)
   return  state.auth.me.username
  } )


  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  );
};

export default Home;
