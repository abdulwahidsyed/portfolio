import styled from "styled-components";
import { StyledInput, StyledInputLabel } from "../Styled";
import { Icon } from "../Icon/Icon";

export const BaseInput = ({
  onChange,
  onLabelEdit,
  stylesObj,
  isError,
  ...inp
}) => {
  return (
    <StyledInpBox key={inp.name} stylesObj={stylesObj}>
      <Label onClick={onLabelEdit}>
        {inp.label} <Icon>edit</Icon>
      </Label>

      <StyledInput {...inp} onChange={onChange} />
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
