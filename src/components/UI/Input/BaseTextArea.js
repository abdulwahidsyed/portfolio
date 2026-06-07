import styled from "styled-components";
import { StyledInputLabel, StyledTextarea } from "../Styled";
import { Icon } from "../Icon/Icon";

export const BaseTextArea = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  isError,
  typeonChange,
  stylesObj,
  onLabelEdit,
  ...props
}) => {
  return (
    <StyledInpBox key={name} stylesObj={stylesObj}>
      <Label onClick={onLabelEdit}>
        {label} <Icon>edit</Icon>
      </Label>
      <StyledTextarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        type="textarea"
        name={name}
        $isError={isError}
        // cols={props.cols || "1"}
        rows={props.rows || "6"}
        {...props}
      />
    </StyledInpBox>
  );
};

const StyledInpBox = styled.div((props) => ({
  ...props.stylesObj,
  cursor: "pointer",

  ".material-symbols-outlined": {
    fontSize: "16px",
    marginLeft: "4px",
    display: "none",
  },
  "&:hover .material-symbols-outlined": {
    display: "inline-block",
  },
}));
const Label = styled(StyledInputLabel)`
  display: flex;
  align-items: center;
`;
