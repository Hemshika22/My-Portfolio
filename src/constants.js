import htmllogo from "./assets/html-5_logo.png";
import csslogo from "./assets/css3_logo.png";
import jslogo from "./assets/javascript_logo.png";
import reactlogo from "./assets/react_logo.png";
import canva from "./assets/canva_logo.png";
import figma from "./assets/figma_logo.png";
import github from "./assets/github_logo.png";
import git from "./assets/git_logo.png";
import mongodb from "./assets/mongodb_logo.webp";
import nodejs from "./assets/nodejs_logo.png";
import postman from "./assets/cloud-api.png";
import expressjs from "./assets/express-js.png";
import tailwind from "./assets/tailwind css2 logo.png";
import python_logo from "./assets/python_logo.png";
import java_logo from "./assets/java_logo.png";
import { title } from "framer-motion/client";
import SnakeProject from './assets/SnakeProject.png';
import SnakeVideo from './assets/SnakeVideo.mp4';
import ECommerce from './assets/ECommerceProject.png';
import ECommerceVideo from './assets/E-CommerceVideo.mp4';
import Portfolio from './assets/Portfolio.mp4';
import PortfolioWebsite from './assets/PortfolioWebsite.png';

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: 'HTML', logo: htmllogo },
      { name: 'CSS', logo: csslogo },
      { name: 'JavaScript', logo: jslogo },
      { name: 'React', logo: reactlogo },
      { name: 'Tailwind CSS', logo: tailwind },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: 'Node.js', logo: nodejs },
      { name: 'Express.js', logo: expressjs },
      { name: 'MongoDB', logo: mongodb },
      { name: 'Postman', logo: postman },
    ],
  },
  {
    title: "Design & Tools",
    skills: [
      { name: 'Figma', logo: figma },
      { name: 'Canva', logo: canva },
      { name: 'GitHub', logo: github },
      { name: 'Git', logo: git },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: 'Python', logo: python_logo },
      { name: 'Java', logo: java_logo },
    ],
  },
];


export const experiences = [
  {
    id: 0,
    img: "",
    role: "",
    company: "",
    date: "",
    desc: "",
    skills: [

    ],
  },
  {
    id: 1,
    img: "",
    role: "",
    company: "",
    date: "",
    desc: "",
    skills: [

    ],
  },
    ]


// src/constants.js


export const educationData = [
  {
    id: 1,
    year: "2022 - Present",
    degree: "B.Tech in Computer Science",
    institute: "Dr. APJ Abdul Kalam Technical University",
    description:
      "Focused on software development, AI/ML, and full-stack web development. Building projects and gaining hands-on coding experience.",
  },
  {
    id: 2,
    year: "2020 - 2022",
    degree: "Intermediate (12th Grade)",
    institute: "Government Girls Inter College",
    description:
      "Specialized in PCM (Physics, Chemistry, Mathematics) with strong fundamentals in logical reasoning and problem solving.",
  },
  {
    id: 3,
    year: "2018 - 2020",
    degree: "High School (10th Grade)",
    institute: "Government Girls Inter College",
    description:
      "Completed schooling with distinction. Built a foundation in mathematics, science, and computer fundamentals.",
  },
];

export const projects = [
  {
    id: 1,
    title: "Snake Game",
    description:
      "A classic arcade game where players control a snake to eat food and grow while avoiding collisions.",
    image: SnakeProject,
    video: SnakeVideo,
    tags: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/hemshika22/snake-game",
    webapp: "https://hemshika22.github.io/Snake-Game/",
  },
  
  {
    id: 2,
    title: "WishKart",
    description:
      "An eCommerce platform for personalized gifting, featuring secure payments, product search, and responsive UI.",
    image: ECommerce,
    video: ECommerceVideo,
    tags: ["MERN", "Redux", "Stripe API"],
    github: "https://github.com/hemshika22/wishkart",
    // webapp: "https://wishkart.vercel.app",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "My personal portfolio showcasing my projects, skills, and experience.",
    image: PortfolioWebsite,
    video: Portfolio,
    tags: ["React", "Framer Motion", "Tailwind CSS", "Vite" ],
    github: "https://github.com/hemshika22/My-Portfolio",
    webapp: "https://my-portfolio-hemshika.vercel.app/",
  },
  // {
  //   id: 4,
  //   title: "Doggurescue",
  //   description:
  //     "AI-integrated animal rescue website that helps people report, adopt, and rescue stray dogs with real-time location tracking.",
  //   image: "/assets/projects/doggurescue.png",
  //   video: "/assets/projects/doggurescue-demo.mp4",
  //   tags: ["React", "Express", "MongoDB", "AI APIs"],
  //   github: "https://github.com/yourusername/doggurescue",
  //   webapp: "https://doggurescue.vercel.app",
  // },
];

