import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import AllVinyls from "../features/vinyl/AllVinyl";
import SingleVinyl from "../features/vinyl/SingleVinyl";
import { me } from "./store";

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route to="/home" element={<Home />} />
        </Routes>
      ) : (
        <Routes>
             <Route
            path="/singleVinyl/:id"
            element={<SingleVinyl name="singleVinyl" displayName="singleVinyl" />}
          />
          <Route/>
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
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
