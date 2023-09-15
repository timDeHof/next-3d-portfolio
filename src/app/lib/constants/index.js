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
  postgres,
  firebase,
  git,
  figma,
  docker,
  express,
  nextjs,
  storybook,
  cypress,
  jest,
  jira,
  unf,
  polyhistor,
  fullstack,
  galacticpawn,
  smartbrain,
  threejs,
  moviewatchlist,
  github,
  devto,
  linkedin,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
    href: '/about',
  },
  {
    id: 'tech',
    title: 'Tech',
    href: '/tech',
  },
  {
    id: 'work',
    title: 'Work',
    href: '/work',
  },
  {
    id: 'experience',
    title: 'Experience',
    href: '/experience',
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '/contact',
  },
];
const socials = [
  {
    title: 'devto',
    Icon: devto,
    href: 'https://dev.to/timdehof',
  },
  {
    title: 'github',
    Icon: github,
    href: 'https://github.com/timDeHof',
  },
  {
    title: 'linkedin',
    Icon: linkedin,
    href: 'https://www.linkedin.com/in/timothy-dehof/',
  },
];

const citation = [
  {
    content: 'Practice even what seems impossible.',
    author: 'Marcus Aurelius',
  },
];
const services = [
  {
    title: 'Web Developer',
    icon: web,
  },
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Blogger',
    icon: creator,
  },
];

const technologies = [
  {
    heading: 'Frontend',
    subHeading: 'My bread and butter.',
    tech: [
      {
        name: 'Next JS',
        icon: nextjs,
      },
      {
        name: 'React JS',
        icon: reactjs,
      },
      {
        name: 'HTML 5',
        icon: html,
      },
      {
        name: 'CSS 3',
        icon: css,
      },
      {
        name: 'JavaScript',
        icon: javascript,
      },
      {
        name: 'TypeScript',
        icon: typescript,
      },

      {
        name: 'Redux Toolkit',
        icon: redux,
      },
      {
        name: 'Tailwind CSS',
        icon: tailwind,
      },
      {
        name: 'Three JS',
        icon: threejs,
      },
    ],
  },
  {
    heading: 'Backend',
    subHeading: 'Aspiring, but not my strongest suit.',
    tech: [
      {
        name: 'Node JS',
        icon: nodejs,
      },
      {
        name: 'express',
        icon: express,
      },
      {
        name: 'MongoDB',
        icon: mongodb,
      },
      {
        name: 'Appwrite.io',
        icon: appwrite,
      },
      {
        name: 'postgreSql',
        icon: postgres,
      },
      {
        name: 'firebase',
        icon: firebase,
      },
    ],
  },
  {
    heading: 'Tools & Platforms',
    subHeading: 'Favorite kits to get things done',
    tech: [
      {
        name: 'git',
        icon: git,
      },
      {
        name: 'github',
        icon: github,
      },
      {
        name: 'figma',
        icon: figma,
      },
      {
        name: 'storybook',
        icon: storybook,
      },
      {
        name: 'docker',
        icon: docker,
      },
      {
        name: 'Cypress.io',
        icon: cypress,
      },
      {
        name: 'Jest',
        icon: jest,
      },
      {
        name: 'Jira',
        icon: jira,
      },
    ],
  },
];

const experiences = [
  {
    title: 'Full stack Developer',
    companyName: 'Fullstack Academy Coding Bootcamp',
    icon: fullstack,
    iconBg: '#383E56',
    date: 'Feb 2022 - May 2022',
    points: [
      'Proficient in full-stack web development, including front-end and back-end skills, through immersive training in programming languages like JavaScript, HTML, CSS, and frameworks such as React and Node.js.',
      'Provided code review feedback to my team members and executed a successful Fullstack website',
      'Built a full-stack e-commerce website that can handle and integrate routes, PostgreSQL, database, and 0auth.',
      'The website included a login and register page, as well as a main store page that allows users to create an account and add items to their cart.',
    ],
  },
  {
    title: 'Mechanical Design Engineer',
    companyName: 'Polyhistor International',
    icon: polyhistor,
    iconBg: '#E6DEDD',
    date: 'Feb 2014 - Jan 2022',
    points: [
      'Achieved a 28% decrease in production costs within 4 months by optimizing machine efficiency and streamlining processes.',
      'Improved 3D printing efficiency by 15% within 6 months through effective optimization of design and manufacturing processes.',
      'Reduced production costs by 10% in 1 month through optimization of materials and processes utilizing 3D printing technology.',
      'Managed 3D printing projects with Stratasys and FormLabs software, overseeing prep, execution, and post-processing for clients. Utilized Polyjet, FDM, and SLA technologies.',
      'Improved production efficiency by 15% through the implementation of a 3D printing project management tool using Microsoft Excel and VBA',
    ],
  },
  {
    title: 'Mechanical Technician',
    companyName: 'Polyhistor International',
    icon: polyhistor,
    iconBg: '#E6DEDD',
    date: 'Jan 2012 - Feb 2014',
    points: [
      'Demonstrated proficiency in visual and basic measurement inspection of parts, ensuring conformity to specifications and detecting defect ',
      'Developed and implemented process improvements in the Prototype Shop, increasing efficiency by 25% in 6 months.',
      'Gained valuable experience in the operation of advanced manufacturing technology, including running jobs on the Objet Eden 260v Rapid Prototype machine.',
      'Demonstrated strong communication, teamwork, built prototypes, assembled wire harnesses, leading to promotion as a mechanical design engineer.',
    ],
  },
  {
    title: 'College Student',
    companyName: 'University of North Florida',
    icon: unf,
    iconBg: '#383E56',
    date: 'March 2007 - December 2011',
    points: [
      'Graduated with a Bachelors of science in Mechanical Engineering.',
      'Secured a cumulative GPA of 3.26',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Tim proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Tim does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Tim optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects = [
  {
    id: 'galactic-pawn',
    name: 'Galactic Pawn',
    description:
      'Galactic Pawn is a full-stack application designed to simulate a pawn shop at the end of the galaxy.Users can browse items, make transactions, and explore the vastness of the galactic pawn market.',
    teamMembers: [
      {
        name: 'Aaron Heiy',
        imgURL: 'https://avatars.githubusercontent.com/u/93630561?v=4',
        link: 'https://github.com/Aheiy1',
      },
      {
        name: 'Taylor Kirkes',
        imgURL: 'https://avatars.githubusercontent.com/u/99564688?v=4',
        link: 'https://github.com/kirkes21',
      },
      {
        name: 'Jacob Warren',
        imgURL: 'https://avatars.githubusercontent.com/u/99632791?v=4',
        link: 'https://github.com/jawarr',
      },
    ],
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'postgres',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: galacticpawn,
    sourceCodeLink:
      'https://github.com/PawnShop-at-the-end-of-the-galaxy/PawnShop-Galaxy',
    demoLink: 'https://capstone-galactic-pawn.onrender.com/',
    features: [
      {
        title: 'Galactic Item Browsing',
        subtitle:
          'Users can browse a variety of items available in the galactic pawn market, each with its unique history and origin.',
      },
      {
        title: 'User Authentication',
        subtitle:
          'users can create accounts, log in, and possibly manage their profiles.',
      },
      {
        title: 'Transaction Management',
        subtitle:
          'users are able to buy, sell, or pawn items, managing their transactions seamlessly.',
      },
      {
        title: 'Responsive UI',
        subtitle:
          'The app is optimized for both desktop and mobile devices, ensuring a seamless user experience across various screen sizes.',
      },
    ],
    challenges: {
      intro:
        'Throughout the development of Galactic Pawn, our team encountered several challenges that tested our problem-solving skills and collaboration:',
      points: [
        {
          title: 'Database Integration',
          subtitle:
            'Integrating the PostgreSQL database with our Express server proved to be more complex than anticipated. We faced issues with data consistency and had to restructure our database schema multiple times to ensure optimal performance.',
        },
        {
          title: 'Prisma as an ORM',
          subtitle:
            ' Adapting to Prisma as our ORM was a learning curve. While Prisma offers a lot of powerful features and a type-safe database client, understanding its nuances, especially in relation to raw SQL and optimizing certain queries, presented challenges. Additionally, integrating Prisma with our existing database setup and ensuring migrations were smooth required careful attention.',
        },
        {
          title: 'UI/UX Design',
          subtitle:
            ' Designing a user-friendly interface that also captured the essence of a galactic pawn shop was challenging. We went through several design iterations, gathering feedback from potential users, before finalizing our design.',
        },
        {
          title: 'State Management',
          subtitle:
            "As our React application grew in complexity, managing state became a hurdle. We explored various state management solutions before settling on a combination of React's Context API and local component state.",
        },
        {
          title: 'Deployment',
          subtitle:
            'Setting up continuous integration and deployment with GitHub Actions and Heroku presented its own set of challenges. We had to ensure that our environment variables were secure and that our application was scalable.',
        },
        {
          title: 'Team Collaboration',
          subtitle:
            "Working in a remote environment required us to establish clear communication channels and regular check-ins. We utilized tools like Slack and Zoom to stay connected and ensure everyone was aligned with the project's goals.",
        },
      ],
      conclusion:
        "Facing these challenges not only improved our technical skills but also strengthened our team's bond. We learned the importance of perseverance, open communication, and the value of constructive feedback.",
    },
  },
  {
    id: 'smart-brain',
    name: 'smart brain',
    description:
      'Smart Brain is an innovative web application that leverages machine learning to detect faces in images. By inputting an image URL, users can quickly see the faces highlighted, showcasing the power of AI in everyday applications.',

    teamMembers: [],
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'nodejs',
        color: 'green-text-gradient',
      },
      {
        name: 'postgres',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: smartbrain,
    sourceCodeLink: 'https://github.com/timDeHof/facerecognitionbrain',
    demoLink: 'https://big-smart-brain.netlify.app/',
    features: [
      {
        title: 'Face Detection',
        subtitle: 'Detects and highlights faces in any given image.',
      },
      {
        title: 'User-friendly Interface',
        subtitle: 'Simple and intuitive design for ease of use.',
      },
      {
        title: 'Responsive Design',
        subtitle: 'Optimized for both desktop and mobile devices.',
      },
    ],
    challenges: {
      intro:
        'During the development of Face Recognition Brain, several challenges were encountered:',
      points: [
        {
          title: 'Face Detection Efficiency',
          subtitle:
            'Implementing the face detection algorithm to work efficiently was a primary concern.',
        },
        {
          title: 'Browser Compatibility',
          subtitle:
            'Ensuring the application works seamlessly across various browsers and devices.',
        },
        {
          title: 'Image Optimization',
          subtitle: 'Handling large images without compromising on load times.',
        },
      ],
      conclusion: '',
    },
  },
  {
    id: 'reelwatch',
    name: 'Reelwatch',
    description:
      'The Reelwatch App is a cutting-edge web application that aims to make movie discovery a really immersive experience. With a focus on performance, user experience, and modern design, this app stands out as a premier solution for movie enthusiasts.',
    teamMembers: [],
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'appwrite',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: moviewatchlist,
    sourceCodeLink: 'https://github.com/timDeHof/movie-nextjs-app',
    demoLink: 'https://reelwatch.vercel.app/',
    features: [
      {
        title: 'Dynamic Search',
        subtitle:
          'Enables users to quickly find movies with a real-time search feature, offering suggestions as they type.',
      },
      {
        title: 'Responsive Design',
        subtitle:
          'The app is optimized for both desktop and mobile devices, ensuring a seamless user experience across various screen sizes.',
      },
      {
        title: 'Detailed Movie Information',
        subtitle:
          'Each movie comes with comprehensive details, including cast, crew, synopsis, release date, runtime, and more.',
      },
      {
        title: 'Watchlist',
        subtitle:
          'Users can add movies to a watchlist, planning their future viewing sessions.',
      },
    ],
    challenges: {
      intro:
        'During the development of Reelwatch, several challenges were encountered:',
      points: [
        {
          title: 'Learning Appwrite',
          subtitle:
            'As a newcomer to Appwrite cloud technology, understanding its architecture, capabilities, and best practices was a steep learning curve. Grasping the nuances of this platform while ensuring optimal integration with our application was both challenging and rewarding.',
        },
        {
          title: 'First Hackathon Experience',
          subtitle:
            'Developing in my first hackathon brought a unique set of challenges. The time constraints, pressure to deliver, and collaborating under tight deadlines were intense. However, it was an invaluable experience that taught me about rapid development, teamwork, and adaptability.',
        },
        {
          title: 'API Integration',
          subtitle:
            'Integrating with the movie database API presented challenges such as rate limits and data consistency.',
        },
        {
          title: 'Responsive Design',
          subtitle:
            'Crafted with a design that looks and functions well on a variety of devices was a meticulous process.',
        },
        {
          title: '*Performance Optimization',
          subtitle:
            'Ensuring fast load times while maintaining high-quality images and animations.',
        },
      ],
      conclusion:
        'These challenges provided valuable learning experiences in optimizing React applications, handling media, and ensuring cross-browser compatibility.',
    },
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
