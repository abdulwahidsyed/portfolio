import React from "react";
import { StyledHeader, StyledHeading } from "./Styled";
import hamIcon from "../../assets/ham.png";
import styled from "styled-components";

const Header = ({}) => {
  return (
    <StyledHeader>
      <StyledHeading>Abdul Wahid</StyledHeading>
      <StyledHamgurgerIcon src={hamIcon} />
    </StyledHeader>
  );
};

export default Header;

const StyledHamgurgerIcon = styled.img`
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
`;
