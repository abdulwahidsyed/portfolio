import { configureStore } from "@reduxjs/toolkit";
import theme from "./themeSlice/theme.slice";
import inputs from "./inputsSlice/inputs.slice";
import master from "./masterSlice/master.slice";

export const store = configureStore({
  reducer: {
    theme,
    inputs,
    master,
  },
});
