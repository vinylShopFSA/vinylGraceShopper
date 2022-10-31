import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";


const UserDetails = (props) => {
  const user = props.user;

  // o: fix this indentation 
  return (

<>
<div> {user.username}</div>
<div> ------------------------------</div>
</>

  
  );
};

export default UserDetails;
