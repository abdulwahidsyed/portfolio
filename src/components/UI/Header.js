import React from "react";
import { StyledHeader, StyledHeading } from "./Styled";
import hamIcon from "../../assets/ham.png";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { changeSideDrawer } from "../../redux/masterSlice/master.slice";

const Header = ({}) => {
  const dispatch = useDispatch();

  const onClickHamburger = () => {
    dispatch(changeSideDrawer(true));
  };

  return (
    <StyledHeader>
      <StyledHeading>Abdul Wahid</StyledHeading>
      <StyledHamgurgerIcon src={hamIcon} onClick={onClickHamburger} />
    </StyledHeader>
  );
};

export default Header;

const StyledHamgurgerIcon = styled.img`
  margin-left: auto;
  margin-right: 20px;
  cursor: pointer;
`;
