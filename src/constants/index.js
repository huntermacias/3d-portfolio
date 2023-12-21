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
  // OpenAI DALL-E Clone - MERN
  {
    name: "OpenAI DALL-E Clone - MERN",
    description: "Web Development - MERN, OpenAI, and Cloudinary. Developed a MERN stack-based DALL-E clone.",
    tags: [
      { name: "MERN", color: "blue-text-gradient" },
      { name: "OpenAI", color: "green-text-gradient" }
    ],
    image: "https://i.ytimg.com/vi/Q9FGUii_4Ok/mqdefault.jpg",
    source_code_link: "https://openai-pandabit.netlify.app/"
  },
  // Snake Game + A.I
  {
    name: "Snake Game + A.I",
    description: "Machine Learning & A.I. - PyGame. A PyGame Implementation of the popular Classic Retro Snake Game with AI.",
    tags: [
      { name: "PyGame", color: "blue-text-gradient" },
      { name: "AI", color: "green-text-gradient" }
    ],
    image: "https://demofont.com/wp-content/uploads/2021/02/Ardhy-PreviewFonts-Cover-1200x800-1.jpg",
    source_code_link: "https://huntermacias.netlify.app/"
  },
  // NextJs Portfolio
  {
    name: "NextJs Portfolio",
    description: "Web Development - NextJs, TailwindCSS, Amazon AWS, and Stripe Payments. Crafted a personal portfolio using Next.js and TailwindCSS.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" }
    ],
    image: "https://img.freepik.com/premium-vector/template-design-concept-video-conference-online-meeting-work-form-home-user-interface-website-applicaton_71983-2112.jpg",
    source_code_link: "https://huntermacias.netlify.app/"
  },
  // Zoom Clone
  {
    name: "Zoom Clone",
    description: "Web Development - ReactJs and Agora WEB. Developed a video conferencing application akin to Zoom.",
    tags: [
      { name: "ReactJs", color: "blue-text-gradient" },
      { name: "Agora Web SDK", color: "green-text-gradient" }
    ],
    image: "https://img.freepik.com/premium-vector/template-design-concept-video-conference-online-meeting-work-form-home-user-interface-website-applicaton_71983-2112.jpg",
    source_code_link: "https://lively-pastelito-3c6253.netlify.app"
  },
  // LinkedIn Clone
  {
    name: "LinkedIn Clone",
    description: "Web Development - ReactJs, Firebase. Built a LinkedIn Clone with React.js and Firebase.",
    tags: [
      { name: "ReactJs", color: "blue-text-gradient" },
      { name: "Firebase", color: "green-text-gradient" }
    ],
    image: "https://img.freepik.com/free-vector/flat-design-linkedin-mockup_23-2149217511.jpg",
    source_code_link: "https://linkedin-clone-cc4d3.web.app/"
  },
  // NFT Marketplace React Native App
  {
    name: "NFT Marketplace React Native App",
    description: "Mobile Development - React Native - TailwindCSS. Created an NFT Marketplace mobile app using React Native.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "TailwindCSS", color: "green-text-gradient" }
    ],
    image: "https://i.imgur.com/yvz2jdw.png",
    source_code_link: "https://pro-nef-x.netlify.app/"
  },
  // Web3 Crypto Lottery App
  {
    name: "Web3 Crypto Lottery App",
    description: "Web3 - NextJs + Blockchain + Smart Contracts + Solidity. Designed a cryptocurrency lottery application leveraging Next.js and Solidity smart contracts.",
    tags: [
      { name: "Web3", color: "blue-text-gradient" },
      { name: "Solidity", color: "green-text-gradient" }
    ],
    image: "https://i.imgur.com/E4yJgh0.jpeg",
    source_code_link: "https://lottery-draw.netlify.app/"
  },
  // ShareMe: Advanced Social Media Platform
  {
    name: "ShareMe: Advanced Social Media Platform",
    description: "Full-Stack Development with TypeScript & Sanity. ShareMe redefines social media interaction with Google Authentication, post creation, editing, and deletion, and advanced search capabilities.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Sanity", color: "green-text-gradient" }
    ],
    image: "https://files.oaiusercontent.com/file-DarPP4XToQpspyhjyCJ2U9hy?se=2023-12-21T01%3A40%3A03Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D240ecd57-1988-451a-a423-7914f616fc16.webp&sig=LD/iZRGK%2B1Pezh0%2BiDtKH1jga%2BT2G3lJ9eVJF%2Ba4%2BJg%3D",
    source_code_link: "https://bubba.netlify.app/"
  },
  // TikTok-Inspired Video Sharing Platform
  {
    name: "TikTok-Inspired Video Sharing Platform",
    description: "Dynamic Web Dev: TypeScript & Sanity. A TikTok clone with a sleek design, incorporating Google Authentication, video upload and sharing, comment interactions, and category-based filtering.",
    tags: [
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Sanity", color: "green-text-gradient" }
    ],
    image: "https://i.ytimg.com/vi/UYTkkl0qZk4/maxresdefault.jpg",
    source_code_link: "https://symphonious-kitten-397f94.netlify.app/"
  },
  // Blockchain-Powered Crowdfunding Platform
  {
    name: "Blockchain-Powered Crowdfunding Platform",
    description: "Innovative Web3 Solution with Solidity & Smart Contracts. A blockchain-based crowdfunding platform, featuring Metamask integration, smart contract interactions, and Ethereum transactions.",
    tags: [
      { name: "Web3", color: "blue-text-gradient" },
      { name: "Solidity", color: "green-text-gradient" }
    ],
    image: "https://i.ytimg.com/vi/BDCT6TYLYdI/maxresdefault.jpg",
    source_code_link: "https://cool-cactus-84bc7e.netlify.app/"
  },
  // NFT Marketplace: OpenSea Clone
  {
    name: "NFT Marketplace: OpenSea Clone",
    description: "NFT Marketplace Development with Next.js & Web3. An NFT marketplace mimicking OpenSea, showcasing a variety of blockchain use cases.",
    tags: [
      { name: "Next.js", color: "blue-text-gradient" },
      { name: "Web3", color: "green-text-gradient" }
    ],
    image: "https://moralis.io/wp-content/uploads/2021/11/21_11_OpenSea-Clone-Create-an-NFT-Marketplace-Like-OpenSea.jpg",
    source_code_link: "https://opensea-hm.netlify.app"
  },
  // Kobe Bryant's Legacy: A Data Visualization
  {
    name: "Kobe Bryant's Legacy: A Data Visualization",
    description: "Interactive Data Visualization with D3.js. A tribute to Kobe Bryant through data visualization, showcasing his basketball career and impact.",
    tags: [
      { name: "D3.js", color: "blue-text-gradient" },
      { name: "Data Visualization", color: "green-text-gradient" }
    ],
    image: "https://files.oaiusercontent.com/file-8OIp7TDVjX4FSoG7GQpNBENW?se=2023-12-21T01%3A29%3A36Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D62372783-cde8-430e-bf88-ec438b4e2f01.webp&sig=kmte2RsFi/yvrwPaI0JgP4mOJz5g0szvuBZ8lMVyN60%3D",
    source_code_link: "https://huntermacias.github.io/data-vis-basketball/index.html"
  },
  // AI-Powered ChatGPT Messaging Platform
  {
    name: "AI-Powered ChatGPT Messaging Platform",
    description: "Advanced Chatbot Integration in Web Development. ChatGPT Messenger revolutionizes communication with AI-driven conversations.",
    tags: [
      { name: "NLP", color: "blue-text-gradient" },
      { name: "ML", color: "green-text-gradient" }
    ],
    image: "https://www.weetechsolution.com/wp-content/uploads/2022/12/OpenAI-ChatGPT-1.png",
    source_code_link: "https://chatgpt-messenger-three.vercel.app/"
  },
  // Healthcare Communication App
  {
    name: "Healthcare Communication App",
    description: "Secure Medical Chat Application Development. A responsive medical chat application offering direct and group chats.",
    tags: [
      { name: "Chat", color: "blue-text-gradient" },
      { name: "Healthcare", color: "green-text-gradient" }
    ],
    image: "https://i.ibb.co/hsvcw4V/image.png",
    source_code_link: "https://curechat.netlify.app/"
  },
  // Las Vegas Raiders Fan Blog
  {
    name: "Las Vegas Raiders Fan Blog",
    description: "Comprehensive NFL Team Coverage and Analysis. The ultimate resource for Las Vegas Raiders fans.",
    tags: [
      { name: "NFL", color: "blue-text-gradient" },
      { name: "Blogging", color: "green-text-gradient" }
    ],
    image: "https://th.bing.com/th/id/R.02299f90b4d72b739d8f2766a46136a8?rik=kOESPznNANOQcA&pid=ImgRaw&r=0",
    source_code_link: "https://www.raidersrundown.com"
  },
  // 3D Interactive Developer Portfolio
  {
    name: "3D Interactive Developer Portfolio",
    description: "Personal Portfolio Creation with Three.js & Framer Motion. A personal portfolio showcasing projects in a 3D interactive format.",
    tags: [
      { name: "Three.js", color: "blue-text-gradient" },
      { name: "Framer Motion", color: "green-text-gradient" }
    ],
    image: "https://i.ytimg.com/vi/0fYi8SGA20k/maxresdefault.jpg",
    source_code_link: ""
  },
  // Comprehensive Job Search Mobile App
  {
    name: "Comprehensive Job Search Mobile App",
    description: "Job Discovery Application with React Native. A powerful job search tool leveraging RapidAPI for comprehensive job listings.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "RapidAPI", color: "green-text-gradient" }
    ],
    image: "https://i.imgur.com/W3GpXi3.jpg",
    source_code_link: "https://expo.dev/@huntermacias/job-search-app?serviceType=classic&distribution=expo-go"
  },
  // Text Similarity Analysis API
  {
    name: "Text Similarity Analysis API",
    description: "API Development for Text Comparison. Similarity Scout offers a straightforward API to assess text similarity.",
    tags: [
      { name: "API", color: "blue-text-gradient" },
      { name: "Text Analysis", color: "green-text-gradient" }
    ],
    image:"https://similarityscout.netlify.app/_next/image?url=%2Ftypewriter.png&w=3840&q=100",
    source_code_link: "https://similarityscout.netlify.app"
  },
  // Interactive Pygame Documentation Portal
  {
    name: "Interactive Pygame Documentation Portal",
    description: "Enhanced Documentation Website for Pygame. An interactive and user-friendly documentation site for Pygame.",
    tags: [
      { name: "Documentation", color: "blue-text-gradient" },
      { name: "Pygame", color: "green-text-gradient" }
    ],
    image: "https://files.oaiusercontent.com/file-gV1NvtEBqOBJXguKt4nEewN4?se=2023-12-21T01%3A28%3A00Z&sp=r&sv=2021-08-06&sr=b&rscc=max-age%3D31536000%2C%20immutable&rscd=attachment%3B%20filename%3D4317b86e-0a48-452c-9095-e149d75aa3fc.webp&sig=AZ6JQiIJAC%2BAbfP9EkLnPSWCVLk8EHdJp4Gwgfb4Y80%3D",
    source_code_link: "https://revamed-pygame-docs.vercel.app/"
  }




  
];

export { services, technologies, experiences, testimonials, projects };
