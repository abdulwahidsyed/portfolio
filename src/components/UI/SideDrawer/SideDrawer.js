import styled from "styled-components";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeSideDrawer } from "../../../redux/masterSlice/master.slice";
import { Backdrop } from "../Backdrop";
import {
  generateSummaryHelper,
  inputs_basic_mock,
  inputs_common_skills_mock,
  inputs_education_mock,
  inputs_projects_mock,
  inputs_work_experience_mock,
  autoPopulateInputs,
} from "../../../pages/Home/home.helper";
import {
  generateSummary,
  updateAllInputs,
} from "../../../redux/homeSlice/home.slice";
import { StyledHeading } from "../Styled/Typography.styled";
import { SideDrawerThemeDropdowns } from "./SideDrawerThemeDropdowns";
import { useMemo } from "react";
import { generateThemeOptionsHelper } from "./SideDrawer.helper";
import {
  colorTheme,
  inputShadowTheme,
  sectionShadowTheme,
} from "../../../theme/theme";
import { StyledSideDrawer } from "../Styled";
import { updateThemeByKey } from "../../../redux/themeSlice/theme.slice";

export const SideDrawer = () => {
  const dispatch = useDispatch();

  const { showSideDrawer } = useSelector((st) => st.master);

  const {
    colorTheme: selectedColorTheme,
    sectionShadowTheme: selectedSectionShadowTheme,
    inputShadowTheme: selectedInputShadowTheme,
  } = useSelector((st) => st.theme);

  const onClose = () => {
    dispatch(changeSideDrawer(false));
  };

  const autoGenerateHandler = () => {
    const newInputs = autoPopulateInputs();
    dispatch(updateAllInputs(newInputs));

    const payload = generateSummaryHelper(newInputs);
    dispatch(generateSummary(payload));
    onClose();
  };

  const onClickClear = () => {
    const dat = {
      inputsBasic: [...inputs_basic_mock],
      inputsSkills: [[...inputs_common_skills_mock]],
      inputsEducation: [[...inputs_education_mock]],
      inputsWorkExperience: [[...inputs_work_experience_mock]],
      inputsProjects: [[...inputs_projects_mock]],
    };
    dispatch(updateAllInputs(dat));
    onClose();
  };

  const onChangeTheme = (option = {}, event = {}) => {
    dispatch(changeSideDrawer(false));
    setTimeout(() => {
      dispatch(updateThemeByKey({ key: event.name, value: option.value }));
    }, 500);
  };

  const themeOptions = useMemo(() => {
    const obj = {
      colorTheme: generateThemeOptionsHelper(colorTheme),
      sectionShadowTheme: generateThemeOptionsHelper(sectionShadowTheme),
      inputShadowTheme: generateThemeOptionsHelper(inputShadowTheme),
    };

    return obj;
  }, [colorTheme, sectionShadowTheme, inputShadowTheme]);

  return (
    <StyledCtn>
      <StyledSideDrawer open={showSideDrawer}>
        <Button variant="small" onClick={onClose}>
          Close
        </Button>
        <Button onClick={autoGenerateHandler}>Auto Generate</Button>
        <Button onClick={onClickClear}>Clear</Button>

        <StyledHeading>Theming</StyledHeading>
        <SideDrawerThemeDropdowns
          colorTheme={selectedColorTheme}
          sectionShadowTheme={selectedSectionShadowTheme}
          inputShadowTheme={selectedInputShadowTheme}
          onChange={onChangeTheme}
          options={themeOptions}
        />
      </StyledSideDrawer>
      <Backdrop show={showSideDrawer} onClick={onClose} />
    </StyledCtn>
  );
};

const StyledCtn = styled.div``;
