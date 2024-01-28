import styled from "styled-components";

import {
  StyledFlexSection,
  StyledHeadingMedium,
  StyledInputSection,
} from "../../../components/UI/Styled";
import { InputsBasic } from "./InputsBasic";
import { InputsSocial } from "./InputsSocial";

export const BasicFieldsCtn = ({ inputsBasic, inputsSocial, onChange }) => {
  return (
    <StyledCtn>
      <StyledHeadingMedium className="mb-20">Basic fields</StyledHeadingMedium>
      <StyledFlexSection style={{ margin: "0 0 10px 0 " }}>
        <InputsBasic inputs={inputsBasic} onChange={onChange} />
        <InputsSocial inputs={inputsSocial} onChange={onChange} />
      </StyledFlexSection>
    </StyledCtn>
  );
};

const StyledCtn = styled(StyledInputSection)`
  flex-direction: column;
  gap: 0;
`;
