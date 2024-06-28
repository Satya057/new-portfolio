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
    // {
    //   link: "https://www.coursera.org/account/accomplishments/specialization/7V2SFZ9YWWRL",
    //   icon: "https://img.icons8.com/fluency/344/google-cloud.png",
    // },
    // {
    //   link: "https://www.qwiklabs.com/public_profiles/48dcd029-03b4-437b-9dd3-ef7d65958eb0",
    //   icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-qwiklabs-provides-real-cloud-environments-that-help-developers-logo-color-tal-revivo.png",
    // },
    {
      link: "https://www.hackerrank.com/profile/singhsatyapraka2",
      icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/344/external-hackerrank-is-a-technology-company-that-focuses-on-competitive-programming-logo-color-tal-revivo.png",
    },
    // {
    //   link:"https://dev.to/shinchancode",
    //   icon: hf,
    // },
    // {
    //   link:"https://www.holopin.io/@shinchancode#badges",
    //   icon: holopin,
    // },
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
      image: "https://mir-s3-cdn-cf.behance.net/projects/404/ec7d5d189728261.Y3JvcCw1MzI4LDQxNjgsMCww.png",
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

    {
      name: "E-commerce",
      description:
        "This is an e-commerce web application that allows users to browse products, add them to their cart, and view the cart summary. The application is designed to be responsive and user-friendly, providing a seamless shopping experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "Html css",
          color: "pink-text-gradient",
        },
      ],
      image: "https://i.ibb.co/HX0SbMm/Screenshot-2024-06-28-090421.png",
      source_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
      source_code_link: "https://github.com/shinchancode/DBMS-SQL-Lab",
    },
  ];




  const experiences = [
    {
      title: "Full Stack Web Devloper",
      company_name: "Riseupp Edutech Pvt Ltd",
      icon: "https://pbs.twimg.com/profile_images/1618631076825698304/dOMg8g3H_400x400.jpg",
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
      date: "June  2022 -  june 2023",
      link: "",
      points: [
        "Designing and implementing a system for fine-grained access control and authorization of digital assets and operations",
        "Utilizing advanced cryptographic techniques to ensure secure and efficient access management.",
        "Integrating with Cross-Functional Technologies",
        "Collaborating with technologies like Spring Boot and React to develop and integrate high-quality products.",
        "Ensuring seamless integration and interoperability between various system components.",
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
