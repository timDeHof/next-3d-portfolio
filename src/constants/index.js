import {
  frontend,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  appwrite,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  express,
  nextjs,
  storybook,
  cypress,
  meta,
  starbucks,
  jest,
  tesla,
  shopify,
  unf,
  polyhistor,
  fullstack,
  galacticpawn,
  smartbrain,
  carrent,
  jobit,
  tripguide,
  threejs,
  moviewatchlist,
  github,
  devto,
  linkedin,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "blog",
    title: "Blog",
  },
  {
    id: "contact",
    title: "Contact",
  },
];
const socials = [
  {
    title: "devto",
    Icon: devto,
    href: "https://dev.to/timdehof",
  },
  {
    title: "github",
    Icon: github,
    href: "https://github.com/timDeHof",
  },
  {
    title: "linkedin",
    Icon: linkedin,
    href: "https://www.linkedin.com/in/timothy-dehof/",
  },
];

const citation = [
  {
    content: "Practice even what seems impossible.",
    author: "Marcus Aurelius",
  },
];
const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blogger",
    icon: creator,
  },
];

const technologies = [
  {
    heading: "Frontend",
    subHeading: "My bread and butter.",
    tech: [
      {
        name: "Next JS",
        icon: nextjs,
      },
      {
        name: "React JS",
        icon: reactjs,
      },
      {
        name: "HTML 5",
        icon: html,
      },
      {
        name: "CSS 3",
        icon: css,
      },
      {
        name: "JavaScript",
        icon: javascript,
      },
      {
        name: "TypeScript",
        icon: typescript,
      },

      {
        name: "Redux Toolkit",
        icon: redux,
      },
      {
        name: "Tailwind CSS",
        icon: tailwind,
      },
      {
        name: "Three JS",
        icon: threejs,
      },
    ],
  },
  {
    heading: "Backend",
    subHeading: "Aspiring, but not my strongest suit.",
    tech: [
      {
        name: "Node JS",
        icon: nodejs,
      },
      {
        name: "express",
        icon: express,
      },
      {
        name: "MongoDB",
        icon: mongodb,
      },
      {
        name: "Appwrite.io",
        icon: appwrite,
      },
    ],
  },
  {
    heading: "Tools & Platforms",
    subHeading: "Favorite kits to get things done",
    tech: [
      {
        name: "git",
        icon: git,
      },
      {
        name: "figma",
        icon: figma,
      },
      {
        name: "docker",
        icon: docker,
      },
      {
        name: "Cypress.io",
        icon: cypress,
      },
      {
        name: "storybook",
        icon: storybook,
      },
      {
        name: "Jest",
        icon: jest,
      },
    ],
  },
];

const experiences = [
  {
    title: "College Student",
    company_name: "University of North Florida",
    icon: unf,
    iconBg: "#383E56",
    date: "March 2007 - December 2011",
    points: [
      "Graduated with a Bachelors of science in Mechanical Engineering.",
      "Secured a cumulative GPA of 3.26",
    ],
  },
  {
    title: "Mechanical Technician",
    company_name: "Polyhistor International",
    icon: polyhistor,
    iconBg: "#E6DEDD",
    date: "Jan 2012 - Feb 2014",
    points: [
      "Demonstrated proficiency in visual and basic measurement inspection of parts, ensuring conformity to specifications and detecting defect ",
      "Developed and implemented process improvements in the Prototype Shop, increasing efficiency by 25% in 6 months.",
      "Gained valuable experience in the operation of advanced manufacturing technology, including running jobs on the Objet Eden 260v Rapid Prototype machine.",
      "Demonstrated strong communication, teamwork, built prototypes, assembled wire harnesses, leading to promotion as a mechanical design engineer.",
    ],
  },
  {
    title: "Mechanical Design Engineer",
    company_name: "Polyhistor International",
    icon: polyhistor,
    iconBg: "#E6DEDD",
    date: "Feb 2014 - Jan 2022",
    points: [
      "Achieved a 28% decrease in production costs within 4 months by optimizing machine efficiency and streamlining processes.",
      "Improved 3D printing efficiency by 15% within 6 months through effective optimization of design and manufacturing processes.",
      "Reduced production costs by 10% in 1 month through optimization of materials and processes utilizing 3D printing technology.",
      "Managed 3D printing projects with Stratasys and FormLabs software, overseeing prep, execution, and post-processing for clients. Utilized Polyjet, FDM, and SLA technologies.",
      "Improved production efficiency by 15% through the implementation of a 3D printing project management tool using Microsoft Excel and VBA",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Fullstack Academy Coding Bootcamp",
    icon: fullstack,
    iconBg: "#383E56",
    date: "Feb 2022 - May 2022",
    points: [
      "Proficient in full-stack web development, including front-end and back-end skills, through immersive training in programming languages like JavaScript, HTML, CSS, and frameworks such as React and Node.js.",
      "Provided code review feedback to my team members and executed a successful Fullstack website",
      "Built a full-stack e-commerce website that can handle and integrate routes, PostgreSQL, database, and 0auth.",
      "The website included a login and register page, as well as a main store page that allows users to create an account and add items to their cart.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tim proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tim does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Tim optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Galactic Pawn",
    description:
      "Ecommerce web-based site that allows users to register, search , add, and manage items in a shopping cart, providing a convenient and efficient solution for galactic needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "postgres",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: galacticpawn,
    source_code_link:
      "https://github.com/PawnShop-at-the-end-of-the-galaxy/PawnShop-Galaxy",
    demo_link: "https://capstone-galactic-pawn.onrender.com/",
  },
  {
    name: "smart brain",
    description:
      "Web application that enables users to upload an image URL and by using machine-learning be able to detect the faces within the image.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: smartbrain,
    source_code_link: "https://github.com/timDeHof/facerecognitionbrain",
    demo_link: "https://big-smart-brain.netlify.app/",
  },
  {
    name: "Movie Watchlist",
    description:
      "A comprehensive movie watchlist platform that allows users to search for movies, tv shows, and save them to there personal watchlist",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "appwrite",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: moviewatchlist,
    source_code_link: "https://github.com/timDeHof/movie-nextjs-app",
    demo_link: "https://reelwatch.vercel.app/",
  },
];

export {
  services,
  socials,
  citation,
  technologies,
  experiences,
  testimonials,
  projects,
};
