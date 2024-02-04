import { createSlice } from "@reduxjs/toolkit";
import { fetchTheme } from "./theme.action";

const initialState = {
  colorTheme: localStorage.getItem("colorTheme") || "light",
  sectionShadowTheme: localStorage.getItem("sectionShadowTheme") || "basic",
  inputShadowTheme: localStorage.getItem("inputShadowTheme") || "basic",

  themeUnused: "dark", // example
  fetchThemeLoading: false, // example
  fetchThemeError: null, // example
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    updateColorTheme: (state, action) => {
      localStorage.setItem("colorTheme", action.payload);
      state.colorTheme = action.payload;
    },
    updateSectionShadowTheme: (state, action) => {
      localStorage.setItem("sectionShadowTheme", action.payload);
      state.sectionShadowTheme = action.payload;
    },
    updateInputShadowTheme: (state, action) => {
      localStorage.setItem("inputShadowTheme", action.payload);
      state.inputShadowTheme = action.payload;
    },
    updateThemeByKey: (state, action) => {
      const { key, value } = action.payload;
      localStorage.setItem(key, value);
      state[key] = value;
    },
    changeTheme: (state, action) => {
      state.themeUnused = action.payload;
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

export const {
  changeTheme,
  updateColorTheme,
  updateSectionShadowTheme,
  updateInputShadowTheme,
  updateThemeByKey,
} = themeSlice.actions;
export default themeSlice.reducer;
