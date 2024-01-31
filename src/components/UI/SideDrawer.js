import styled from "styled-components";
import { Button } from "./Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { changeSideDrawer } from "../../redux/masterSlice/master.slice";
import { Backdrop } from "./Backdrop";
import {
  inputs_basic_mock,
  inputs_common_skills_mock,
  inputs_education_mock,
  inputs_projects_mock,
  inputs_work_experience_mock,
  populateData,
} from "../../pages/Home/home.helper";
import { updateAllInputs } from "../../redux/homeSlice/home.slice";

export const SideDrawer = () => {
  const dispatch = useDispatch();

  const { showSideDrawer } = useSelector((st) => st.master);

  const onClose = () => {
    dispatch(changeSideDrawer(false));
  };

  const onClickAutofill = () => {
    const newInputs = populateData();
    dispatch(updateAllInputs(newInputs));
    onClose();
  };

  const onChickClear = () => {
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

  return (
    <StyledCtn>
      <StyledSideDrawer open={showSideDrawer}>
        <Button variant="small" onClick={onClose}>
          Close
        </Button>
        <Button onClick={onClickAutofill}>Auto Fill</Button>
        <Button onClick={onChickClear}>Clear</Button>
      </StyledSideDrawer>
      <Backdrop show={showSideDrawer} onClick={onClose} />
    </StyledCtn>
  );
};

const StyledCtn = styled.div``;

const StyledSideDrawer = styled.div`
  position: fixed;
  top: 0;
  right: ${(props) => (props.open ? "0" : "-320px")};
  bottom: 0;
  width: 320px;
  max-width: 100vh;
  background: #ffffff;
  z-index: 1000;
  padding: 60px 20px;
  box-sizing: border-box;
  overflow-x: hidden;
  transition: right 0.4s ease;

  display: flex;
  flex-direction: column;
`;
