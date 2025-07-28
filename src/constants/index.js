import sm_1 from "../assets/projects/sm-1.png";
import sm_2 from "../assets/projects/sm-2.png";
import sm_3 from "../assets/projects/sm-3.png";
import sm_4 from "../assets/projects/sm-4.png";
import wu_1 from "../assets/projects/wu-1.png";
import wu_2 from "../assets/projects/wu-2.png";
import wu_3 from "../assets/projects/wu-3.png";
import wu_4 from "../assets/projects/wu-4.png";
import wu_5 from "../assets/projects/wu-5.png";
import crs_1 from "../assets/projects/crs-1.png";
import crs_2 from "../assets/projects/crs-2.png";
import crs_3 from "../assets/projects/crs-3.png";
import crs_4 from "../assets/projects/crs-4.png";
import ta_1 from "../assets/projects/ta-1.png";
import ta_2 from "../assets/projects/ta-2.png";
import ta_3 from "../assets/projects/ta-3.png";

export const HERO_CONTENT = `Active 7th-semester Information Systems student with a strong passion for web development. Leveraging professional experience in building a company website, I'm highly proficient in JavaScript, React.js, and Next.js for responsive, high-performance web interfaces. My skills extend to RESTful API integration and using modern tools like Firebase, MongoDB, Redux Toolkit, and Framer Motion. This real-world project honed my design-to-code translation and strengthened my UI/UX understanding, demonstrating my proactive approach to new technologies and commitment to clean, efficient code.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "March 2025 - July 2025",
    role: "Frontend Web Developer Intern",
    company: "PT. Amal Ichwan Arindo",
    description: `As a Frontend Developer, I developed and maintained web applications using JavaScript, React.js, and Next.js, specializing in UI development and optimization for PT. Amal Ichwan Arindo's online recruitment platform.`,
    technologies: [
      "NextJS",
      "Tailwind CSS",
      "Api Integration",
      "Framer Motion",
      "SwiperJS",
    ],
  },
];

export const EDUCATION = [
  {
    year: "2022 - Present",
    university: "Universitas Nusa Mandiri",
    degree: "Bachelor’s Degree in Information Systems – GPA 3.89",
  },
  {
    year: "2018 - 2021",
    university: "SMKS Hang Tuah 2",
    degree: "Computer and Network Engineering – GPA 88",
  },
];

export const PROJECTS = [
  {
    title: "Sahabat Merantau (PT. Amal Ichwan Arindo)",
    images: [sm_1, sm_2, sm_3, sm_4],
    description:
      "I personally developed and officially deployed this entire online recruitment platform from scratch for PT. Amal Ichwan Arindo. It serves to seamlessly connect Indonesian job seekers with employment opportunities in the Middle East, a project I saw through from its initial concept to its successful launch.",
    technologies: [
      "NextJS",
      "Tailwind CSS",
      "Api Integration",
      "Framer Motion",
      "SwiperJS",
    ],
    link: "https://sahabatmerantau.id/",
  },
  {
    title: "Task Management System with REST API",
    images: [ta_1, ta_2, ta_3],
    description:
      "Task Management System is designed to efficiently organize and track tasks. Powered by a robust RESTful API and a MongoDB database, the application enables seamless CRUD (Create, Read, Update, Delete) operations for tasks, ensuring responsive frontend-backend communication and an intuitive user experience.",
    technologies: [
      "NextJS",
      "Tailwind CSS",
      "MongoDB",
      "REST API",
      "React Toastify",
    ],
    link: "https://github.com/rizaldhmarsyah/Task-Management-System-with-REST-API",
  },
  {
    title: "E-Commerce Brand Platform",
    images: [wu_1, wu_2, wu_3, wu_4, wu_5],
    description:
      "This is a personal web project for an outdoor brand, which I fully developed from scratch and brought to live deployment. It functions as a simulated digital storefront and platform, showcasing their products and brand story.",
    technologies: [
      "React Vite",
      "Tailwind CSS",
      "Firebase",
      "Redux Toolkit",
      "SwiperJS",
    ],
    link: "https://whateveroutdoor-ecommerce-website.vercel.app/",
  },
  {
    title: "Course Website",
    images: [crs_1, crs_2, crs_3, crs_4],
    description:
      "A multi-page course website offering a straightforward online learning experience. This platform focuses on providing clear access to educational content across various pages, enabling users to easily navigate and consume course material.",
    technologies: [
      "React Vite",
      "Tailwind CSS",
      "Bootstrap",
      "SwiperJS",
      "AOS",
    ],
    link: "https://course-website-rizaldhmarsyah.vercel.app/", // <--- ADD THE ACTUAL LINK HERE
  },
];

export const CONTACT = {
  address: "Jakarta, Indonesia",
  phoneNo: "+62 882 9223 3779",
  email: "rizalnur.work@gmail.com",
};
