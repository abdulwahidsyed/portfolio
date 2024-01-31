import { combineReducers, configureStore } from "@reduxjs/toolkit";
import theme from "./themeSlice/theme.slice";
import home from "./homeSlice/home.slice";
import master from "./masterSlice/master.slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  theme,
  home,
  master,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // Add other store configurations if needed
});

export const persistor = persistStore(store);
