import styled from "styled-components";
import {
  StyledHeadingMedium,
  StyledInpBox,
  StyledInputLabel,
  StyledInputSection,
} from "../../../components/UI/Styled";
import { Button } from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { addNewSkillField } from "../../../redux/inputsSlice/inputs.slice";

export const SkillsCtn = ({ skillsRef, inputsMatrix, onChange }) => {
  const dispatch = useDispatch();

  const addNewSkillInput = () => {
    dispatch(addNewSkillField());
  };

  return (
    <Container ref={skillsRef}>
      <StyledFlex>
        <StyledHeadingMedium className="mb-20">Skills</StyledHeadingMedium>
      </StyledFlex>

      {inputsMatrix.map((inp, i) => (
        <Input {...inp} onChange={(e) => onChange(e, i)} />
      ))}
      <BtnLoc onClick={addNewSkillInput}>Add New Skill</BtnLoc>
    </Container>
  );
};

export default memo(SkillsCtn);

const Container = styled(StyledInputSection)`
  display: block;
`;

const BtnLoc = styled(Button)`
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
