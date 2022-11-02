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
  const vinylOrder = useSelector((state) => state.vinylOrder);

  let subtotal = 0;

  const sum = () => {
    vinylOrder?.map(({ Vinyl, quantity }) => {
      quantity *= Vinyl.price;
      subtotal += quantity;
    });
    return subtotal;
  };

  useEffect(() => {
    if (userId) {
      dispatch(fetchSingleOrder());
      dispatch(fetchVinylOrders());
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
              <div>
                <div>
                  <p>Here is your total: ${sum()}</p>
                </div>
              </div>
              <button
                onClick={async () => {
                  dispatch(checkout(cart.id));
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
