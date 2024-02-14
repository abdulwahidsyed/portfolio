import styled from "styled-components";
import {
  StyledHeading,
  StyledHeadingMedium,
  StyledHeadingSmall,
  StyledParagraph,
  StyledParagraphBold,
  StyledSection,
} from "../../components/UI/Styled";

export const ProjectGenerator = ({ data = [] }) => {
  if (!data.length) return;

  return (
    <StyledCtn>
      <StyledHeadingMedium>Projects</StyledHeadingMedium>
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
          <StyledPDBox>
            {el.projectDescription.map((desc) => (
              <StyledParagraph>{desc}</StyledParagraph>
            ))}
          </StyledPDBox>
          <StyledParagraphBold style={{ marginTop: "26px" }}>
            Skills used
          </StyledParagraphBold>
          <StyledUL>
            {el.skillsUsed.map((r) => (
              <StyledLI>
                <StyledParagraph>{r}</StyledParagraph>
              </StyledLI>
            ))}
          </StyledUL>
          <StyledParagraphBold style={{ marginTop: "26px" }}>
            Roles & Responsibilities
          </StyledParagraphBold>
          <StyledUL>
            {el.rolesAndResponsibilities.map((r) => (
              <StyledLI>
                <StyledParagraph>{r}</StyledParagraph>
              </StyledLI>
            ))}
          </StyledUL>
        </StyledSectionLoc>
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

const StyledSectionLoc = styled(StyledSection)`
  margin-bottom: 40px;
  border: none;
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;

  & h2 {
    margin: 0 0 0px 0;
  }
`;

const StyledUL = styled.ul`
  padding-left: 16px;
  margin-top: 10px;
`;
const StyledLI = styled.li`
  margin: 4px 0;
`;

const StyledPDBox = styled.div`
  margin-top: 10px;
`;
