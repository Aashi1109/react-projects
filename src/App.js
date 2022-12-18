import { Fragment, useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import useSelDis from "./hooks/useSelDis";
import useHTTP from "./hooks/use-http";

import Notification from "./components/UI/Notification";
import { fetchCartData, sendCartData } from "./store/cart-action-creators";

let isInitial = true;

function App() {
  // const showCart = useSelector((state) => state.cart.isCartShown);
  // const dispatch = useDispatch();

  const [showCart] = useSelDis("cart", "isCartShown");
  const [notification, _] = useSelDis("ui", "notification");
  const [cart, dispatchCart] = useSelDis("cart", [
    "items",
    "totalPrice",
    "cartChanged",
  ]);

  useEffect(() => {
    dispatchCart(fetchCartData());
  }, [dispatchCart]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.cartChanged)
      dispatchCart(
        sendCartData({ items: cart.items, totalPrice: cart.totalPrice })
      );
  }, [cart, dispatchCart]);

  // console.log(cart);
  return (
    <Fragment>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
