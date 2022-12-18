import { createSlice } from "@reduxjs/toolkit";

const initialUIState = {
  notification: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialUIState,
  reducers: {
    setNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        status: action.payload.status,
        message: action.payload.message,
      };
    },
  },
});

const uiActions = uiSlice.actions;

export { uiActions };

export default uiSlice.reducer;
