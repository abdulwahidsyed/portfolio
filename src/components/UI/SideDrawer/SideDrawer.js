import styled from "styled-components";
import { Button } from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeSideDrawer } from "../../../redux/masterSlice/master.slice";
import { Backdrop } from "../Backdrop";
import {
  generateSummaryHelper,
  BASIC_INPUTS_META,
  SKILLS_INPUTS_META,
  EDUCATION_INPUTS_META,
  PROJECT_INPUTS_META,
  WORK_EXP_INPUTS_META,
  autoPopulateInputs,
} from "../../../pages/Edit/edit.helper";
import {
  generateSummary,
  updateAllInputs,
} from "../../../redux/inputsSlice/inputs.slice";
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

    // checkHere
    const payload = generateSummaryHelper(newInputs);
    dispatch(generateSummary(payload));
    onClose();
  };

  const onClickClear = () => {
    const dat = {
      basicInputs: [...BASIC_INPUTS_META],
      skillsInputs: [[...SKILLS_INPUTS_META]],
      educationInputs: [[...EDUCATION_INPUTS_META]],
      workExpInputs: [[...WORK_EXP_INPUTS_META]],
      projectInputs: [[...PROJECT_INPUTS_META]],
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
