export const inputs_basic_mock = [
  {
    name: "name",
    label: "Name",
    placeholder: "Name",
    type: "text",
    value: "",
    isRequired: true,
  },
  {
    name: "designation",
    label: "Designation",
    placeholder: "Designation",
    type: "text",
    value: "",
    isRequired: true,
  },

  {
    name: "mail",
    label: "Mail",
    placeholder: "Mail",
    type: "text",
    value: "",
    isRequired: true,
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Phone",
    type: "text",
    value: "",
    isRequired: true,
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
  {
    name: "percentage",
    label: "Percentage",
    placeholder: "Address",
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
    name: "companyName",
    label: "Company name",
    placeholder: "Add which company you worked on this project",
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
    name: "rolesAndResponsibilities",
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
      designation: "MERN stack developer (React, Node.js)",
      mail: "abdulwahid.syed@outlook.com",
      phone: "+91 9581122911",
      linkedinProfile: "www.linkedin.com/in/abdul-wahid-syed-8b5728265",
      githubProfile: "https://github.com/abdulwahidsyed",
      description:
        "With 5+ years of software development experience, I have contributed to projects small and large, demonstrating my professionalism with extremely high quality and reliability. Being a professional developer means understanding all the requirements of a project and finding the best way to implement it to a high-quality standard. As a senior full-stack engineer, I am proficient with modern web languages and I always focus on project structures and coding style, and etc.  I'm considering myself one of the most qualified engineers.",
    },
    commonSkills: [
      {
        frontend:
          "React, Redux, RTK, javascript, html, css, Angular, jest, RTL",
        backend: "Node.js, Express.js, graphQL",
        databases: "MongoDB, SQL",
        developmentTools: "Jira, github, gitlab, figma",
      },
    ],
    education: [
      {
        education: "Diploma",
        collegeName: "AL-Huda Polytechnic college ",
        duration: "2012-2015",
        collegeAddress: "Nellore, Andhra Pradesh, India",
        percentage: "82%",
      },
      {
        education: "Secondary (X)",
        collegeName: "Sri Vani English Medium",
        duration: "2012",
        collegeAddress: "Nellore, Andhra Pradesh, India",
        percentage: "87%",
      },
    ],
    projects: [
      {
        projectName: "CSL(Customer Secure Login)",
        role: "Senior Full Stack Engineer",
        companyName: "Criska Business Consulting PVT LTD",
        projectDuration: "01-09-2023 to Present",
        skillsUsed: [
          "Frontend: React, Redux Tool kit, MUX-component library, jest, RTL(testing)",
          "Backend: Node.js, Express.js",
          "Databases: SQL",
        ],
        projectDescription:
          "Created a React & node.js application from scratch for Manulife's Insurance application for the client johnhancock. Integrated eslint, husky, lint-staged, prettier, adobe datalayer etc and combined of these tools, a maintainable, scallable, high quality frontend application got created",
        rolesAndResponsibilities: [
          "Code reviews, Application flow and integrated technology's demos were getting performed through out the whole crew members",
          "Collaborating with team members to understand project requirements and designing software solutions that meet those requirements.",
          "Writing clean, well-documented and maintainable code that follows industry best practices and standards.",
          "Testing and validating software solutions to ensure that they meet quality standards and functional requirements.",
          "Developing code structures that are agile and easy to read and understand.",
        ],
      },
      {
        projectName: "CGI superset",
        role: "Senior Software Engineer",
        companyName:
          "CGI Information Systems and Management Consultants Pvt. Ltd.",
        projectDuration: "19-09-2022 to 25-08-2023",
        skillsUsed: [
          "React, Superset's opensource Micro Frontend, jest, RTL(testing), html, css, javascript",
        ],
        projectDescription:
          "Worked on a new product which is based on superset, an opensource micro-frontend application. This application is all about creating charts and maps based on existing superset's elements and components with the theming of CGI",
        rolesAndResponsibilities: [
          "Collaborating with team members to understand project requirements and designing software solutions that meet those requirements.",
          "Writing clean, well-documented and maintainable code that follows industry best practices and standards.",
          "Testing and validating software solutions to ensure that they meet quality standards and functional requirements.",
          "Developing code structures that are agile and easy to read and understand.",
        ],
      },
      {
        projectName: "Warehouse Network App",
        role: "Frontend Engineer",
        companyName: "Keystack Technologies PVT LTD",
        projectDuration: "05-02-2021 to 18-09-2022",
        skillsUsed: [
          "React, RTK(Redux Toolkit), MUI(material UI), jest, RTL(testing), html, css, javascript",
        ],
        projectDescription:
          "A Warehouse application that shows..., Need to update",
        rolesAndResponsibilities: [
          "Code reviews, Application flow and integrated technology's demos were getting performed through out the whole crew members",
          "Collaborating with team members to understand project requirements and designing software solutions that meet those requirements.",
          "Writing clean, well-documented and maintainable code that follows industry best practices and standards.",
          "Testing and validating software solutions to ensure that they meet quality standards and functional requirements.",
          "Developing code structures that are agile and easy to read and understand.",
        ],
      },
      {
        projectName: "W-360 (Warehouse 360)",
        role: "Frontend Engineer",
        companyName: "Keystack Technologies PVT LTD",
        projectDuration: "10-01-2019 to 4-02-2021",
        skillsUsed: ["React, Bootstrap, jest, Enzyme, html, css, javascript"],
        projectDescription:
          "A Warehouse application that shows..., Need to update",
        rolesAndResponsibilities: [],
      },
      {
        projectName: "",
        role: "Frontend Engineer",
        companyName: "Keystack Technologies PVT LTD",
        projectDuration: "10-03-2018 to 9-01-2019",
        skillsUsed: ["React, Bootstrap,  jest, Enzyme, html, css, javascript"],
        projectDescription: "",
        rolesAndResponsibilities: [],
      },
    ],
    workExperience: [],
  };

  const dat = {
    inputsBasic: mapHelper([...inputs_basic_mock], res.basicDetails),
    inputsSkills: generateMatrix(res.commonSkills, [
      ...inputs_common_skills_mock,
    ]),
    inputsEducation: generateMatrix(res.education, [...inputs_education_mock]),
    inputsProjects: generateMatrix(res.projects, [...inputs_projects_mock]),
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

const mapPayloadHelper = (dat) => {
  return dat.reduce((acu, cur) => {
    const k = { ...acu };
    k[cur.name] = cur.value;
    return k;
  }, {});
};

const mapMatrixHelper = (dat) => {
  return dat.map((el) => mapPayloadHelper(el));
};

export const generateSummaryHelper = (dat) => {
  const obj = {
    basicDetails: mapPayloadHelper(dat.inputsBasic),
    commonSkills: mapMatrixHelper(dat.inputsSkills),
    education: mapMatrixHelper(dat.inputsEducation),
    projects: mapMatrixHelper(dat.inputsProjects),
    workExperience: mapMatrixHelper(dat.inputsWorkExperience),
  };

  return obj;
};

// keystack from 10-03-2018 to 31-08-2022 ----- 4years 5months 30days
