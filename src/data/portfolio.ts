import portraitAsset from "@/assets/portrait-grad.jpg.asset.json";
import grad1Asset from "@/assets/grad-1.jpg.asset.json";
import grad2Asset from "@/assets/grad-2.jpg.asset.json";
import matricAsset from "@/assets/matric-award.jpg.asset.json";
import mictsetaAsset from "@/assets/mictseta.jpg.asset.json";
import awsCertAsset from "@/assets/aws-ccp.png.asset.json";
import cputLetterAsset from "@/assets/cput-letter.png.asset.json";
import cvAsset from "@/assets/cv-final.pdf.asset.json";
import certGoogleAiEssentials from "@/assets/cert-google-ai-essentials.pdf.asset.json";
import certIntroToAi from "@/assets/cert-intro-to-ai.pdf.asset.json";
import certArtOfPrompting from "@/assets/cert-art-of-prompting.pdf.asset.json";
import certMaximizeProductivity from "@/assets/cert-maximize-productivity.pdf.asset.json";
import certStayAhead from "@/assets/cert-stay-ahead.pdf.asset.json";
import certUseAiResponsibly from "@/assets/cert-use-ai-responsibly.pdf.asset.json";
import galleryAwsAsset from "@/assets/gallery-aws.jpg.asset.json";
import galleryImage4Asset from "@/assets/gallery-image-4.png.asset.json";
import galleryPortraitAsset from "@/assets/gallery-portrait.png.asset.json";

export const profile = {
  name: "Ntando Ndawonde",
  headline:
    "Computer Engineering Graduate | Software Developer | AWS Cloud Practitioner",
  location: "Bellville, South Africa",
  email: "ndawonden536@gmail.com",
  phone: "+27 73 102 2937",
  phoneHref: "tel:+27731022937",
  linkedin: "https://www.linkedin.com/in/ntando-ndawonde-367540392",
  github: "https://github.com/Hackertho-viper",
  photo: portraitAsset.url,
  cv: cvAsset.url,
  cvFilename: "Ntando_Ndawonde_CV.pdf",
  intro:
    "A Computer Engineering graduate with practical experience across software development, cloud computing, IoT, embedded systems, networking, automation and computer graphics.",
  about: [
    "I am a Computer Engineering graduate from the Cape Peninsula University of Technology, with hands-on experience building software, embedded systems and cloud-based solutions.",
    "My interests sit where software meets infrastructure: software development, cloud engineering on AWS, backend development, IoT, embedded systems and automation. I enjoy taking a problem from circuit and sensor level all the way up to an application and a deployment.",
    "I work carefully and methodically, and I care about systems that are reliable, secure and understandable by the people who maintain them.",
  ],
};

export const skillGroups = [
  {
    title: "Programming",
    items: ["Java", "C", "JavaScript", "Python", "HTML", "CSS"],
  },
  {
    title: "Software & Web",
    items: [
      "Node.js",
      "React Native",
      "MongoDB",
      "NetBeans",
      "VS Code",
      "Git",
      "GitHub",
      "WebGL",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    items: [
      "AWS",
      "Amazon EC2",
      "Amazon S3",
      "IAM",
      "Amazon VPC",
      "Amazon CloudWatch",
      "AWS Cloud Foundations",
    ],
  },
  {
    title: "Engineering",
    items: [
      "Arduino",
      "Embedded Systems",
      "IoT",
      "Sensors",
      "MATLAB Simulink",
      "Siemens TIA Portal",
      "PLC Programming",
    ],
  },
  {
    title: "Networking",
    items: [
      "Cisco Packet Tracer",
      "Networking Fundamentals",
      "VLANs",
      "Routing",
      "DHCP",
      "NAT",
      "ACLs",
      "EtherChannel",
      "STP",
      "Port Security",
      "Inter-VLAN Routing",
      "Cisco IOS CLI",
    ],
  },
  {
    title: "Professional Strengths",
    items: [
      "Problem Solving",
      "Attention to Detail",
      "Interpersonal Communication",
      "Teamwork",
      "Planning",
      "Organisation",
      "Coordination",
      "Time Management",
      "Troubleshooting",
      "Adaptability",
      "Leadership",
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  achievement?: string;
  image?: string;
  imageAlt?: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "AI Productivity Assistant (Ascent AI)",
    description:
      "An AI-powered workplace productivity platform that combines five integrated tools in one application: a Smart Email Generator, Meeting Notes Summarizer, AI Task Planner, AI Research Assistant, and AI Chatbot. Modules share data — for example, action items from meeting summaries can flow straight into the Task Planner — and outputs are always editable, uncertainty is handled transparently, and fabricated information is avoided.",
    technologies: [
      "React",
      "TypeScript",
      "JavaScript",
      "AI / LLM integration",
      "TanStack React Start",
      "Server functions",
    ],
    githubUrl: "https://github.com/hackertho-viper/AI-Producivity-Assitant",
    liveDemoUrl: "https://ntandondawonde-ai-assitant.lovable.app",
  },
  {
    title: "GreenGuard SA – Smart Greenhouse Monitoring System",
    description:
      "A smart greenhouse monitoring and automation system developed to address overheating, poor soil conditions, and inefficient water usage. The system integrates temperature, soil moisture, light and ultrasonic sensors with automated control features.",
    technologies: ["Arduino", "IoT", "Sensors", "Embedded Systems"],
    achievement: "2nd Place — MICTSETA IoT Hackathon (2026)",
    image: mictsetaAsset.url,
    imageAlt:
      "Ntando Ndawonde and his team holding the Google IoT Innovation Hackathon first runner-up prize cheque",
    featured: true,
  },
  {
    title: "Smart Solar-Powered Washing Machine",
    description:
      "An energy-efficient washing machine controller powered by solar energy, using adaptive power management and sensor integration for efficient operation.",
    technologies: ["Java", "Embedded Systems", "Simulation Tools"],
  },
  {
    title: "Medical Appointment Management System",
    description:
      "A C-based application enabling patients to book, view and manage appointments. The system includes structured program logic and data flow between patients and doctors, with testing and debugging for reliable functionality.",
    technologies: ["C Programming"],
  },
  {
    title: "PLC Four-Way Traffic Controller",
    description:
      "A four-way traffic light controller designed and simulated using PLC ladder logic. Implemented timers and logical sequencing to manage traffic flow safely and efficiently.",
    technologies: ["Siemens TIA Portal", "PLC Programming"],
  },
  {
    title: "Embedded System with Motor, Ultrasonic Sensor, LEDs and LCD Menu",
    description:
      "An embedded system integrating a motor, ultrasonic sensor, LEDs and an LCD menu interface. The project demonstrates sensor integration and hardware-software interaction.",
    technologies: ["Arduino", "Embedded Systems", "Sensors"],
  },
  {
    title: "Cube Color Matcher / Crystal Gate Run",
    description:
      "An interactive browser-based project using WebGL and JavaScript. Implemented translation, rotation and scaling transformations, shaders, buffers, event handling and animation techniques.",
    technologies: ["WebGL", "JavaScript", "HTML", "CSS"],
  },
];

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner (CLF-C02)",
    issuer: "Amazon Web Services",
    year: "2026",
    fileUrl: awsCertAsset.url,
  },
  {
    name: "AWS Academy Graduate – AWS Academy Cloud Foundations",
    issuer: "AWS Academy",
    year: "2026",
  },
  {
    name: "Google AI Essentials",
    issuer: "Google",
    year: "2026",
    fileUrl: certGoogleAiEssentials.url,
  },
  {
    name: "Introduction to AI",
    issuer: "Google (Coursera)",
    year: "2026",
    fileUrl: certIntroToAi.url,
  },
  {
    name: "Discover the Art of Prompting",
    issuer: "Google (Coursera)",
    year: "2026",
    fileUrl: certArtOfPrompting.url,
  },
  {
    name: "Maximize Productivity With AI Tools",
    issuer: "Google (Coursera)",
    year: "2026",
    fileUrl: certMaximizeProductivity.url,
  },
  {
    name: "Stay Ahead of the AI Curve",
    issuer: "Google (Coursera)",
    year: "2026",
    fileUrl: certStayAhead.url,
  },
  {
    name: "Use AI Responsibly",
    issuer: "Google (Coursera)",
    year: "2026",
    fileUrl: certUseAiResponsibly.url,
  },
];

export type Achievement = {
  title: string;
  year: string;
  description: string;
  highlight?: boolean;
  image?: string;
  imageAlt?: string;
};

export const achievements: Achievement[] = [
  {
    title: "2nd Place — MICTSETA IoT Hackathon",
    year: "2026",
    description:
      "Awarded second place for GreenGuard SA, a smart greenhouse monitoring and automation system.",
    highlight: true,
    image: mictsetaAsset.url,
    imageAlt:
      "Ntando Ndawonde with his hackathon team holding the IoT Innovation Hackathon runner-up cheque",
  },
  {
    title: "Highest Overall Grade — Electrical Technology (Grade 12)",
    year: "Matric",
    description:
      "Received the highest overall grade in Electrical Technology in Grade 12.",
    image: matricAsset.url,
    imageAlt:
      "Ntando Ndawonde receiving his Grade 12 Electrical Technology award on stage",
  },
  {
    title: "Distinction — Software Development 2",
    year: "2025",
    description: "Achieved a distinction in Software Development 2.",
  },
  {
    title: "Distinction — Engineering Physics 2",
    year: "2025",
    description: "Achieved a distinction in Engineering Physics 2.",
  },
  {
    title: "Most Promising Young Player Award — SAB KZN Season",
    year: "2021–2022",
    description: "Recognised as the most promising young player of the season.",
  },
];

export const education = {
  institution: "Cape Peninsula University of Technology (CPUT)",
  qualification: "National Diploma in Computer Engineering",
  completed: "Completed April 2025",
  letterUrl: cputLetterAsset.url,
  gallery: [
    {
      url: grad1Asset.url,
      alt: "Ntando Ndawonde in graduation attire at the CPUT graduation ceremony",
    },
    {
      url: grad2Asset.url,
      alt: "Ntando Ndawonde holding his graduation certificate on graduation day",
    },
  ],
};

export const gallery = [
  {
    url: galleryAwsAsset.url,
    alt: "Ntando Ndawonde at the AWS Skills Centre in Cape Town holding an AWS Skills Centre bag",
  },
  {
    url: galleryImage4Asset.url,
    alt: "Portrait of Ntando Ndawonde in a black beanie and watch with red and blue studio lighting",
  },
  {
    url: galleryPortraitAsset.url,
    alt: "Black-and-white portrait of Ntando Ndawonde wearing round sunglasses and a traditional headpiece",
  },
];

export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certifications" },
  { label: "Achievements", id: "achievements" },
  { label: "Education", id: "education" },
  { label: "Gallery", id: "gallery" },
  { label: "Contact", id: "contact" },
];
