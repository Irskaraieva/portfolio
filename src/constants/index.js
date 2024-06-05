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
    git,
    figma,
    education,
    content,
    teacher,
    personal,
    carrent,
    jobit,
    tripguide,
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
      date: "Jan 2013 - Aug 2014",
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "bulma",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
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
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };