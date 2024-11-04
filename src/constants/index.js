import {
  mobile,
  creator,
  web,
  bulma,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  sass,
  vite,
  gulp,
  git,
  figma,
  education,
  content,
  teacher,
  personal,
  carrent,
  jobit,
  tripguide,
  abri,
  coralShop,
  interiour,
  interiourGulp,
  blinqpay,
  reactFun
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
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Front-End Developer",
    icon: mobile,
  },
  {
    title: "Content Manager",
    icon: creator,
  },
];

const technologies = [
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
    name: "Sass",
    icon: sass,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Bulma CSS",
    icon: bulma,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Gulp",
    icon: gulp,
  },
  {
    name: "Vite",
    icon: vite,
  },
];

const experiences = [
  {
    title: "Content Manager",
    company_name: "Freelance, Vinnytsya, Ukraine",
    icon: content,
    iconBg: "#383E56",
    date: "Feb 2016 - May 2017",
    points: [
      "Researched and edited photos and product descriptions to optimize content for online stores.",
      "Managed content updates, gaining experience in web content structuring and user experience—valuable for frontend development.",
    ],
  },
  {
    title: "Teacher of Physics and Astronomy",
    company_name: "Medical College, Mykolayiv, Ukraine",
    icon: teacher,
    iconBg: "#E6DEDD",
    date: "Jan 2014 - Aug 2015",
    points: [
      "Created educational materials (presentations, interactive content), building skills in design and multimedia.",
      "Managed large amounts of information, enhancing analytical skills and attention to detail.",
      "Developed instructional documentation, useful for code organization and documentation in IT.",
      "Supervised student groups, refining communication and teamwork abilities.",
    ],
  },
  {
    title: "Accountant",
    company_name: "Techniques & Technologies, Mykolayiv, Ukraine",
    icon: personal,
    iconBg: "#E6DEDD",
    date: "Jan 2013 - Mar 2013",
    points: [
      "Processed financial transactions and records, requiring data accuracy and attention to detail.",
      "Handled large datasets for reporting, building analytical thinking relevant in software development.",
      "Adapted to new software, showing flexibility and a quick learning curve for new tools.",
    ],
  },
  {
    title: "Teacher of Physics",
    company_name: "Secondary School, Odesa, Ukraine",
    icon: teacher,
    iconBg: "#E6DEDD",
    date: "Sep 2007 - Sep 2012",
    points: [
      "Developed and delivered educational content, including presentations and interactive materials, enhancing skills in design and multimedia work.",
      "Created methodological materials and documentation, improving the ability to organize information — a useful skill for handling code and documentation in IT."
    ],
  },
  {
    title: "My Education",
    company_name: "South Ukrainian National Pedagogical University named after K. D. Ushynsky, Odesa, Ukraine",
    icon: education,
    iconBg: "#E6DEDD",
    date: "Sep 2002 - Sep 2007",
    points: [
      "Degree: Master's degree",
      "Specialization: Teacher of Physics, Computer Science and Life Safety Basics"
    ],
  },
];

const projects = [
  {
    name: "Responsive Landing",
    description:
      "Adaptive landing of the site on the Gulp. Implemented the appearance of the header when scrolling up, the mobile menu, the animation of the appearance using javascript code.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "SCSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "text-red-300",
      },
      {
        name: "Gulp",
        color: "pink-text-gradient",
      },
    ],
    image: abri,
    source_code_link: "https://irskaraieva.github.io/abri/",
  },
  {
    name: "Landing page from Figma",
    description:
      "Conversion of design from Figma. Product filtering, the effect of the appearance of elements and the rotation of the card when hovering is implemented using custom style code and javascript. Swiper is used for the slider.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "text-red-300",
      },
    ],
    image: coralShop,
    source_code_link: "https://irskaraieva.github.io/coral-shop/",
  },
  {
    name: "SPA with React",
    description:
      "Responsive SPA built with React. Realized registration using Firebase. There is a page of all products, a separate product page, a product filter, a page with a working shopping cart. Sliders on the main page. Product search is implemented on the page by the name entered by the user in the search field. The header has an additional product filter by brand and price range, which opens as a mobile menu.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: interiour,
    source_code_link: "https://irskaraieva.github.io/interiour/",
  },
  {
    name: "Landing from Figma",
    description:
      "Conversion of design from Figma. Developed main page, product page, shopping cart, registration page. The product filter works on the main page",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Gulp",
        color: "text-red-500",
      },
    ],
    image: interiourGulp,
    source_code_link: "https://irskaraieva.github.io/interiour-gulp/",
  },
  {
    name: "Landing from Figma",
    description:
      "Conversion of design from Figma. Only custom javascript and styles",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: blinqpay,
    source_code_link: "https://irskaraieva.github.io/blinqpay/",
  },
  {
    name: "SPA with React",
    description:
      "SPA | React - React Hook Form with ZOD - React Authentication With Firebase And Routing - Axios",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: reactFun,
    source_code_link: "https://irskaraieva.github.io/react-fun/",
  },
];

export { services, technologies, experiences, projects };
