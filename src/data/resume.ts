export const profile = {
  name: "Sudhanshu Koli",
  role: "Java Full Stack Developer",
  email: "kolisudhanshu@gmail.com",
  phone: "+91 86683 27650",
  phoneHref: "+918668327650",
  github: "https://github.com/sudhanshukoli",
  githubHandle: "github.com/sudhanshukoli",
  linkedin: "https://www.linkedin.com/in/sudhanshu-koli-sk2001",
  linkedinHandle: "/in/sudhanshu-koli-sk2001",
  availability: "Available to join immediately",
  summary:
    "I am a passionate Full Stack Developer focused on building modern, responsive, and scalable web applications. My goal is to create impactful digital experiences with performance, creativity, and user experience in mind.",
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Java", "JavaScript", "SQL"] },
  {
    group: "Backend",
    items: ["Spring Boot", "JPA / Hibernate", "JSP / Servlets", "REST APIs", "Spring MVC"],
  },
  {
    group: "Frontend",
    items: ["React 18", "React Hooks", "HTML5", "CSS3", "jQuery", "Tailwind CSS"],
  },
  { group: "Database", items: ["MySQL", "Stored Procedures", "Query Optimization"] },
  { group: "Cloud & Tools", items: ["AWS S3", "Git", "GitHub", "Maven", "Postman", "IntelliJ"] },
  {
    group: "Practices",
    items: ["CI/CD", "OOP", "Agile", "Automation", "Code Reviews", "Refactoring", "Debugging"],
  },
];

export const myValues: string[] = [
  "Problem Solving - Resolve complex production issues with logical and efficient solutions.",
  "Communication - Bridge communication between technical and non-technical stakeholders.",
  "Time Management - Deliver high-quality work within sprint timelines.",
  "Ownership - Take end-to-end responsibility for features and applications.",
];

export const experience = [
  {
    company: "Amazon, India",
    title: "Java Full Stack Developer (Automation Specialist)",
    period: "April 2023 — March 2026",
    bullets: [
      "Developed and supported Java-based web applications and automation platforms deployed across APAC, LATAM, and Europe, standardizing operational workflows and reducing manual effort by 60%.",
      "Designed and deployed web applications to automate complex workflows and enable seamless system integration, reducing deployment times by 40% and improving scalability across multiple business units.",
      "Performed root cause analysis for production issues, reducing recurring incidents by 30% through code optimization and monitoring improvements.",
      "Conducted code reviews on Java changes, enforcing coding standards and reducing production defects by 20% through early defect detection.",
      "Collaborated with operations, product, and engineering stakeholders across 3+ regions to convert business requirements into scalable technical solutions, improving process accuracy by 60%.",
      "Optimized SQL queries and backend performance, improving application response time by 25%.",
    ],
  },
];

export const education = {
  degree: "B.Tech",
  school: "Bharati Vidyapeeth, Kolhapur",
};

export const languages = [
  { name: "English", level: "Professional" },
  { name: "Hindi", level: "Fluent" },
  { name: "Marathi", level: "Native" },
];

export const projects = [
  {
    title: "AI-InterviewPro: AI-Powered Interview Preparation Platform",
    role: "Java Full Stack Developer",
    tags: ["Java", "Spring Boot", "React", "Tailwind CSS", "MySQL", "Groq AI API"],
    bullets: [
      "Built a full-stack AI interview-prep platform covering 12+ domains, including Java, Spring Boot, React, DSA, and System Design.",
      "Designed scalable REST APIs with Spring Boot, Spring Security, and JPA/Hibernate for auth, sessions, question history, and AI feedback.",
      "Integrated the Groq AI API to generate questions, evaluate responses, and score performance (1–10) with structured, personalized feedback.",
      "Built a responsive React + Tailwind frontend with dashboards, result analytics, progress tracking, and session history."
    ],
    sourceLink: "https://github.com/sudhanshukoli/InterviewPro",
    demoLink: "https://interview-pro-by-sudhanshu.vercel.app"
  },
  {
    title: "Portfolio: First Portfolio Built By Me",
    role: "Full Stack Developer",
    tags: ["React", "Tailwind CSS", "motion/react"],
    bullets: [
      "Built a responsive portfolio website using React.js.",
      "Showcases projects and technical skills in a structured format.",
      "Includes professional experience and resume for recruiters.",
      "Provides a centralized platform to highlight my developer profile and career journey.",
    ],
    sourceLink: "https://github.com/sudhanshukoli/Portfolio",
    demoLink: "https://sudhanshukoli-portfolio.vercel.app"
  },
  {
    title: "PACT: Performance Adherence & Compliance Tracking (AMAZON)",
    role: "Full Stack Developer",
    tags: ["Java", "Spring Boot", "React", "Tailwind CSS", "JPA/Hibernate", "MySQL", "AWS S3"],
    bullets: [
      "Built and deployed a Java enterprise app automating employee compliance tracking and warning management across APAC, LATAM, and Europe.",
      "Implemented secure document storage and compliance record management using AWS S3.",
      "Designed and optimized SQL queries and backend workflows, improving reporting accuracy and operational efficiency.",
      "Managed end-to-end execution of two large-scale restructuring initiatives, working directly with stakeholders on priorities and progress.",
    ],
    sourceLink: null,
    demoLink: null
  },
  
];
