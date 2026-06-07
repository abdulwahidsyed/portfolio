import { useDispatch } from "react-redux";
import { updateKeyAcheivements } from "../../../redux/inputsSlice/inputs.slice";
import {
  StyledHeadingMedium,
  StyledInputSection,
} from "../../../components/UI/Styled";
import styled from "styled-components";
import { Button } from "../../../components/UI/Button/Button";
import Input from "../../../components/UI/Input/Input";

export const EnterKeyAchievements = ({ ref, inputObj }) => {
  const dispatch = useDispatch();

  console.log("abdul inputObj", inputObj);
  const onChange = (e) => {
    dispatch(updateKeyAcheivements(e.target.value));
  };

  return (
    <Container ref={ref}>
      <StyledFlex>
        <StyledHeadingMedium className="mb-20">
          Key Achievements
        </StyledHeadingMedium>
      </StyledFlex>

      <Input {...inputObj} onChange={onChange} />
    </Container>
  );
};

const Container = styled(StyledInputSection)`
  display: block;
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
