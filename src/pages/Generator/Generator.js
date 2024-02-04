import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { FooterGenerator } from "./FooterGenerator";
import { useDispatch, useSelector } from "react-redux";
import { HeaderResume } from "./HeaderResume";
import { NavigatorButtons } from "../../components/NavigatorButtons/NavigatorButtons";
import { SkillsGenerator } from "./SkillsGenerator";
import { EducationGenerator } from "./EducationGenerator";
import { ProjectGenerator } from "./ProjectGenerator";
import { autoPopulateInputs, generateSummaryHelper } from "../Home/home.helper";
import {
  generateSummary,
  updateAllInputs,
} from "../../redux/homeSlice/home.slice";
import { WorkExperienceGenerator } from "./WorkExperienceGenerator";

const Generator = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const printRef = useRef();

  const { summary } = useSelector((st) => st.home);

  useEffect(() => {
    // if (!summary) navigate("/");
    initialCall();
  }, []);

  useEffect(() => {
    console.log("my summary", summary);
  }, [summary]);

  const initialCall = () => {
    const newInputs = autoPopulateInputs();
    dispatch(updateAllInputs(newInputs));

    const payload = generateSummaryHelper(newInputs);
    dispatch(generateSummary(payload));
  };

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <StyledCtn>
      <PrintCtn ref={printRef}>
        <HeaderResume data={summary?.basicDetails} />
        <SkillsGenerator data={summary?.commonSkills} />
        <ProjectGenerator data={summary?.projects} />
        <WorkExperienceGenerator data={summary?.workExperience} />
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
  & * {
    text-align: left;
  }
`;
