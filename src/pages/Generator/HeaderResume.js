import styled from "styled-components";
import {
  StyledAnchor,
  StyledHeadingMedium,
  StyledHeadingSmall,
  StyledParagraphBold,
} from "../../components/UI/Styled";

export const HeaderResume = ({ data = {} }) => {
  return (
    <StyledCtn>
      <StyledAvatar>
        <StyledHeadingMedium>{data.name}</StyledHeadingMedium>
        <StyledHeadingSmall>{data.designation}</StyledHeadingSmall>
      </StyledAvatar>
      <StyledDescriptionBox>
        <StyledParagraphBold style={{ textAlign: "justify" }}>
          {data.description}
        </StyledParagraphBold>
        <StyledUL>
          <StyledLI>Email: {data.mail}</StyledLI>
          <StyledLI>Phone: {data.phone}</StyledLI>
          <StyledLI>
            linkedin:{" "}
            <StyledAnchor target="_black" href={data.linkedinProfile}>
              {data.linkedinProfile}
            </StyledAnchor>
          </StyledLI>
          <StyledLI>
            Github:{" "}
            <StyledAnchor target="_black" href={data.githubProfile}>
              {data.githubProfile}
            </StyledAnchor>
          </StyledLI>
        </StyledUL>
      </StyledDescriptionBox>
    </StyledCtn>
  );
};

export const StyledCtn = styled.div`
  min-height: 400px;
  background: black;
  display: flex;
  padding: 30px;
  gap: 20px;

  & * {
    color: white !important;
  }
`;

export const StyledAvatar = styled.div`
  flex-basis: 30%;
`;

export const StyledDescriptionBox = styled.div`
  flex-basis: 70%;

  & * {
    line-height: 26.4px;
    word-spacing: 1.5px;
  }
`;

export const StyledUL = styled.ul`
  padding-left: 16px;
  margin-top: 40px;
`;
export const StyledLI = styled.li`
  margin: 4px 0;
`;
