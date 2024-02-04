import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import Select from "react-select";
import { desktop, laptop, mobile, tablet } from "./media-queries";

export const StyledInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.inputColor};

  padding: 4px 0.75rem;
  margin: 0 0px 20px 0px;
  box-sizing: border-box;

  width: 100%;
  background-clip: padding-box;
  border-radius: 0;
  background: ${({ $isError, theme }) =>
    $isError ? "rgba(255, 203, 203, 0.17)" : theme.inputBackground};
  border: ${({ $isError, theme }) =>
    $isError ? "1px solid #a30000" : theme.inputBorder};

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  appearance: none;
  -webkit-appearance: none;
  -webkit-box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);
  box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);

  &:focus-visible {
    outline: none;
    border: 1px solid #00a7ff;
  }

  &::placeholder {
    color: ${({ $isError, theme }) =>
      $isError
        ? theme.commonDangerInputPlaceholderColor
        : theme.inputPlaceholderColor};
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: ${({ theme }) => theme.inputBackground};
  }
`;

export const StyledTextarea = styled.textarea`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.inputColor};

  padding: 4px 0.75rem;
  margin: 0 0px 20px 0px;
  box-sizing: border-box;

  width: 100%;
  background-clip: padding-box;
  border-radius: 0;
  background: ${({ theme }) => theme.inputBackground};
  border: ${({ $isError, theme }) =>
    $isError ? theme.commonDangerInputBorder : theme.inputBorder};

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  appearance: none;
  -webkit-appearance: none;
  -webkit-box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);
  box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);

  &:focus-visible {
    outline: none;
    border: 1px solid #00a7ff;
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background: ${({ theme }) => theme.inputBackground};
  }
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: ${({ theme }) => theme.inputColor};

  padding: 4px 0.75rem;
  margin: 0 0px 20px 0px;
  box-sizing: border-box;

  width: 100%;
  background-clip: padding-box;
  border-radius: 0;
  background: ${({ $isError }) =>
    $isError ? "rgba(255, 203, 203, 0.17)" : "transparent"};
  border: ${({ $isError, theme }) =>
    $isError ? "1px solid #a30000" : theme.inputBorder};

  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  appearance: none;
  -webkit-appearance: none;
  -webkit-box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);
  -moz-box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);
  box-shadow: 10px 10px 6px 1px rgba(0, 0, 0, 0.44);

  &:focus-visible {
    outline: none;
    border: 1px solid #00a7ff;
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(5px);
    backdrop-filter: blur(5px);
    background-color: rgba(255, 255, 255, 0);
  }
`;

export const StyledDropdown = styled(Select)`
  margin: 0 0px 20px 0px;
  width: 100%;

  & .select__control {
    min-height: 31px;
  }
`;

export const StyledBulletPointsCtn = styled.div`
  padding: 10px 0;
`;

export const StyledRow = styled.div`
  display: flex;
  gap: 20px;

  & > button {
    min-width: 80px;
    padding: 0;
    text-align: center;
  }
`;

export const StyledMatrixCtn = styled.div`
  flex-wrap: wrap;
  position: relative;
  display: flex;
  gap: 40px;

  & > div {
    flex-basis: calc(50% - 20px);
    box-sizing: border-box;
  }

  ${mobile`
    flex-direction: column;
  `}

  ${tablet`
    flex-direction: row;
  `}

  ${laptop`
    flex-direction: row;
  `}

  ${desktop`
    flex-direction: row;
  `}
`;

export const StyledMatrixChild = styled.div`
  background: ${(props) => (props.newlyAdded ? "#ffffff4d" : "unset")};
  border: ${(props) => (props.newlyAdded ? "1px solid #ffffff63" : "unset")};
  padding: ${(props) => (props.newlyAdded ? "0 4px" : "0")};
`;

export const StyledInputLabel = styled.p`
  color: ${({ theme }) => theme.inputLabelColor};
  font-size: 12px;
  font-weight: 500;
  line-height: 22.4px;
  letter-spacing: 0px;
  margin: 0;
`;
