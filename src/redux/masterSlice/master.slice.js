import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showSideDrawer: false,
  showBackdrop: false,
};

const masterSlice = createSlice({
  name: "master",
  initialState,
  reducers: {
    changeSideDrawer: (state, action) => {
      state.showSideDrawer = action.payload;
    },
    changeBackdrop: (state, action) => {
      state.showBackdrop = action.payload;
    },
  },
});

export const { changeSideDrawer, changeBackdrop } = masterSlice.actions;
export default masterSlice.reducer;
