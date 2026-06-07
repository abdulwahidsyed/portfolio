import styled from "styled-components";
import {
  StyledAnchor,
  StyledHeadingMedium,
  StyledHeadingSmall,
  StyledParagraph,
  StyledParagraphBold,
  StyledSection,
} from "../../components/UI/Styled";
import { SectionTitle } from "./prewComponents/SectionTitle";

export const PreviewWorkExp = ({ data = [] }) => {
  if (!data.length) {
    return;
  }

  return (
    <StyledCtn>
      <StyledHeadingMedium>Work Experience</StyledHeadingMedium>
      {data.map((el) => (
        <StyledSectionLoc>
          <StyledFlex>
            <StyledHeadingSmall>{el.projectName}</StyledHeadingSmall>
            <StyledHeadingSmall>{el.projectType}</StyledHeadingSmall>
          </StyledFlex>
          {el.duration ? (
            <StyledFlex>
              <StyledParagraphBold>{el.duration}</StyledParagraphBold>
            </StyledFlex>
          ) : null}
          <SectionTitle
            title={"Project Description"}
            show={el.description?.length}
          >
            <StyledPDBox>
              {el.description.map((desc) => (
                <StyledParagraphDesc>{desc}</StyledParagraphDesc>
              ))}
            </StyledPDBox>
          </SectionTitle>
          {/* <StyledPDBox>
            {el.description.map((desc) => (
              <StyledParagraph>{desc}</StyledParagraph>
            ))}
          </StyledPDBox> */}
          {el.github ? (
            <StyledParagraphBold style={{ marginTop: "26px" }}>
              Github:{" "}
              <StyledAnchor target="_black" href={el.github}>
                {el.github}
              </StyledAnchor>
            </StyledParagraphBold>
          ) : null}

          <SectionTitle
            title={"Hosting url"}
            show={el.deployedURL?.length}
            inline
          >
            <StyledAnchor target="_black" href={el.deployedURL}>
              {el.deployedURL}
            </StyledAnchor>
          </SectionTitle>
        </StyledSectionLoc>
      ))}
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  padding: 30px 30px 0 30px;
  * {
    color: black;
  }
`;

const StyledSectionLoc = styled(StyledSection)`
  margin-bottom: 40px;
  border: none;
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;

  & h2 {
    margin: 0 0 0px 0;
  }
`;

const StyledPDBox = styled.div`
  margin-top: 10px;
`;

const StyledParagraphDesc = styled(StyledParagraph)`
  margin-bottom: 4px;
`;
