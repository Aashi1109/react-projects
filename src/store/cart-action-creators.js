import { cartActions } from "./cart";
import { uiActions } from "./ui";

const sendCartData = (cart) => async (dispatch) => {
  //   const [isLoading, error, sendRequest] = useHTTP();

  //   sendRequest(
  //     {
  //       url: "https://react-reduxjs-default-rtdb.firebaseio.com/cart.json",
  //       method: "PUT",
  //       body: JSON.stringify(cart),
  //     },
  //     (resp) => console.log(resp)
  //   );

  //   console.log(isLoading)
  dispatch(
    uiActions.setNotification({
      status: "pending",
      title: "Sending...",
      message: "Sending cart data",
    })
  );

  const sendRequest = async () => {
    const response = await fetch(
      "https://react-reduxjs-default-rtdb.firebaseio.com/cart.json",
      { method: "PUT", body: JSON.stringify(cart) }
    );

    if (!response.ok) throw new Error("Failed sending data");
  };

  try {
    await sendRequest();
    dispatch(
      uiActions.setNotification({
        status: "success",
        title: "Success!",
        message: "Successfully send cart data",
      })
    );
  } catch (error) {
    dispatch(
      uiActions.setNotification({
        status: "error",
        title: "Error!",
        message: "Error sending cart data",
      })
    );
  }
};

const fetchCartData = () => async (dispatch) => {
  dispatch(
    uiActions.setNotification({
      status: "pending",
      title: "Fetching...",
      message: "Fetching cart data",
    })
  );

  const sendRequest = async () => {
    const response = await fetch(
      "https://react-reduxjs-default-rtdb.firebaseio.com/cart.json",
    );

    if (!response.ok) throw new Error("Failed fetching data");

    const data = await response.json()
    return data
  };

  try {
    const cartData = await sendRequest();

    dispatch(cartActions.retrieveCart(cartData))
    // dispatch(
    //   uiActions.setNotification({
    //     status: "success",
    //     title: "Success!",
    //     message: "Successfully fetched cart data",
    //   })
    // );
  } catch (error) {
    console.log(error)
    dispatch(
      uiActions.setNotification({
        status: "error",
        title: "Error!",
        message: "Error fetching cart data",
      })
    );
  }
};

export { sendCartData, fetchCartData };
