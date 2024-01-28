import { createSlice } from "@reduxjs/toolkit";
import { fetchTheme } from "./theme.action";

const initialState = {
  theme: "light",
  fetchThemeLoading: false,
  fetchThemeError: null,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      state.theme = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTheme.pending, (state) => {
        state.fetchThemeLoading = true;
      })
      .addCase(fetchTheme.fulfilled, (state, action) => {
        state.fetchThemeLoading = false;
        state.fetchThemeError = null;
        state.theme = action.payload;
      })
      .addCase(fetchTheme.rejected, (state) => {
        state.fetchThemeLoading = false;
        state.fetchThemeError = null;
      });
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
