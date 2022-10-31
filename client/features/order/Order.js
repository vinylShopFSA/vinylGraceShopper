import React, { useEffect } from "react";
// import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout, fetchSingleOrder } from "./orderSlice";
import VinylOrderComponent from "./VinylOrder";
import { fetchVinylOrders } from "./vinylOrderSlice";

const OrderComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((state) => state.auth.me);
  const userId = user.id;

  const cart = useSelector((state) => state.order.singleOrder);

  useEffect(() => {
    if (userId) {
      dispatch(fetchSingleOrder(userId));
      dispatch(fetchVinylOrders(userId));
    }
  }, []);

  return (
    <div className="cart__left">
      <div>
        <h3>Shopping Cart</h3>
        {cart && cart.status ? (
          <>
            <p>Order Status: {cart.status}</p>
            <div>
              <div>
                <VinylOrderComponent userId={userId} />
              </div>
              <button
                onClick={async () => {
                  checkout(userId);
                  navigate("/checkout");
                }}
              >
                Checkout
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default OrderComponent;
