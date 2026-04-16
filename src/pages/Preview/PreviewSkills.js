import styled from "styled-components";
import {
  StyledHeadingMedium,
  StyledParagraph,
  StyledParagraphBold,
} from "../../components/UI/Styled";

export const PreviewSkills = ({ data = [] }) => {
  return (
    <StyledCtn>
      <StyledHeadingMedium>Skills</StyledHeadingMedium>
      {data.map((el) => (
        <StyledBox>
          <StyledParagraphBold>{el.label} :</StyledParagraphBold>
          <StyledParagraph>{el.value}</StyledParagraph>
        </StyledBox>
      ))}
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  padding: 30px 30px 0 30px;
  * {
    color: black;
  }
`;

const StyledBox = styled.div`
  display: flex;
  gap: 4px;
  & p {
    margin: 10px 0;
  }
`;
