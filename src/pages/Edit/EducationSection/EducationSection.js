import styled from "styled-components";
import { Button } from "../../../components/UI/Button/Button";
import {
  StyledHeadingMedium,
  StyledInpBox,
  StyledInputLabel,
  StyledInputSection,
  StyledMatrixChild,
  StyledMatrixCtn,
} from "../../../components/UI/Styled";
import Input from "../../../components/UI/Input/Input";
import { memo } from "react";

const EducationSection = ({
  educationRef,
  addNewEducationSection,
  inputsMatrix,
  onChange,
  removeEducation,
}) => {
  return (
    <Container ref={educationRef}>
      <StyledFlex>
        <StyledHeadingMedium className="mb-20">Education</StyledHeadingMedium>
        <Button onClick={addNewEducationSection}>Add New Education</Button>
      </StyledFlex>

      <StyledMatrixCtn>
        {inputsMatrix.map((inputs, i) => (
          <StyledMatrixChild key={inputs[0].key} newlyAdded={i > 0}>
            {inputs.map((inp) => (
              <StyledInpBox key={inp.name}>
                <StyledInputLabel>{inp.label}</StyledInputLabel>
                <Input {...inp} onChange={(e) => onChange(e, i)} />
              </StyledInpBox>
            ))}
            {i > 0 ? (
              <StyledRemoveBtn onClick={() => removeEducation(i)} variant="red">
                Remove
              </StyledRemoveBtn>
            ) : null}
          </StyledMatrixChild>
        ))}
      </StyledMatrixCtn>
    </Container>
  );
};

export default memo(EducationSection);

const Container = styled(StyledInputSection)`
  display: block;
`;

const StyledRemoveBtn = styled(Button)`
  display: block;
  margin-left: auto;
`;

const StyledFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  > * {
    margin: 0 !important;
  }
`;
