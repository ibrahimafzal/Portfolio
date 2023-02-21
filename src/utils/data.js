import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
// import People2 from "../imgs/people2.png"

export const projectExperience = [
  {
    name: "React Applications",
    projects: 9,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Responsive Websites",
    projects: 17,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "React Applications with Firebase",
    projects: 3,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const workExp = [
  {
    company: "Orbix Technologies",
    place: "Lahore, Punjab, Pakistan",
    tenure: "Jan 2021 - July 2021",
    role: "React Developer",
    detail:
      "Developed the latest user-facing features using React.js and built reusable components & front-end libraries for future use. Optimized components for maximum performance across a vast array of web-capable devices and browsers",
  },
  {
    company: "Pak Developers",
    place: "Lahore, Punjab, Pakistan",
    tenure: "July 2021 - Nov 2022",
    role: "Front-end Developer",
    detail:
      "Created features to enhance the user experience while ensuring that the web design is optimized for smartphones. Employed a variety of languages such as HTML, CSS, JavaScript and React.Js to write & create user-friendly web pages",
  },
  {
    company: "Global Scope Developers",
    place: "Jhang, Punjab, Pakistan",
    tenure: "Nov 2022 - Present",
    role: "React Developer",
    detail:
      "Coordinated with the development team of 11 to discuss user interface ideas and applications. Reviewed application requirements and interface designs to ensure compatibility with existing applications",
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