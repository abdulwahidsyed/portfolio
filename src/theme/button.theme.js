import { commonTheme } from "./common.theme";
const { commonDangerBtnBorder } = commonTheme;

export const buttonTheme = {
  dark: {
    commonDangerBtnBorder,
    buttonColor: "white",
    buttonBorder: "1px solid black",
    buttonHoverOutline: "1px solid black",
    buttonBackground:
      "linear-gradient(48deg, rgb(30 30 30) 0%, rgb(255 255 255 / 16%) 100%)",
    buttonBackgroundHover:
      "linear-gradient(351deg, rgb(66 63 63 / 39%) 0%, rgb(255 255 255 / 16%) 100%)",
    // need to change
    boxShadowButton: "6px 4px 6px 1px rgb(0 0 0)",
    boxShadowButtonHover: "0 0px 0px 1px rgb(0 0 0 / 30%)",

    dangerBtnColor: "black",
    dangerBtnBorder: "none",
    dangerButtonBackground: "linear-gradient(45deg, #ff000045, transparent)",
    dangerBtnShadowHover: "0px 0px 4px 1px rgb(166 0 0)",
    dangerBtnShadow: "0px 0px 0px 1px rgb(166 0 0)",

    smallCloseButtonBG: "black",
    smallCloseButtonColor: "white",
    smallCloseButtonShadow: "rgb(255 255 255 / 20%) 0px 0px 9px 2px",
  },
  light: {
    commonDangerBtnBorder,
    buttonColor: "black",
    buttonBorder: "1px solid white",
    buttonHoverOutline: "1px solid white",
    buttonBackground:
      "linear-gradient(48deg, rgb(255 255 255 / 0%) 0%, rgba(255,255,255,1) 100%)",
    buttonBackgroundHover:
      "linear-gradient(311deg, rgb(30 30 30 / 26%) 0%,rgba(255, 255, 255, 1) 100%)",
    // "linear-gradient(311deg, rgb(30 30 30 / 26%) 0%,rgba(255, 255, 255, 1) 100%)",
    boxShadowButton: "12px 10px 6px 1px rgba(0, 0, 0, 0.44)",
    boxShadowButtonHover: "rgb(255 255 255 / 51%) 0px 0px 16px",

    dangerBtnColor: "black",
    dangerBtnBorder: "none",
    dangerButtonBackground: "linear-gradient(45deg, #ff000045, transparent)",
    dangerBtnShadowHover: "0px 0px 4px 1px rgb(166 0 0)",
    dangerBtnShadow: "0px 0px 0px 1px rgb(166 0 0)",

    smallCloseButtonBG: "white",
    smallCloseButtonColor: "black",
    smallCloseButtonShadow:
      "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
  },
  silver: {
    commonDangerBtnBorder,
    buttonColor: "black",
    buttonBorder: "1px solid white",
    buttonHoverOutline: "1px solid white",
    buttonBackground:
      "linear-gradient(48deg, rgb(30 30 30 / 26%) 0%, rgba(255,255,255,1) 100%)",
    buttonBackgroundHover:
      "linear-gradient(311deg,rgb(30 30 30 / 53%) 0%,rgba(255, 255, 255, 1) 100%)",
    // "linear-gradient(to right bottom,rgba(225, 225, 225, 0.4),rgba(225, 225, 225, 0))",
    boxShadowButton: "12px 10px 6px 1px rgba(0, 0, 0, 0.44)",
    boxShadowButtonHover: "rgb(255 255 255 / 51%) 0px 0px 16px",

    dangerBtnColor: "black",
    dangerBtnBorder: "none",
    dangerButtonBackground: "linear-gradient(45deg, #ff000045, transparent)",
    dangerBtnShadowHover: "0px 0px 4px 1px rgb(166 0 0)",
    dangerBtnShadow: "0px 0px 0px 1px rgb(166 0 0)",

    smallCloseButtonBG: "white",
    smallCloseButtonColor: "black",
    smallCloseButtonShadow: "rgba(0, 0, 0, 0.24) 0px 0px 9px 2px",
  },
};
