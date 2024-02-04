import styled from "styled-components";
import {
  StyledBox,
  StyledHeading,
  StyledHeadingMedium,
  StyledParagraph,
  StyledParagraphBold,
} from "../../components/UI/Styled";

export const EducationGenerator = ({ data = [] }) => {
  if (!data.length) return;
  return (
    <StyledCtn>
      <StyledHeadingMedium>Education</StyledHeadingMedium>
      <StyledFlex>
        {data.map((el) => (
          <StyledBoxLoc>
            <StyledParagraphBold>{el.education}</StyledParagraphBold>
            <StyledParagraph>{el.duration}</StyledParagraph>
            <StyledParagraph>{el.collegeName}</StyledParagraph>
            <StyledParagraph>{el.collegeAddress}</StyledParagraph>
            <StyledParagraph>{el.percentage}</StyledParagraph>
          </StyledBoxLoc>
        ))}
      </StyledFlex>
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  padding: 30px;
  * {
    color: black;
  }
`;

const StyledBoxLoc = styled(StyledBox)`
  border: none;
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: left;
  gap: 20px;
  flex-wrap: wrap;

  & p {
    margin-bottom: 2px;
  }

  & p:nth-child(1) {
    margin-top: 0px;
  }
`;
