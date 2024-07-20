import { useSelector } from "react-redux";
import { StyledDropdown } from "../Styled";
import { useTheme } from "styled-components";

export const Dropdown = ({ options, onChange, name, isDisabled, value }) => {
  const { colorTheme } = useSelector((st) => st.theme);

  const theme = useTheme();

  const getCustomStyles = (theme) => ({
    control: (baseStyles, state) => {
      return {
        ...baseStyles,
        borderColor: state.isFocused ? "#00a7ff" : theme.inputBorder,
        "&:hover": {
          boxShadow: "rgb(255 255 255 / 51%) 0px 0px 16px",
        },
        borderRadius: "0",
        outline: "none",
        background: theme.inputBackground,
        opacity: state.isDisabled ? 0.5 : 1,
      };
    },
    valueContainer: (provided) => ({
      ...provided,
    }),
    dropdownIndicator: (provided, state) => ({
      ...provided,
      color: "black",
      opacity: state.isDisabled ? 0.5 : 1,
    }),
    input: (provided) => ({
      ...provided,
      margin: "0px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      // color: "white",
      color: theme.inputColor,
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "1.5",
      opacity: state.isDisabled ? 0.5 : 1,
    }),
    option: (provided, state) => {
      return {
        ...provided,
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "1.5",
        color: theme.inputColor,
        backgroundColor: state.isSelected
          ? theme.dropdownOptionSelectedBG
          : state.isFocused
          ? theme.dropdownOptionHoverBG
          : theme.dropdownOptionBG,
      };
    },
    menu: (provided) => ({
      ...provided,
      backgroundColor: "#ffffff40",
      backdropFilter: "blur(8px)",
      borderRadius: "none",
    }),
    placeholder: (provided) => ({
      ...provided,
      color: "white",
      fontSize: "14px",
      fontWeight: "400",
      lineHeight: "1.5",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      height: "28px",
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "31px",
      maxHeight: "31px",
      minHeight: "31px",
    }),
  });

  const customStyles = getCustomStyles(theme);

  return (
    <StyledDropdown
      className="basic-single"
      classNamePrefix="select"
      //   defaultValue={colourOptions[0]}
      isDisabled={isDisabled}
      //   isLoading={isLoading}
      // isClearable={true}
      //   isRtl={isRtl}

      isSearchable={true}
      name={name}
      options={options}
      onChange={onChange}
      value={value}
      styles={customStyles}
    />
  );
};
