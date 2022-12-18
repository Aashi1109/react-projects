import useSelDis from "../../hooks/useSelDis";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const [{ items: cartItems, totalPrice }, _] = useSelDis("cart", [
    "items",
    "totalPrice",
  ]);

  // console.log(cartItems, totalPrice)
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {cartItems?.map((item) => (
          <CartItem
            key={item.id}
            item={{
              id: item.id,
              title: item.title,
              quantity: item.quantity,
              total: item.totalItemPrice,
              price: item.price,
            }}
          />
        ))}
        {/* <CartItem
          item={{ title: "Test Item", quantity: 3, total: 18, price: 6 }}
        /> */}
        {!cartItems.length && <p>No cart item found</p>}
      </ul>
      <h2 className={classes.total}>
        <span>Total</span>
        <span>${totalPrice}</span>
      </h2>
    </Card>
  );
};

export default Cart;
