export const portfolioConfig = {
  personalInfo: {
    name: "Abhishek Bhat",
    title: "Software Developer",
    tagline: "Building mobile and web applications with Flutter, React, and modern backend technologies.",
    shortBio: "I build mobile and web applications with Flutter, React, and modern backend technologies — from understanding requirements to implementing and shipping working products.",
    longBio: "I am a software developer who builds practical, real-world applications. My expertise spans mobile development with Flutter and web development with React, along with robust backend and data integration using Supabase and PostgreSQL. Through independent projects and professional internship experience, I enjoy understanding requirements and turning them into working software.",
    email: "abhishekbhat014@gmail.com",
    resumeUrl: "https://drive.google.com/file/d/1T8LSajS9Ue1Gz7Pw8XIv8hyr1BpOtiyr/view?usp=sharing",
    socialLinks: {
      github: "https://github.com/Abhishekbhat014",
      linkedin: "https://linkedin.com/in/abhishekbhat014",
      twitter: ""
    }
  },
  skills: [
    {
      title: "Mobile",
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 95 },
        { name: "Android", level: 88 }
      ]
    },
    {
      title: "Web",
      skills: [
        { name: "React", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 }
      ]
    },
    {
      title: "Backend & Data",
      skills: [
        { name: "Supabase", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "REST APIs", level: 85 }
      ]
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 90 },
        { name: "GitHub", level: 90 },
        { name: "Android Studio", level: 85 },
        { name: "VS Code", level: 95 }
      ]
    }
  ],
  projects: [
    {
      id: "regenboog-app",
      title: "Regenboog India Foundation — Mobile Application",
      subtitle: "Professional / Internship Project",
      description: "A mobile application developed during my software development internship to support student sponsorship and education-related workflows.",
      longDescription: "Developed during my internship at Verein Arunachala Rising Sun, this mobile application serves the Regenboog India Foundation by streamlining their student sponsorship and education management processes. Built from the ground up to production readiness, it features robust user workflows, secure backend integration, and a clean, accessible UI designed for real-world impact.",
      category: "Mobile",
      tags: ["Flutter", "Dart", "Supabase", "Android"],
      githubUrl: "",
      liveUrl: "",
      features: [
        "Student information management",
        "Sponsorship tracking",
        "Fee receipt uploads",
        "Announcements",
        "Donor and sponsorship-related workflows",
        "MIS and reporting"
      ]
    },
    {
      id: "sankalup",
      title: "SankalUP",
      subtitle: "Learning Management System",
      description: "A live Learning Management System (LMS) based application currently under development.",
      longDescription: "SankalUP is a robust mobile learning platform designed to streamline course deliveries, student enrollment, and assignments. Currently active in development, it links students with teachers, offering a modern interface for viewing lectures, submitting papers, and tracking learning progress.",
      category: "Mobile",
      tags: ["Flutter", "Dart", "REST API", "State Management", "LMS"],
      githubUrl: "",
      liveUrl: "https://sankalup.example.com",
      features: [
        "Clean interactive dashboard for course timelines",
        "Online lecture streaming and material downloads",
        "Progress charts mapping module completions",
        "Real-time announcements and class push alerts"
      ]
    },
    {
      id: "rempass",
      title: "Rempass",
      subtitle: "Offline Password Manager",
      description: "An offline password manager app built with Zero-Trust architecture ensuring maximum security and privacy.",
      longDescription: "Rempass is an offline-first password vault built with Flutter, designed under the Zero-Trust security model. It stores credentials locally inside an encrypted SQLite/Hive database. Keys are generated using cryptographic PBKDF2/AES algorithms, ensuring that credentials are never transmitted over the network or stored in plaintext, keeping user data entirely in their own control.",
      category: "Mobile",
      tags: ["Flutter", "Dart", "Zero-Trust", "Cryptography", "SQLite", "Offline-First"],
      githubUrl: "https://github.com/Abhishekbhat014",
      liveUrl: "",
      features: [
        "Offline-first vault requiring zero network permissions",
        "Master password derivation using PBKDF2",
        "AES-256 local database encryption",
        "Random secure password generator and strength evaluator"
      ]
    },
    {
      id: "3d-portfolio",
      title: "3D Interactive Portfolio",
      subtitle: "Creative Showcase Website",
      description: "A high-performance personal portfolio featuring interactive 3D elements, custom canvas animations, and glassmorphic designs.",
      longDescription: "A premium personal portfolio website engineered with React, Vite, and Framer Motion. Features a robust dark/light theme engine, a custom 3D sticky stack scroll effect for Education, interactive tilt components, and an automated configuration architecture. Employs optimized asset delivery and modular styles for butter-smooth scrolling.",
      category: "Frontend",
      tags: ["React", "Vite", "Framer Motion", "Vanilla CSS", "3D Canvas", "HMR"],
      githubUrl: "https://github.com/Abhishekbhat014",
      liveUrl: "",
      features: [
        "Custom 3D scroll-peel sticky stack mechanics",
        "Tailwind-free responsive glassmorphic UI design",
        "Dynamic CSS theme variables (HSL engine)",
        "Interactive card perspective components"
      ]
    }
  ],
  experiences: [
    {
      id: "exp-regenboog",
      role: "Software Development Intern",
      company: "Verein Arunachala Rising Sun",
      location: "Distributed (India & Switzerland)",
      period: "Jan 2026 - Jun 2026",
      current: false,
      description: [
        "Engineered a comprehensive mobile application for Regenboog India Foundation to streamline student sponsorship and education management workflows.",
        "Designed and implemented intuitive mobile UI screens and developed core business logic using Flutter and Dart.",
        "Integrated robust backend functionality and data management using Supabase and REST APIs.",
        "Collaborated in a distributed international environment, refining the application based on real-world stakeholder feedback."
      ]
    },
    {
      id: "exp-1",
      role: "Freelance Flutter Developer",
      company: "Self-Employed",
      location: "Remote / India",
      period: "2025 - Present",
      current: true,
      description: [
        "Designed and developed custom Flutter applications for diverse clients.",
        "Handled end-to-end development, from UI/UX design to deployment on Google Play and Windows Store.",
        "Integrated secure APIs, local databases (Hive/SQLite), and cloud storage solutions."
      ]
    },
    {
      id: "exp-2",
      role: "Web Developer Intern",
      company: "Self-Employed",
      location: "Remote / India",
      period: "2023 - 2025",
      current: false,
      description: [
        "Assisted in building responsive web applications using modern JavaScript frameworks.",
        "Contributed to building internal tools to streamline data processing workflows.",
        "Collaborated with clients to translate business requirements into functional code."
      ]
    }
  ],
  education: [
    {
      id: "edu-1",
      degree: "Bachelor of Science in Information Technology",
      school: "University of Mumbai",
      period: "2023 - 2026",
      description: "Focusing on software engineering, object-oriented systems, databases, and application architectures.",
      subjects: ["Java & Python", "SQL/NoSQL", "Software Eng.", "Mobile Apps", "UI/UX Design"]
    },
    {
      id: "edu-2",
      degree: "HSC (Higher Secondary Certificate)",
      school: "Maharashtra Board",
      period: "2021 - 2023",
      description: "Completed science stream studies with core focus on Mathematics and Computer Science.",
      subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science"]
    },
    {
      id: "edu-3",
      degree: "SSC (Secondary School Certificate)",
      school: "Maharashtra Board",
      period: "2020 - 2021",
      description: "Completed secondary education with honors, establishing strong base in Science and Mathematics.",
      subjects: ["Mathematics", "Science", "English", "Social Sciences"]
    }
  ]
};
