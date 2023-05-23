import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  java,
  html,
  blender,
  reactjs,
  springboot,
  maven,
  kubernetes,
  mysql,
  git,
  jira,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  junit,
  itss,
  fii,
  traffic,
  quizzApp,
  encryptedDatabase,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "React enthusiast",
    icon: mobile,
  },
  {
    title: "3D Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "SpringBoot",
    icon: springboot,
  },
  {
    name: "junit",
    icon: junit,
  },
  {
    name: "maven",
    icon: maven,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "jira",
    icon: jira,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "kubernetes",
    icon: kubernetes,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "blender",
    icon: blender,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
];

const experiences = [
  {
    title: "Bachelor's degree",
    company_name: "Faculty Of Computer Science Iasi",
    icon: fii,
    iconBg: "#ffffff",
    date: "October 2020 - July 2023",
    points: [
      "Object Oriented Programming, Data Structures, Software Engineering",
      "Computer Networks, Wen Technologies, Cryptography, Information Security",
      "Java, Python, Html, CSS, Node.js, C++.",
    ],
  },
  {
    title: "Java Internship",
    company_name: "It Smart Systems",
    icon: itss,
    iconBg: "#ffffff",
    date: "July 2022 - September 2022",
    points: [
      "Learning basic concepts about git as a version control system.",
      "Java Core exercises.",
      "Introduction to Spring and Spring Boot. How to configure Eureka Server, Spring Cloud OpenFeign, Spring Cloud Hystrix, Spring Cloud Ribbon, Spring Cloud Zuul, Spring Cloud Config Server.",
      "Design Patterns and Unit Testing.",
    ],
  },
  {
    title: "Java backend developer",
    company_name: "It Smart Systems",
    icon: itss,
    iconBg: "#ffffff",
    date: "September 2022 - present",
    points: [
      "Developing and maintaining backend applications using SpringBoot and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing restful application programming interfaces.",
      "Participating in code reviews and providing constructive feedback to other developers.",
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
    name: "Traffic Management System",
    description:
      "The System is able to manage traffic and provide virtual information to drivers. Drivers are also able to report traffic incidents to the system. These updates are sent to all traffic participants. Each car will automatically send to the system information about the speed at which it travels. Then, the system will notify each driver about certain speed restrictions (possibly due to a traffic jam). Also, each driver will be able to register to receive information about the weather, sporting events, fuel prices at peco stations.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "linux",
        color: "green-text-gradient",
      },
      {
        name: "client-server",
        color: "pink-text-gradient",
      },
    ],
    image: traffic,
    source_code_link:
      "https://github.com/BiancaPricopi/Gestionarea-Traficului.git",
  },
  {
    name: "Quizz-App",
    description:
      "Web application where user will register with an email and will receive a test containing 10 questions from different domains. Front-end: HTML, CSS, JS, for backend: java Spring Boot. From this project I learned how to implement REST services and work with oracle sql database.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "js",
        color: "green-text-gradient",
      },
      {
        name: "restapi",
        color: "pink-text-gradient",
      },
    ],
    image: quizzApp,
    source_code_link: "https://github.com/",
  },
  {
    name: "Encrypted Database",
    description:
      "Console Application to store encrypted data of a file (using RSA and SHA-512). This tool will be able to store encrypted content of a file and metadata associated with it. User will be able to use the following commands:: enc -add < file >, enc -read-file < file >, enc -read-meta < file >, enc -read < file >, enc -rm < file >, q, help.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "RSA",
        color: "green-text-gradient",
      },
      {
        name: "mysql",
        color: "pink-text-gradient",
      },
    ],
    image: encryptedDatabase,
    source_code_link: "https://github.com/BiancaPricopi/encrypted-database.git",
  },
];

export { services, technologies, experiences, testimonials, projects };
