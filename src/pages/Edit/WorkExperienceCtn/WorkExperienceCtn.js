import styled from "styled-components";
import { Button } from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import {
  StyledHeadingMedium,
  StyledInpBox,
  StyledInputLabel,
  StyledInputSection,
  StyledMatrixChild,
  StyledMatrixCtn,
} from "../../../components/UI/Styled";
import { memo } from "react";

const WorkExperienceCtn = ({
  workExpRef,
  addWorkExperience,
  removeWorkExperience,
  onChange,
  inputsMatrix,
}) => {
  return (
    <Container ref={workExpRef}>
      <StyledFlex>
        <StyledHeadingMedium className="mb-20">
          Work Experience{" "}
        </StyledHeadingMedium>
        <Button onClick={addWorkExperience}>Add New Work Experience</Button>
      </StyledFlex>

      <StyledMatrixCtn>
        {inputsMatrix.map((inputs, i) => (
          <StyledMatrixChild newlyAdded={i > 0}>
            {inputs.map((inp) => (
              <StyledInpBox key={inp.name}>
                <StyledInputLabel>{inp.label}</StyledInputLabel>
                <Input
                  {...inp}
                  onChange={(e, ...rest) => onChange(e, i, ...rest)}
                />
              </StyledInpBox>
            ))}
            {i > 0 ? (
              <StyledRemoveBtn
                onClick={() => removeWorkExperience(i)}
                variant="red"
              >
                Remove
              </StyledRemoveBtn>
            ) : null}
          </StyledMatrixChild>
        ))}
      </StyledMatrixCtn>
    </Container>
  );
};

export default memo(WorkExperienceCtn);

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
