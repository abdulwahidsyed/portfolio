import React from "react";
import { StyledDatePicker } from "./Input.styled";
import { BulletPointInput } from "./BulletPointInput";
import { Dropdown } from "./Dropdown";
import { BaseInput } from "./BaseInput";
import { BaseTextArea } from "./BaseTextArea";

const Input = (props) => {
  const {
    name,
    type,
    onChange,
    value,
    placeholder,
    options = [],
    isDisabled = false,
  } = props;

  const generateInput = () => {
    switch (type) {
      case "text":
        return <BaseInput {...props} />;
      case "textarea":
        return <BaseTextArea {...props} />;
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
