import styled from "styled-components";
import {
  StyledAnchor,
  StyledAnchorSmall,
  StyledHeading,
  StyledHeadingBig,
  StyledHeadingMedium,
  StyledHeadingSmall,
  StyledLayout,
  StyledParagraph,
  StyledParagraphBold,
  StyledParagraphGray,
  StyledParagraphSmall,
  StyledSection,
} from "../../components/UI/Styled";

const Library = () => {
  return (
    <StyledLayout>
      <StyledHeadingBig>Library</StyledHeadingBig>
      <StyledTypoCtn>
        <StyledHeading>Typography</StyledHeading>
        <StyledHeadingBig>Syed Abdul Wahid</StyledHeadingBig>
        <StyledHeadingMedium>Syed Abdul Wahid</StyledHeadingMedium>
        <StyledHeading>Syed Abdul Wahid</StyledHeading>
        <StyledHeadingSmall>Syed Abdul Wahid</StyledHeadingSmall>
        <StyledParagraphBold>Syed Abdul Wahid</StyledParagraphBold>
        <StyledParagraph>Syed Abdul Wahid</StyledParagraph>
        <StyledParagraphGray>Syed Abdul Wahid</StyledParagraphGray>
        <StyledParagraphSmall>Syed Abdul Wahid</StyledParagraphSmall>
        <StyledAnchor>Syed Abdul Wahid</StyledAnchor>
        <StyledAnchorSmall>Syed Abdul Wahid</StyledAnchorSmall>
      </StyledTypoCtn>
    </StyledLayout>
  );
};

export default Library;

const StyledTypoCtn = styled(StyledSection)`
  text-align: center;
`;
