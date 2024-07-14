import styled from "styled-components";
import {
  StyledHeadingMedium,
  StyledHeadingSmall,
  StyledPGrayaragraphSmall,
  StyledParagraph,
  StyledParagraphBold,
  StyledSection,
} from "../../components/UI/Styled";
import { useMemo } from "react";
import { BasicHR } from "../../components/UI/HR/BasicHR";

export const ProjectGenerator = ({ data = [] }) => {
  const companies = useMemo(() => {
    return data.reduce((acu, cur) => {
      const k = { ...acu };
      if (!k[cur.companyName]) k[cur.companyName] = [];
      k[cur.companyName].push(cur);
      return k;
    }, {});
  }, [data]);

  const generateDuration = (arr) => {
    if (arr.length <= 1) return arr[0].projectDuration;
    const joinedDate = arr[0].projectDuration.split("to")[0];
    const releivingDate = arr[arr.length - 1].projectDuration.split("to")[0];
    return releivingDate + "-" + joinedDate;
  };

  console.log("my companies", companies);

  if (!data.length) return;
  return (
    <StyledCtn>
      <StyledHeadingMedium>Projects</StyledHeadingMedium>
      {Object.keys(companies).map((company) => (
        <StyledSectionLoc>
          <StyledHeadingBox>
            <StyledPGrayaragraphSmallLoc>
              Project Name
            </StyledPGrayaragraphSmallLoc>
            <StyledHeadingSmall>{company}</StyledHeadingSmall>
            <StyledParagraphBold style={{ margin: 0 }}>
              {generateDuration(companies[company])}
            </StyledParagraphBold>
            <BasicHR style={{ margin: "36px 0 44px 0" }} />
          </StyledHeadingBox>

          {companies[company].map((project, i) => (
            <StyledProjectCtn>
              <StyledFlex>
                <StyledPGrayaragraphSmallLoc>
                  Project Name
                </StyledPGrayaragraphSmallLoc>
                <StyledHeadingSmall>{project.projectName}</StyledHeadingSmall>
                <StyledHeadingSmall>{project.role}</StyledHeadingSmall>
              </StyledFlex>

              <StyledParagraphBold>Project Description</StyledParagraphBold>
              <StyledPDBox>
                {project.projectDescription.map((desc) => (
                  <StyledParagraph>{desc}</StyledParagraph>
                ))}
              </StyledPDBox>
              <StyledParagraphBold style={{ marginTop: "26px" }}>
                Skills used
              </StyledParagraphBold>
              <StyledUL>
                {project.skillsUsed.map((r) => (
                  <StyledLI>
                    <StyledParagraph>{r}</StyledParagraph>
                  </StyledLI>
                ))}
              </StyledUL>
              <StyledParagraphBold style={{ marginTop: "26px" }}>
                Roles & Responsibilities
              </StyledParagraphBold>
              <StyledUL>
                {project.rolesAndResponsibilities.map((r) => (
                  <StyledLI>
                    <StyledParagraph>{r}</StyledParagraph>
                  </StyledLI>
                ))}
              </StyledUL>
              {i != companies[company].length - 1 ? <BasicHR /> : null}
            </StyledProjectCtn>
          ))}
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

const StyledPGrayaragraphSmallLoc = styled(StyledPGrayaragraphSmall)`
  position: absolute;
  top: -14px;
`;

const StyledSectionLoc = styled(StyledSection)`
  margin-bottom: 40px;
  border: none;
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: 30px;

  & h2 {
    margin: 0 0 0px 0;
  }
`;

const StyledUL = styled.ul`
  padding-left: 16px;
  margin-top: 10px;
`;
const StyledLI = styled.li`
  margin: 4px 0;
`;

const StyledPDBox = styled.div`
  margin-top: 10px;
`;

const StyledHeadingBox = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const StyledProjectCtn = styled.div`
  padding-left: 40px;
`;
