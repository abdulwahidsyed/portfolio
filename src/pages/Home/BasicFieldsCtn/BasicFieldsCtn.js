import styled from "styled-components";

import {
  StyledFlexSection,
  StyledHeadingMedium,
  StyledInpBox,
  StyledInputLabel,
  StyledInputSection,
} from "../../../components/UI/Styled";
import { InputsBasic } from "./InputsBasic";
import { memo } from "react";
import Input from "../../../components/UI/Input/Input";

const BasicFieldsCtn = ({ inputsBasic, onChange, basicRef }) => {
  return (
    <StyledCtn ref={basicRef}>
      <StyledHeadingMedium className="mb-20">Basic fields</StyledHeadingMedium>
      <StyledFlexSectionLoc style={{ margin: "0 0 10px 0 " }}>
        {/* <InputsBasic inputs={inputsBasic} onChange={onChange} /> */}
        {inputsBasic.map((input, i) => (
          <StyledInpBoxLoc
            key={input.name}
            isLastChild={i == inputsBasic.length - 1}
          >
            <StyledInputLabel>{input.label}</StyledInputLabel>
            <Input {...input} onChange={onChange} />
          </StyledInpBoxLoc>
        ))}
      </StyledFlexSectionLoc>
    </StyledCtn>
  );
};

export default memo(BasicFieldsCtn);

const StyledCtn = styled(StyledInputSection)`
  flex-direction: column;
  gap: 0;
`;

const StyledFlexSectionLoc = styled(StyledFlexSection)`
  margin: 0 0 10px 0;
  flex-wrap: wrap;
  row-gap: 0;
`;

const StyledInpBoxLoc = styled(StyledInpBox)`
  flex-basis: ${(props) => (props.isLastChild ? "100%" : "calc(50% - 20px)")};
`;
