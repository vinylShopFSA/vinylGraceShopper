import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { me } from "./store";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import AllVinyls from "../features/vinyl/AllVinyl";
import SingleVinyl from "../features/vinyl/SingleVinyl";
<<<<<<< HEAD
import CartComponent from "../features/cart/Cart";
import UserProfile from "../features/user/userProfile";
import ViewUser from "../features/admin/ViewUsers";
import AddRecord from "../features/admin/AddRecord";

=======
import { me } from "./store";
import OrderComponent from "../features/order/Order";
import Checkout from "../features/order/Checkout";
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const user = useSelector((state) => state.auth.me);
  const userId = user.id;

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const isAdmin = useSelector((state) => !!state.auth.me.isAdmin)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
        <Routes>
<<<<<<< HEAD
        <Route
            path="/allVinyls"
            element={<AllVinyls onAdd={onAdd} onRemove={onRemove}name="allVinyls" displayName="All Vinyls" />}
          />
          {/* <div>
                  <AllVinyls onAdd={onAdd} onRemove={onRemove} />
                </div> */}
           <Route
=======
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
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29
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
<<<<<<< HEAD
          <Route path="/cart" element={<CartComponent />} />
=======
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
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
<<<<<<< HEAD
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
     
=======
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
>>>>>>> 7adb85ff2c272cee892836ea2e1c0d2eb3828a29
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
