import styled from "styled-components";

import {
  StyledFlexSection,
  StyledHeadingMedium,
  StyledInpBox,
  StyledInputLabel,
  StyledInputSection,
} from "../../../components/UI/Styled";
import { memo } from "react";
import Input from "../../../components/UI/Input/Input";

const BasicFieldsCtn = ({ basicInputs, onChange, basicRef }) => {
  return (
    <StyledCtn ref={basicRef}>
      <StyledHeadingMedium className="mb-20">Basic fields</StyledHeadingMedium>
      <StyledFlexSectionLoc style={{ margin: "0 0 10px 0 " }}>
        {basicInputs.map((input, i) => (
          <StyledInpBoxLoc
            key={input.name}
            isLastChild={i === basicInputs.length - 1}
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
