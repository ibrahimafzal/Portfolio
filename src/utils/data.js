import { FaReact } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiFirebase } from "react-icons/si";
// import People2 from "../imgs/people2.png"

export const projectExperience = [
  {
    name: "Real React Applications",
    projects: "3+",
    icon: FaReact,
    bg: "#286F6C",
  },
  {
    name: "Test Websites in React.Js",
    projects: '30+',
    message: "( visit here my Github repositories)",
    icon: CgWebsite,
    bg: "#EEC048",
  },
  {
    name: "React Applications with Firebase",
    projects: '1+',
    icon: SiFirebase,
    bg: "#F26440",
  },
];

export const workExp = [
  {
    company: "GlowingSoft Technologies",
    place: "Lahore, Punjab, Pakistan",
    tenure: "Jan 2024 - Present",
    totalTime: "(2 Months)",
    role: "Full Stack Developer",
    detail:
      " During my tenure, I actively contributed to projects leveraging these technologies, demonstrating my proficiency in building dynamic user interfaces with React, implementing server-side logic using Node.js and Express.js, and managing data storage with MongoDB and Firebase. My experience in the MERN stack has equipped me with a solid foundation in full-stack development, allowing me to effectively collaborate on multifaceted projects and deliver high-quality solutions.",
  },
  {
    company: "Global Scope Developers",
    place: "Jhang, Punjab, Pakistan",
    tenure: "JUL 2022 - SEP 2023",
    totalTime: "(1 Year 2 Months)",
    role: "Full Stack Developer",
    detail:
      "In my role as a MERN Stack Developer, I Architecting and implementing dynamic web solutions, leveraging MERN stack expertise to drive successful project outcomes. Meticulously designing MongoDB databases and crafting engaging React-based user interfaces, ensuring optimal user experiences.",
  },
  {
    company: "Orbix Technologies",
    place: "Lahore, Punjab, Pakistan",
    tenure: "JUL 2021 - DEC 2021",
    totalTime: "(6 month)",
    role: "Front-end Developer",
    detail:
      "During my tenure as a Junior Frontend Developer (Intern) at Orbix Technologies, I had the opportunity to contribute actively to the development of web applications. This role allowed me to gain hands-on experience with modern frontend technologies, frameworks, and libraries, improving my skills in HTML, CSS, JavaScript, React, Redux, TailwindCSS & Bootstrap, etc. My time at Orbix Technologies significantly enhanced my understanding of front-end development practices and methodologies, providing a valuable foundation for my career growth in the field.",
  }
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};