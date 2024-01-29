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
  updateBasicInputs,
  updateNewProject,
  updateSkills,
  updateWorkExperience,
  updateVisibleComponent,
} from "../../redux/homeSlice/home.slice";
import BasicFieldsCtn from "./BasicFieldsCtn/BasicFieldsCtn";
import SkillsCtn from "./SkillsCtn/SkillsCtn";
import EducationSection from "./EducationSection/EducationSection";
import WorkExperienceCtn from "./WorkExperienceCtn/WorkExperienceCtn";
import ProjectsCtn from "./ProjectsCtn/ProjectsCtn";
import { FooterHome } from "./FooterHome";
import { useCallback, useRef } from "react";

const Home = () => {
  const dispatch = useDispatch();

  const basicRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const workExpRef = useRef();
  const educationRef = useRef();

  const {
    inputsBasic,
    inputsEducation,
    inputsWorkExperience,
    inputsSkills,
    inputsProjects,
    visibleComponent,
  } = useSelector((st) => st.home);

  const onChange = (e) => {
    const { name, value } = e.target;

    const dat = inputsBasic.map((el) => ({
      ...el,
      value: e.name === name ? value : el.value,
    }));

    dispatch(updateBasicInputs(dat));
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

  const refs = [basicRef, skillsRef, projectRef, workExpRef, educationRef];

  const onClickScroll = (i) => {
    const myRef = refs[i];
    if (myRef.current) {
      const offsetTop =
        myRef.current.getBoundingClientRect().top + window.pageYOffset - 100;
      dispatch(updateVisibleComponent(i));
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const callbackRef = useCallback(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry, i) => {
          const isIntersecting = entry.isIntersecting;
          if (isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index"), 10);
            dispatch(updateVisibleComponent(index));
          }
        });
      },
      {
        root: null,
        threshold: 0.5,
        rootMargin: "300px",
        // rootMargin: "-200px 0px -200px 0px",
        // threshold: [0, 0.25, 0.5, 0.75, 1],
        // rootMargin: "0px",
      }
    );

    refs.forEach((ref, i) => {
      if (ref.current) {
        ref.current.setAttribute("data-index", i.toString());
        observer.observe(ref.current);
      }
    });
  }, []);

  return (
    <StyledLayout ref={callbackRef}>
      <StyledHeadingBig>Add details</StyledHeadingBig>
      <BasicFieldsCtn
        basicRef={basicRef}
        inputsBasic={inputsBasic}
        onChange={onChange}
      />
      <SkillsCtn
        skillsRef={skillsRef}
        addNewSkillInput={addNewSkillInput}
        inputsMatrix={inputsSkills}
        onChange={onChangeSkills}
        removeSkillInput={removeSkillInput}
      />
      <ProjectsCtn
        projectRef={projectRef}
        inputsMatrix={inputsProjects}
        addNewProject={addNewProjectLoc}
        removeProject={removeProjectLoc}
        onChange={onChangeProjectLoc}
      />
      <WorkExperienceCtn
        workExpRef={workExpRef}
        inputsMatrix={inputsWorkExperience}
        addWorkExperience={addWorkExperienceLoc}
        removeWorkExperience={removeWorkExperienceLoc}
        onChange={onChangeWorkExperience}
      />
      <EducationSection
        educationRef={educationRef}
        addNewEducationSection={addNewEducationSection}
        inputsMatrix={inputsEducation}
        onChange={onChangeEducation}
        removeEducation={removeEducationLoc}
      />
      <FooterHome selected={visibleComponent} onClick={onClickScroll} />
    </StyledLayout>
  );
};

export default Home;
