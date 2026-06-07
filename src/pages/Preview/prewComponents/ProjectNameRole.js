import styled from "styled-components";
import {
  StyledHeadingSmall,
  StyledPGrayaragraphSmall,
} from "../../../components/UI/Styled";

export const ProjectNameRole = ({ project }) => {
  return (
    <StyledFlexPrjName>
      <StyledPGrayaragraphSmallLoc>Project Name</StyledPGrayaragraphSmallLoc>
      <StyledHeadingSmall>{project.projectName}</StyledHeadingSmall>
      <StyledHeadingSmall>{project.role}</StyledHeadingSmall>
    </StyledFlexPrjName>
  );
};

const StyledFlexPrjName = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 30px;
  margin-bottom: 10px;

  & h2 {
    margin: 0 0 0px 0;
  }
`;

const StyledPGrayaragraphSmallLoc = styled(StyledPGrayaragraphSmall)`
  position: absolute;
  top: -14px;
`;
