import { useSelector } from "react-redux";
import { colorTheme, sectionShadowTheme, inputShadowTheme } from "./theme";
import { useMemo } from "react";

export const useThemes = () => {
  const {
    colorTheme: selectedColorTheme,
    sectionShadowTheme: selectedSectionShadowTheme,
    inputShadowTheme: selectedInputShadowTheme,
  } = useSelector((st) => st.theme);

  const combinedTheme = useMemo(() => {
    return {
      ...colorTheme[selectedColorTheme],
      ...sectionShadowTheme[selectedSectionShadowTheme],
      ...inputShadowTheme[selectedInputShadowTheme],
    };
  }, [
    selectedColorTheme,
    selectedSectionShadowTheme,
    selectedInputShadowTheme,
  ]);

  return combinedTheme;
};
