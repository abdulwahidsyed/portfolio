import { createSlice } from "@reduxjs/toolkit";
import {
  BASIC_INPUTS_META,
  SKILLS_INPUTS_META,
  NEW_SKILLS_INPUTS_META,
  EDUCATION_INPUTS_META,
  WORK_EXP_INPUTS_META,
  PROJECT_INPUTS_META,
} from "../../pages/Edit/edit.helper";

const initialState = {
  basicInputs: [...BASIC_INPUTS_META],
  skillsInputs: [...SKILLS_INPUTS_META],
  educationInputs: [[...EDUCATION_INPUTS_META]],
  workExpInputs: [[...WORK_EXP_INPUTS_META]],
  projectInputs: [[...PROJECT_INPUTS_META]],
  visibleComponent: "",
  summary: null,
};

const inputsSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateAllInputs: (state, action) => {
      Object.keys(action.payload).forEach((key) => {
        state[key] = action.payload[key];
      });
    },
    updateBasicInputs: (state, action) => {
      state.basicInputs = action.payload;
    },

    // new skills Start
    addNewSkill: (state, action) => {
      state.skillsInputs.push(action.payload);
    },
    removeSkill: (state, action) => {
      const index = action.payload;
      state.skillsInputs.splice(index, 1);
    },
    updateSkills: (state, action) => {
      state.skillsInputs = action.payload;
    },
    // new skills End

    // projects start
    addNewProject: (state, action) => {
      state.projectInputs.push([...PROJECT_INPUTS_META]);
    },
    removeProject: (state, action) => {
      const index = action.payload;
      state.projectInputs.splice(index, 1);
    },
    updateNewProject: (state, action) => {
      state.projectInputs = action.payload;
    },
    // projects end

    // work experience start
    addWorkExperience: (state, action) => {
      state.workExpInputs.push([...WORK_EXP_INPUTS_META]);
    },
    removeWorkExperience: (state, action) => {
      const index = action.payload;
      state.workExpInputs.splice(index, 1);
    },
    updateWorkExperience: (state, action) => {
      state.workExpInputs = action.payload;
    },
    // work experience end

    // new Education Start
    addNewEducation: (state, action) => {
      state.educationInputs.push([...EDUCATION_INPUTS_META]);
    },
    updateEducationInputs: (state, action) => {
      state.educationInputs = action.payload;
    },
    removeEducation: (state, action) => {
      const index = action.payload;
      state.educationInputs.splice(index, 1);
    },
    updateVisibleComponent: (state, action) => {
      state.visibleComponent = action.payload;
    },
    // new Education ends

    // generateSummary
    generateSummary: (state, action) => {
      state.summary = action.payload;
    },
  },
});

export const inputsSelector = (st) => st.inputs;

export const {
  updateAllInputs,

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
  generateSummary,
} = inputsSlice.actions;

export default inputsSlice.reducer;
