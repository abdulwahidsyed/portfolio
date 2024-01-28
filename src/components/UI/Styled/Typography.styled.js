import styled from "styled-components";
// white color 29.001px

// Headings

export const StyledHeadingBig = styled.h1`
  color: rgb(29, 29, 31);
  font-size: 44px;
  font-weight: 600;
  line-height: 52px;
  letter-spacing: -0.144px;
  margin: 20px;
`;

export const StyledHeadingMedium = styled.h2`
  color: rgb(29, 29, 31);
  font-size: 28px;
  font-weight: 600;
  line-height: 35.2px;
  letter-spacing: 0.21px;
  margin: 20px;
`;

export const StyledHeading = styled.h3`
  color: rgb(29, 29, 31);
  font-size: 21px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.21px;
  margin: 0 20px;
`;

export const StyledHeadingSmall = styled.h2`
  color: rgb(29, 29, 31);
  font-size: 18px;
  font-weight: 600;
  line-height: 23.4px;
  letter-spacing: 0.21px;
`;

// Paragraphs

export const StyledParagraph = styled.p`
  color: rgb(22, 22, 22);
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0px;
`;

export const StyledParagraphBold = styled.p`
  color: rgb(22, 22, 22);
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  letter-spacing: 0px;
`;

export const StyledParagraphGray = styled.p`
  color: rgb(80, 80, 80);
  font-size: 16px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0px;
`;

export const StyledParagraphSmall = styled.p`
  color: rgb(80, 80, 80);
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
  letter-spacing: 0px;
`;

// Anchor tags (links)

export const StyledAnchor = styled.p`
  color: rgb(0, 101, 179);
  font-size: 14px;
  font-weight: 600;
  line-height: 18.2px;
  letter-spacing: 0px;

  cursor: pointer;

  &:hover {
    text-decoration-color: rgb(0, 101, 179);
    text-decoration: underline;
    text-decoration-style: solid;
  }
`;

export const StyledAnchorSmall = styled.p`
  color: rgb(0, 101, 179);
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
  letter-spacing: 0px;

  cursor: pointer;

  &:hover {
    text-decoration-color: rgb(0, 101, 179);
    text-decoration: underline;
    text-decoration-style: solid;
  }
`;

// others

export const StyledInputLabel = styled.p`
  color: rgb(22, 22, 22);
  font-size: 12px;
  font-weight: 500;
  line-height: 22.4px;
  letter-spacing: 0px;
  margin: 0;
`;
