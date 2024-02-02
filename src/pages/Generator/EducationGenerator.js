import styled from "styled-components";
import {
  StyledBox,
  StyledHeading,
  StyledParagraph,
  StyledParagraphBold,
} from "../../components/UI/Styled";

export const EducationGenerator = ({ data = [] }) => {
  if (!data.length) return;
  return (
    <StyledCtn>
      <StyledHeading>Education</StyledHeading>
      <StyledFlex>
        {data.map((el) => (
          <StyledBox>
            <StyledParagraphBold>{el.education}</StyledParagraphBold>
            <StyledParagraph>{el.duration}</StyledParagraph>
            <StyledParagraph>{el.collegeName}</StyledParagraph>
            <StyledParagraph>{el.collegeAddress}</StyledParagraph>
            <StyledParagraph>{el.percentage}</StyledParagraph>
          </StyledBox>
        ))}
      </StyledFlex>
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  padding: 30px;
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
