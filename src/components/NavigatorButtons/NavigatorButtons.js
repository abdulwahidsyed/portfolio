import styled from "styled-components";
import { Button } from "../UI/Button/Button";
import { mobile } from "../UI/Styled/media-queries";

export const NavigatorButtons = ({
  navigateHandler,
  isInitialPage,
  isLastPage,
}) => {
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

  ${mobile`
    right: 0;
    left: 0;
    justify-content: center;
  `}
`;
