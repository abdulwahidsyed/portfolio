import styled from "styled-components";
import { StyledParagraph, StyledFooter } from "../../components/UI/Styled";
import { mobile } from "../../components/UI/Styled/media-queries";
import { StyledButton } from "../../components/UI/Styled/Button.styled";

export const FooterHome = ({ onClick, selected }) => {
  const items = {
    0: "Basic fields",
    1: "Skills",
    2: "Projects",
    3: "Work Experience",
    4: "Education",
  };

  return (
    <Ctn>
      <StyledFlexed>
        {Object.keys(items).map((el, i) => (
          <StyledParagraphLoc
            onClick={() => onClick(el)}
            selected={el == selected}
          >
            {items[el]}
          </StyledParagraphLoc>
        ))}
      </StyledFlexed>
    </Ctn>
  );
};

const Ctn = styled(StyledFooter)`
  overflow: auto;
  box-sizing: border-box;
`;

const StyledFlexed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: auto;
  gap: 20px;
`;

const StyledParagraphLoc = styled(StyledParagraph)`
  color: ${(props) => (props.selected ? "rgb(129 200 255);" : "white")};
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.1, 1.1);
  white-space: nowrap;
  padding: 2px 20px;
  margin: 0;

  transform: ${(props) => (props.selected ? "scale(1.4)" : "unset")};

  ${mobile`
    font-size: 14px;
  `}

  &:hover {
    background: ${(props) =>
      props.selected ? "unset" : "rgb(225 225 225 / 19%)"};
  }
`;
