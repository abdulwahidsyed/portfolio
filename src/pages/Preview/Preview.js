import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import { PreviewFooter } from "./PreviewFooter";
import { useDispatch, useSelector } from "react-redux";
import { PreviewHeading } from "./PreviewHeading";
import { NavigatorButtons } from "../../components/NavigatorButtons/NavigatorButtons";
import { PreviewSkills } from "./PreviewSkills";
import { PreviewEducation } from "./PreviewEducation";
import { PreviewProjects } from "./PreviewProjects";
import { autoPopulateInputs, generateSummaryHelper } from "../Edit/edit.helper";
import {
  generateSummary,
  inputsSelector,
  updateAllInputs,
} from "../../redux/inputsSlice/inputs.slice";
import { PreviewWorkExp } from "./PreviewWorkExp";
import { PreviewKeyAchievements } from "./PreviewKeyAchievements";

const Generator = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const printRef = useRef();

  const { summary, skillsInputs } = useSelector(inputsSelector);

  useEffect(() => {
    initialCall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   console.log("my summary", summary);
  // }, [summary]);

  const initialCall = () => {
    const newInputs = autoPopulateInputs();
    dispatch(updateAllInputs(newInputs));

    // checkHere
    const payload = generateSummaryHelper(newInputs);
    dispatch(generateSummary(payload));
  };

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <StyledCtn>
      <PrintCtn ref={printRef}>
        <PreviewHeading data={summary?.basicDetails} />
        <PreviewSkills data={skillsInputs} />
        <PreviewKeyAchievements keyAchievements={summary?.keyAchievements} />
        <PreviewProjects data={summary?.projects} />
        <PreviewWorkExp data={summary?.workExperience} />
        <PreviewEducation data={summary?.education} />
      </PrintCtn>
      <NavigatorButtons navigateHandler={navigateHandler} isLastPage />
      <PreviewFooter printRef={printRef} />
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
