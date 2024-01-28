import { configureStore } from "@reduxjs/toolkit";
import theme from "./themeSlice/theme.slice";
import home from "./homeSlice/home.slice";

export const store = configureStore({
  reducer: {
    theme,
    home,
  },
});
