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

export const BASIC_INPUT = {
  name: "name",
  label: "Name",
  placeholder: "Name",
  type: "text",
  value: "",
};

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

export const KEY_ACHEIVEMENTS_META = {
  name: "keyAchievements",
  label: "Key Acheivements",
  placeholder: "Key Acheivements",
  type: "textarea",
  value: "",
};

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
    name: "duration",
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

export const ORG_INPUTS_META = [
  {
    id: 1,
    inputs: [
      {
        name: "companyName",
        label: "Company name",
        placeholder: "Add a company",
        type: "text",
        value: "",
      },
      {
        name: "duration",
        label: "Duration",
        placeholder: "Duration you worked in this company",
        type: "text",
        value: "",
      },
    ],
  },
];

export const autoPopulateInputs = () => {
  const res = staffEngineer;

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
    keyAchievements: { ...KEY_ACHEIVEMENTS_META, value: res.keyAchievements },
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

const generateMatrix = (matrixArr = [], mock) => {
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
    keyAchievements: dat.keyAchievements.value,
  };

  return obj;
};

const mainRes = {
  basicDetails: {
    name: "Syed Abdul Wahid",
    designation: "Senior Full Stack Engineer",
    mail: "abdulwahid.syed@outlook.com",
    phone: "+91 9581122911",
    linkedinProfile: "https://www.linkedin.com/in/abdul-wahid-syed-8b5728265",
    githubProfile: "https://github.com/abdulwahidsyed",
    description:
      "Senior Full Stack Engineer with 8+ years of experience building scalable, secure, and high-performance web applications using React, Node.js, and cloud platforms (AWS/Azure). Proven expertise in designing multi-tenant architectures, authentication systems (SSO, OAuth2, JWT), and event-driven systems. Strong experience in CI/CD, microservices, and cloud-native deployments with a focus on performance, reliability, and maintainability.",
  },

  commonSkills: {
    // "Core Skills":
    //   "React.js, Node.js, JavaScript, TypeScript, PostgreSQL, Redis, AWS",

    Frontend:
      "React, Redux Toolkit (RTK), React Router, HTML, CSS, Angular, D3",

    Backend: "Node.js, Express.js, REST APIs, WebSockets, GraphQL (familiar)",

    "Cloud & DevOps":
      "AWS (EC2, S3, CloudFront, Lambda, ElastiCache, CloudWatch, KMS), Azure, Docker, Kubernetes, CI/CD (TeamCity, Jenkins)",

    Security:
      "Session Management (Redis), JWT, OAuth 2.0, SSO, OIDC, IBM ISAM, Ping Identity",

    Databases: "PostgreSQL, MySQL, MongoDB, Redis",

    Infrastructure: "Terraform, CloudFormation",

    Tools: "Jira, Confluence, GitHub, GitLab, Figma, New Relic",
  },

  keyAchievements:
    "Designed multi-tenant SaaS architecture supporting scalable enterprise applications. \nBuilt secure authentication systems using SSO, OAuth2, JWT, and Redis-based session management. \nImproved API performance and reduced latency by up to 30% through caching and query optimization. \nImplemented CI/CD pipelines reducing deployment time by ~40%. \nDeployed cloud-native applications on AWS ensuring scalability and high availability. \nDesigned and developed scalable, reusable UI component libraries improving development efficiency. \nBuilt responsive and high-performance user interfaces using React, reducing load time and improving UX.",
  projects: [
    {
      projectName: "Event Driven FSRR Platform",
      role: "Senior Full Stack Engineer",
      companyName: "Citco",
      duration: "June 2025 - Present",
      skillsUsed: [
        "React, RTK, Node.js, Express.js, Python",
        "PostgreSQL, OracleDB",
        "AWS",
      ],
      projectDescription: [
        "Designed and implemented an event-driven architecture for real-time ingestion and routing of external event data.",
        "Developed modular handlers and dispatchers to process high-volume event streams efficiently.",
        "Built payload transformation layers to map external events into internal domain-driven models.",
        "Integrated notification and workflow systems to automate deliverable lifecycle processes.",
        "Improved system scalability and reduced processing latency through optimized event handling.",
      ],
    },

    {
      projectName: "John Hancock - CSL (Customer Secure Login)",
      role: "Senior Full Stack Engineer",
      companyName: "Criska Business Consulting Pvt Ltd",
      duration: "Sep 2023 - May 2025",
      skillsUsed: [
        "React, RTK, Node.js, Express.js",
        "JWT, OAuth2, SSO, New Relic",
        "Azure, Docker, Kubernetes",
      ],
      projectDescription: [
        "Built a secure, scalable multi-tenant authentication platform supporting SSO and identity workflows.",
        "Designed and implemented monorepo architecture for frontend and backend applications.",
        "Integrated enterprise-grade authentication using OAuth2, JWT, and identity providers (Ping, ISAM).",
        "Improved code quality and maintainability using ESLint, Husky, lint-staged, and Prettier.",
        "Collaborated in designing scalable architecture for high-availability login systems.",
      ],
      rolesAndResponsibilities: [
        "Led code quality initiatives and performed architectural reviews.",
        "Designed scalable application flows and reusable component structures.",
        "Mentored team members and conducted technical discussions and demos.",
        "Worked closely with cross-functional teams to deliver secure and high-performance solutions.",
      ],
    },

    {
      projectName: "CGI Superset Platform",
      role: "Senior Software Engineer",
      companyName:
        "CGI Information Systems and Management Consultants Pvt. Ltd.",
      duration: "Sep 2022 - Aug 2023",
      skillsUsed: [
        "React, Micro Frontend Architecture",
        "D3.js, Leaflet.js, Chart.js",
      ],
      projectDescription: [
        "Developed a micro-frontend-based analytics platform built on Apache Superset.",
        "Implemented interactive dashboards and visualization tools for data-driven insights.",
        "Customized and extended open-source components to align with enterprise requirements.",
      ],
    },

    {
      projectName: "Warehouse Network App",
      role: "Frontend Engineer",
      companyName: "Keystack Technologies Pvt Ltd",
      duration: "Feb 2021 - Sep 2022",
      skillsUsed: ["React, Redux, Node.js", "Docker, Git"],
      projectDescription: [
        "Built real-time dashboards for network monitoring and voice quality analysis.",
        "Developed reusable UI components to improve development efficiency and consistency.",
      ],
    },

    {
      projectName: "W-360 (Warehouse 360)",
      role: "Frontend Engineer",
      companyName: "Keystack Technologies Pvt Ltd",
      duration: "Jan 2019 - Feb 2021",
      skillsUsed: ["React, Redux, Bootstrap"],
      projectDescription: [
        "Developed internal warehouse management modules including user management and inventory tracking.",
      ],
    },

    {
      projectName: "Client HP Services",
      role: "Frontend Engineer",
      companyName: "Keystack Technologies Pvt Ltd",
      duration: "Mar 2018 - Jan 2019",
      skillsUsed: ["React, Redux, Bootstrap"],
      projectDescription: [
        "Built dynamic frontend applications for HP printer management interfaces.",
      ],
    },
  ],

  workExperience: [
    {
      projectName: "AI-Powered Smart Event Orchestration Platform",
      description: [
        "Designed AI-powered platform to automate vendor selection, scheduling, and cost estimation for events.",
        "Implemented intelligent vendor recommendation system using embeddings and similarity search.",
        "Built AI scheduling assistant to optimize event timelines and reduce manual planning effort.",
        "Developed cost prediction models using historical event data.",
        "Integrated AI-based log analyzer to detect anomalies and improve system reliability.",
        "Designed scalable backend using event-driven architecture with Node.js.",
        "Improved API response time by ~30% using Redis caching and query optimization.",
      ],
    },

    {
      projectName: "Event Management Platform (Multi-tenant SaaS)",
      description: [
        "Built multi-tenant SaaS platform supporting role-based workflows (Admin, Manager, Vendor).",
        "Designed PostgreSQL schema for tenant isolation and scalable data access.",
        "Implemented secure session-based authentication using Redis.",
        "Designed event-driven workflows and asynchronous processing for real-time updates.",
        "Deployed system on AWS (App Runner, RDS, Redis, S3, CloudFront).",
        "Optimized APIs reducing latency by ~25-30% and improving scalability.",
      ],
      github: "",
      deployedURL: "https://www.helm.events",
    },

    // {
    //   projectName: "Event Management Platform (Multi-tenant SaaS)",
    //   projectType: "Product Development / Startup Initiative",
    //   description: [
    //     "Designed and developed a multi-tenant Event Management platform supporting role-based workflows for Admins, Event Managers, and Vendors.",
    //     "Architected scalable backend services using Node.js and Express with modular service-based architecture.",
    //     "Implemented secure authentication using session-based auth with Redis and explored OAuth2-based flows.",
    //     "Designed PostgreSQL schema with tenant-based isolation and optimized queries for performance and scalability.",
    //     "Integrated real-time features and notifications using event-driven patterns and asynchronous processing.",
    //     "Deployed applications on AWS using services like App Runner, RDS (PostgreSQL), ElastiCache (Redis), S3, and CloudFront.",
    //     "Configured domain, DNS, and SSL using Route 53 and ACM ensuring secure and reliable access.",
    //     "Implemented CI/CD pipelines and optimized deployment workflows for faster releases.",
    //     "Focused on scalability, maintainability, and performance for handling increasing user load.",
    //   ],
    //   github: "",
    //   deployedURL: "https://www.helm.events",
    //   bulletPointsWorkExp: [
    //     "Designed multi-tenant architecture supporting multiple organizations within a single system.",
    //     "Implemented role-based access control (RBAC) for secure data access.",
    //     "Optimized backend APIs and database queries for performance.",
    //     "Handled end-to-end development including frontend, backend, and cloud deployment.",
    //   ],
    // },

    // {
    //   projectName: "Resume Generator",
    //   projectType: "Portfolio",
    //   description: [
    //     "Developed a React-based application for generating customizable resumes with multiple themes.",
    //     "Implemented dynamic form handling and real-time preview features.",
    //     "Built reusable UI components using styled-components and Redux Toolkit.",
    //   ],
    //   github: "https://github.com/abdulwahidsyed/portfolio",
    //   deployedURL: "https://resume-generator-ashy.vercel.app/generator",
    //   bulletPointsWorkExp: [
    //     "Designed responsive UI with multiple theming capabilities.",
    //     "Implemented state management using Redux Toolkit.",
    //   ],
    // },
  ],

  education: [
    {
      education: "Diploma",
      collegeName: "AL-Huda Polytechnic College",
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
};

const mittalRes = {
  basicDetails: {
    name: "Syed Abdul Wahid",
    designation: "Senior Full Stack Engineer",
    mail: "abdulwahid.syed@outlook.com",
    phone: "+91 9581122911",
    linkedinProfile: "https://www.linkedin.com/in/abdul-wahid-syed-8b5728265",
    githubProfile: "https://github.com/abdulwahidsyed",
    description:
      "Senior Full Stack Engineer with 8+ years of experience building scalable, secure, and high-performance web applications using React, Node.js, and cloud platforms (AWS/Azure). Proven expertise in designing multi-tenant architectures, authentication systems (SSO, OAuth2, JWT), and event-driven systems. Strong experience in CI/CD, microservices, and cloud-native deployments with a focus on performance, reliability, and maintainability.",
  },

  commonSkills: {
    // "Core Skills":
    //   "React.js, Node.js, JavaScript, TypeScript, PostgreSQL, Redis, AWS",

    Frontend:
      "React, Redux Toolkit (RTK), React Router, HTML, CSS, Angular, D3",

    Backend:
      "Node.js, Express.js, Python, REST APIs, WebSockets, GraphQL (familiar)",

    "Cloud & DevOps":
      "AWS (EC2, S3, CloudFront, Lambda, ElastiCache, CloudWatch, KMS), Azure, Docker, Kubernetes, CI/CD (TeamCity, Jenkins)",

    Security:
      "Session Management (Redis), JWT, OAuth 2.0, SSO, OIDC, IBM ISAM, Ping Identity",

    Databases: "PostgreSQL, MySQL, MongoDB, Redis",

    Infrastructure: "Terraform, CloudFormation",

    "AI & Automation":
      "OpenAI APIs, AI Workflow Integration, Recommendation Systems, AI-powered Automation, Prompt Engineering, Intelligent Log Analysis",

    "Data Engineering & Processing":
      "ETL Pipelines, PySpark, Data Processing, Batch Processing, Data Transformation, Distributed Data Workflows",

    Tools: "Jira, Confluence, GitHub, GitLab, Figma, New Relic",
  },

  keyAchievements:
    "Designed multi-tenant SaaS architecture supporting scalable enterprise applications. \nBuilt secure authentication systems using SSO, OAuth2, JWT, and Redis-based session management. \nImproved API performance and reduced latency by up to 30% through caching and query optimization. \nImplemented CI/CD pipelines reducing deployment time by ~40%. \nDeployed cloud-native applications on AWS ensuring scalability and high availability. \nDesigned and developed scalable, reusable UI component libraries improving development efficiency. \nBuilt responsive and high-performance user interfaces using React, reducing load time and improving UX.",
  projects: [
    {
      projectName: "Event Driven FSRR Platform",
      role: "Senior Full Stack Engineer",
      companyName: "Citco",
      duration: "June 2025 - Present",
      skillsUsed: [
        "React, RTK, Node.js, Express.js, Python",
        "PostgreSQL, OracleDB",
        "AWS",
      ],
      projectDescription: [
        "Designed and implemented an event-driven architecture for real-time ingestion and routing of external event data.",
        "Developed modular handlers and dispatchers to process high-volume event streams efficiently.",
        "Built payload transformation layers to map external events into internal domain-driven models.",
        "Integrated notification and workflow systems to automate deliverable lifecycle processes.",
        "Improved system scalability and reduced processing latency through optimized event handling.",
      ],
    },

    {
      projectName: "John Hancock - CSL (Customer Secure Login)",
      role: "Senior Full Stack Engineer",
      companyName: "Criska Business Consulting Pvt Ltd",
      duration: "Sep 2023 - May 2025",
      skillsUsed: [
        "React, RTK, Node.js, Express.js",
        "JWT, OAuth2, SSO, New Relic",
        "Azure, Docker, Kubernetes",
      ],
      projectDescription: [
        "Built a secure, scalable multi-tenant authentication platform supporting SSO and identity workflows.",
        "Designed and implemented monorepo architecture for frontend and backend applications.",
        "Integrated enterprise-grade authentication using OAuth2, JWT, and identity providers (Ping, ISAM).",
        "Integrated AI-powered automation features into web applications improving operational efficiency.",
        "Improved code quality and maintainability using ESLint, Husky, lint-staged, and Prettier.",
        "Explored AI-assisted automation for authentication and support-related workflows.",
        "Collaborated in designing scalable architecture for high-availability login systems.",
      ],
      rolesAndResponsibilities: [
        "Led code quality initiatives and performed architectural reviews.",
        "Designed scalable application flows and reusable component structures.",
        "Mentored team members and conducted technical discussions and demos.",
        "Worked closely with cross-functional teams to deliver secure and high-performance solutions.",
      ],
    },

    {
      projectName: "CGI Superset Platform",
      role: "Senior Software Engineer",
      companyName:
        "CGI Information Systems and Management Consultants Pvt. Ltd.",
      duration: "Sep 2022 - Aug 2023",
      skillsUsed: [
        "React, Micro Frontend Architecture",
        "D3.js, Leaflet.js, Chart.js",
      ],
      projectDescription: [
        "Developed a micro-frontend-based analytics platform built on Apache Superset.",
        "Implemented interactive dashboards and visualization tools for data-driven insights.",
        "Customized and extended open-source components to align with enterprise requirements.",
      ],
    },

    {
      projectName: "Warehouse Network App",
      role: "Frontend Engineer",
      companyName: "Keystack Technologies Pvt Ltd",
      duration: "Feb 2021 - Sep 2022",
      skillsUsed: ["React, Redux, Node.js", "Docker, Git"],
      projectDescription: [
        "Built real-time dashboards for network monitoring and voice quality analysis.",
        "Developed reusable UI components to improve development efficiency and consistency.",
      ],
    },

    {
      projectName: "W-360 (Warehouse 360)",
      role: "Frontend Engineer",
      companyName: "Keystack Technologies Pvt Ltd",
      duration: "Jan 2019 - Feb 2021",
      skillsUsed: ["React, Redux, Bootstrap"],
      projectDescription: [
        "Developed internal warehouse management modules including user management and inventory tracking.",
      ],
    },

    {
      projectName: "Client HP Services",
      role: "Frontend Engineer",
      companyName: "Keystack Technologies Pvt Ltd",
      duration: "Mar 2018 - Jan 2019",
      skillsUsed: ["React, Redux, Bootstrap"],
      projectDescription: [
        "Built dynamic frontend applications for HP printer management interfaces.",
      ],
    },
  ],

  workExperience: [
    {
      projectName: "AI-Powered Smart Event Orchestration Platform",
      description: [
        "Designed and developed AI-powered workflows for intelligent event management automation.",
        "Built ETL data processing workflows using PySpark for transforming and processing event-related operational data.",
        "Implemented smart vendor recommendation system using similarity-based ranking and AI-assisted matching.",
        "Built AI scheduling assistant to optimize event timelines and reduce manual planning effort.",
        "Developed AI-driven anomaly detection workflow for backend log monitoring and operational insights.",
        "Integrated AI APIs into scalable Node.js backend services using modular and event-driven architecture.",
        "Implemented distributed ETL workflows and batch data transformation pipelines using PySpark.",
        "Improved application performance using Redis caching, asynchronous workflows, and optimized PostgreSQL queries.",
        "Designed responsive and reusable React UI components for AI-assisted workflows and dashboards.",
        // "Designed AI-powered platform to automate vendor selection, scheduling, and cost estimation for events.",
        // "Implemented intelligent vendor recommendation system using embeddings and similarity search.",
        // "Built AI scheduling assistant to optimize event timelines and reduce manual planning effort.",
        // "Developed cost prediction models using historical event data.",
        // "Integrated AI-based log analyzer to detect anomalies and improve system reliability.",
        // "Designed scalable backend using event-driven architecture with Node.js.",
        // "Improved API response time by ~30% using Redis caching and query optimization.",
      ],
    },

    {
      projectName: "Event Management Platform (Multi-tenant SaaS)",
      description: [
        "Built multi-tenant SaaS platform supporting role-based workflows (Admin, Manager, Vendor).",
        "Designed PostgreSQL schema for tenant isolation and scalable data access.",
        "Implemented secure session-based authentication using Redis.",
        "Designed event-driven workflows and asynchronous processing for real-time updates.",
        "Deployed system on AWS (App Runner, RDS, Redis, S3, CloudFront).",
        "Optimized APIs reducing latency by ~25-30% and improving scalability.",
        "Integrated intelligent automation features for workflow optimization and operational efficiency.",
      ],
      github: "",
      deployedURL: "https://www.helm.events",
    },
  ],

  education: [
    {
      education: "Diploma",
      collegeName: "AL-Huda Polytechnic College",
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
};

const staffEngineer = {
  basicDetails: {
    name: "Syed Abdul Wahid",
    designation: "Senior Full Stack Engineer",
    mail: "abdulwahid.syed@outlook.com",
    phone: "+91 9581122911",
    linkedinProfile: "https://www.linkedin.com/in/abdul-wahid-syed-8b5728265",
    githubProfile: "https://github.com/abdulwahidsyed",
    description:
      "Senior Full Stack Engineer aiming for Staff Full Stack Engineer with 8+ years of experience architecting and delivering scalable, secure, and high-performance distributed systems using React, Node.js, and AWS. Deep expertise in system design, multi-tenant SaaS architecture, event-driven systems, and cloud-native infrastructure. Proven track record of leading technical decisions, driving architectural reviews, and delivering enterprise-grade solutions across fintech and enterprise domains. Currently advancing expertise in distributed systems, system design patterns, and AWS Solutions Architecture.",
  },

  commonSkills: {
    "System Design & Architecture":
      "Distributed Systems, Event-Driven Architecture, Multi-Tenant SaaS, Microservices, Domain-Driven Design, API Design (REST, WebSockets), System Scalability & Performance",

    Frontend:
      "React, Redux Toolkit (RTK), React Router, Angular, D3, HTML, CSS, Micro Frontend Architecture",

    Backend:
      "Node.js, Express.js, REST APIs, WebSockets, GraphQL (familiar), Python",

    "Cloud & DevOps":
      "AWS (EC2, S3, CloudFront, Lambda, ElastiCache, RDS, App Runner, CloudWatch, KMS, Route 53, ACM), Azure, Docker, Kubernetes, CI/CD (TeamCity, Jenkins), Terraform, CloudFormation",

    Security:
      "OAuth 2.0, SSO, OIDC, JWT, Session Management (Redis), IBM ISAM, Ping Identity",

    Databases: "PostgreSQL, MySQL, MongoDB, Redis, OracleDB",

    "Observability & Tooling":
      "New Relic, Jira, Confluence, GitHub, GitLab, Figma",
  },

  certifications: [
    {
      name: "AWS Certified Solutions Architect - Associate",
      status: "In Progress",
      issuer: "Amazon Web Services",
    },
  ],

  keyAchievements:
    "Architected multi-tenant SaaS platforms supporting scalable enterprise applications with tenant isolation and role-based access control.\nDesigned event-driven systems for real-time data ingestion and high-volume stream processing, significantly reducing processing latency.\nBuilt enterprise-grade authentication platforms supporting SSO, OAuth2, JWT, and Redis-based session management at scale.\nImproved API performance and reduced latency by up to 30% through Redis caching strategies and query optimization.\nImplemented CI/CD pipelines that cut deployment time by ~40%, improving release reliability and developer velocity.\nDeployed and owned cloud-native infrastructure on AWS (App Runner, RDS, ElastiCache, S3, CloudFront, Route 53) ensuring high availability.\nLed architectural reviews, code quality initiatives, and technical mentorship across cross-functional engineering teams.\nBuilt and shipped a live multi-tenant SaaS product end-to-end — from architecture design to AWS deployment (helm.events).",

  projects: [
    // ─── CITCO ───────────────────────────────────────────────────────────────
    {
      companyName: "Citco",
      duration: "June 2025 - Present",
      projectName: "Event Driven FSRR Platform",
      role: "Senior Full Stack Engineer",
      skillsUsed: [
        "React, RTK, Node.js, Express.js, Python",
        "PostgreSQL, OracleDB",
        "AWS, Event-Driven Architecture",
      ],
      projectDescription: [
        "Designed and owned the event-driven architecture for real-time ingestion and intelligent routing of high-volume external event data.",
        "Engineered modular event handlers and dispatcher layers capable of processing high-throughput event streams with low latency.",
        "Built payload transformation pipelines to map heterogeneous external events into internal domain-driven models.",
        "Integrated automated notification and workflow orchestration systems to manage deliverable lifecycle end-to-end.",
        "Achieved measurable improvements in system scalability and processing latency through architectural optimizations.",
      ],
    },

    // ─── CRISKA ──────────────────────────────────────────────────────────────

    {
      companyName: "Criska Business Consulting Pvt Ltd",
      duration: "Sep 2023 - May 2025",
      projectName: "John Hancock – CSL (Customer Secure Login)",
      role: "Senior Full Stack Engineer",
      skillsUsed: [
        "React, RTK, Node.js, Express.js",
        "JWT, OAuth2, SSO, OIDC, Ping Identity, IBM ISAM",
        "Azure, Docker, Kubernetes, New Relic",
      ],
      projectDescription: [
        "Architected a secure, scalable multi-tenant authentication platform supporting enterprise SSO, OIDC, and complex identity workflows for John Hancock's customer login infrastructure.",
        "Designed and implemented a monorepo architecture for unified frontend and backend codebases, improving developer velocity and consistency.",
        "Integrated enterprise identity providers (Ping Identity, IBM ISAM) with OAuth2 and JWT-based flows, ensuring security compliance at scale.",
        "Established code quality standards using ESLint, Husky, lint-staged, and Prettier across the engineering team.",
        "Drove architectural design for high-availability login systems, collaborating with cross-functional teams and security stakeholders.",
      ],
      rolesAndResponsibilities: [
        "Led architectural reviews and set technical direction for the authentication platform.",
        "Designed scalable application flows, reusable component patterns, and shared service layers.",
        "Mentored engineers and facilitated technical discussions, design sessions, and cross-team demos.",
        "Partnered with security, QA, and product teams to deliver high-performance, compliance-ready solutions.",
      ],
    },

    {
      companyName: "Criska Business Consulting Pvt Ltd",
      duration: "Sep 2023 - May 2025",
      projectName: "AI-Powered Smart Event Orchestration Platform",
      role: "Senior Full Stack Engineer",
      skillsUsed: [
        "Node.js, Express.js, React",
        "Redis, PostgreSQL",
        "AWS, Event-Driven Architecture, AI/ML Integrations",
      ],
      projectDescription: [
        "Designed and built an AI-powered platform to automate vendor selection, scheduling, and cost estimation for large-scale events.",
        "Implemented an intelligent vendor recommendation engine using vector embeddings and similarity search.",
        "Built an AI scheduling assistant to optimize event timelines and reduce manual coordination overhead.",
        "Developed cost prediction models trained on historical event data to improve planning accuracy.",
        "Integrated an AI-based anomaly detection system for log analysis, improving system reliability and incident response.",
        "Designed scalable backend using event-driven architecture with Node.js, achieving ~30% API response time improvement via Redis caching.",
      ],
    },

    {
      companyName: "Criska Business Consulting Pvt Ltd",
      duration: "Sep 2023 - May 2025",
      projectName:
        "Event Management Platform – helm.events (Multi-Tenant SaaS)",
      role: "Senior Full Stack Engineer",
      skillsUsed: [
        "Node.js, Express.js, React",
        "PostgreSQL, Redis",
        "AWS (App Runner, RDS, ElastiCache, S3, CloudFront, Route 53, ACM)",
      ],
      deployedURL: "https://www.helm.events",
      projectDescription: [
        "Architected and shipped a production multi-tenant SaaS platform supporting role-based workflows for Admins, Event Managers, and Vendors — fully live at helm.events.",
        "Designed PostgreSQL schema with robust tenant isolation strategies and optimized queries for scalable data access.",
        "Implemented secure session-based authentication using Redis with plans for OAuth2 integration.",
        "Built event-driven workflows and async processing pipelines for real-time status updates and notifications.",
        "Owned end-to-end AWS infrastructure: App Runner, RDS, ElastiCache, S3, CloudFront, Route 53, and ACM for SSL.",
        "Optimized API response times by 25–30% through caching, connection pooling, and query tuning.",
      ],
    },

    // ─── CGI ─────────────────────────────────────────────────────────────────
    {
      companyName:
        "CGI Information Systems and Management Consultants Pvt. Ltd.",
      duration: "Sep 2022 - Aug 2023",
      projectName: "CGI Superset Platform",
      role: "Senior Software Engineer",
      skillsUsed: [
        "React, Micro Frontend Architecture",
        "D3.js, Leaflet.js, Chart.js",
        "Apache Superset",
      ],
      projectDescription: [
        "Developed a micro-frontend-based enterprise analytics platform built on Apache Superset, enabling modular team ownership of dashboard features.",
        "Implemented interactive data visualizations and geospatial dashboards providing actionable business insights.",
        "Extended and customized open-source Superset components to meet enterprise security and UX requirements.",
      ],
    },

    // ─── KEYSTACK ─────────────────────────────────────────────────────────────
    {
      companyName: "Keystack Technologies Pvt Ltd",
      duration: "Mar 2018 - Sep 2022",
      projectName: "Warehouse & Client Applications (Condensed)",
      role: "Frontend Engineer → Mid-level Full Stack Engineer",
      skillsUsed: ["React, Redux, Bootstrap, Node.js", "Docker, Git"],
      projectDescription: [
        "Progressed from building frontend interfaces (HP printer management, warehouse management, W-360 inventory modules) to owning real-time dashboards for network monitoring and voice quality analysis.",
        "Developed reusable, scalable UI component libraries that improved development consistency and velocity across multiple product lines.",
        "Built and maintained full-stack features across warehouse management and client-facing applications over 4+ years.",
      ],
    },
  ],

  companies: [
    // ─── CITCO ───────────────────────────────────────────────────────────────
    {
      companyName: "Citco",
      duration: "June 2025 - Present",
      skillsUsed: [
        "React, RTK, Node.js, Express.js, Python",
        "PostgreSQL, OracleDB",
        "AWS, Event-Driven Architecture",
      ],
      projectDescription: [
        "Designed and owned the event-driven architecture for real-time ingestion and intelligent routing of high-volume external event data.",
        "Engineered modular event handlers and dispatcher layers capable of processing high-throughput event streams with low latency.",
        "Built payload transformation pipelines to map heterogeneous external events into internal domain-driven models.",
        "Integrated automated notification and workflow orchestration systems to manage deliverable lifecycle end-to-end.",
        "Achieved measurable improvements in system scalability and processing latency through architectural optimizations.",
      ],

      projects: [
        {
          projectName: "Event Driven FSRR Platform",
          role: "Senior Full Stack Engineer",
          skillsUsed: [
            "React, RTK, Node.js, Express.js",
            "JWT, OAuth2, SSO, OIDC, Ping Identity, IBM ISAM",
            "Azure, Docker, Kubernetes, New Relic",
          ],
          projectDescription: [
            "Architected a secure, scalable multi-tenant authentication platform supporting enterprise SSO, OIDC, and complex identity workflows for John Hancock's customer login infrastructure.",
            "Designed and implemented a monorepo architecture for unified frontend and backend codebases, improving developer velocity and consistency.",
            "Integrated enterprise identity providers (Ping Identity, IBM ISAM) with OAuth2 and JWT-based flows, ensuring security compliance at scale.",
            "Established code quality standards using ESLint, Husky, lint-staged, and Prettier across the engineering team.",
            "Drove architectural design for high-availability login systems, collaborating with cross-functional teams and security stakeholders.",
          ],
          rolesAndResponsibilities: [
            "Led architectural reviews and set technical direction for the authentication platform.",
            "Designed scalable application flows, reusable component patterns, and shared service layers.",
            "Mentored engineers and facilitated technical discussions, design sessions, and cross-team demos.",
            "Partnered with security, QA, and product teams to deliver high-performance, compliance-ready solutions.",
          ],
        },
      ],
    },
    // ─── CRISKA ──────────────────────────────────────────────────────────────
    {
      companyName: "Criska Business Consulting Pvt Ltd",
      duration: "Sep 2023 - May 2025",
      projects: [
        {
          projectName: "John Hancock - CSL (Customer Secure Login)",
          role: "Senior Full Stack Engineer",
          skillsUsed: [
            "React, RTK, Node.js, Express.js",
            "JWT, OAuth2, SSO, OIDC, Ping Identity, IBM ISAM",
            "Azure, Docker, Kubernetes, New Relic",
          ],
          projectDescription: [
            "Architected a secure, scalable multi-tenant authentication platform supporting enterprise SSO, OIDC, and complex identity workflows for John Hancock's customer login infrastructure.",
            "Designed and implemented a monorepo architecture for unified frontend and backend codebases, improving developer velocity and consistency.",
            "Integrated enterprise identity providers (Ping Identity, IBM ISAM) with OAuth2 and JWT-based flows, ensuring security compliance at scale.",
            "Established code quality standards using ESLint, Husky, lint-staged, and Prettier across the engineering team.",
            "Drove architectural design for high-availability login systems, collaborating with cross-functional teams and security stakeholders.",
          ],
          rolesAndResponsibilities: [
            "Led architectural reviews and set technical direction for the authentication platform.",
            "Designed scalable application flows, reusable component patterns, and shared service layers.",
            "Mentored engineers and facilitated technical discussions, design sessions, and cross-team demos.",
            "Partnered with security, QA, and product teams to deliver high-performance, compliance-ready solutions.",
          ],
        },

        {
          projectName: "AI-Powered Smart Event Orchestration Platform",
          role: "Full Stack Engineer",
          skillsUsed: [
            "Node.js, Express.js, React",
            "Redis, PostgreSQL",
            "AWS, Event-Driven Architecture, AI/ML Integrations",
          ],
          projectDescription: [
            "Designed and built an AI-powered platform to automate vendor selection, scheduling, and cost estimation for large-scale events.",
            "Implemented an intelligent vendor recommendation engine using vector embeddings and similarity search.",
            "Built an AI scheduling assistant to optimize event timelines and reduce manual coordination overhead.",
            "Developed cost prediction models trained on historical event data to improve planning accuracy.",
            "Integrated an AI-based anomaly detection system for log analysis, improving system reliability and incident response.",
            "Designed scalable backend using event-driven architecture with Node.js, achieving ~30% API response time improvement via Redis caching.",
          ],
        },

        {
          projectName:
            "Event Management Platform - helm.events (Multi-Tenant SaaS)",
          role: "Architect & Full Stack Engineer",
          skillsUsed: [
            "Node.js, Express.js, React",
            "PostgreSQL, Redis",
            "AWS (App Runner, RDS, ElastiCache, S3, CloudFront, Route 53, ACM)",
          ],
          deployedURL: "https://www.helm.events",
          projectDescription: [
            "Architected and shipped a production multi-tenant SaaS platform supporting role-based workflows for Admins, Event Managers, and Vendors — fully live at helm.events.",
            "Designed PostgreSQL schema with robust tenant isolation strategies and optimized queries for scalable data access.",
            "Implemented secure session-based authentication using Redis with plans for OAuth2 integration.",
            "Built event-driven workflows and async processing pipelines for real-time status updates and notifications.",
            "Owned end-to-end AWS infrastructure: App Runner, RDS, ElastiCache, S3, CloudFront, Route 53, and ACM for SSL.",
            "Optimized API response times by 25-30% through caching, connection pooling, and query tuning.",
          ],
        },
      ],
    },
    // ─── CGI ─────────────────────────────────────────────────────────────────
    {
      companyName:
        "CGI Information Systems and Management Consultants Pvt. Ltd.",
      duration: "Sep 2022 - Aug 2023",
      projects: [
        {
          projectName: "CGI Superset Platform",
          role: "Senior Software Engineer",
          skillsUsed: [
            "React, Micro Frontend Architecture",
            "D3.js, Leaflet.js, Chart.js",
            "Apache Superset",
          ],
          projectDescription: [
            "Developed a micro-frontend-based enterprise analytics platform built on Apache Superset, enabling modular team ownership of dashboard features.",
            "Implemented interactive data visualizations and geospatial dashboards providing actionable business insights.",
            "Extended and customized open-source Superset components to meet enterprise security and UX requirements.",
          ],
        },
      ],
    },
    // ─── KEYSTACK ─────────────────────────────────────────────────────────────
    {
      companyName: "Keystack Technologies Pvt Ltd",
      duration: "Mar 2018 - Sep 2022",
      projects: [
        {
          projectName: "Warehouse & Client Applications (Condensed)",
          role: "Frontend Engineer → Mid-level Full Stack Engineer",
          skillsUsed: ["React, Redux, Bootstrap, Node.js", "Docker, Git"],
          projectDescription: [
            "Progressed from building frontend interfaces (HP printer management, warehouse management, W-360 inventory modules) to owning real-time dashboards for network monitoring and voice quality analysis.",
            "Developed reusable, scalable UI component libraries that improved development consistency and velocity across multiple product lines.",
            "Built and maintained full-stack features across warehouse management and client-facing applications over 4+ years.",
          ],
        },
      ],
    },
  ],

  education: [
    {
      education: "Diploma in Engineering",
      collegeName: "AL-Huda Polytechnic College",
      duration: "2012 - 2015",
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
};

// const k = "I build systems that scale — and I care deeply about getting the architecture right from the start.

// Over the past 8+ years, I've worked across the full stack on enterprise-grade products in fintech and banking tech — from building secure multi-tenant authentication platforms for John Hancock to designing event-driven data ingestion systems at Citco, one of the world's leading fund administration firms. My work sits at the intersection of product thinking and systems thinking: I don't just ship features, I design the infrastructure that makes those features reliable at scale.

// My core strengths:
// → Distributed systems & event-driven architecture
// → Multi-tenant SaaS design with tenant isolation and RBAC
// → Secure authentication systems — OAuth2, SSO, OIDC, JWT at enterprise scale
// → Cloud-native AWS infrastructure (App Runner, RDS, ElastiCache, CloudFront, Route 53)
// → React + Node.js full stack, with a strong bias toward backend and system design

// Beyond client work, I architected and shipped helm.events — a live, production multi-tenant SaaS platform — entirely solo, from database schema design to AWS deployment. It's the project I'm most proud of because it reflects how I think end-to-end as an engineer.

// I'm currently advancing my expertise in distributed systems, system design at scale, and AWS Solutions Architecture (certification in progress) — because I believe the best engineers never stop designing better systems.

// I'm actively exploring Staff Full Stack Engineer opportunities in Dubai, Singapore, or globally — particularly in fintech, banking tech, and high-scale product companies where architecture decisions matter.

// If you're hiring or know of relevant opportunities, I'd love to connect.

// 📧 abdulwahid.syed@outlook.com
// 🌐 helm.events
// 💻 github.com/abdulwahidsyed"
