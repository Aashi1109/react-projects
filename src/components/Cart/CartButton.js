import { cartActions } from "../../store/cart";
import classes from "./CartButton.module.css";
import useSelDis from "../../hooks/useSelDis";

const CartButton = (props) => {
  const [items, dispatch] = useSelDis("cart", "items");
  const btnClickHandler = () => dispatch(cartActions.toogleCartShow());
  const totalCartItems = items.length
  // console.log(totalCartItems)
  return (
    <button className={classes.button} onClick={btnClickHandler}>
      <span>My Cart</span>
      {totalCartItems && <span className={classes.badge}>{totalCartItems}</span>}
    </button>
  );
};

export default CartButton;
