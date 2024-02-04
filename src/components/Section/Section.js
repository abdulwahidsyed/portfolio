import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { StyledHeadingMedium, StyledInputSection } from "../UI/Styled";

const Section = () => {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);

  const handleScroll = () => {
    if (ref.current) {
      setSticky(ref.current.getBoundingClientRect().top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <StyledCtn ref={ref}>
      {/* <h1 className={`heading ${isSticky ? "sticky" : ""}`}>My Heading</h1> */}
      <StyledHeadingLoc isSticky={isSticky}>Basic fields</StyledHeadingLoc>
      <StyledBox></StyledBox>
    </StyledCtn>
  );
};

export default Section;

const StyledCtn = styled(StyledInputSection)`
  position: relative;
`;

const StyledHeadingLoc = styled(StyledHeadingMedium)`
  position: ${(props) => (!props.isSticky ? "fixed" : "absolute")};
  top: 0;
`;

const StyledBox = styled.div`
  height: 400px;
`;
