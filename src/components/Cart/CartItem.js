import useSelDis from '../../hooks/useSelDis';
import cart, { cartActions } from '../../store/cart';
import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  const [_, dispatch] = useSelDis('cart')
  const increaseItemHandler = () =>{
    dispatch(cartActions.addItem({id}))
  }

  const decreaseItemHandler= () => {
    dispatch(cartActions.removeItem({id}))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={decreaseItemHandler}>-</button>
          <button onClick={increaseItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
