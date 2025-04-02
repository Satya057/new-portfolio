import {
    javascript,html,css,reactjs,tailwind,nodejs,mongodb,git,threejs,
    hf,bny,holopin,
    clg,school,
    crypto,oop,yml,crud,dwld,onetomany,
    trie,ds,cg,
    port_3d, jsp, chitchat, notes, react1,
    be,sql, mini, snl,
  } from "../assets";

  const profiles = [
    {
      link: "https://www.geeksforgeeks.org/user/singhsatyaprakash057/",
      icon: "https://img.icons8.com/color/344/GeeksforGeeks.png",
    },
   
    {
      link: "https://www.hackerrank.com/profile/singhsatyapraka2",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    
  ];

  const achievements = [
    {
      title: "LevelUp Vita DSA Contest (May 2023): Secured 4th place out of 332 participants and won a ₹1,000 cash prize.",
    },
    {
      title: "LevelUp Vita 2.0 DSA Contest (May 2023): Secured 2nd place out of 379 participants and won a ₹10,000 cash prize.",
    },
    {
      title: "Project Management Foundations (LinkedIn Learning): Completed certification.",
    },
    {
      title: "Career Essentials in System Administration (Microsoft and LinkedIn): Completed certification.",
    },
    {
      title: "Python (Basic) Certificate: Earned certification.",
    },
    {
      title: "Diploma in Computer Application: Completed diploma.",
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
      name:"Bootstrap",
      icon: "https://img.icons8.com/color/480/000000/bootstrap.png",
    },
    {
      name:"Google Cloud",
      icon: "https://img.icons8.com/color/480/000000/google-cloud.png",
    },
    // {
    //   name:"C++ tool",
    //   icon: "https://img.icons8.com/color/480/000000/c-plus-plus-logo.png",
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name:"MySql",
      icon: "https://img.icons8.com/color/480/000000/mysql-logo.png",
    },
  ];

  const list = [
    // {
    //   id: "java",
    //   title: "Java",
    // },
    // {
    //   id: "c++",
    //   title: "C++",
    // },
    {
      id: "web",
      title: "Web Dev",
    },
    {
      id: "other",
      title: "Other",
    },
  ];

  export const javaProject = [
    {
      name: "Cryptography",
      description:
        "The project is based on a cryptography technique that uses Double layer encryption and decryption using Armstrong numbers and RGB color-based mappings for various types of file format. The idea is inspired from a research paper.",
      tags: [
        {
          name: "cryptography",
          color: "blue-text-gradient",
        },
        {
          name: "security",
          color: "green-text-gradient",
        },
        {
          name: "java",
          color: "pink-text-gradient",
        },
      ],
      image: crypto,
      source_link: "https://github.com/shinchancode/Cryptography",
      source_code_link: "https://github.com/shinchancode/Cryptography",
    },
    {
      name: "Snake Yaml",
      description:
        "Created a simple Maven project, a YAML file and write student data in it. As the request is made, crud should be performed in real time . (Hint: Used SnakeYAML library and add dependency in pom)",
      tags: [
        {
          name: "yaml",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "postman",
          color: "pink-text-gradient",
        },
      ],
      image: yml,
      source_link: "https://github.com/shinchancode/Snake-Yaml-Project",
      source_code_link: "https://github.com/shinchancode/Snake-Yaml-Project",
    },
    {
      name: "CRUD operations",
      description:
        "Built a java based application to allow user to create, read, update and delete Entities. Spring Boot provides an interface called CrudRepository that contains methods for CRUD operations.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "springboot",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_link: "https://github.com/shinchancode/CRUD-Operation",
      source_code_link: "https://github.com/shinchancode/CRUD-Operation",
    },
    {
      name: "Byte-Array-to-File",
      description:
        "Built a java project where we input a file using byte array, store it on local system. In order to convert a byte array to a file, we will be using a method named the getBytes() method of String class.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "byteArray",
          color: "green-text-gradient",
        },
        {
          name: "file",
          color: "pink-text-gradient",
        },
      ],
      image: dwld,
      source_link: "https://github.com/shinchancode/byte-array-to-file",
      source_code_link: "https://github.com/shinchancode/byte-array-to-file",
    },
    {
      name: "Spring Boot One To Many",
      description:
        "Implemented Spring Boot One-To-Many mapping with Hibernate in a Spring Boot CRUD using @OnetoMany annotation. Mapping between two entities and used a MySQL database to store and retrieve the data.",
      tags: [
        {
          name: "onetomany",
          color: "blue-text-gradient",
        },
        {
          name: "springbott",
          color: "green-text-gradient",
        },
        {
          name: "crud",
          color: "pink-text-gradient",
        },
      ],
      image: onetomany,
      source_link: "https://github.com/shinchancode/oneTomany-springboot",
      source_code_link: "https://github.com/shinchancode/oneTomany-springboot",
    },
    {
      name: "OOP Lab",
      description:
        "These projects contain object oriented programming primary concepts and its code in Java language. Topics like : Inheritence, Constructor, Virtual function, Interface, Exception Handling, Generic Programming and File Handling etc.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "oop",
          color: "green-text-gradient",
        },
        {
          name: "coding",
          color: "pink-text-gradient",
        },
      ],
      image: oop,
      source_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
      source_code_link: "https://github.com/shinchancode/Object-Oriented-Programming-Lab",
    },
  ];
  
  export const cProject = [
    {
      name: "Spell Checker",
      description:
        "Trie data structure implementation used as a dictionary, where customer details are checked, searched, inserted and removed. Using Trie, search complexities can be brought to optimal limit (key length)",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "trie",
          color: "green-text-gradient",
        },
        {
          name: "dictionary",
          color: "pink-text-gradient",
        },
      ],
      image: trie,
      source_link: "https://github.com/shinchancode/Trie-Data-structure",
      source_code_link: "https://github.com/shinchancode/Trie-Data-structure",
    },
    {
      name: "DSA Lab",
      description:
        "These projects contain data structure and algorithms primary concepts and its code in C++ language. Topics like : Linked List, Stack, Queue, Circular Queue, Binary Tree, Binary Search Tree, Expression Tree, Threaded Binary Tree, and Heap Sort etc.",
      tags: [
        {
          name: "DSA",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: ds,
      source_link: "https://github.com/shinchancode/Data-Structure-Algorithms",
      source_code_link: "https://github.com/shinchancode/Data-Structure-Algorithms/",
    },
    {
      name: "Computer Graphics Lab",
      description:
        "These projects contain computer graphics topics like : Line Drawing Algorithm (DDA and Bresenham), Bresenham circle drawing, Polygon filling, 2D transformation, Cohen Sutherland polygon clipping and Bezier curve.",
      tags: [
        {
          name: "computergraphics",
          color: "blue-text-gradient",
        },
        {
          name: "C++",
          color: "green-text-gradient",
        },
        {
          name: "semester",
          color: "pink-text-gradient",
        },
      ],
      image: cg,
      source_link: "https://github.com/shinchancode/Computer-Graphics",
      source_code_link: "https://github.com/shinchancode/Computer-Graphics",
    },
    
  ];
  















  export const webProject = [
    {
      name: "Elevate BPM Website",
      description:
        "Developed and implemented a modern, responsive user interface for Elevate BPM, a leading audit firm in UAE providing accounting, auditing, and business management services. Created an engaging digital platform using React 18 and Next.js 15, featuring interactive animations with Framer Motion and AOS, dynamic content sliders with Embla Carousel, and optimized performance with lazy loading.",
      tags: [
        {
          name: "React 18",
          color: "blue-text-gradient",
        },
        {
          name: "Next.js 15",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: "https://elevateauditing.com/wp-content/uploads/2024/10/contact-bg.jpg",
      source_link: "https://elevatebpm.com/",
      source_code_link: "https://elevatebpm.com/",
    },
    {
      name: "lumen5.com",
      description:
        "Created an impressive website made using React , Lumen5 is a video creation platform designed for brands and businesses to produce engaging video content for social posts, stories, and ads.Responsive webpage is made with user friendly interface",
      tags: [
        {
          name: "TailwindCSS",
          color: "blue-text-gradient",
        },
        {
          name: "Java Script",
          color: "green-text-gradient",
        },
        {
          name: "React",
          color: "pink-text-gradient",
        },
      ],
      image: "https://www.microinchhub.com/wp-content/uploads/2024/01/Untitled-design-90-min.png",
      source_link: "https://workon-lumen5-r6in1tfo5-satya057.vercel.app/",
      source_code_link: "https://github.com/sumitss085/bizarre-quilt-7359",
    },
    {
      name: "trip-villas",
      description:
        "Website made using React in the FrontEnd, Nodejs and Express in the BackEnd. Responsive webpage is made with user friendly interface. Tripvillas is one of Asia's largest Holiday Home Rental Companies. Browse your ideal vacation home from over 1350 holiday homes ",
      tags: [
        {
          name: "nodejs",
          color: "blue-text-gradient",
        },
        {
          name: "React",
          color: "green-text-gradient",
        },
        {
          name: "html css",
          color: "pink-text-gradient",
        },
      ],
      image: "https://d2v8elt324ukrb.cloudfront.net/static/new_template/media/Pimal2-1.2d5d237dbd32.jpg",
      source_link: "https://villroshell.netlify.app/",
      source_code_link: "https://github.com/Satya057/-knowledgeable-sea-5909",
    },
    {
      name: "Naukari.com",
      description:
        "This is my individual project created in Masai School during constructing week Project. I made clone of Naukari.com by using HTML CSS and Java-Script in 5 days .",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: "data:image/png;base64,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",
      source_link: "https://sick-dress.vercel.app/",
      source_code_link: "https://github.com/Satya057/-sick-dress-4939",
    },
    {
      name: "Zara.com Web",
      description:
        "The project includes the Landing page, Login and Signup page, Product pages for Men, Women, and Kids section. The project is truly interactive and functional with features such as Login validation, Sorting.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "Nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: "https://wallpapers.com/images/hd/zara-trendy-apparel-store-gl7gcueavn8593bg.jpg",
      source_link: "https://resonant-lily-7ac8fd.netlify.app/",
      source_code_link: "https://github.com/Sachin230498/fashion-shop",
    },
    
  ];
  
  export const otherProject = [
    {
      name: "Todo Group Status",
      description:
        "This is a React application that allows users to manage to-do items by creating groups and viewing the completion status of each item. The application uses Redux for state management.",
      tags: [
        {
          name: "Redux",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "Html Css",
          color: "pink-text-gradient",
        },
      ],
      image: be,
      source_link: "https://silver-lollipop-3b6667.netlify.app/",
      source_code_link: "https://github.com/Satya057/Travel-corporation-",
    },

     
  ];




  const experiences = [
    {
      title: "Full Stack Developer",
      company_name: "CodeAppto",
      icon: "https://media.licdn.com/dms/image/v2/D4E0BAQGFgsbW2hQBGQ/company-logo_200_200/company-logo_200_200/0/1680857644326/codeapto_logo?e=2147483647&v=beta&t=0-kfITKcw4Ar70Uo90LvM8ANufmi4sATCRrTxBosmpU",
      iconBg: "#383E56",
      date: "06/2023 - 03/2025",
      points: [
        "Developed and maintained diverse web-based tools and converters using React and Node.js.",
        "Created bespoke solutions for startups across various industries.",
        "Enhanced company's online presence and user engagement through innovative web applications.",
        "Collaborated in a team to deliver high-quality, customized solutions for specific client needs.",
      ],
    },
    {
      title: "Software Intern",
      company_name: "Ajackus",
      icon: "https://media.designrush.com/agencies/533437/conversions/Ajackus-logo-profile.jpg",
      iconBg: "#383E56",
      date: "09/2024 - 01/2025",
      link: "",
      points: [
        "Contributing to the development of secure and scalable business solutions for global clients.",
        "Gaining experience in various tech domains including fintech, health tech, travel tech, and prop-tech.",
        "Collaborating with agile teams to solve complex business challenges.",
      ],
      link: "https://drive.google.com/file/d/1k-P-SiBZa-n7pCRguXUj_WybldanuJJH/view?usp=sharing",
    },
   
    {
      title: "Full Stack Web Developer",
      company_name: "Riseupp Edutech Pvt Ltd",
      icon: "https://s3-eu-west-1.amazonaws.com/tpd/logos/66e5685499f244b7d9fbc94c/0x0.png",
      iconBg: "#383E56",
      date: "Dec 2022 - March 2023",
      link: "",
      points: [
        "I worked on creating single sign up page using Google Firebase and scrapping course database from EDX via API.",
        "Worked on React.JS, React-Bootstrap, CSS",
        "Adapted Agile methodologies, CI/CD, and Test-Driven Programming to uphold strong programming practices.",
        "Using technologies like html, SpringBoot, Css, React and AngularJS.",
      ],
      link: "https://drive.google.com/file/d/1u-f7QspMh_rS4bx2rUixlx46hufr3Vzl/view?usp=sharing",
    },
    {
      title: "Full Stack Web Development certification course",
      company_name: "Masai School",
      icon: "https://lwfiles.mycourse.app/masai-school-public/283427801ef0376bad3f197fad544f38.png",
      iconBg: "#383E56",
      date: "June 2022 - June 2023",
      link: "",
      points: [
        "Successfully completed an intensive Full-Stack Development course with a focus on the MERN stack (MongoDB, Express.js, React.js, Node.js).",
        "Gained hands-on experience in building and deploying scalable web applications using modern tools and frameworks.",

        "Frontend Development: Responsive design using HTML, CSS, JavaScript, React.js.",
        "Backend Development: REST API development with Node.js and Express.js.",
        "Database Management: Implemented CRUD operations and optimized queries using MongoDB.",
        "Version Control: Proficient with Git and GitHub for collaborative development.",
        "Problem Solving: Enhanced coding efficiency through data structures and algorithms.",
        "Capstone Project: Built a full-stack e-commerce platform integrating user authentication, dynamic dashboards, and payment gateway.",
      ],
      link: "https://drive.google.com/file/d/1Xe3Ye08EZaCuOC865r3C1L6LutlnuI3i/view?usp=sharing",
    },
  ];
  
  const educations = [
    {
      degree: "Master in Business Administration ",
      branch:
        "Operation & Management",
  
      name: " SCDL, Pune",
      year: "( 2021- 2023)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw_IipRxd51o6PLRD5Mpqk_MO8GFY3uEMycQ&s",
    },
    {
      degree:
        "Bachelor of Computer Application (BCA)",
      branch: "Computer Science",
       
      name: "Rajarshi School of Management And Technology",
      year: "2016-2019",
      image: "https://media.collegedekho.com/media/img/institute/crawled_images/14_ikCGnRs.jpg",
    },
    {
      degree:
        "12th Grade",
      branch : "Science",
     name: "Shri Shivaji National Inter College Hansipur Mirzapur",
      year: "2016",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ZXevjuoGM1dvcX1QJp_-VdjczLBosvv-lA&s",
    },
    
  ];
  
  export { list, profiles, technologies, experiences, educations, achievements };
