import { createSlice } from "@reduxjs/toolkit";
import {
  inputs_basic_mock,
  inputs_common_skills_mock,
  inputs_new_skills_mock,
  inputs_education_mock,
  inputs_work_experience_mock,
  inputs_projects_mock,
} from "../../pages/Home/home.helper";

const initialState = {
  inputsBasic: [...inputs_basic_mock],
  inputsSkills: [[...inputs_common_skills_mock]],
  inputsEducation: [[...inputs_education_mock]],
  inputsWorkExperience: [[...inputs_work_experience_mock]],
  inputsProjects: [[...inputs_projects_mock]],
  visibleComponent: "",
};

const homeSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateBasicInputs: (state, action) => {
      state.inputsBasic = action.payload;
    },

    // new skills Start
    addNewSkill: (state, action) => {
      state.inputsSkills.push([...inputs_new_skills_mock]);
    },
    removeSkill: (state, action) => {
      const index = action.payload;
      state.inputsSkills.splice(index, 1);
    },
    updateSkills: (state, action) => {
      state.inputsSkills = action.payload;
    },
    // new skills End

    // projects start
    addNewProject: (state, action) => {
      state.inputsProjects.push([...inputs_projects_mock]);
    },
    removeProject: (state, action) => {
      const index = action.payload;
      state.inputsProjects.splice(index, 1);
    },
    updateNewProject: (state, action) => {
      state.inputsProjects = action.payload;
    },
    // projects end

    // work experience start
    addWorkExperience: (state, action) => {
      state.inputsWorkExperience.push([...inputs_work_experience_mock]);
    },
    removeWorkExperience: (state, action) => {
      const index = action.payload;
      state.inputsWorkExperience.splice(index, 1);
    },
    updateWorkExperience: (state, action) => {
      state.inputsWorkExperience = action.payload;
    },
    // work experience end

    // new Education Start
    addNewEducation: (state, action) => {
      state.inputsEducation.push([...inputs_education_mock]);
    },
    updateEducationInputs: (state, action) => {
      state.inputsEducation = action.payload;
    },
    removeEducation: (state, action) => {
      const index = action.payload;
      state.inputsEducation.splice(index, 1);
    },
    updateVisibleComponent: (state, action) => {
      state.visibleComponent = action.payload;
    },
    // new Education ends
  },
});

export const {
  updateBasicInputs,

  addNewSkill,
  removeSkill,
  updateSkills,

  addNewProject,
  removeProject,
  updateNewProject,

  addNewEducation,
  updateEducationInputs,
  removeEducation,

  addWorkExperience,
  removeWorkExperience,
  updateWorkExperience,

  updateVisibleComponent,
} = homeSlice.actions;
export default homeSlice.reducer;
