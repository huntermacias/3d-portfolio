import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  lotteryapp,
  chatgpt,
  rblog,
  threejs,
  leadbird,
  missionbit,
  coderschool,
  raiders,
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
    title: "Python Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Content Creator",
    company_name: "All About The Shield",
    icon: raiders,
    iconBg: "#383E56",
    date: "Jan 2021 - Present",
    points: [
      "Created and developed a dynamic sports blog utilizing Next.js & Sanity.io",
      "Authored engaging and informative sports content focused on the Las Vegas Raiders, showcasing a deep understanding of the team, its history, and its current state of play",
      "Conducted in-depth research on the latest news, trends, and developments in the world of sports, leveraging this knowledge to inform and enhance the content of the blog",
      "Monitored blog traffic, engagement, and analytics using industry-standard tools, making data-driven decisions to optimize content and drive growth",
    ],
  },
  {
    title: "Coding Coach",
    company_name: "The Coder School",
    icon: coderschool,
    iconBg: "#E6DEDD",
    date: "June 2020 - Present",
    points: [
      "Developed and designed dynamic and engaging curriculums for Python, Scratch, and Web Design",
      "Guided students of all skill levels through the intricacies of the UML modeling language, providing clear explanations and hands-on experience",
      "Conducted one-on-one sessions with students, utilizing a project-based learning approach to inspire interest, build essential skills, and foster a deep sense of excitement and passion for coding and technology",
    ],
  },
  {
    title: "Frontend Developer - Internship",
    company_name: "Leadbird",
    icon: leadbird,
    iconBg: "#383E56",
    date: "June 2021 - Sept 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Developed web scrapping application using Dux-Soup Technology and LinkedIn API",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews & product vision with CEO",
    ],
  },
  {
    title: "Lead Instructor",
    company_name: "MissionBit",
    icon: missionbit,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - March 2022",
    points: [
      "Served as the lead instructor for three distinct courses, including Python, Web Development, and Unity Game Development",
      "Developed and adapted course materials to suit the unique needs and interests of individual students and classes",
      "Collaborated with other instructors and staff to develop and implement policies and procedures for course delivery and student assessment",
      "Kept up-to-date with the latest trends, technologies, and developments in the fields of Python, Web Development, and Game Development, applying this knowledge to enhance course content and teaching methodologies",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Thanks to Hunter's incredible application, we were able to rapidly expand our clients' businesses and help them grow their outreach in record time. With so many clients waiting to take their next steps, Hunter's solution proved to be a game-changer, enabling us to expedite growth and unlock new opportunities for our clients.",
    name: "Carl J. Rohling",
    designation: "CEO",
    company: "Leadbird",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    testimonial:
      "From the very beginning, you were a pleasure to work with. You listened carefully to my needs and desires for the blog, and then put your expertise to work in crafting something truly special. Your attention to detail was impeccable, and you made sure that every aspect of the blog was perfectly tailored to my preferences.",
    name: "Christy Browwing",
    designation: "Founder",
    company: "Daily Deeds Tech",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    testimonial:
      "Thanks to your guidance and expertise, I was able to pass my exam with flying colors and even got into my favorite college! I remember feeling incredibly overwhelmed and intimidated by the subject matter when I first started studying for the exam. But you made everything so much clearer and easier to understand. You patiently explained the concepts to me until I fully grasped them.",
    name: "Lisa Wang",
    designation: "Student",
    company: "U.C Berkeley",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "All About the Shield",
    description:
      "Web-based application that build using Next.js version 13 & Sanity.io. All About the Shield is dedicated to providing Game Recaps | Player Profiles | Draft Predictions | Latest Updates & Rumors | Analysis & more",
    tags: [
      {
        name: "Next13",
        color: "blue-text-gradient",
      },
      {
        name: "Sanity.io",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: rblog,
    source_code_link: "https://raidersrundown.com",
  },
  {
    name: "ChatGPT Messenger 2.0",
    description:
      "ChaptGPT Clone built using Next13, Firebase & TypeScript. ",
    tags: [
      {
        name: "Next13",
        color: "blue-text-gradient",
      },
      {
        name: "Firestore",
        color: "green-text-gradient",
      },
      {
        name: "OpenAi API",
        color: "pink-text-gradient",
      },
    ],
    image: chatgpt,
    source_code_link: "https://chatgpt-messenger-three.vercel.app/",
  },
  {
    name: "Web3 Crypto Lottery App",
    description:
      "Web3 - NextJs + Blockchain + Smart Contracts + Solidity Lottery Draw App built using Next.js/TailwindCSS and Solidity Smart Contract with thirdweb's new deploy. Metamask wallet required to login.",
    tags: [
      {
        name: "Web3-Smart-Contract",
        color: "blue-text-gradient",
      },
      {
        name: "Solidity",
        color: "green-text-gradient",
      },
      {
        name: "Blockchain",
        color: "pink-text-gradient",
      },
    ],
    image: lotteryapp,
    source_code_link: "https://lottery-draw.netlify.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
