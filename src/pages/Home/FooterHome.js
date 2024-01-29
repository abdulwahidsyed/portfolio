import styled from "styled-components";
import { StyledParagraph, StyledFooter } from "../../components/UI/Styled";

export const FooterHome = ({ onClick, selected }) => {
  const items = {
    0: "Basic fields",
    1: "Skills",
    2: "Projects",
    3: "Work Experience",
    4: "Education",
  };
  console.log("my ref", items[selected]);

  return (
    <Ctn>
      {Object.keys(items).map((el, i) => (
        <StyledParagraphLoc
          onClick={() => onClick(el)}
          selected={el == selected}
        >
          {items[el]}
        </StyledParagraphLoc>
      ))}
    </Ctn>
  );
};

const Ctn = styled(StyledFooter)`
  display: flex;
  gap: 40px;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const StyledParagraphLoc = styled(StyledParagraph)`
  color: white;
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.1, 1.1);
  white-space: nowrap;

  transform: ${(props) => {
    if (props.selected) {
      return "scale(1.4)";
    } else if (props.secondary) {
      return "scale(1.2)";
    } else return "unset";
  }};

  ${mobile`
   font-size: 14px;
  `}
`;
