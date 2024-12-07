import { meta, shopify, starbucks, mindsprint, sathyabama, shiash } from "../assets/images";
import {
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  vite,
  vscode,
  threejs,
  // ai,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: threejs,
    name: "Three.js",
    type: "Frontend",
  },
  {
    imageUrl: vite,
    name: "Vite",
    type: "Frontend",
  },
  {
    imageUrl: vscode,
    name: "VSCode",
    type: "IDE",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
  // {
  //   imageUrl: ai,
  //   name: "AI",
  //   type: "Frontend",
  // },
];

export const experiences = [
  {
    title: "Full Stack Developer",
    company_name: "Mindsprint",
    icon: mindsprint,
    iconBg: "#fbc3bc",
    date: "Sep 2022 - April 2024",
    points: [
      "Developed applications for various platforms including iOS,Android and cross-platform solutions.",
      "Restructured UI architecture using Redux and subscribers to improve response time and user experience.",
      "Wrote clean, maintainable code using Java, Python, SQL and managed projects with Jira.",
      "Gained experience with Spring Boot, Spring Framework, and RESTful APIs.",
    ],
  },
  {
    title: "Master's Degree",
    company_name: "Satyabama University",
    icon: sathyabama,
    iconBg: "#fbc3bc",
    date: "Sep 2020 - June 2022",
    points: [
      "Advanced Data Structures and Algorithms: Mastered complex algorithms and data structure implementations",
      "Artificial Intelligence: Learned about machine learning, neural networks, and AI applications",
      "Machine Learning: Explored supervised and unsupervised learning techniques",
      "Software Engineering: Gained experience with software development lifecycle and best practices",
    ],
  },
  {
    title: "Bachelor's Degree",
    company_name: "Sathyabama University",
    icon: sathyabama,
    iconBg: "#b7e4c7",
    date: "Sep 2016 - June 2020",
    points: [
      "Core Engineering Subjects: Data Structures and Algorithms, Computer Networks, Operating Systems, Software Engineering, Computer Organization and Architecture, Database Management Systems",
      "Final Year Project: Robot Teleportation System using Virtual Reality",
      "Implemented basic data structures and algorithms from scratch",
    ],
  },
  {
    title: "Software Developer Intern Java",
    company_name: "Shiash Info Solutions",
    icon: shiash,
    iconBg: "#a2d2ff",
    date: "May 2019 - July 2019",
    points: [
      "Developed and maintained Java applications for internal use.",
      "Collaborated with cross-functional teams to ensure timely delivery of projects.",
      "Implemented new features and resolved bugs to improve application performance.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Roy12233444",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/sourav-ray-aa6441182/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
    preview: "https://pricewise-demo.vercel.app"
  },
  {
    iconUrl: threads,
    theme: "btn-back-green", 
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
    preview: "https://threads-clone-demo.vercel.app"
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
    preview: "https://car-showcase-demo.vercel.app"
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
    preview: "https://instagram-clone-demo.vercel.app"
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
    preview: "https://realestate-demo.vercel.app"
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
    preview: "https://ai-summarizer-demo.vercel.app"
  },
];

export const personalProjects = [
  {
    name: "E-Commerce Website",
    description:
      "Built a full-featured e-commerce platform with React, Node.js and MongoDB. Implemented user authentication, product catalog, shopping cart and payment integration.",
    iconUrl: "/ecommerce-icon.png",
    theme: "bg-[#fef4f5]",
    link: "https://ecommerce-example.com",
    preview: "https://ecommerce-demo.vercel.app",
    isClient: true,
  },
  {
    name: "Real Estate Portal",
    description:
      "Developed a real estate listing platform with property search, filters, user profiles and admin dashboard. Used React, Express and PostgreSQL.",
    iconUrl: "/realestate-icon.png",
    theme: "bg-[#f0f8ff]",
    link: "https://realestate-example.com",
    preview: "https://realestate-demo.vercel.app",
    isClient: true,
  },
];