import {
  StyledInpBox,
  StyledInputLabel,
  StyledSubInputCtn,
} from "../../../components/UI/Styled";
import Input from "../../../components/UI/Input/Input";

export const InputsSocial = ({ inputs, onChange }) => {
  return (
    <StyledSubInputCtn>
      {inputs.map((input) => (
        <StyledInpBox key={input.name}>
          <StyledInputLabel>{input.label}</StyledInputLabel>
          <Input {...input} onChange={(e) => onChange(e, "inputsSocial")} />
        </StyledInpBox>
      ))}
    </StyledSubInputCtn>
  );
};
