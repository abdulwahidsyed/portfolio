import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { StyledHeading, StyledLayout } from "../../components/UI/Styled";
import { Button } from "../../components/UI/Button/Button";
import styled from "styled-components";

export const ErrorPageMain = ({ resetErrorBoundary }) => {
  const navigate = useNavigate();
  useEffect(() => {}, []);

  const onClick = () => {
    // Navigate to the error page
    resetErrorBoundary();
    navigate("/");
  };

  return (
    <StyledCt>
      <StyledHeading>Need to startover</StyledHeading>
      <Button variant="red" onClick={onClick}>
        Start working again
      </Button>
    </StyledCt>
  );
};

const StyledCt = styled(StyledLayout)`
  height: 100vh;
  background: linear-gradient(-113deg, black, transparent);
`;
