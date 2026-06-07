import styled from "styled-components";
import { StyledParagraphBold } from "../../../components/UI/Styled";

export const SectionTitle = ({ title, children, show, inline }) => {
  if (!show) return null;

  if (inline) {
    return (
      <FlexBoxLoc>
        <StyledParagraphBold
          style={{ marginTop: "26px", marginBottom: "10px" }}
        >
          {title}
        </StyledParagraphBold>
        <p>: </p>
        {children}
      </FlexBoxLoc>
    );
  }

  return (
    <>
      <Txt>{title}</Txt>
      {children}
    </>
  );
};

const Txt = styled(StyledParagraphBold)`
  margin-top: 26px;
  margin-bottom: 0px;
`;

const FlexBoxLoc = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  p,
  a {
    margin-top: 6px !important;
    margin-bottom: 10px;
    font-size: 14px;
  }
`;
