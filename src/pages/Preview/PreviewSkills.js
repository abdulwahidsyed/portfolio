import styled from "styled-components";
import {
  StyledHeadingMedium,
  StyledParagraph,
  StyledParagraphBold,
} from "../../components/UI/Styled";

export const PreviewSkills = ({ data = [] }) => {
  console.log("Abdul skills data", data);

  return (
    <StyledCtn>
      <StyledHeadingMedium>Skills</StyledHeadingMedium>
      {data.map((el) => (
        <StyledBox>
          <StyledParagraphBoldLoc>{el.label}: </StyledParagraphBoldLoc>
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

const StyledParagraphBoldLoc = styled(StyledParagraphBold)`
  white-space: nowrap;
  display: inline;
  // font-size: 16px;
`;

const StyledBox = styled.div`
  margin: 16px 0;

  & p {
    display: inline;
    line-height: 24px;
  }
`;
