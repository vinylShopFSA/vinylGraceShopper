import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../user/userSlice";
import UserDetails from "./UserDetails";

const ViewUser = () => {
  const  users  = useSelector((state) => {
   return  state.users});

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  // o: fix this indentation and spacing
  return (
    <div>
        <h1>Users</h1>
        <div>
            {users.map ((user) => {
                return <UserDetails key={user.id} user={user}/>
            })}
    </div>
    </div>
  )
}

export default ViewUser;
