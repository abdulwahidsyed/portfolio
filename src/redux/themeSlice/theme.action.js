import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchThemeAPI } from "../../API/theme.api";

export const fetchTheme = createAsyncThunk("theme/fetchTheme", fetchThemeAPI);
