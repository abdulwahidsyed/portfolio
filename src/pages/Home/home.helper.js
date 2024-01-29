export const inputs_basic_mock = [
  {
    name: "name",
    label: "Name",
    placeholder: "Name",
    type: "text",
    value: "",
  },
  {
    name: "designation",
    label: "Designation",
    placeholder: "Designation",
    type: "text",
    value: "",
  },

  {
    name: "mail",
    label: "Mail",
    placeholder: "Mail",
    type: "text",
    value: "",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Phone",
    type: "text",
    value: "",
  },
  {
    name: "linkedinProfile",
    label: "Linkedin",
    placeholder: "Linkedin",
    type: "text",
    value: "",
  },
  {
    name: "githubProfile",
    label: "Github",
    placeholder: "Github",
    type: "text",
    value: "",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Description",
    type: "textarea",
    value: "",
  },
  // {
  //   name: "date",
  //   label: "",
  //   placeholder: "Date",
  //   type: "date",
  //   isError: false,
  //   value: "",
  // },
];

export const inputs_common_skills_mock = [
  {
    name: "frontend",
    label: "Frontend",
    placeholder: "Frontend",
    type: "text",
    value: "",
  },
  {
    name: "backend",
    label: "Backend",
    placeholder: "Backend",
    type: "text",
    value: "",
  },
  {
    name: "databases",
    label: "Databases",
    placeholder: "Databases",
    type: "text",
    value: "",
  },
  {
    name: "developmentTools",
    label: "Development Tools",
    placeholder: "Development Tools",
    type: "text",
    value: "",
  },
];

export const inputs_new_skills_mock = [
  {
    name: "skillHeading",
    label: "Skill Heading",
    placeholder: "Skill Heading",
    type: "text",
    value: "",
  },
  {
    name: "skillDetails",
    label: "Skill Details",
    placeholder: "Skill Details",
    type: "text",
    value: "",
  },
];

export const inputs_education_mock = [
  {
    name: "education",
    label: "Education",
    placeholder: "Education",
    type: "text",
    value: "",
  },
  {
    name: "collegeName",
    label: "College Name",
    placeholder: "College Name",
    type: "text",
    value: "",
  },
  {
    name: "duration",
    label: "Duration Years",
    placeholder: "Duration Years",
    type: "text",
    value: "",
  },
  {
    name: "collegeAddress",
    label: "College Address",
    placeholder: "College Address",
    type: "text",
    value: "",
  },
];

export const inputs_work_experience_mock = [
  {
    name: "role",
    label: "Role",
    placeholder: "Role",
    type: "text",
    value: "",
  },
  {
    name: "duration",
    label: "Duration",
    placeholder: "Duration",
    type: "text",
    value: "",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Description",
    type: "textarea",
    rows: 2,
    value: "",
  },
  {
    name: "bulletPointsWorkExp",
    label: "Bullet Points",
    placeholder: "Bullet Points",
    type: "bulletPoints",
    value: [],
  },
];

export const inputs_projects_mock = [
  {
    name: "projectName",
    label: "Project Name",
    placeholder: "Project Name",
    type: "text",
    value: "",
  },
  {
    name: "role",
    label: "Role",
    placeholder: "Role",
    type: "text",
    value: "",
  },
  {
    name: "projectDuration",
    label: "Project Duration",
    placeholder: "Jan-2020 - Dec 2021",
    type: "text",
    value: "",
  },
  {
    name: "projectDuration",
    label: "Project Duration",
    placeholder: "Jan-2020 - Dec 2021",
    type: "text",
    value: "",
  },
  {
    name: "skillsUsed",
    label: "Skills Used",
    placeholder: "Bullet Points",
    type: "bulletPoints",
    value: ["Frontend: ", "Backend: ", "Databases: ", "Development Tools: "],
  },
  {
    name: "projectDescription",
    label: "Project Description",
    placeholder: "Description",
    type: "textarea",
    value: "",
  },
  {
    name: "rolesAndResponsibilitios",
    label: "Roles and Responsibilities",
    placeholder: "Roles and Responsibilities",
    type: "bulletPoints",
    value: [],
  },
];

export const populateData = () => {
  const res = {
    basicDetails: {
      name: "Syed Abdul Wahid",
      designation: "MERN stack developer",
      mail: "abdulwahid.syed@outlook.com",
      phone: "+91 9581122911",
      linkedinProfile: "",
      githubProfile: "https://github.com/abdulwahidsyed",
      description: "Need to add...",
    },
    commonSkills: [
      {
        frontend: "React, Angular, javascript, html, css",
        backend: "Node.js, Express.js, graphQL",
        databases: "MongoDB, SQL",
        developmentTools: "Jira, github, gitlab, figma",
      },
    ],
  };

  const dat = {
    inputsBasic: mapHelper([...inputs_basic_mock], res.basicDetails),
    inputsSkills: generateMatrix(res.commonSkills, [
      ...inputs_common_skills_mock,
    ]),
  };
  return dat;
};

const mapHelper = (arr, dataObj) => {
  return arr.map((input) => ({
    ...input,
    value: dataObj[input.name] || input.value,
  }));
};

const generateMatrix = (matrixArr, mock) => {
  return matrixArr.map((resObj) => {
    const inputArr = mapHelper(mock, resObj);
    return inputArr;
  });
};
