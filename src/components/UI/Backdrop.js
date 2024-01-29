import styled, { keyframes } from "styled-components";

export const Backdrop = ({ show, onClick }) => {
  return <StyledBackdrop show={show} onClick={onClick} />;
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledBackdrop = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};

  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  backdrop-filter: blur(6px);

  animation: ${fadeIn} 0.3s ease-in-out;
`;
