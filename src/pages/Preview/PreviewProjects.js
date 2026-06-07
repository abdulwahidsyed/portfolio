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
// import { SkillUL } from "./prewComponents/SkillUL";
import { ProjectNameRole } from "./prewComponents/ProjectNameRole";
import { SectionTitle } from "./prewComponents/SectionTitle";
import { SkillUL } from "./prewComponents/SkillUL";

export const PreviewProjects = ({ data = [] }) => {
  const companies = useMemo(() => {
    return data.reduce((acu, cur) => {
      const k = { ...acu };
      if (!k[cur.companyName]) k[cur.companyName] = [];
      k[cur.companyName].push(cur);
      return k;
    }, {});
  }, [data]);

  const generateDuration = (arr) => {
    if (arr.length <= 1) {
      return arr[0].duration;
    }
    const joinedDate = arr[arr.length - 1].duration.split("-")[0];
    const releivingDate = arr[0].duration.split("-")[1];
    return `${joinedDate} - ${releivingDate}`;
  };

  if (!data.length) return;
  return (
    <StyledCtn>
      <StyledHeadingMedium>Projects</StyledHeadingMedium>
      {Object.keys(companies).map((company) => (
        <StyledSectionLoc>
          <StyledHeadingBox>
            <StyledPGrayaragraphSmallLoc>
              Organization
            </StyledPGrayaragraphSmallLoc>
            <StyledHeadingSmall>{company}</StyledHeadingSmall>
            <StyledParagraphBold style={{ margin: 0 }}>
              {generateDuration(companies[company])}
            </StyledParagraphBold>
            <BasicHR style={{ margin: "20px 0px 30px" }} />
          </StyledHeadingBox>

          {companies[company].map((project, i) => (
            <StyledProjectCtn>
              <ProjectNameRole project={project} />

              <SectionTitle
                title={"Project Description"}
                show={project.projectDescription?.length}
              >
                <StyledPDBox>
                  {project.projectDescription.map((desc) => (
                    <StyledParagraphDesc>{desc}</StyledParagraphDesc>
                  ))}
                </StyledPDBox>
              </SectionTitle>

              <SectionTitle
                title={"Tech stack"}
                show={project.skillsUsed?.length}
                inline={project.skillsUsed.length <= 2}
              >
                <SkillUL skillsUsed={project.skillsUsed} />
              </SectionTitle>

              <SectionTitle
                title={"Roles & Responsibilities"}
                show={project.rolesAndResponsibilities?.length}
              >
                <StyledUL>
                  {project.rolesAndResponsibilities.map((r) => (
                    <StyledLI>
                      <StyledParagraphDesc>{r}</StyledParagraphDesc>
                    </StyledLI>
                  ))}
                </StyledUL>
              </SectionTitle>

              {i !== companies[company].length - 1 ? <BasicHR /> : null}
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

const StyledParagraphDesc = styled(StyledParagraph)`
  margin-bottom: 4px;
`;
