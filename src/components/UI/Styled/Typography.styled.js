import styled from "styled-components";
// white color 29.001px

// Headings

export const StyledHeadingBig = styled.h1`
  color: ${({ theme }) => theme.color};
  font-size: 44px;
  font-weight: 600;
  line-height: 52px;
  letter-spacing: -0.144px;
  margin: 20px 0;
`;

export const StyledHeadingMedium = styled.h2`
  color: ${({ theme }) => theme.color};
  font-size: 28px;
  font-weight: 600;
  line-height: 35.2px;
  letter-spacing: 0.21px;
  margin: 20px 0;
`;

export const StyledHeading = styled.h3`
  color: ${({ theme }) => theme.color};
  font-size: 21px;
  font-weight: 600;
  line-height: 28px;
  letter-spacing: 0.21px;
  margin: 12px 0;
`;

export const StyledHeadingSmall = styled.h2`
  color: ${({ theme }) => theme.color};
  font-size: 18px;
  font-weight: 600;
  line-height: 23.4px;
  letter-spacing: 0.21px;
`;

// Paragraphs

export const StyledParagraph = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0px;
  margin-top: 0;
`;

export const StyledParagraphBold = styled.p`
  color: ${({ theme }) => theme.color};
  font-size: 14px;
  font-weight: 600;
  line-height: 22.4px;
  letter-spacing: 0px;
`;

export const StyledParagraphGray = styled.p`
  color: ${({ theme }) => theme.commonGrayColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 22.4px;
  letter-spacing: 0px;
`;

export const StyledParagraphSmall = styled.p`
  color: ${({ theme }) => theme.commonGrayColor};
  font-size: 12px;
  font-weight: 400;
  line-height: 18.2px;
  letter-spacing: 0px;
`;

// Anchor tags (links)

export const StyledAnchor = styled.a`
  color: ${({ theme }) => theme.commonAnchorColor} !important;
  font-size: 12px;
  font-weight: 600;
  line-height: 18.2px;
  letter-spacing: 0px;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    text-decoration-color: ${({ theme }) => theme.commonAnchorColor};
    text-decoration: underline;
    text-decoration-style: solid;
  }
`;

export const StyledAnchorSmall = styled.p`
  color: ${({ theme }) => theme.commonAnchorColor};
  font-size: 14px;
  font-weight: 400;
  line-height: 18.2px;
  letter-spacing: 0px;

  cursor: pointer;

  &:hover {
    text-decoration-color: ${({ theme }) => theme.commonAnchorColor};
    text-decoration: underline;
    text-decoration-style: solid;
  }
`;
