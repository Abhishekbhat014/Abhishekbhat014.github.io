export const portfolioConfig = {
  personalInfo: {
    name: "Abhishek Bhat",
    title: "Mobile & Windows Developer",
    tagline: "Crafting beautiful, high-performance cross-platform applications with clean code, modern architecture, and intuitive design.",
    shortBio: "I am a passionate software developer with a strong focus on mobile and desktop application development using Flutter and Dart. With a keen eye for clean, professional UI and an emphasis on robust state management, I build applications that are not only functional but also deliver a premium user experience.",
    longBio: "I am a software engineer specialized in mobile and desktop app development with Flutter & Dart. Beyond client-facing interfaces, I have extensive experience in modern web development, allowing me to build end-to-end solutions and seamlessly integrate mobile apps with robust backend services. I prioritize clean code, responsive layouts, and zero-trust security architecture.",
    email: "abhishekbhat014@gmail.com",
    resumeUrl: "assets/pdf/ABHISHEK_BHAT_RESUME.pdf",
    socialLinks: {
      github: "https://github.com/Abhishekbhat014",
      linkedin: "https://linkedin.com/in/abhishekbhat014",
      twitter: ""
    }
  },
  skills: [
    {
      title: "Mobile & Desktop",
      skills: [
        { name: "Flutter", level: 95 },
        { name: "Dart", level: 95 },
        { name: "Windows App SDK", level: 85 },
        { name: "Android", level: 88 },
        { name: "iOS", level: 80 },
        { name: "Python", level: 75 }
      ]
    },
    {
      title: "Web Technologies",
      skills: [
        { name: "HTML5 / CSS3", level: 90 },
        { name: "Bootstrap", level: 85 },
        { name: "JavaScript", level: 85 },
        { name: ".NET", level: 70 },
        { name: "PHP", level: 65 }
      ]
    },
    {
      title: "Tools & Architecture",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Firebase", level: 85 },
        { name: "SQLite & Hive", level: 88 },
        { name: "REST APIs", level: 85 },
        { name: "Zero-Trust Architecture", level: 80 },
        { name: "MERN Stack (Basic)", level: 60 }
      ]
    }
  ],
  projects: [
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
    },
    {
      id: "real-estate-supabase",
      title: "EliteEstates Portal",
      subtitle: "Full-Stack Property Hub",
      description: "A modern real estate listing and booking platform built with React, Tailwind CSS, and Supabase backend services.",
      longDescription: "EliteEstates is a property listings platform built to handle real estate transactions and searches. It utilizes React for a responsive frontend stylized with Tailwind CSS, and connects directly to Supabase for secure PostgreSQL database storage, file attachments (photos/agreements), and real-time listings updates.",
      category: "Full-Stack",
      tags: ["React", "Tailwind CSS", "Supabase", "PostgreSQL", "Real-time", "OAuth"],
      githubUrl: "https://github.com/Abhishekbhat014",
      liveUrl: "",
      features: [
        "Real-time property search and listings database",
        "Supabase storage buckets for high-res property images",
        "Role-based secure authentication for agents and buyers",
        "Interactive filtering (price, location, property type)"
      ]
    },
    {
      id: "private-vault",
      title: "Private Vault",
      subtitle: "Secure Media Storage App",
      description: "A secure Flutter application for storing personal photos and videos on Google Drive, featuring local caching, flat design, and file encryption.",
      longDescription: "Private Vault is a highly secure Flutter application designed to offer private media backup. It connects directly to the Google Drive API for storage, incorporating client-side encryption. Local metadata is stored using Hive for fast offline access, and Google OAuth handles the authorization. The UI follows a modern flat design aesthetic.",
      category: "Mobile",
      tags: ["Flutter", "Dart", "Google Drive API", "Hive", "OAuth", "Encryption"],
      githubUrl: "https://github.com/Abhishekbhat014",
      liveUrl: "",
      features: [
        "Secure end-to-end file encryption before cloud upload",
        "Direct Google Drive API integration for remote storage",
        "Local metadata caching with Hive for offline browsing",
        "OAuth 2.0 user authentication flow"
      ]
    },
    {
      id: "chat-merger",
      title: "Chat Merger Utility",
      subtitle: "Local Chat Formatter",
      description: "A cross-platform utility tool built with Flutter to merge, format, and export multiple WhatsApp chat histories locally without external servers.",
      longDescription: "Chat Merger Utility addresses the challenge of managing multiple exported chat files. Built using Flutter Desktop, it allows users to upload raw chat exports, merge them chronologically, format the messages into a clean readable layout, and export them as consolidated documents. To ensure data privacy, all file I/O operations are executed strictly locally on the user's machine.",
      category: "Desktop",
      tags: ["Flutter", "Dart", "Desktop SDK", "File IO", "Local Processing"],
      githubUrl: "https://github.com/Abhishekbhat014",
      liveUrl: "",
      features: [
        "Multi-file chronological merging with custom parser",
        "Interactive desktop preview with message styling",
        "Strictly local execution protecting personal user data",
        "Export configurations (PDF/Txt/HTML formats)"
      ]
    },
    {
      id: "flutter-todo",
      title: "Flutter To-Do App",
      subtitle: "Task Management App",
      description: "A simple, intuitive To-Do application built with Flutter. Helps users manage their daily tasks efficiently.",
      longDescription: "Flutter To-Do App was designed to help users organize their daily schedules and manage tasks. It features a clean user interface, state management, and lists for categorization (personal, work, study). Includes local persistent storage.",
      category: "Mobile",
      tags: ["Flutter", "Dart", "State Management", "Local Storage"],
      githubUrl: "https://github.com/Abhishekbhat014",
      liveUrl: "",
      features: [
        "Clean interface supporting categorizations",
        "State management using Provider / basic controllers",
        "Swipe-to-delete actions and checkbox state saves",
        "Offline compatibility storing items locally"
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
      id: "covid-tracker",
      title: "Covid-19 Tracker",
      subtitle: "Real-time Telemetry Dashboard",
      description: "A comprehensive Covid-19 tracking application built with Flutter. Provides real-time statistics and updates globally and locally.",
      longDescription: "Covid-19 Tracker is a telemetry mobile app built with Flutter that aggregates pandemic data from public open APIs. It displays dynamic charts, maps, and detailed country-wise breakdowns of active, recovered, and fatal cases, presenting real-time global trends in a clean, visual format.",
      category: "Mobile",
      tags: ["Flutter", "Dart", "REST API", "Charts", "JSON Parsing"],
      githubUrl: "https://github.com/Abhishekbhat014",
      liveUrl: "",
      features: [
        "Real-time API integrations fetching worldwide statistics",
        "Interactive visual charts showing historical trends",
        "Search and filter lists by country and state",
        "Cached data structures for low-bandwidth environments"
      ]
    },
    {
      id: "mahapurush-mandir",
      title: "Mahapurush Mandir",
      subtitle: "Temple Management System",
      description: "A centralized temple management system currently serving as a live project for Mahapurush Mandir.",
      longDescription: "Mahapurush Mandir is a custom management platform built for temple administrations. It helps staff organize events, manage donations, track community calendars, and maintain administrative records. Designed with a simple, high-contrast UI to accommodate users of all age ranges.",
      category: "Web App",
      tags: ["Live Project", "Management System", "Flutter Web", "Database"],
      githubUrl: "",
      liveUrl: "https://mahapurushmandir.example.com",
      features: [
        "Donation tracking and digital receipt generations",
        "Centralized community calendar and holiday planner",
        "Multi-role user permission levels for admins and volunteers",
        "Responsive web layouts supporting mobile and tablet views"
      ]
    },
    {
      id: "unieventportal",
      title: "UniEventPortal",
      subtitle: "Campus Event Organizer",
      description: "A centralized event management system where colleges can manage their events and students can register themselves.",
      longDescription: "UniEventPortal is a web application designed to centralize college event coordination. It allows university departments to publish technical fests, cultural nights, and workshops. Students can create profiles, browse upcoming campus schedules, register for events, and download entry passes.",
      category: "Web App",
      tags: ["Web App", "Event Management", "JavaScript", "Database"],
      githubUrl: "https://github.com/Abhishekbhat014",
      liveUrl: "",
      features: [
        "Admin panel for event creation and RSVP tracking",
        "Student registration portal with QR-pass generation",
        "Inter-college calendar syncing and announcements",
        "Automated email notifications upon successful registration"
      ]
    },
    {
      id: "astrolife",
      title: "AstroLife",
      subtitle: "Personalized Astrology Platform",
      description: "An astrology application providing detailed insights such as Kundali, daily Panchang, and personalized horoscope readings.",
      longDescription: "AstroLife is a mobile application tailored for astrology enthusiasts. It calculates astronomical calculations locally to output birth charts (Kundali), daily transit timings (Panchang), and generates customized horoscopes based on user birth details.",
      category: "Mobile",
      tags: ["Astrology", "Mobile App", "Flutter", "Dart", "Algorithms"],
      githubUrl: "",
      liveUrl: "https://astrolife.example.com",
      features: [
        "Local astronomical math algorithms for Kundali creation",
        "Daily dynamic Panchang calculation based on GPS location",
        "User profile profiles storing multiple birth charts",
        "Intuitive visual graphics mapping zodiac transits"
      ]
    }
  ],
  experiences: [
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
