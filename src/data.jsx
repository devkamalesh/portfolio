import rightshadow from "../public/rightshadow.png";
import website from "../public/website.png";
import userdash from "../public/userdash.png";
import treeview from "../public/treeview.png";
import treechart from "../public/treechart.png";
import admin from "../public/admin.png";
import members from "../public/members.png";
import recipe from "../public/recipe.png";
import reels from "../public/reels.png";
import scan from "../public/scan.jpg";
import scanresult from "../public/scanresult.jpg";
import language from "../public/language.jpg";
import tutor from "../public/tutor.webp";
import analytics from "../public/analytics.webp";
import logo from "../public/logo.webp";
import request from "../public/request.webp";
import cookbook from "../public/cookbook.png";
import onlinetut from "../public/onlinetut.png";
import logotruck from "../public/logotruck.webp";
import expense from "../public/expense.webp";
import vechiledata from "../public/vechiledata.webp";
import tripdata from "../public/tripdata.webp";
import polreport from "../public/polreport.webp";
import contacts from "../public/contacts.webp";
import events from "../public/events.webp";
import homepol from "../public/homepol.webp";
import logopol from "../public/logopol.webp";
import truck from "../public/truck.png";
import political from "../public/political.png";
import filter from "../public/filter.png";
import landing from "../public/landing.jpg";
import logomuth from "../public/logomuth.png";
import plan from "../public/plan.png";
import dash from "../public/dashboard.png";
import cpanel from "../public/cPanel.png";
import architecture from "../public/architecture.png";
import whm from "../public/whm.png";
export const profile = {
  name: "Kamalesh Kumaran",
  handle: "kamalesh.dev",
  role: "Backend-Focused Software Developer",
  intro:
    "Building scalable backend systems, secure REST APIs, and data-driven applications with a focus on performance and reliability.",
  email: "kamalesh.webdev@gmail.com",
  github: "https://github.com/devkamalesh",
  linkedin: "https://www.linkedin.com/in/kamaleshwebdev/",
  skills: [
    "Node.js",
    "Express.js",
    "TypeScript",
    "MySQL",
    "Redis",
    "REST APIs",
    "Python",
    "Docker",
    "AWS",
    "Web Sockets",
    "Prisma",
  ],
};

export const projects = [
  {
    number: "01",
    title: "Right Shadow",
    subtitle: "Multi-Level Marketing Enterprise Platform",
    category: "Enterprise Backend",
    image: `${rightshadow}`,
    images: [
      `${rightshadow}`,
      `${website}`,
      `${userdash}`,
      `${treeview}`,
      `${treechart}`,
      `${admin}`,
      `${members}`,
    ],
    description:
      "An enterprise MLM platform designed to manage member hierarchies, compensation plans, eligibility, and financial operations.",
    highlights: [
      "Implemented 18-level binary tree processing",
      "Developed Jarikai and Kerchief compensation plans",
      "Built level-wise earnings and monthly salary calculations",
      "Optimized SQL queries and hierarchical data retrieval",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "Javascript",
      "MySQL",
      "Query Optimization",
    ],
    code: "",
    demo: "https://rightshadow.in",
    links: [
      { label: "Live Project", url: "https://rightshadow.in" },
      { label: "Admin Portal", url: "https://rightshadow.in/admin" },
      { label: "User Portal", url: "https://rightshadow.in/user" },
    ],
  },

  {
    number: "02",
    title: "CookBook",
    subtitle: "AI-Powered Multilingual Recipe Platform",
    category: "AI & Backend",
    image: `${cookbook}`,
    images: [
      `${recipe}`,
      `${reels}`,
      `${scan}`,
      `${scanresult}`,
      `${language}`,
    ],
    description:
      "An AI-powered recipe platform combining multilingual translation, image-based recipe extraction, asynchronous processing, and real-time updates.",
    highlights: [
      "Integrated Hugging Face NLLB-200 for multilingual translation",
      "Implemented OCR-based recipe extraction workflows",
      "Configured Redis caching and BullMQ background jobs",
      "Developed real-time updates using Socket.IO",
      "Containerized application components using Docker",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "Python",
      "Hugging Face",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Docker",
      "Swagger",
    ],
    code: "",
    demo: "",
    links: [],
  },

  {
    number: "07",
    title: "Production Infrastructure & Scalability",
    subtitle: "Server Administration, Traffic Management & DevOps",
    category: "DevOps & Infrastructure",
    image: `${cpanel}`,
    images: [`${architecture}`, `${cpanel}`, `${whm}`],
    description:
      "A hands-on production infrastructure engineering project focused on Linux server administration, secure application deployments, DNS and SSL configuration, traffic management, load balancing, monitoring, email delivery, database performance, automated backups, and production reliability.",
    highlights: [
      "Linux server administration, SSH security, firewall rules, and resource optimization",
      "Node.js application deployment using PM2, Apache/Nginx reverse proxies, and environment-based configuration",
      "DNS management, domain routing, HTTPS certificates, and automated SSL renewal",
      "Traffic management using rate limiting, caching, CDN integration, and load balancing",
      "Production monitoring, centralized logging, health checks, metrics, dashboards, and alerting",
      "MySQL query optimization, Redis caching, connection pooling, and database backup strategies",
      "Transactional email infrastructure, SMTP integration, SPF, DKIM, DMARC, and delivery monitoring",
      "Docker containerization, CI/CD pipelines, automated deployments, and rollback strategies",
      "Server hardening, secrets management, vulnerability checks, and access control",
      "Automated backups, disaster recovery, load testing, and production incident troubleshooting",
      "AWS infrastructure fundamentals, cloud networking, object storage, and application scaling",
    ],
    stack: [
      "Linux",
      "Node.js",
      "PM2",
      "Apache",
      "Nginx",
      "DNS",
      "SSL/TLS",
      "cPanel/WHM",
      "MySQL",
      "Redis",
      "Docker",
      "GitHub Actions",
      "Prometheus",
      "Grafana",
      "AWS",
      "SMTP",
    ],
    code: "",
    demo: "",
    links: [],
  },

  {
    number: "03",
    title: "Tutoraan",
    subtitle: "Tutor & Student Learning Platform",
    category: "EdTech Backend",
    image: `${onlinetut}`,
    images: [`${logo}`, `${analytics}`, `${request}`, `${tutor}`],
    description:
      "A tutor-student platform supporting tutor discovery, student requests, lead management, dashboards, and mobile communication.",
    highlights: [
      "Developed location-based tutor discovery APIs and using Haversine formulae",
      "Implemented role-based authentication and access control",
      "Built tutor requests and lead management workflows",
      "Integrated real-time chat and mobile deep linking",
      "Supported dashboard analytics and database operations",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "TypeScript",
      "MySQL",
      "REST APIs",
      "Puppeteer",
      "Swagger",
      "Search Algorithm",
    ],
    code: "",
    demo: "https://apps.apple.com/us/app/tutoraan/id6770827316",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/tutoraan/id6770827316",
      },
    ],
  },

  {
    number: "04",
    title: "Truck Ledger",
    subtitle: "Vehicle & Driver Management Platform",
    category: "Logistics Backend",
    image: `${truck}`,
    images: [`${logotruck}`, `${expense}`, `${vechiledata}`, `${tripdata}`],
    description:
      "A mobile platform for commercial vehicle owners and drivers to manage trips, expenses, budgets, and financial reporting.",
    highlights: [
      "Developed trip lifecycle and vehicle management APIs",
      "Implemented expense tracking and budget workflows",
      "Generated PDF reports using Puppeteer",
      "Automated scheduled tasks using Node-Cron",
      "Integrated mobile push notification workflows",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "MySQL",
      "Prisma",
      "Puppeteer",
      "Node-Cron",
      "Swagger",
    ],
    code: "",
    demo: "https://apps.apple.com/us/app/truck-ledger-lorry-expense/id6758997208",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/truck-ledger-lorry-expense/id6758997208",
      },
    ],
  },

  {
    number: "05",
    title: "Political Planner",
    subtitle: "Political Event & Field Operations",
    category: "Operations Backend",
    image: `${political}`,
    images: [
      `${logopol}`,
      `${polreport}`,
      `${events}`,
      `${homepol}`,
      `${contacts}`,
    ],
    description:
      "An operations platform for coordinating meetings, members, tasks, grievances, field activities, reminders, and expenses.",
    highlights: [
      "Implemented grievance assignment and resolution tracking",
      "Developed task reminders and snooze functionality",
      "Built travel expense management and reporting workflows",
      "Integrated MinIO media storage",
      "Supported mobile deep linking and operational APIs",
    ],
    stack: [
      "Node.js",
      "Express.js",
      "JavaScript",
      "Prisma",
      "MySQL",
      "MinIO",
      "REST APIs",
    ],
    code: "",
    demo: "https://apps.apple.com/in/app/political-planner/id6796329245",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/in/app/political-planner/id6796329245",
      },
    ],
  },

  {
    number: "06",
    title: "Muthu Vive",
    subtitle: "Real Estate Property Management Platform",
    category: "Full-Stack Development",
    image: `${landing}`,
    images: [`${plan}`, `${filter}`, `${dash}`, `${logomuth}`],
    description:
      "A real estate platform supporting property discovery, listings, location-based search, property approvals, payments, and administration.",
    highlights: [
      "Implemented location-based property search using Haversine distance",
      "Developed property listing and approval workflows",
      "Integrated Razorpay payments and invoice generation",
      "Built role-based administration and access controls",
      "Developed responsive frontend and backend API integrations",
    ],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "TypeScript",
      "MySQL",
      "Razorpay",
    ],
    code: "",
    demo: "https://muthuvives.skyraantech.com/",
    links: [
      {
        label: "Live Project",
        url: "https://muthuvives.skyraantech.com/",
      },
    ],
  },
];
export const experience = [
  {
    role: "Web Developer — Backend-focused",
    company: "SKYRAAN TECHNOLOGIES (OPC) Pvt Ltd",
    period: "Dec 2024 – Present",
    detail:
      "Developing backend APIs, database-driven applications, integrations, and production services. Update this entry with your confirmed employment dates and responsibilities.",
  },
  {
    role: "React Developer — Intern",
    company: "BESANT TECHNOLOGIES (OPC) Pvt Ltd",
    // period: "Jan 2024 – APR 2024",
    detail:
      "Developed responsive user interfaces using React.js, reusable components, and React Hooks. Integrated REST APIs, managed application state, implemented form validation, and collaborated on frontend features to deliver user-friendly web applications.",
  },
];
