import { createSlice } from "@reduxjs/toolkit";
import {
  BASIC_INPUTS_META,
  SKILLS_INPUTS_META,
  EDUCATION_INPUTS_META,
  WORK_EXP_INPUTS_META,
  PROJECT_INPUTS_META,
  BASIC_INPUT,
  KEY_ACHEIVEMENTS_META,
  ORG_INPUTS_META,
} from "../../pages/Edit/edit.helper";

const initialState = {
  basicInputs: [...BASIC_INPUTS_META],
  skillsInputs: [...SKILLS_INPUTS_META],
  keyAchievements: { ...KEY_ACHEIVEMENTS_META },
  educationInputs: [[...EDUCATION_INPUTS_META]],
  workExpInputs: [[...WORK_EXP_INPUTS_META]],
  projectInputs: [[...PROJECT_INPUTS_META]],
  orgInputs: [...ORG_INPUTS_META],
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

    // _____________ new skills Start ________________________________________________
    addNewSkillField: (state, action) => {
      const k = {
        ...BASIC_INPUT,
        name: `new-input-${state.skillsInputs.length + 1}`,
        label: "New Skill",
      };
      state.skillsInputs.push(k);
    },
    removeSkill: (state, action) => {
      const index = action.payload;
      state.skillsInputs.splice(index, 1);
    },
    updateSkills: (state, action) => {
      state.skillsInputs = action.payload;
    },

    // _____________ keyAchievements start ________________________________________________
    updateKeyAcheivements: (state, action) => {
      state.keyAchievements.value = action.payload;
    },

    // _____________ organizations ________________________________________________
    addNewOrg: (state, action) => {
      const lastOrgId = state.orgInputs[state.orgInputs.length - 1];
      const newOrg = {
        ...ORG_INPUTS_META,
        id: lastOrgId + 1,
      };
      debugger;
      state.orgInputs.push(newOrg);
    },
    removeOrg: (state, action) => {
      const index = action.payload;
      debugger;
      state.orgInputs.splice(index, 1);
    },
    updateOrg: (state, action) => {
      debugger;
      state.orgInputs = action.payload;
    },

    // _____________ projects ________________________________________________
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

    // _____________ Work Experience ________________________________________________
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

    // _____________ new Education ________________________________________________
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

    // _____________ generateSummary ________________________________________________
    generateSummary: (state, action) => {
      state.summary = action.payload;
    },
  },
});

export const inputsSelector = (st) => st.inputs;

export const {
  updateAllInputs,

  updateBasicInputs,

  addNewSkillField,
  removeSkill,
  updateSkills,

  updateKeyAcheivements,

  addNewOrg,
  removeOrg,
  updateOrg,

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
