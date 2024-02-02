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
  generateSummary,
} from "../../redux/homeSlice/home.slice";
import BasicFieldsCtn from "./BasicFieldsCtn/BasicFieldsCtn";
import SkillsCtn from "./SkillsCtn/SkillsCtn";
import EducationSection from "./EducationSection/EducationSection";
import WorkExperienceCtn from "./WorkExperienceCtn/WorkExperienceCtn";
import ProjectsCtn from "./ProjectsCtn/ProjectsCtn";
import { useCallback, useRef } from "react";
import { FooterHome } from "./FooterHome";
import { NavigatorButtons } from "../../components/NavigatorButtons/NavigatorButtons";
import { useNavigate } from "react-router-dom";
import { generateSummaryHelper } from "./home.helper";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const basicRef = useRef();
  const skillsRef = useRef();
  const projectRef = useRef();
  const workExpRef = useRef();
  const educationRef = useRef();

  const refs = [basicRef, skillsRef, projectRef, workExpRef, educationRef];

  const {
    inputsBasic,
    inputsEducation,
    inputsWorkExperience,
    inputsSkills,
    inputsProjects,
    visibleComponent,
    summary,
  } = useSelector((st) => st.home);

  const onChange = (e) => {
    const { name, value } = e.target;

    const dat = inputsBasic.map((el) => ({
      ...el,
      value: el.name === name ? value : el.value,
      isError: el.name === name ? false : el.isError,
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

  const navigateToSection = (i) => {
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

  const validateInputs = () => {
    let error = false;
    const inps = inputsBasic.map((el) => {
      const k = el.isRequired && !el.value;
      if (!error && k) error = true;
      return { ...el, isError: k };
    });
    dispatch(updateBasicInputs(inps));

    return error;
  };

  const navigateHandler = (type) => {
    const isError = validateInputs();
    if (isError) return;

    const dat = {
      inputsBasic,
      inputsEducation,
      inputsWorkExperience,
      inputsSkills,
      inputsProjects,
    };

    if (!summary) {
      const payload = generateSummaryHelper(dat);
      dispatch(generateSummary(payload));
    }
    navigate("/generator");
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
        threshold: 0.8,
        rootMargin: "100px",
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
      <NavigatorButtons navigateHandler={navigateHandler} isInitialPage />
      <FooterHome selected={visibleComponent} onClick={navigateToSection} />
    </StyledLayout>
  );
};

export default Home;
