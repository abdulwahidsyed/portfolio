import { useEffect, useRef } from "react";
import styled from "styled-components";

import { FooterGenerator } from "./FooterGenerator";
import { useSelector } from "react-redux";
import { HeaderResume } from "./HeaderResume";
import { useNavigate } from "react-router-dom";
import { NavigatorButtons } from "../../components/NavigatorButtons/NavigatorButtons";
import { SkillsGenerator } from "./SkillsGenerator";
import { EducationGenerator } from "./EducationGenerator";
import { ProjectGenerator } from "./ProjectGenerator";

const Generator = () => {
  const navigate = useNavigate();

  const printRef = useRef();

  const { summary } = useSelector((st) => st.home);

  useEffect(() => {
    console.log("my summary", summary);
    if (!summary) navigate("/");
  }, []);

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <StyledCtn>
      <PrintCtn ref={printRef}>
        <HeaderResume data={summary?.basicDetails} />
        <SkillsGenerator data={summary?.commonSkills} />
        <ProjectGenerator data={summary?.projects} />
        <EducationGenerator data={summary?.education} />
      </PrintCtn>
      <NavigatorButtons navigateHandler={navigateHandler} isLastPage />
      <FooterGenerator printRef={printRef} />
    </StyledCtn>
  );
};

export default Generator;

const StyledCtn = styled.div`
  padding: 40px 0 30px 0;
`;

const PrintCtn = styled.div`
  padding-bottom: 60px;

  background-color: #ffffff;
  background-image: linear-gradient(0deg, #ffffff 0%, #b5fffc 100%);
  & * {
    text-align: left;
  }
`;
