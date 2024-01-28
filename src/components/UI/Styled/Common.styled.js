import styled from "styled-components";
import { desktop, laptop, mobile, tablet } from "./media-queries";

// Flex div with 2 boxes of inputs
export const StyledInputSection = styled.div`
  margin: 80px 0;
  border: 1px solid #00000029;
  backdrop-filter: blur(10px);
  padding: 20px 30px;
  box-shadow: 4px 4px 4px 1px rgba(0, 0, 0, 0.44);
  display: flex;
  gap: 40px;
  background: linear-gradient(
    to right bottom,
    rgba(225, 225, 225, 0.4),
    rgba(225, 225, 225, 0)
  );
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

export const StyledSubInputCtn = styled.div`
  flex-basis: 50%;
`;

export const StyledInpBox = styled.div``;
