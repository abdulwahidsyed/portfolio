import { commonTheme } from "./common.theme";

const {
  commonDangerInputBorder,
  commonInputErrorBorder,
  commonDangerInputPlaceholderColor,
} = commonTheme;

export const inputTheme = {
  dark: {
    commonDangerInputBorder,
    commonDangerInputPlaceholderColor,

    inputColor: "black",
    inputBackground: "white",
    inputIsDisabled: "gray",
    inputBorder: "1px solid black",
    inputPlaceholderColor: "#454444",
    inputLabelColor: "black",

    dropdownOptionBG: "#ffffff",
    dropdownOptionSelectedBG: "#454444",
    dropdownOptionHoverBG: "#d5d5d5",

    commonInputErrorBorder,
  },
  light: {
    commonDangerInputBorder,
    commonDangerInputPlaceholderColor,

    inputColor: "black",
    inputBorder: "1px solid #ffffff",
    inputPlaceholderColor: "black",
    inputLabelColor: "black",

    dropdownOptionBG: "#ffffff",
    dropdownOptionSelectedBG: "#adadad",
    dropdownOptionHoverBG: "#d5d5d5",

    commonInputErrorBorder,
  },
  silver: {
    commonDangerInputBorder,
    commonDangerInputPlaceholderColor,

    inputColor: "#474747",
    inputBorder: "1px solid white",
    inputPlaceholderColor: "#b0b0b0",
    inputLabelColor: "white",

    dropdownOptionBG: "#ffffff",
    dropdownOptionSelectedBG: "#adadad",
    dropdownOptionHoverBG: "#d5d5d5",

    commonInputErrorBorder,
  },
};
