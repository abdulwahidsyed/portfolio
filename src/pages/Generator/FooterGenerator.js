import styled from "styled-components";
import { StyledFooter, StyledParagraph } from "../../components/UI/Styled";
import { mobile } from "../../components/UI/Styled/media-queries";
import { Button } from "../../components/UI/Button/Button";
import ReactToPrint from "react-to-print";

export const FooterGenerator = ({ printRef }) => {
  return (
    <Ctn>
      <StyledFlexed>
        <ReactToPrint
          bodyClass="print-agreement"
          content={() => printRef.current}
          trigger={() => <StyledParagraphLoc>Print</StyledParagraphLoc>}
        />
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

  //   transform: ${(props) => (props.selected ? "scale(1.4)" : "unset")};

  ${mobile`
      font-size: 14px;
    `}

  &:hover {
    background: ${(props) =>
      props.selected ? "unset" : "rgb(225 225 225 / 19%)"};
  }
`;
