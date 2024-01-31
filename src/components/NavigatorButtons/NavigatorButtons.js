import styled from "styled-components";
import { Button } from "../UI/Button/Button";
import { mobile } from "../UI/Styled/media-queries";
import { useLocation, useNavigate } from "react-router-dom";

export const NavigatorButtons = ({
  navigateHandler,
  isInitialPage,
  isLastPage,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // const navigateHandler = (type) => {
  //   const routes = ["/", "/generator"];

  //   const currentPathIndex = routes.findIndex((el) => el === location.pathname);

  //   let url =
  //     type === "next"
  //       ? routes[currentPathIndex + 1]
  //       : routes[currentPathIndex - 1];
  //   if (url) {
  //     navigate(url);
  //   }
  // };

  return (
    <StyledCtn>
      {isInitialPage ? null : (
        <Button onClick={() => navigateHandler("back")}>Back</Button>
      )}
      {isLastPage ? null : (
        <Button onClick={() => navigateHandler("next")}>Next</Button>
      )}
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
