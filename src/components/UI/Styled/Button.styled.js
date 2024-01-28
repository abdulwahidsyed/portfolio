import styled from "styled-components";
import { ellipsisStyle } from "./reusableCSS.styled";

export const StyledButton = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  height: 31px;
  color: #212529;
  padding: 4px 20px;
  min-width: 160px;

  margin: 0 0px 20px 0px;
  box-sizing: border-box;

  background-clip: padding-box;
  border-radius: 0;
  background: linear-gradient(
    to right bottom,
    rgba(225, 225, 225, 0.4),
    rgba(225, 225, 225, 0)
  );
  border: ${({ $isError }) =>
    $isError ? "1px solid #a30000" : "1px solid black"};

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    outline 0s ease-in-out;

  ${ellipsisStyle}

  appearance: none;
  -webkit-appearance: none;
  -webkit-box-shadow: 12px 10px 6px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 12px 10px 6px 1px rgba(0, 0, 0, 0.44);
  box-shadow: 12px 10px 6px 1px rgba(0, 0, 0, 0.44);

  &:focus-visible {
    outline: none;
    border: 1px solid #00a7ff;
  }
  &:hover {
    box-shadow: 6px 10px 6px 1px rgba(0, 0, 0, 0.44);
    outline: 1px solid black;
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(5px) !important;
    backdrop-filter: blur(5px) !important;
    background-color: rgba(255, 255, 255, 0) !important;
  }
`;

export const StyledRedButton = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  height: 31px;
  color: #860202;
  padding: 4px 20px;
  min-width: 160px;

  margin: 0 0px 20px 0px;
  box-sizing: border-box;

  background-clip: padding-box;
  border-radius: 0;

  background: #ffb1b1;
  border: 1px solid #860202;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    outline 0s ease-in-out;

  ${ellipsisStyle}

  appearance: none;
  -webkit-appearance: none;
  -webkit-box-shadow: 12px 10px 6px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 12px 10px 6px 1px rgba(0, 0, 0, 0.44);
  box-shadow: 12px 10px 6px 1px rgba(0, 0, 0, 0.44);

  &:focus-visible {
    outline: none;
    border: 1px solid #00a7ff;
  }
  &:hover {
    box-shadow: 6px 10px 6px 1px rgb(157 0 0 / 38%);
    outline: 1px solid rgb(157 0 0 / 38%);
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(5px) !important;
    backdrop-filter: blur(5px) !important;
    background: #ffb1b1 !important;
  }
`;
