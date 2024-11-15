import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I'm an enthusiastic full stack developer with a talent for building reliable and scalable web applications. Through hands-on experience in projects and coursework, I’ve developed strong skills in front-end technologies like React and Next.js, alongside back-end technologies such as Node.js, MongoDB, and MySQL. I aim to use my technical expertise to create impactful solutions that enhance business efficiency and provide seamless user experiences.`;

export const ABOUT_TEXT = `I'm a committed and adaptable full stack developer with a strong focus on building impactful, user-centered applications. With a solid foundation in web development through academic projects and hands-on experience, I have developed proficiency in technologies like React, Node.js, MongoDB, and Next.js. My journey in tech began with a desire to understand digital systems, and it has grown into a pursuit to deliver practical, scalable solutions. I excel in collaborative team settings and embrace challenges that push me to expand my skill set. Outside of development, I enjoy exploring new technologies, enhancing my server management skills, and staying active with personal projects.`;

export const EXPERIENCES = [
  {
    "year": "2023 - Present",
    "role": "Undergraduate",
    "company": "SLIIT",
    "description": "Collaborated in a team to develop an online shopping system and manage inventory, supplier, and order features. Enhanced UI/UX design for dashboards, implemented CRUD operations with MERN stack, and optimized performance with Tailwind CSS.",
    "technologies": ["JavaScript","C++", "Java", "Python", "Kotlin"]
  },
  {
    year: "2021 - 2023",
    role: "Technician",
    company: "North Sails",
    description: `Crafted, repaired, and optimized high-performance sails, ensuring precision and quality using advanced materials and technology, supporting North Sails' industry-leading standards.`,
    technologies: ["Sailmaking", "Sail Repair"],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description:
      "A fully functional e-commerce website with features like product listing, shopping cart, and user authentication.",
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB", "Express"],
  },
  {
    title: "POS System",
    image: project3,
    description:
      "A point-of-sale system for managing sales, inventory, and customer data in a retail environment.",
    technologies: ["HTML", "CSS", "php", "mySQL", "JavaScript", "Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and reminder system.",
    technologies: ["Kotlin", "Android Studio", "SharedPreferences"],
  },
  {
    title: "Personal Expense Tracker App",
    image: project4,
    description:
      "An app for tracking personal expenses and income, with features like budgeting, expense categories, and data visualization.",
    technologies: ["Android Studio", "Kotlin"],
  },
];

export const CONTACT = {
  address: "New Kandy road, Delgoda, Sri Lanka",
  phoneNo: "071 753 7150",
  email: "chathushkawithanage@gmail.com",
};
