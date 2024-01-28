import styled from "styled-components";
import whitePage from "../../../assets/white1.jpg";
import { desktop, laptop, mobile, tablet } from "./media-queries";

export const StyledApp = styled.div`
  padding-top: 61px;
  text-align: center;
  min-height: 100vh;
  background: url(${whitePage});
  /* background: url("./assets/white1.jpg"); */
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const StyledHeader = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 2;
  background: linear-gradient(
    to right bottom,
    rgba(225, 225, 225, 0.4),
    rgba(225, 225, 225, 0)
  );
  color: #333;
  font-family: sans-serif;
  line-height: 1.5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(253, 253, 253, 0.06);
  -webkit-box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);
  box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.44);

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    // background-color: rgba(112, 112, 112, 0.11);
  }
`;

export const StyledFooter = styled.div`
  width: 100%;
  height: 60px;
  position: fixed;
  overflow: hidden;
  display: flex;
  align-items: center;
  z-index: 2;
  background: linear-gradient(
    to right bottom,
    rgba(225, 225, 225, 0.4),
    rgba(225, 225, 225, 0)
  );
  color: #333;
  font-family: sans-serif;
  line-height: 1.5;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid rgba(253, 253, 253, 0.06);
  -webkit-box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);
  box-shadow: 0px 4px 6px 1px rgba(0, 0, 0, 0.44);

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(6px);
    backdrop-filter: blur(6px);
    // background-color: rgba(112, 112, 112, 0.11);
  }
`;

export const StyledLayout = styled.div`
  padding: 20px;
  text-align: left;

  ${mobile`
  padding: 10px;
  `}

  ${tablet`
  padding: 20px;
  `}

  ${laptop`
  padding: 20px;
  `}

  ${desktop`
  padding: 20px;
  `}
`;

export const StyledSection = styled.div`
  border: 1px solid #00000029;
  backdrop-filter: blur(10px);
  padding: 20px 30px;
  box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.44);

  ${mobile`
    padding: 20px 8px 8px 8px;
  `}

  ${tablet`
    padding: 20px 10px 4px 10px;
  `}

  ${laptop`
    padding: 30px 30px 20px 30px;
  `}

  ${desktop`
    padding: 30px 30px 20px 30px;
  `}
`;
