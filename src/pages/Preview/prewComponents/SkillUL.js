import styled from "styled-components";
import { StyledParagraph } from "../../../components/UI/Styled";

export const SkillUL = ({ skillsUsed = [] }) => {
  return (
    <FlexBoxLoc>
      {skillsUsed.map((r) => (
        <StyledParagraph>{r}</StyledParagraph>
      ))}
    </FlexBoxLoc>
  );
};

const FlexBoxLoc = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p {
    margin-top: 6px !important;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;

// harshith (Comm)
// Srinath (Comm)
// Tarun (Comm Not Bad)
