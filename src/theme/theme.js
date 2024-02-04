import { buttonTheme } from "./button.theme";
import { textColorTheme } from "./textColor.theme";
import { inputTheme } from "./input.theme";
import { section } from "./section.theme";

export const colorTheme = {
  dark: {
    sideDrawerBgColor: "black",
    appBackground: "black",

    ...textColorTheme.dark,
    ...buttonTheme.dark,
    ...inputTheme.dark,
    ...section.dark,
  },
  light: {
    sideDrawerBgColor: "white",
    appBackground: "white",

    ...textColorTheme.light,
    ...buttonTheme.light,
    ...inputTheme.light,
    ...section.light,
  },
  silver: {
    sideDrawerBgColor: "white",
    appBackground: "#c0c0c0",

    ...textColorTheme.silver,
    ...buttonTheme.silver,
    ...inputTheme.silver,
    ...section.silver,
  },
};

export const sectionShadowTheme = {
  basic: {
    sectionBoxShadow: "9px 8px 4px 1px rgba(0, 0, 0, 0.44)",
  },
  basic2: {
    sectionBoxShadow: "4.0px 8.0px 8.0px rgba(0,0,0,0.38)",
  },
  light: {
    sectionBoxShadow: "0 8px 30px rgb(0,0,0,0.12)",
  },
  veryLight: {
    sectionBoxShadow: "0 25px 50px -12px #3b82f620",
  },
  blue: {
    sectionBoxShadow: "0 20px 50px rgba(8, 112, 184, 0.7)",
  },
  lightBlue: {
    sectionBoxShadow:
      "-10px -10px 30px 4px rgba(0,0,0,0.1), 10px 10px 30px 4px rgba(45,78,255,0.15)",
  },
  boxy: {
    sectionBoxShadow:
      "10px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
  },
  thin: {
    sectionBoxShadow:
      "rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px",
  },
  subtle: { sectionBoxShadow: "rgba(0, 0, 0, 0.2) 0px 60px 40px -7px" },
  hardLine: {
    sectionBoxShadow:
      "rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset",
  },
};

export const inputShadowTheme = {
  basic: {
    inputBoxShadow: "10px 10px 6px 1px rgba(0, 0, 0, 0.44)",
  },
  boxy: {
    inputBoxShadow:
      "10px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
  },
};
