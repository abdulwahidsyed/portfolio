import styled from "styled-components";
import {
  StyledHeading,
  StyledParagraph,
  StyledParagraphBold,
} from "../../components/UI/Styled";

export const EducationGenerator = ({ data }) => {
  return (
    <StyledCtn>
      <StyledHeading>Education</StyledHeading>
      {data.map((el) => (
        <StyledBox>
          <StyledFlex>
            <StyledParagraphBold>{el.education}</StyledParagraphBold>
            <StyledParagraph>{el.duration}</StyledParagraph>
          </StyledFlex>

          <StyledParagraph>{el.collegeName}</StyledParagraph>
          <StyledParagraph>{el.collegeAddress}</StyledParagraph>
        </StyledBox>
      ))}
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  padding: 30px;
`;
const StyledBox = styled.div`
  margin-bottom: 40px;
`;
const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;

  & p {
    margin-bottom: 2px;
  }
`;
