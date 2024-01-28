import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { StyledHeadingBig, StyledLayout } from "../../components/UI/Styled";
import {
  addNewEducation,
  addNewProject,
  addNewSkill,
  addWorkExperience,
  removeEducation,
  removeProject,
  removeSkill,
  removeWorkExperience,
  updateEducationInputs,
  updateInputs,
  updateNewProject,
  updateSkills,
  updateWorkExperience,
} from "../../redux/homeSlice/home.slice";
import { BasicFieldsCtn } from "./BasicFieldsCtn/BasicFieldsCtn";
import { SkillsCtn } from "./SkillsCtn/SkillsCtn";
import { EducationSection } from "./EducationSection/EducationSection";
import { WorkExperienceCtn } from "./WorkExperienceCtn/WorkExperienceCtn";
import { ProjectsCtn } from "./ProjectsCtn/ProjectsCtn";
import { FooterHome } from "./FooterHome";

const Home = () => {
  const dispatch = useDispatch();
  const {
    inputs,
    inputsEducation,
    inputsWorkExperience,
    inputsSkills,
    inputsProjects,
  } = useSelector((st) => st.home);

  const onChange = (e, objectKey) => {
    const { name, value } = e.target;

    const dat = inputs[objectKey].map((el) => {
      if (name === el.name) {
        return { ...el, value };
      }
      return el;
    });
    const payload = { dat, objectKey };
    dispatch(updateInputs(payload));
  };

  const addNewSkillInput = () => {
    dispatch(addNewSkill());
  };

  const removeSkillInput = (i) => {
    dispatch(removeSkill(i));
  };

  const onChangeSkills = (e, i) => {
    const { value, name } = e.target;
    const matrix = [...inputsSkills];

    const updatedInps = matrix[i].map((el) => {
      if (name === el.name) {
        return { ...el, value };
      }
      return el;
    });
    matrix[i] = updatedInps;
    dispatch(updateSkills(matrix));
  };

  const addNewEducationSection = () => {
    dispatch(addNewEducation());
  };

  const onChangeEducation = (e, i) => {
    const { value, name } = e.target;

    const dat = [...inputsEducation];
    const arr = dat[i].map((el) => {
      if (el.name === name) {
        return { ...el, value };
      }
      return el;
    });

    dat[i] = arr;
    dispatch(updateEducationInputs(dat));
  };

  const removeEducationLoc = (i) => {
    dispatch(removeEducation(i));
  };

  const addWorkExperienceLoc = () => {
    dispatch(addWorkExperience());
  };

  const removeWorkExperienceLoc = (i) => {
    dispatch(removeWorkExperience(i));
  };

  const onChangeWorkExperience = (e, i, type, b) => {
    const { value, name } = e.target;

    const dat = [...inputsWorkExperience];
    const arr = dat[i].map((el) => {
      if (el.name === name) {
        return { ...el, value };
      }
      return el;
    });

    dat[i] = arr;
    dispatch(updateWorkExperience(dat));
  };

  const addNewProjectLoc = () => {
    dispatch(addNewProject());
  };

  const removeProjectLoc = (i) => {
    dispatch(removeProject(i));
  };

  const onChangeProjectLoc = (e, i) => {
    const { value, name } = e.target;

    const dat = [...inputsProjects];
    const updated = dat[i].map((el) => ({
      ...el,
      value: el.name === name ? value : el.value,
    }));
    dat[i] = updated;

    dispatch(updateNewProject(dat));
  };

  return (
    <StyledLayout>
      <StyledHeadingBig>Add details</StyledHeadingBig>
      <BasicFieldsCtn
        inputsBasic={inputs.inputsBasic}
        inputsSocial={inputs.inputsSocial}
        onChange={onChange}
      />
      <SkillsCtn
        addNewSkillInput={addNewSkillInput}
        inputsMatrix={inputsSkills}
        onChange={onChangeSkills}
        removeSkillInput={removeSkillInput}
      />
      <ProjectsCtn
        inputsMatrix={inputsProjects}
        addNewProject={addNewProjectLoc}
        removeProject={removeProjectLoc}
        onChange={onChangeProjectLoc}
      />
      <WorkExperienceCtn
        inputsMatrix={inputsWorkExperience}
        addWorkExperience={addWorkExperienceLoc}
        removeWorkExperience={removeWorkExperienceLoc}
        onChange={onChangeWorkExperience}
      />
      <EducationSection
        addNewEducationSection={addNewEducationSection}
        inputsMatrix={inputsEducation}
        onChange={onChangeEducation}
        removeEducation={removeEducationLoc}
      />
      <FooterHome />
    </StyledLayout>
  );
};

export default Home;
