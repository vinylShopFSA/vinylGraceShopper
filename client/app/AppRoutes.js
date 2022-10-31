import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import AllVinyls from "../features/vinyl/AllVinyl";
import SingleVinyl from "../features/vinyl/SingleVinyl";
import { me } from "./store";
import OrderComponent from "../features/order/Order";
import Checkout from "../features/order/Checkout";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home userId={userId} />} />
          <Route to="/home" element={<Home userId={userId} />} />
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
          <Route
            path="/singleVinyl/:id"
            element={
              <SingleVinyl
                name="singleVinyl"
                displayName="singleVinyl"
                userId={userId}
              />
            }
          />
          <Route />
          <Route
            path="/currentOrder"
            element={<OrderComponent userId={userId} />}
          />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      ) : (
        <Routes>
          <Route
            path="/singleVinyl/:id"
            element={
              <SingleVinyl name="singleVinyl" displayName="singleVinyl" />
            }
          />
          <Route />
          <Route
            path="/allVinyls"
            element={<AllVinyls name="allVinyls" displayName="All Vinyls" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/*"
            element={
              <>
                <div>
                  <AuthForm name="login" displayName="Login" />
                </div>
                <div>
                  <AllVinyls />
                </div>
              </>
            }
          />
          <Route path="/currentOrder" element={<OrderComponent />} />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
