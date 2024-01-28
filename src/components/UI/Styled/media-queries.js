import { css } from "styled-components";

export const mobile = (...args) => css`
  @media (max-width: 480px) {
    ${css(...args)}
  }
`;

export const tablet = (...args) => css`
  @media (min-width: 481px) and (max-width: 768px) {
    ${css(...args)}
  }
`;

export const laptop = (...args) => `
  @media (min-width: 769px) and (max-width: 1024px) {
    ${css(...args)}
  }
`;

export const desktop = (...args) => `
  @media (min-width: 1025px) {
    ${css(...args)}
  }
`;
