import styled from "styled-components";
import { Button } from "../UI/Button/Button";
import { mobile } from "../UI/Styled/media-queries";
import { useLocation, useNavigate } from "react-router-dom";

export const NavigatorButtons = ({
  navigateHandler,
  isInitialPage,
  isLastPage,
}) => {
  console.log("my isInitialPage", isInitialPage);
  return (
    <StyledCtn>
      {!isInitialPage ? (
        <Button onClick={() => navigateHandler("back")}>Back</Button>
      ) : null}
      {!isLastPage ? (
        <Button onClick={() => navigateHandler("next")}>Next</Button>
      ) : null}
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  position: fixed;
  right: 20px;
  left: unset;
  bottom: 60px;
  display: flex;
  gap: 20px;

  & button {
    background: linear-gradient(
      to right bottom,
      rgb(255 255 255),
      rgb(134 134 134 / 73%)
    );
  }

  ${mobile`
    right: 0;
    left: 0;
    justify-content: center;
  `}
`;
