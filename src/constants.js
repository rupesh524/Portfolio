// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import shadcnLogo from './assets/tech_logo/shadcn.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import dockerLogo from './assets/tech_logo/dockerLogo.png';



// Education Section Logo's
import collegeLogo from "./assets/education_logo/college.png";
import schoolLogo from "./assets/education_logo/schoolLogo.jpg";


// Project Section Logo's
import ecommerceLogo from './assets/work_logo/ecommerce.png';
import socialmediaLogo from './assets/work_logo/social-media.png';
import recipeLogo from './assets/work_logo/recipe.png';
import chatLogo from './assets/work_logo/chat.png';



export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      // { name: 'SASS', logo: sassLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      // { name: 'Angular', logo: angularLogo },
      { name: "Redux", logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      // { name: 'GSAP', logo: gsapLogo },
    //  { name: "Shadcn UI", logo: shadcnLogo },
      // { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      // { name: 'Firebase', logo: firebaseLogo },
      // { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      // { name: 'Python', logo: pythonLogo },
      // { name: 'C-Sharp', logo: csharpLogo },
      // { name: 'JavaScript', logo: javascriptLogo },
      // { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
     // { name: "Docker", logo: dockerLogo },
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
    //  { name: "Compass", logo: mcLogo },
      // { name: 'Vercel', logo: vercelLogo },

      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];
  
  export const education = [
    {
      id: 0,
      img: collegeLogo,
      school: "Sushila Devi Bansal College of Technology, Indore",
      date: "Sept 2022 - July 2026",
      grade: "7.34 CGPA",
      desc: "I am pursuing B.Tech in Computer Science and Engineering at SDBCT, building a strong foundation in programming, DSA, computer networks, OS, DBMS, and web development. I have worked on full-stack projects that improved my practical skills and problem-solving abilities. Actively participating in coding practice, workshops, and technical events helps me sharpen my knowledge and stay updated with industry trends.",
      degree:
        "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
    },
    {
      id: 1,
      img: schoolLogo,
      school: "Sharda Convent School Garoth, Mandsaur(M.P.)",
      date: "2022",
      grade: "91.2%",
      desc: "Completed Higher Secondary Education under the MP Board with a specialization in Science (Mathematics). Built a strong foundation in Physics, Chemistry, and Mathematics while enhancing analytical and problem-solving abilities. Developed discipline and dedication that continue to guide personal and professional growth.",
      degree: "MP Board (XII) - Science (Mathematics)",
    },
    {
      id: 2,
      img: schoolLogo,
      school: "Sharda Convent School Garoth, Mandsaur(M.P.)",
      date: "2020",
      grade: "96%",
      desc: "I completed my Class X under the MP Board, which laid the groundwork for my academic journey. During this stage, I developed fundamental knowledge across subjects and built discipline, consistency, and a problem-solving mindset that helped me transition smoothly into higher education.",
      degree: "MP Board (X)-Secondary Education",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "StudyNotion",
      description:
        "A MERN-based EdTech platform enabling students to learn, instructors to create courses, and admins to manage content. Features include user authentication, Razorpay payments, Cloudinary media storage, and a responsive interface built with React, Redux, and Tailwind CSS.",
      tags: [
        "React JS",
        "Redux",
        "Node.js",
        "MongoDB",
        "Express"
      ],
      github: "https://github.com/rupesh524/StudyNotion-An-Online-Educational-Platform",
     // webapp: "https://mern-ecommerce-1-53ly.onrender.com",
    },
    {
      id: 1,
      title: "Ticket Managment System",
      description:
          "Built a scalable backend application for a Ticket Management System using Node.js, Express, and MongoDB with a clean and modular code structure. Implemented JWT-based authentication, role-based access control (Admin, Agent, User), and secure password hashing with bcrypt. Integrated features include ticket status workflow, pagination, filtering, search, and comprehensive error handling using custom middleware, showcasing my ability to develop secure and efficient backend solutions.",
      tags: [
        "Node.js",
        "Express",
        "MongoDB",
         "JWT",
      ],
      github: "https://github.com/rupesh524/Ticket-Management-System",
      webapp: "",
    },
    {
      id: 2,
      title: "AI CHATBOT",
      description:
         "Developed an intelligent AI chatbot using  React,Node.js, Express, and natural language processing (NLP) techniques. The chatbot is capable of understanding and responding to user queries in a conversational manner, providing a seamless and interactive user experience.",
      image: recipeLogo,
      tags: [
        "HTML",
        "CSS",
        "JavaScript",,
        "Node.js",
        "MongoDB",
        "Express",
      ],
      github: "https://github.com/rupesh524/AI_CHATBOT",
      //webapp: "",
    },
    // {
    //   id: 3,
    //   title: "Chat Application with Real-time Messaging",
    //   description:
    //     "A full-stack messaging platform built with the MERN stack and Socket.io, enabling users to create accounts, connect with others, and exchange messages instantly with real-time updates. It supports one-to-one conversations, online/offline status, and a responsive interface, showcasing my expertise in implementing real-time communication and scalable web applications.",
    //   image: chatLogo,
    //   tags: [
    //     "React JS",
    //     "Tailwind CSS",
    //     "Node.js",
    //     "MongoDB",
    //     "Express",
    //     "Socket.io",
    //   ],
    //   github: "https://github.com/virendraPrajapat18/Chat-App",
    //   webapp: "https://chat-app-ic47.onrender.com",
    // }
  ];  