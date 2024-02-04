import React from "react";
import {
  StyledDatePicker,
  StyledInput,
  StyledTextarea,
} from "../Styled/Input.styled";
import { BulletPointInput } from "./BulletPointInput";
import { Dropdown } from "./Dropdown";

const Input = ({
  name,
  type,
  onChange,
  value,
  placeholder,
  isError = false,
  options = [],
  isDisabled = false,
  ...props
}) => {
  const generateInput = () => {
    switch (type) {
      case "text":
        return (
          <StyledInput
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            name={name}
            $isError={isError}
            {...props}
          />
        );
      case "textarea":
        return (
          <StyledTextarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            type={type}
            name={name}
            $isError={isError}
            // cols={props.cols || "1"}
            rows={props.rows || "6"}
            {...props}
          />
        );
      case "date":
        return (
          <StyledDatePicker
            selected={value}
            minDate={new Date()}
            onChange={(date) => onChange(date)}
            placeholder={placeholder}
            {...props}
          />
        );

      case "bulletPoints":
        return (
          <BulletPointInput
            value={value}
            onChange={onChange}
            name={name}
            type={type}
            {...props}
          />
        );

      case "dropdown":
        return (
          <Dropdown
            value={value}
            onChange={onChange}
            name={name}
            options={options}
            isDisabled={isDisabled}
            {...props}
          />
        );

      default:
        break;
    }
  };
  return <>{generateInput()}</>;
};

export default Input;
