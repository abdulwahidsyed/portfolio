import styled from "styled-components";
import { ellipsisStyle } from "./reusableCSS.styled";
import { StyledParagraphSmall } from "./Typography.styled";

export const StyledButton = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  height: 31px;
  color: ${({ theme }) => theme.buttonColor};
  padding: 4px 20px;
  min-width: 160px;

  margin: 0 0px 20px 0px;
  box-sizing: border-box;

  background-clip: padding-box;
  border-radius: 0;
  background: ${({ theme }) => theme.buttonBackground};
  border: ${({ $isError, theme }) =>
    $isError ? theme.commonDangerBtnBorder : theme.buttonBorder};

  transition: border-color 0.15s ease-in-out, outline 0s ease,
    background 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  ${ellipsisStyle}

  appearance: none;
  -webkit-appearance: none;
  -webkit-box-shadow: ${({ theme }) => theme.boxShadowButton};
  -moz-box-shadow: ${({ theme }) => theme.boxShadowButton};
  box-shadow: ${({ theme }) => theme.boxShadowButton};

  &:focus-visible {
    outline: none;
    border: 1px solid #00a7ff;
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.boxShadowButtonHover};
    outline: ${({ theme }) => theme.buttonHoverOutline};
    background: ${({ theme }) => theme.buttonBackgroundHover};
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background-color: ${({ theme }) => theme.buttonBackground};
    background: ${({ theme }) => theme.buttonBackground};
  }
`;

export const StyledRedButton = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  height: 31px;
  color: ${({ theme }) => theme.dangerBtnColor};

  background: ${({ theme }) => theme.dangerButtonBackground};
  backdrop-filter: none;
  border: ${({ theme }) => theme.dangerBtnBorder};

  padding: 4px 20px;
  min-width: 160px;

  margin: 0 0px 20px 0px;
  box-sizing: border-box;

  background-clip: padding-box;
  border-radius: 0;

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out,
    outline 0s ease-in-out;

  ${ellipsisStyle}

  appearance: none;
  -webkit-appearance: none;
  -webkit-box-shadow: ${({ theme }) => theme.dangerBtnShadow};
  -moz-box-shadow: ${({ theme }) => theme.dangerBtnShadow};
  box-shadow: ${({ theme }) => theme.dangerBtnShadow};

  &:focus-visible {
    outline: none;
    border: 1px solid #00a7ff;
  }
  &:hover {
    box-shadow: ${({ theme }) => theme.dangerBtnShadowHover};
    border: none;
    // background: #3a1d09;
    outline: none;
  }
`;

export const StyledCloseBtn = styled(StyledParagraphSmall)`
  position: absolute;
  top: 10px;
  right: 20px;
  margin: 0;
  cursor: pointer;
  padding: 4px 20px;
  transition: box-shadow 0.2s ease;
  background: ${({ theme }) => theme.smallCloseButtonBG};
  color: ${({ theme }) => theme.smallCloseButtonColor};

  &:hover {
    box-shadow: ${({ theme }) => theme.smallCloseButtonShadow};
  }
`;
