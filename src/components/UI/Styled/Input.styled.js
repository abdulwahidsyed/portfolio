import ReactDatePicker from "react-datepicker";
import styled from "styled-components";
import { desktop, laptop, mobile, tablet } from "./media-queries";

export const StyledInput = styled.input`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;

  padding: 4px 0.75rem;
  margin: 0 0px 20px 0px;
  box-sizing: border-box;

  width: 100%;
  background-clip: padding-box;
  border-radius: 0;
  background: ${({ $isError }) =>
    $isError ? "rgba(255, 203, 203, 0.17)" : "transparent"};
  border: ${({ $isError }) =>
    $isError ? "1px solid #a30000" : "1px solid black"};

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
    color: ${({ $isError }) => ($isError ? "#a30000" : "unset")};
  }

  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    -webkit-backdrop-filter: blur(5px) !important;
    backdrop-filter: blur(5px) !important;
    background-color: rgba(255, 255, 255, 0) !important;
  }
`;

export const StyledTextarea = styled.textarea`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;

  padding: 4px 0.75rem;
  margin: 0 0px 20px 0px;
  box-sizing: border-box;

  width: 100%;
  background-clip: padding-box;
  border-radius: 0;
  /* background: ${({ $isError }) =>
    $isError ? "rgba(255, 203, 203, 0.17)" : "transparent"};
    */
  background: linear-gradient(
    to right bottom,
    rgba(225, 225, 225, 0.4),
    rgba(225, 225, 225, 0)
  );
  border: ${({ $isError }) =>
    $isError ? "1px solid #a30000" : "1px solid black"};

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
    -webkit-backdrop-filter: blur(5px) !important;
    backdrop-filter: blur(5px) !important;
    background-color: rgba(255, 255, 255, 0) !important;
  }
`;

export const StyledDatePicker = styled(ReactDatePicker)`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;

  padding: 4px 0.75rem;
  margin: 0 0px 20px 0px;
  box-sizing: border-box;

  width: 100%;
  background-clip: padding-box;
  border-radius: 0;
  background: ${({ $isError }) =>
    $isError ? "rgba(255, 203, 203, 0.17)" : "transparent"};
  border: ${({ $isError }) =>
    $isError ? "1px solid #a30000" : "1px solid black"};

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
    -webkit-backdrop-filter: blur(5px) !important;
    backdrop-filter: blur(5px) !important;
    background-color: rgba(255, 255, 255, 0) !important;
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
