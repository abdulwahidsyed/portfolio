import styled from "styled-components";
import {
  StyledHeading,
  StyledHeadingMedium,
  StyledHeadingSmall,
  StyledParagraph,
  StyledParagraphBold,
  StyledParagraphGray,
  StyledSection,
} from "../../components/UI/Styled";

export const ProjectGenerator = ({ data = [] }) => {
  if (!data.length) return;

  return (
    <StyledCtn>
      <StyledHeading>Projects</StyledHeading>
      {data.map((el) => (
        <StyledSectionLoc>
          <StyledFlex>
            <StyledHeadingSmall>{el.projectName}</StyledHeadingSmall>
            <StyledHeadingSmall>{el.role}</StyledHeadingSmall>
          </StyledFlex>
          <StyledFlex>
            <StyledParagraphBold>{el.companyName}</StyledParagraphBold>
            <StyledParagraphBold>{el.projectDuration}</StyledParagraphBold>
          </StyledFlex>
          <StyledParagraph>{el.projectDescription}</StyledParagraph>
        </StyledSectionLoc>
      ))}
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  padding: 30px 30px 0 30px;
`;

const StyledSectionLoc = styled(StyledSection)`
  margin-bottom: 20px;
  box-shadow: none;
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;

  & h2 {
    margin: 0 0 0px 0;
  }
`;
