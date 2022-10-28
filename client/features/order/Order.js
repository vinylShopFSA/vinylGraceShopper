import React, { useEffect } from "react";
// import CartItem from "./CartItem";

import { useDispatch, useSelector } from "react-redux";
import { fetchSingleOrder } from "./orderSlice";
import VinylOrderComponent from "./VinylOrder";

const OrderComponent = () => {
  const dispatch = useDispatch();

  //place holder dummy data
  const currentCartId = 1;

  const cart = useSelector((state) => {
    console.log(state);
    return state.order.singleOrder;
  });

  useEffect(() => {
    dispatch(fetchSingleOrder(currentCartId));
  }, []);

  console.log("cart", cart);
  return (
    <div className="cart__left">
      <div>
        <h3>Shopping Cart</h3>
        {
          <>
            {cart && cart.status ? (
              <>
                <p>Order Status: {cart.status}</p>
                <div>
                  {/* <ul>
                    {cart.vinylOrders?.map((item) => (
                      <li key={item.VinylId}>
                        <p>vinylid: {item.VinylId}</p>
                      </li>
                    ))}
                  </ul> */}
                  <div>
                    <VinylOrderComponent cartId={cart.id} />
                  </div>
                </div>
              </>
            ) : null}
          </>
        }
      </div>
    </div>
  );
};

export default OrderComponent;
