import styled from "styled-components";
import {
  StyledHeadingMedium,
  StyledInputSection,
  StyledMatrixCtn,
} from "../../components/UI/Styled";
import { Button } from "../../components/UI/Button/Button";

export const EditCompanyCtn = ({
  compantRef,
  addNewOrg,
  orgInputs,
  ...props
}) => {
  return (
    <Container ref={compantRef}>
      <StyledFlex>
        <StyledHeadingMedium className="mb-20">
          Organizations
        </StyledHeadingMedium>
        <Button onClick={addNewOrg}>Add New Organization</Button>
      </StyledFlex>

      {/* <StyledMatrixCtn>
        {inputsMatrix.map((inputs, i) => (
          <StyledMatrixChild key={inputs[0].key} newlyAdded={i > 0}>
            {inputs.map((inp) => (
              <Input {...inp} onChange={(e) => onChange(e, i)} />
            ))}
            {i > 0 ? (
              <StyledRemoveBtn onClick={() => removeProject(i)} variant="red">
                Remove
              </StyledRemoveBtn>
            ) : null}
          </StyledMatrixChild>
        ))}
      </StyledMatrixCtn> */}
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

  //   > * {
  //     margin: 0 !important;
  //   }
`;
