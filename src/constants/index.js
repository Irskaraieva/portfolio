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
      title: "Content Creator",
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
      title: "Content Manager, Copywriter",
      company_name: "Freelance, Vinnytsya, Ukraine",
      icon: content,
      iconBg: "#383E56",
      date: "Feb 2016 - May 2017",
      points: [
        "Search and edit product photos.",
        "Rewriting of product descriptions.",
        "Filling online stores with content through the management system.",
        "Copywriting of texts on various topics.",
      ],
    },
    {
      title: "Teacher of Physics and Astronomy",
      company_name: "Medical College, Mykolayiv, Ukraine",
      icon: teacher,
      iconBg: "#E6DEDD",
      date: "Jan 2014 - Aug 2015",
      points: [
        "Conducting lectures and practical classes.",
        "Creating presentations, working with text documents.",
        "Maintenance of methodical documentation.",
        "Curator of the group.",
      ],
    },
    {
      title: "Accountant",
      company_name: "Techniques & Technologies, Mykolayiv, Ukraine",
      icon: personal,
      iconBg: "#E6DEDD",
      date: "Jan 2013 - Mar 2013",
      points: [
        "Making payments through client banks.",
        "Registering the company's financial transactions in the accounting program.",
        "Analyzing the state of accounts and choosing the appropriate account for carrying out certain financial transactions.",
        "Participating in financial reporting.",
      ],
    },
    {
      title: "Teacher of Physics",
      company_name: "Secondary School, Odesa, Ukraine",
      icon: teacher,
      iconBg: "#E6DEDD",
      date: "Sep 2007 - Sep 2012",
      points: [
        "Conducting theoretical and practical lessons.",
        "Maintenance of methodical documentation.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
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
        "Specialization: Teacher of physics, informatics and basics of life safety"
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
