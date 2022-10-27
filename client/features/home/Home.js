import React from 'react';
import { useSelector } from 'react-redux';

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => {
   return  state.auth.me.username
  } )


  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  );
};

export default Home;
