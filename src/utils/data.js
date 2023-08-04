import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
// import People2 from "../imgs/people2.png"

export const projectExperience = [
  {
    name: "Real React Applications",
    projects: "3+",
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Test Websites in React.Js",
    projects: '22+ ( Visit my Github repository)',
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "React Applications with Firebase",
    projects: '2+',
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const workExp = [
  {
    company: "Orbix Technologies",
    place: "Lahore, Punjab, Pakistan",
    tenure: "Jan 2022 - July 2022",
    role: "Front-end Developer",
    detail:
      "Created features to enhance the user experience while ensuring that the web design is optimized for smartphones. Employed a variety of languages such as HTML, CSS, JavaScript and React.Js to write & create user-friendly web pages",
  },
  {
    company: "Global Scope Developers",
    place: "Jhang, Punjab, Pakistan",
    tenure: "Nov 2022 - Jun 2023",
    role: "MERN Stack Developer",
    detail:
      " I've spent the 8 months crafting dynamic and scalable web applications. Utilizing MongoDB, Express.js, React.js, and Node.js, I've contributed to building robust and user-friendly interfaces",
  },
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