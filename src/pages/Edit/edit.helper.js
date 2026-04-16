import { toHyphenated, toTitleCase } from "../../uitls/utils";

export const BASIC_INPUTS_META = [
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

export const SKILLS_INPUTS_META = [
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
    name: "cloud",
    label: "Cloud",
    placeholder: "Cloud",
    type: "text",
    value: "",
  },
  {
    name: "devOps",
    label: "DevOps",
    placeholder: "DevOps",
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

export const NEW_SKILLS_INPUTS_META = [
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

export const EDUCATION_INPUTS_META = [
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

export const WORK_EXP_INPUTS_META = [
  {
    name: "projectName",
    label: "Project",
    placeholder: "Project",
    type: "text",
    value: "",
  },
  {
    name: "projectType",
    label: "Project Type",
    placeholder: "If contribution or own application...",
    type: "text",
    value: "",
  },
  {
    name: "duration",
    label: "Duration / Date of project",
    placeholder: "Duration",
    type: "text",
    value: "",
  },
  {
    name: "description",
    label: "Description",
    placeholder: "Description",
    type: "bulletPoints",
    rows: 2,
    value: [],
  },
  {
    name: "github",
    label: "Github",
    placeholder: "Github Repo",
    type: "text",
    value: "",
  },
  {
    name: "deployedURL",
    label: "URL (Deployed)",
    placeholder: "Deoployed URL",
    type: "text",
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

export const PROJECT_INPUTS_META = [
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
    type: "bulletPoints",
    value: [],
  },
  {
    name: "rolesAndResponsibilities",
    label: "Roles and Responsibilities",
    placeholder: "Roles and Responsibilities",
    type: "bulletPoints",
    value: [],
  },
];

export const autoPopulateInputs = () => {
  const res = {
    basicDetails: {
      name: "Syed Abdul Wahid",
      designation: "Senior Full stack developer",
      mail: "abdulwahid.syed@outlook.com",
      phone: "+91 9581122911",
      linkedinProfile: "www.linkedin.com/in/abdul-wahid-syed-8b5728265",
      githubProfile: "https://github.com/abdulwahidsyed",
      description:
        "With 8 years of software development experience, I have contributed to projects small and large, demonstrating my professionalism with extremely high quality and reliability. Being a professional developer means understanding all the requirements of a project and finding the best way to implement it to a high-quality standard. As a senior full-stack engineer, I am proficient with modern web languages and I always focus on project structures and coding style, and etc.  I'm considering myself one of the most qualified engineers. MERN",
    },
    commonSkills: {
      Frontend:
        "React, Redux, RTK, React Router, JavaScript, HTML, CSS, Angular, Jest, React Testing Library RTL, D3",

      Backend: "Node.js, Express.js",

      Security:
        "Session Management (Redis), JWT, OAuth 2.0, IBM ISAM, Ping Identity, OIDC (familiar), SSO",

      Databases: "Postgres, Redis, MongoDB, MySQL",

      Cloud:
        "AWS (EC2, Lambda, S3, CloudFront, ElastiCache, CloudWatch, KMS), Azure, GCP (familiar), Akamai CDN",

      "API and Communication": "REST, WebSockets, GraphQL (familiar)",

      Monitoring: "New Relic, Kibana, Grafana",

      "CI/CD Tools":
        "TeamCity, Jenkins, Github Actions, JFrog Artifactory, AWS CodePipeline, CodeBuild",

      "Infrastructure (IAC)": "Terraform, Cloud Formation",

      "Container and Orchestration": "Docker, Kubernetes (K8s)",

      developmentTools: "Scrum/Agile, Jira, GitHub, GitLab, Figma, Confluence",
      AI: "github copilot",
    },

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
        projectName: "Citco",
        role: "Senior Full Stack Engineer",
        companyName: "Diamondpick",
        projectDuration: "08-08-2024 to Present",
        skillsUsed: [
          "Frontend: React, RTK(Redux Tool kit), MUI Component library, jest, RTL(testing)",
          "Backend: Node.js, Express.js, Python",
          "Databases: Postgres, OracleDb",
          "Cloud: AWS",
          "DevOps: AWS",
          "DevelopmentTools: Scrum/Agile, Jira, github, Figma, Confluence",
        ],
      },
      {
        projectName: "John Hancock - CSL(Customer Secure Login)",
        role: "Senior Full Stack Engineer",
        companyName: "Criska Business Consulting PVT LTD",
        projectDuration: "01-09-2023 to 31-07-2024",
        skillsUsed: [
          "Frontend: React, RTK(Redux Tool kit), MUX Component library(Storybook), jest, RTL(testing), Adobe analytics",
          "Backend: Node.js, Express.js, JWT Authentication, Authorization, Kafka, Kibana, Grafana, NewRelic",
          "Databases: MY SQL",
          "Cloud: AWS, Azure",
          "DevOps: CI/CD, Docker, Kubernetes",
          "DevelopmentTools: Scrum/Agile, Jira, github, Figma, Confluence",
        ],
        projectDescription: [
          "Single Sign On, Multi-tenant, RBAC, AI Powered",
          "Built a Monorepo with React & node.js , application from scratch for Manulife's Insurance application. Integrated eslint, husky, lint-staged, prettier, adobe datalayer etc and combined of these tools, a maintainable, scallable, high quality frontend application got created.",
          "Added AI chatbot using ChatGPT's api",
          "Contributed to add tools like eslint, husky, likt-staged, prettier and added a layer of security to the code that is going to be committed.",
          "Built a robust architectural setup excellent for saclability, maintability and performance.",
        ],
        rolesAndResponsibilities: [
          "Worked for Code Quality and Technical Excellence to achieve and maintain high code quality and overall technical abilities to perform code reviews and help catch architectural and technical issues early in the process.",
          "Application flows, documentations and integrated technology's demos were getting performed through out the whole crew members",
          "Collaborating with the team to understand project requirements and designing software solutions that meet those requirements.",
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
          "Frontend: React, Superset's opensource Micro Frontend, jest, RTL(testing), html, css, javascript",
          "Packages: d3 js, Leaflet js, Chart js",
        ],
        projectDescription: [
          "Worked on a new product which is based on superset, an opensource micro-frontend application. This application is all about creating charts and maps based on existing superset's elements and components with the theming of CGI.",
        ],
        rolesAndResponsibilities: [
          "Collaborating with the team to understand project requirements and designing software solutions that meet those requirements.",
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
          "Frontend: React, Redux, Router,  MUI(material UI), jest, RTL(testing), html, css, javascript",
          "Backend: Node.js, express.js, no-sql",
          "Development Tools: Docker, github, git, vs-code",
        ],
        projectDescription: [
          "A Network visual application built with Dashboards, Realtime Voice Call Quality Analysis, Admin Panels adding visual understanding tools like charts, maps and graphs. Combined with these tools we created an excellent application which showcases the usage of the network by all over the country.",
          "Contributed to modify the current components to be as re-usable and generated a much easy to use components overall the application.",
        ],
        rolesAndResponsibilities: [
          "Collaborating with the team to understand project requirements and designing software solutions that meet those requirements.",
          "Writing clean, well-documented and maintainable code that follows industry best practices and standards.",
          "Testing and validating software solutions to ensure that they meet quality standards and functional requirements.",
        ],
      },
      {
        projectName: "W-360 (Warehouse 360)",
        role: "Frontend Engineer",
        companyName: "Keystack Technologies PVT LTD",
        projectDuration: "10-01-2019 to 4-02-2021",
        skillsUsed: [
          "Frontend: React, Bootstrap, jest, Enzyme, html, css, javascript",
        ],
        projectDescription: [
          "A Warehouse application that represents all the details about the working staff of the company. The modules built were Login page, User's list, User's authorization's page, Physical and Cycle count pages, User's management, etc.",
        ],
        rolesAndResponsibilities: [
          "Collaborating with the team and the following the lead on accomplis the requirements on time.",
          "Demonstrating the completed tasks with the whole crew.",
          "Following the sprint timelines to be transparent about the tasks we were working on.",
        ],
      },
      {
        projectName: "Client HP Services",
        role: "Frontend Engineer",
        companyName: "Keystack Technologies PVT LTD",
        projectDuration: "10-03-2018 to 9-01-2019",
        skillsUsed: [
          "Frontend: React, Bootstrap, jest, Enzyme, html, css, javascript",
        ],
        projectDescription: [
          "Built a Frontend react application to serve the client requirements for the Printer pages. Built a number of multiple React pages in one single application and renders dynamically. These are for usage in HP printer web applications.",
        ],
        rolesAndResponsibilities: [
          "Collaborating with the team and the following the lead on accomplis the requirements on time.",
          "Demonstrating the completed tasks with the whole crew.",
          "Following the sprint timelines to be transparent about the tasks we were working on.",
        ],
      },
    ],
    workExperience: [
      {
        projectName: "Resume Generator",
        projectType: "Portfolio",
        duration: "",
        description: [
          "A React web application built to generate resumes with multiple themes for the users. A unique set of css desined was selected with multiple application theming. Included features are Authentication, Inputs for General Info, Skills, Projects, Education, Theming, Resume theming etc.",
          "Built beautifully with different types of resume themes.",
          "Used a selective tools or packages like styled-components, Redux Tool Kit.",
        ],
        github: "https://github.com/abdulwahidsyed/portfolio",
        deployedURL: "https://resume-generator-ashy.vercel.app/generator",
        bulletPointsWorkExp: [],
      },
    ],
  };

  const skillsInputs = Object.keys(res.commonSkills).map((key, i) => {
    return {
      name: toHyphenated(key),
      label: toTitleCase(key),
      placeholder: key,
      type: "text",
      value: res.commonSkills[key],
    };
  });

  const dat = {
    basicInputs: mapHelper([...BASIC_INPUTS_META], res.basicDetails),
    skillsInputs,
    // skillsInputs: generateMatrix(res.commonSkills, [
    //   ...SKILLS_INPUTS_META,
    // ]),
    educationInputs: generateMatrix(res.education, [...EDUCATION_INPUTS_META]),
    projectInputs: generateMatrix(res.projects, [...PROJECT_INPUTS_META]),
    workExpInputs: generateMatrix(res.workExperience, [
      ...WORK_EXP_INPUTS_META,
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
    basicDetails: mapPayloadHelper(dat.basicInputs),
    commonSkills: mapPayloadHelper(dat.skillsInputs),
    education: mapMatrixHelper(dat.educationInputs),
    projects: mapMatrixHelper(dat.projectInputs),
    workExperience: mapMatrixHelper(dat.workExpInputs),
  };

  return obj;
};
