import styled from "styled-components";
import { desktop, laptop, mobile, tablet } from "./media-queries";

export const StyledSection = styled.div`
  border: 1px solid #00000029;
  padding: 20px 30px;
  backdrop-filter: blur(3px);
  box-shadow: ${({ theme }) => theme.sectionBoxShadow};
  background: ${({ theme }) => theme.sectionBackground};

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

export const StyledBox = styled.div`
  border: 1px solid #00000029;
  backdrop-filter: blur(3px);
  box-shadow: ${({ theme }) => theme.sectionBoxShadow};
  background: ${({ theme }) => theme.sectionBackground};
  padding: 20px 20px;
  margin-bottom: 40px;
  // background: linear-gradient(45deg, #6564645e, transparent);
`;

export const StyledInputSection = styled.div`
  margin: 80px 0;
  border: 1px solid #00000029;
  padding: 20px 30px;
  display: flex;
  gap: 40px;
  backdrop-filter: blur(3px);
  box-shadow: ${({ theme }) => theme.sectionBoxShadow};
  background: ${({ theme }) => theme.sectionBackground};
  ${mobile`
    padding: 20px 8px 8px 8px;
    flex-direction: column;
  `} ${tablet`
    padding: 20px 10px 4px 10px;
    flex-direction: row;
  `} ${laptop`
    padding: 30px 30px 20px 30px;
    flex-direction: row;
  `} ${desktop`
    padding: 30px 30px 20px 30px;
    flex-direction: row;
  `};
`;

export const StyledFlexSection = styled.div`
  margin: 80px 0;
  display: flex;
  gap: 40px;

  ${mobile`
    flex-direction: column;
  `} ${tablet`
    flex-direction: row;
  `} ${laptop`
    flex-direction: row;
  `} ${desktop`
    flex-direction: row;
  `};
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
  border: ${(props) => (props.newlyAdded ? "1px solid #ffffff63" : "unset")};
  padding: ${(props) => (props.newlyAdded ? "0 4px" : "0")};
`;
