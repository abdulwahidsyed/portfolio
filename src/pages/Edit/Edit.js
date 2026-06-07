import { useDispatch, useSelector } from "react-redux";

import { StyledHeadingBig, StyledLayout } from "../../components/UI/Styled";
import {
  addNewEducation,
  addNewProject,
  addNewSkillField,
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
  inputsSelector,
} from "../../redux/inputsSlice/inputs.slice";
import BasicFieldsCtn from "./BasicFieldsCtn/BasicFieldsCtn";
import SkillsCtn from "./SkillsCtn/SkillsCtn";
import EducationSection from "./EducationSection/EducationSection";
import WorkExperienceCtn from "./WorkExperienceCtn/WorkExperienceCtn";
import ProjectsCtn from "./ProjectsCtn/ProjectsCtn";
import { useCallback, useMemo, useRef } from "react";
import { FooterHome } from "./FooterEdit";
import { NavigatorButtons } from "../../components/NavigatorButtons/NavigatorButtons";
import { useNavigate } from "react-router-dom";
import { routePaths } from "../../constants/paths.constants";
import { EnterKeyAchievements } from "./EnterKeyAchievements/EnterKeyAchievements";
import { EditCompanyCtn } from "./EditCompanyCtn";

const Edit = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const basicRef = useRef();
  const skillsRef = useRef();
  const compantRef = useRef();
  const workExpRef = useRef();
  const educationRef = useRef();

  const refs = useMemo(() => {
    return [basicRef, skillsRef, compantRef, workExpRef, educationRef];
  }, [basicRef, skillsRef, compantRef, workExpRef, educationRef]);

  const {
    basicInputs,
    educationInputs,
    workExpInputs,
    skillsInputs,
    keyAchievements,
    projectInputs,
    visibleComponent,
    orgInputs,
  } = useSelector(inputsSelector);

  const onChange = (e) => {
    const { name, value } = e.target;

    const dat = basicInputs.map((el) => ({
      ...el,
      value: el.name === name ? value : el.value,
      isError: el.name === name ? false : el.isError,
    }));

    dispatch(updateBasicInputs(dat));
  };

  const removeSkillInput = (i) => {
    dispatch(removeSkill(i));
  };

  const onChangeSkills = (e, i) => {
    const { value, name } = e.target;

    const payload = skillsInputs.map((el) => {
      if (name === el.name) {
        return { ...el, value };
      }
      return el;
    });
    dispatch(updateSkills(payload));
  };

  const addNewEducationSection = () => {
    dispatch(addNewEducation());
  };

  const onChangeEducation = (e, i) => {
    const { value, name } = e.target;

    const dat = [...educationInputs];
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

    const dat = [...workExpInputs];
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

    const dat = [...projectInputs];
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
    const inps = basicInputs.map((el) => {
      const k = el.isRequired && !el.value;
      if (!error && k) error = true;
      return { ...el, isError: k };
    });
    dispatch(updateBasicInputs(inps));

    return error;
  };

  const navigateHandler = (type) => {
    const isError = validateInputs();
    if (isError) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    // const dat = {
    //   basicInputs,
    //   educationInputs,
    //   workExpInputs,
    //   skillsInputs,
    //   projectInputs,
    // };

    // if (!summary) {
    //   const payload = generateSummaryHelper(dat);
    //   dispatch(generateSummary(payload));
    // }
    navigate(routePaths.preview);
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
      },
    );

    refs.forEach((ref, i) => {
      if (ref.current) {
        ref.current.setAttribute("data-index", i.toString());
        observer.observe(ref.current);
      }
    });
  }, [dispatch, refs]);

  return (
    <StyledLayout ref={callbackRef}>
      <StyledHeadingBig>Add details</StyledHeadingBig>
      <BasicFieldsCtn
        basicRef={basicRef}
        basicInputs={basicInputs}
        onChange={onChange}
      />
      <SkillsCtn
        skillsRef={skillsRef}
        inputsMatrix={skillsInputs}
        onChange={onChangeSkills}
        removeSkillInput={removeSkillInput}
      />
      <EnterKeyAchievements
        inputObj={keyAchievements}
        // keyAchievements={keyAchievements}
      />
      {/* <EditCompanyCtn compantRef={compantRef} orgInputs={orgInputs} /> */}
      <ProjectsCtn
        inputsMatrix={projectInputs}
        addNewProject={addNewProjectLoc}
        removeProject={removeProjectLoc}
        onChange={onChangeProjectLoc}
      />
      <WorkExperienceCtn
        workExpRef={workExpRef}
        inputsMatrix={workExpInputs}
        addWorkExperience={addWorkExperienceLoc}
        removeWorkExperience={removeWorkExperienceLoc}
        onChange={onChangeWorkExperience}
      />
      <EducationSection
        educationRef={educationRef}
        addNewEducationSection={addNewEducationSection}
        inputsMatrix={educationInputs}
        onChange={onChangeEducation}
        removeEducation={removeEducationLoc}
      />
      <NavigatorButtons navigateHandler={navigateHandler} isInitialPage />
      <FooterHome selected={visibleComponent} onClick={navigateToSection} />
    </StyledLayout>
  );
};

export default Edit;
