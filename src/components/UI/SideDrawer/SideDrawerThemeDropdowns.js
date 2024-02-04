import styled from "styled-components";
import Input from "../Input/Input";
import { StyledInputLabel } from "../Styled";
import { useSelector } from "react-redux";

export const SideDrawerThemeDropdowns = ({
  colorTheme,
  sectionShadowTheme,
  inputShadowTheme,
  onChange,
  options,
}) => {
  // const { colorTheme } = useSelector((st) => st.theme);
  const generateColor = () => {
    switch (colorTheme) {
      case "dark":
        return "white";

      case "light":
        return "black";

      case "silver":
        return "black";

      default:
        return "white";
    }
  };
  const StyledInputLabelLoc = styled(StyledInputLabel)`
    color: ${generateColor()};
  `;

  return (
    <>
      <>
        <StyledInputLabelLoc>Main Theme</StyledInputLabelLoc>
        <Input
          type="dropdown"
          options={options.colorTheme}
          onChange={onChange}
          name="colorTheme"
          value={options.colorTheme.find((el) => el.value === colorTheme)}
        />
      </>

      <>
        <StyledInputLabelLoc>Change Section Shadows</StyledInputLabelLoc>
        <Input
          type="dropdown"
          options={options.sectionShadowTheme}
          onChange={onChange}
          name="sectionShadowTheme"
          value={options.sectionShadowTheme.find(
            (el) => el.value === sectionShadowTheme
          )}
        />
      </>

      <>
        <StyledInputLabelLoc>Change Inputs Shadows</StyledInputLabelLoc>
        <Input
          isDisabled
          type="dropdown"
          options={options.sectionShadowTheme}
          onChange={onChange}
          name="inputShadowTheme"
          value={options.inputShadowTheme.find(
            (el) => el.value === inputShadowTheme
          )}
        />
      </>
    </>
  );
};
