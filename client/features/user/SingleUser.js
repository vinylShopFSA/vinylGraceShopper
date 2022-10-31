import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchSingleUser } from "./singleUserSlice";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";


const SingleUser = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const {
    UserName,
    email,
    firstName,
    lastName,
  } = useSelector((state) => {
    return state.singleUser;
  });

  useEffect(() => {
    dispatch(fetchSingleUser(id));
  }, []);

  return (
    
      <div>
        <h1>{UserName}</h1>
        <h2>firstName {firstName}</h2>
        <h2>lastName {lastName}</h2>
      <div>email:{email}</div>
      </div>
  );
};
export default SingleUser;