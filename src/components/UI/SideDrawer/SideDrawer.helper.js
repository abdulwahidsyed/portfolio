import { camelCaseToNormalCase } from "../../../helpers/common.helper";

export const generateThemeOptionsHelper = (obj) => {
  const k = Object.keys(obj).map((el) => {
    return {
      value: el,
      label: camelCaseToNormalCase(el),
      name: el,
    };
  });
  return k;
};
