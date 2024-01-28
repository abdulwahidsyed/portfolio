import styled from "styled-components";
import {
  StyledHeadingMedium,
  StyledInpBox,
  StyledInputLabel,
  StyledInputSection,
  StyledMatrixChild,
  StyledMatrixCtn,
} from "../../../components/UI/Styled";
import { Button } from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";

export const SkillsCtn = ({
  addNewSkillInput,
  inputsMatrix,
  onChange,
  removeSkillInput,
}) => {
  return (
    <Container>
      <StyledFlex>
        <StyledHeadingMedium className="mb-20">Skills</StyledHeadingMedium>
        <Button onClick={addNewSkillInput}>Add New Skill</Button>
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
              <StyledRemoveBtn
                onClick={() => removeSkillInput(i)}
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
