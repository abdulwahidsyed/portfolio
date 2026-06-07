import styled from "styled-components";
import {
  StyledHeadingMedium,
  StyledParagraph,
} from "../../components/UI/Styled";

export const PreviewKeyAchievements = ({ keyAchievements }) => {
  if (!keyAchievements?.length) {
    return null;
  }

  return (
    <StyledCtn>
      <StyledHeadingMedium>Key Achievements</StyledHeadingMedium>
      <StyledParagraphDesc>{keyAchievements}</StyledParagraphDesc>
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  padding: 30px 30px 0 30px;
  * {
    color: black;
  }
`;

const StyledParagraphDesc = styled(StyledParagraph)`
  margin-bottom: 4px;
  white-space: pre-line;
  line-height: 28px;
`;
