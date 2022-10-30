import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { me } from "./store";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import AllVinyls from "../features/vinyl/AllVinyl";
import SingleVinyl from "../features/vinyl/SingleVinyl";
import CartComponent from "../features/cart/Cart";
import UserProfile from "../features/user/userProfile";
import ViewUser from "../features/admin/ViewUsers";
import AddRecord from "../features/admin/AddRecord";

/**
 * COMPONENT
 */

const AppRoutes = (props) => {
  const { onAdd, onRemove } = props;
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
        <Routes>
        <Route
            path="/allVinyls"
            element={<AllVinyls onAdd={onAdd} onRemove={onRemove}name="allVinyls" displayName="All Vinyls" />}
          />
          {/* <div>
                  <AllVinyls onAdd={onAdd} onRemove={onRemove} />
                </div> */}
           <Route
            path="/singleVinyl/:id"
            element={
              <SingleVinyl
                name="singleVinyl"
                displayName="singleVinyl"
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route />
          <Route path="/cart" element={<CartComponent />} />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
         <Route path="/" element={<Home/>} />

        </Routes>
      {isLoggedIn ? (
        <Routes>
           <Route path="/userProfile" element={<UserProfile/>} />
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route to="/home" element={<Home />} /> */}
          {isAdmin && <Route  path="/userList" element={<ViewUser/>} />}
          {isAdmin && <Route  path="/addAlbum" element={<AddRecord/>} />}

        </Routes>
      ) : (
        <Routes>
     
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
