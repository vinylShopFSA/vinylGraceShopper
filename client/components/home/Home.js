import React from 'react';
import { useSelector } from 'react-redux';

// o: it looks like yall moved this into its own folder in the components
//  folder instead of in the features folder. So the intention behind this was
//  to have you all create a new folder per feature (vinyl) and have the component
//  and any corresponding slices also in that folder

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);

  return (
    <div>
      <h3>Welcome, {username}</h3>
    </div>
  );
};

export default Home;
