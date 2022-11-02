import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { me } from "./store";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import AllVinyls from "../features/vinyl/AllVinyl";
import SingleVinyl from "../features/vinyl/SingleVinyl";
import UserProfile from "../features/user/userProfile";
import ViewUser from "../features/admin/ViewUsers";
import AddRecord from "../features/admin/AddRecord";
import OrderComponent from "../features/order/Order";
import Checkout from "../features/order/Checkout";
import Cart from "../features/order/visitorCart/Cart";

/**
 * COMPONENT
 */

const AppRoutes = (props) => {
  const { onAdd, onRemove } = props;
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;

  useEffect(() => {
    dispatch(me());
  }, []);

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/allVinyls" element={<AllVinyls />} />
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
        <Route path="/cart" element={<Cart />} />
        <Route
          path="/signup"
          element={<AuthForm name="signup" displayName="Sign Up" />}
        />
        <Route
          path="/login"
          element={<AuthForm name="login" displayName="Login" />}
        />
        <Route path="/" element={<Home />} />
      </Routes>
      {isLoggedIn ? (
        <Routes>
          <Route
            path="/allVinyls"
            element={
              <AllVinyls
                name="allVinyls"
                displayName="All Vinyls"
                userId={userId}
              />
            }
          />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route
            path="/currentOrder"
            element={<OrderComponent userId={userId} />}
          />
          <Route path="/checkout" element={<Checkout />} />
          {isAdmin && <Route path="/userList" element={<ViewUser />} />}
          {isAdmin && <Route path="/addAlbum" element={<AddRecord />} />}
        </Routes>
      ) : (
        <Routes></Routes>
      )}
    </div>
  );
};

export default AppRoutes;
