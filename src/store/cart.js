import { createSlice } from "@reduxjs/toolkit";

const cartInitialState = {
  items: [],
  totalPrice: 0,
  isCartShown: false,
  cartChanged: false,
};

const updateCartItems = (state, payload, action) => {
  state.cartChanged = true
  const foundItemIndex = state.items.findIndex(
    (item) => item.id === payload.id
  );

  if (foundItemIndex !== -1) {
    const foundItem = state.items[foundItemIndex];
    let quantity = foundItem.quantity + 1;
    if (action === "dec") quantity = foundItem.quantity - 1;

    const itemTotalPrice = foundItem.price * quantity;
    // console.log(itemTotalPrice);

    const updateFoundItem = {
      ...foundItem,
      quantity,
      totalItemPrice: itemTotalPrice,
    };
    state.items[foundItemIndex] = updateFoundItem;

    const updatedTotalPrice = state.items.reduce(
      (total, item) => (total += item.totalItemPrice),
      0
    );

    state.totalPrice = updatedTotalPrice;
    if (itemTotalPrice === 0) {
      state.items.splice(foundItemIndex, 1);
      return;
    }
  } else {
    const tempPrice = payload.price;
    state.items.push({
      ...payload,
      quantity: 1,
      totalItemPrice: tempPrice,
    });
    state.totalPrice += tempPrice;
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: cartInitialState,
  reducers: {
    addItem(state, action) {
      updateCartItems(state, action.payload);
    },

    retrieveCart(state, action) {
      state.items = action.payload.items;
      state.totalPrice = action.payload.totalPrice;
    },

    removeItem(state, action) {
      updateCartItems(state, action.payload, "dec");
    },
    toogleCartShow(state) {
      state.isCartShown = !state.isCartShown;
    },
  },
});

const cartActions = cartSlice.actions;

export { cartActions };
export default cartSlice.reducer;
