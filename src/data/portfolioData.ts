import { Project, GalleryItem, Skill, TimelineItem, AchievementCard } from '../types';

export const PERSONAL_INFO = {
  name: "Zahra Zaranwala",
  handle: "ZahraXTech⚡",
  roleTitle: "Emerging AI & Automation Enthusiast | ECE Engineer",
  targetRole: "Building Intelligent Digital Solutions",
  institution: "Government Engineering College, Dahod",
  degree: "B.E. in Electronics & Communication Engineering (Final Year)",
  bio: "I’m an Electronics & Communication Engineering student passionate about Artificial Intelligence, Embedded Systems, Automation, Signal Processing, and future Robotics. My mission is to build intelligent digital solutions and create impactful technology that combines hardware intelligence and software innovation.",
  aboutDetailed: "This is the official premium portfolio website of Zahra Zaranwala. I am a Final Year Electronics & Communication Engineering Student from Government Engineering College, Dahod, focused on AI, Embedded Systems, Web Development, and long-term growth toward Artificial Intelligence & Automation.",
  educationDetails: "Currently pursuing B.E. in Electronics & Communication Engineering (ECE), with academic focus in communication systems, signal processing, embedded systems, and electronics.",
  careerVision: "I aim to build a strong foundation in modern technology by combining intelligent software, engineering principles, and practical problem-solving to create impactful real-world solutions.",
  disciplinePhilosophy: "Alongside engineering, I value deep discipline, consistent learning, strong personal growth, and meaningful balance between technical excellence and faith.",
  email: "zaranwalazahra@gmail.com",
  altEmail: "zahrazaran40@gmail.com",
  github: "https://github.com/zahratech123",
  linkedin: "https://linkedin.com/in/gecdhd-ec-zahra",
  site1Url: "https://zahralabssite.vercel.app",
  site2Url: "https://zaacheivelabssite.vercel.app",
   resumePdf: "https://drive.google.com/file/d/1T6RdTyT8ksKBWpELds0O8y9sdzD32chh/view?usp=drive_link",
  avatarImage: "https://zahratech123.github.io/zatech-ad-portfolio/my.jpg",
  location: "Dahod, Gujarat, India",
  stats: {
    year: "Final Year ECE",
    skillsCount: "8+ Tech Skills",
    certificationsCount: "40+ Certifications",
    linkedinFollowers: "2100+ Followers",
    techPosts: "50+ Tech Posts",
    nccMedals: "3 NCC Medals (2 Gold, 1 Silver)"
  }
};

export const SKILLS_DATA: Skill[] = [
  {
    name: "HTML / CSS",
    category: "Languages",
    percentage: 70,
    iconName: "Code",
    description: "Responsive layouts, flexbox, grid, semantic elements, and modern CSS styling."
  },
  {
    name: "JavaScript",
    category: "Languages",
    percentage: 70,
    iconName: "FileCode",
    description: "DOM manipulation, ES6+ syntax, asynchronous programming, and web logic."
  },
  {
    name: "Python",
    category: "Languages",
    percentage: 50,
    iconName: "Terminal",
    description: "Core programming, data structures, scripting, basic data science, and ML workflows."
  },
  {
    name: "GitHub & Git",
    category: "Tools & Web",
    percentage: 70,
    iconName: "GitBranch",
    description: "Version control, repository management, GitHub Pages deployment, and collaboration."
  },
  {
    name: "MATLAB",
    category: "Hardware & ECE",
    percentage: 50,
    iconName: "Cpu",
    description: "Signal processing calculations, mathematical modeling, matrix operations, and simulations."
  },
  {
    name: "Machine Learning Basics",
    category: "AI & Data",
    percentage: 50,
    iconName: "BrainCircuit",
    description: "Regression, classification, model evaluation, train-test split, and feature understanding."
  },
  {
    name: "Embedded Systems Concepts",
    category: "Hardware & ECE",
    percentage: 50,
    iconName: "Microchip",
    description: "Microcontroller logic, sensor interfacing, signal conditioning, and ECE fundamentals."
  },
  {
    name: "Problem Solving",
    category: "Tools & Web",
    percentage: 50,
    iconName: "Lightbulb",
    description: "Logical thinking, engineering analysis, algorithm design, and disciplined learning."
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "project-grocery",
    title: "Zaranwala Grocery Project",
    subtitle: "Digital Business & Practical Web Application Concept",
    category: "ECE",
    description: "A grocery-related project built to represent digital business thinking, user-friendly structure, and real-world practical website or system concepts for business growth.",
    longDescription: "Developed as a functional grocery web application model to explore digital business architecture, catalog navigation, order cart user flow, and practical web interaction design. Demonstrates how digital platforms empower local business concepts.",
    tags: ["Business / Web Project", "JavaScript", "HTML/CSS", "UX Design"],
    image: "/images/project2.jpg",
    githubUrl: "https://github.com/zahratech123",
    featured: true
  },
  {
    id: "project-portfolio",
    title: "Premium Portfolio Website",
    subtitle: "Official Branding & Showcase Platform",
    category: "Web",
    description: "Built a responsive personal portfolio website with SEO optimization, dark/light mode, animations, filtering, and GitHub Pages deployment for professional branding.",
    longDescription: "Created to centralize all engineering achievements, ECE projects, certifications, and AI learning milestones. Features structured schema markup, responsive glassmorphic cards, CSS theme variables, and interactive section filtering.",
    tags: ["Web Development", "Responsive Design", "SEO", "GitHub Pages"],
    image: "/images/project1.jpg",
    liveUrl: "https://zahralabssite.vercel.app",
    githubUrl: "https://github.com/zahratech123",
    featured: true
  },
  {
    id: "project-calculator",
    title: "Calculator Web App",
    subtitle: "Frontend Logic & Interactive Application",
    category: "Web",
    description: "Created a clean and functional calculator using HTML, CSS, and JavaScript to strengthen frontend logic and build a LinkedIn/GitHub showcase project.",
    longDescription: "An interactive web calculator supporting floating-point operations, memory states, error handling, and keyboard event listeners. Designed with clean modular JavaScript functions.",
    tags: ["JavaScript Project", "Frontend Logic", "UI/UX", "Interactive"],
    image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?auto=format&fit=crop&w=1200&q=80",
    githubUrl: "https://github.com/zahratech123",
    featured: true
  },
  {
    id: "project-ai-dashboard",
    title: "AI / ML Learning Dashboard Concept",
    subtitle: "Machine Learning & GenAI Growth Showcase",
    category: "AI/ML",
    description: "A beginner AI showcase concept representing ML learning progress, model understanding, prompt engineering, and future AI project planning.",
    longDescription: "Visualizes machine learning models, training workflows, dataset splitting strategies, prompt engineering pipelines, and long-term goals toward building intelligent hardware-software products.",
    tags: ["AI / ML", "Python", "Data Visualization", "GenAI Workflows"],
    image: "https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=1200&q=80",
    conceptUrl: "https://github.com/zahratech123",
    githubUrl: "https://github.com/zahratech123",
    featured: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  // Certifications
  {
    id: "cert-gsa",
    title: "Google Student Ambassador",
    category: "Leadership",
    description: "Strengthened leadership, communication, campus engagement, and professional visibility through ambassador responsibilities and community activities.",
    issuer: "Google",
    images: ["/images/certificate1.jpg", "/images/volunteer1.jpg"]
  },
  {
    id: "cert-six-sigma",
    title: "Lean Six Sigma Yellow Belt",
    category: "Leadership",
    description: "Operational excellence, quality control methodologies, problem-solving, and continuous improvement principles.",
    issuer: "Lean Six Sigma",
    images: ["/images/certificate2.jpg"]
  },
  {
    id: "cert-cybersecurity",
    title: "Cybersecurity Awareness Quiz",
    category: "Tech",
    description: "Information security best practices, network safety protocols, and digital threat prevention awareness.",
    issuer: "Cybersecurity Board",
    images: ["/images/certificate4.jpg", "/images/certificate4.1.jpg"]
  },
  {
    id: "cert-ds-ai",
    title: "Data Science with AI",
    category: "AI/ML",
    description: "Practical data analysis techniques, predictive modeling basics, and machine learning algorithms.",
    issuer: "Tech Academy",
    images: ["/images/certificate5.jpg"]
  },
  {
    id: "cert-python-60",
    title: "Python 60 Min Intensive",
    category: "Tech",
    description: "Accelerated Python programming fundamentals, data structures, and script automation.",
    issuer: "Python Academy",
    images: ["/images/certificate6.jpg"]
  },
  {
    id: "cert-aws-summit",
    title: "AWS Summit India Online",
    category: "Tech",
    description: "Cloud computing architecture, cloud services, scalable serverless solutions, and cloud security.",
    issuer: "Amazon Web Services (AWS)",
    images: ["/images/certificate7.jpg"]
  },
  {
    id: "cert-fullstack-demo",
    title: "Full Stack Internship Workshop",
    category: "Tech",
    description: "End-to-end full stack web architecture, frontend component hierarchies, and backend RESTful API integration.",
    issuer: "Engineering Tech",
    images: ["/images/certificate11.jpg"]
  },
  {
    id: "cert-pca-20",
    title: "Principal Component Analysis (PCA) in 20 Min",
    category: "AI/ML",
    description: "Dimensionality reduction, variance maximization, covariance matrices, and feature extraction in ML.",
    issuer: "ML Masterclass",
    images: ["/images/certificate12.jpg"]
  },
  {
    id: "cert-agnirva-space",
    title: "Agnirva Space Internship Program",
    category: "Tech",
    description: "Space technology exploration, satellite communication concepts, orbital mechanics, and aerospace engineering curiosity.",
    issuer: "Agnirva Space",
    images: ["/images/certificate13.jpg"]
  },
  {
    id: "cert-ds-workshop",
    title: "Data Science Workshop Certificate",
    category: "AI/ML",
    description: "Hands-on data cleaning, visualization techniques using Python libraries, and statistical modeling.",
    issuer: "Data Science Institute",
    images: ["/images/certificate14.jpg", "/images/certificate14.1.jpg"]
  },
  {
    id: "cert-gemini-hero",
    title: "Google Gemini Campus Hero Webinar",
    category: "AI/ML",
    description: "Explored Gemini multimodal AI models, prompt engineering patterns, and real-world GenAI deployment.",
    issuer: "Google / Gemini",
    images: ["/images/certificate19.jpg", "/images/certificate20.jpg"]
  },
  {
    id: "cert-ml-fundamentals",
    title: "Machine Learning Fundamentals",
    category: "AI/ML",
    description: "Built foundational understanding of machine learning concepts, data flow, model thinking, and beginner AI workflows.",
    issuer: "AI Growth Academy",
    images: [
      "/images/certificate16.jpg",
      "/images/certificate16.1.jpg",
      "/images/certificate16.2.jpg",
      "/images/certificate16.3.jpg"
    ]
  },
  {
    id: "cert-genai-learning",
    title: "Generative AI Learning Track",
    category: "AI/ML",
    description: "Explored LLMs, prompt engineering, AI ethics, and real-world use cases of generative AI.",
    issuer: "Google Cloud / GenAI",
    images: ["/images/course4.jpg"]
  },

  // Courses
  {
    id: "course-frontend-html",
    title: "Front-End Development: HTML",
    category: "Courses",
    description: "Comprehensive study of HTML5 document object model, accessibility tags, forms, and semantic design.",
    issuer: "Web Tech Institute",
    images: ["/images/course1.jpg"]
  },
  {
    id: "course-html-beginners",
    title: "HTML Beginners Course",
    category: "Courses",
    description: "Foundational course on constructing structured web pages and responsive layout markup.",
    issuer: "Code Foundation",
    images: ["/images/course2.jpg"]
  },
  {
    id: "course-matlab-ssip",
    title: "MATLAB SSIP Course",
    category: "Courses",
    description: "Engineering mathematical computation, signal processing simulation, and SSIP innovation project modeling.",
    issuer: "Government Engineering College / SSIP",
    images: ["/images/course3.jpg"]
  },
  {
    id: "course-intro-ai",
    title: "Introduction to Artificial Intelligence",
    category: "Courses",
    description: "Foundational principles of artificial intelligence, search algorithms, heuristic evaluation, and expert systems.",
    issuer: "AI Education Track",
    images: ["/images/course5.jpg"]
  },
  {
    id: "course-ml-core",
    title: "Machine Learning Fundamental Course",
    category: "Courses",
    description: "Supervised and unsupervised learning, decision trees, linear regression, and model validation techniques.",
    issuer: "ML Learning Hub",
    images: ["/images/course6.jpg"]
  },
  {
    id: "course-cnn",
    title: "Convolutional Neural Networks (CNN)",
    category: "Courses",
    description: "Deep learning architectures, convolutional layers, feature maps, pooling, and image classification models.",
    issuer: "Deep Learning Specialization",
    images: ["/images/course7.jpg"]
  },

  // Volunteer Work
  {
    id: "vol-gsa",
    title: "Google Student Ambassador Campus Activities",
    category: "Volunteer",
    description: "Led campus technical events, organized webinars, encouraged peer participation in Google programs, and built tech community awareness.",
    issuer: "Google Student Ambassador Program",
    images: ["/images/volunteer1.jpg", "/images/volunteer1.1.jpg", "/images/volunteer1.2.jpg"]
  },
  {
    id: "vol-marketing",
    title: "Marketing Internship Experience",
    category: "Volunteer",
    description: "Promoted technical workshops, communicated event offerings, and drove engagement across student networks.",
    issuer: "Marketing Team",
    images: ["/images/volunteer2.jpg"]
  },
  {
    id: "vol-marketing-offer",
    title: "Marketing & Community Leadership Offer Letters",
    category: "Volunteer",
    description: "Received official acceptance and appointment letters for marketing leadership and community outreach.",
    issuer: "Community Marketing Board",
    images: ["/images/volunteer4.jpg", "/images/volunteer4.1.jpg"]
  },
  {
    id: "vol-internshala",
    title: "Selected Internshala Student Partner",
    category: "Volunteer",
    description: "Selected as active Internshala ambassador representing college initiatives and career opportunities.",
    issuer: "Internshala",
    images: ["/images/volunteer5.jpg"]
  },
  {
    id: "vol-kaggle",
    title: "Python Coder from Kaggle Community",
    category: "Volunteer",
    description: "Participated in Kaggle Python coding challenges, data exploration, and beginner data science notebooks.",
    issuer: "Kaggle",
    images: ["/images/volunteer6.jpg"]
  },
  {
    id: "vol-fin-lit",
    title: "Financial Literacy Program Volunteer",
    category: "Volunteer",
    description: "Participated in financial literacy workshops and community awareness campaigns.",
    issuer: "Financial Education Initiative",
    images: ["/images/volunteer7.jpg", "/images/volunteer8.jpg"]
  },
  {
    id: "vol-skill-airo",
    title: "Skill Airo Volunteer Offer Letter",
    category: "Volunteer",
    description: "Received official selection offer letter for Skill Airo volunteer leadership program.",
    issuer: "Skill Airo",
    pdfUrl: "/offer-letter.pdf",
    images: ["/images/volunteer3.jpg"]
  },
  {
    id: "vol-ambassador-letter",
    title: "Official Ambassador & Volunteer Engagement Letter",
    category: "Volunteer",
    description: "Official documentation recognizing student ambassador contributions and leadership role engagement.",
    issuer: "Student Engagement Council",
    images: ["/images/volunteer11.jpg"]
  },
  {
    id: "vol-faculty-interview",
    title: "Faculty Interview Leadership Project",
    category: "Volunteer",
    description: "Conducted technical and academic interviews with respected faculty members to share insights with fellow students.",
    issuer: "GEC Dahod Student Leadership",
    images: ["/images/volunteer9.jpg", "/images/volunteer9.1.jpg", "/images/volunteer9.2.jpg"]
  },

  // Industrial Visits
  {
    id: "visit-iaf",
    title: "Indian Air Force Exhibition",
    category: "Industrial Visits",
    description: "Explored defense electronics, radar communication systems, avionics equipment, and aviation engineering displays.",
    issuer: "Indian Air Force",
    images: ["/images/industrial-visit1.jpg", "/images/industrial-visit1.1.jpg"]
  },
  {
    id: "visit-einfochips",
    title: "eInfochips Corporate Visit",
    category: "Industrial Visits",
    description: "Gained exposure to semiconductor design, embedded product engineering, IoT hardware, and VLSI testing workflows.",
    issuer: "eInfochips (An Arrow Company)",
    images: ["/images/industrial-visit2.jpg", "/images/industrial-visit2.1.jpg"]
  },
  {
    id: "visit-smart-city",
    title: "Smart City Startup Conclave",
    category: "Industrial Visits",
    description: "Learned about smart infrastructure, urban automation, IoT sensor networks, and sustainable city engineering.",
    issuer: "Smart City Conclave",
    images: ["/images/industrial-visit3.jpg", "/images/industrial-visit3.1.jpg"]
  },
  {
    id: "visit-kaynes-semicon",
    title: "Kaynes Semicon OSAT Industry Visit",
    category: "Industrial Visits",
    description: "Inspected semiconductor packaging, OSAT testing facilities, micro-chip fabrication lines, and modern electronic manufacturing.",
    issuer: "Kaynes Semicon OSAT",
    videoUrl: "/visit1.mp4"
  },
  {
    id: "visit-ihub",
    title: "i-Hub Gujarat Visit Experience",
    category: "Industrial Visits",
    description: "Explored incubation center, student startup ecosystem, hardware prototyping labs, and innovation funding pathways.",
    issuer: "i-Hub Gujarat",
    videoUrl: "/visit2.mp4",
    images: ["/images/industrial-visit4.jpg"]
  },

  // Internships
  {
    id: "intern-ibm",
    title: "IBM SkillsBuild & CSRBOX Internship",
    category: "Internship",
    description: "Participated in hands-on technical skill development covering emerging cloud technologies, data analytics, and software logic.",
    issuer: "IBM SkillsBuild / CSRBOX",
    images: ["/images/internship1.jpg"]
  },
  {
    id: "intern-genai-analytics",
    title: "GenAI-Powered Data Analytics Internship",
    category: "Internship",
    description: "Applied generative AI models to dataset interpretation, automated report generation, and data visualization.",
    issuer: "Tech Analytics Lab",
    images: ["/images/internship2.jpg"]
  },
  {
    id: "intern-cybersecurity",
    title: "Cybersecurity Job Simulation",
    category: "Internship",
    description: "Simulated real-world security incident response, threat detection, network logs analysis, and vulnerability assessment.",
    issuer: "Forage Cybersecurity Simulation",
    images: ["/images/internship3.jpg"]
  },
  {
    id: "intern-ml",
    title: "Machine Learning Practical Internship",
    category: "Internship",
    description: "Hands-on supervised learning algorithms implementation, feature engineering, and predictive modeling.",
    issuer: "AI Research Lab",
    images: ["/images/internship4.jpg", "/images/internship4.1.jpg"]
  },
  {
    id: "intern-iot",
    title: "Internet of Things (IoT) Internship",
    category: "Internship",
    description: "Connected microcontrollers with cloud sensors, MQTT communication protocols, and real-time telemetry dashboards.",
    issuer: "IoT Innovation Center",
    images: ["/images/internship5.jpg"]
  },
  {
    id: "intern-ds-ml",
    title: "Data Science and Machine Learning Internship",
    category: "Internship",
    description: "End-to-end data pipeline construction, exploratory data analysis (EDA), and machine learning model validation.",
    issuer: "Data Science Lab",
    images: ["/images/internship6.jpg"]
  },

  // Badges
  {
    id: "badge-duelist",
    title: "DUELIST Badge",
    category: "Badges",
    description: "Infosys Wingspan Gamification Recognition for active technical learning challenges and continuous skill acquisition.",
    issuer: "Infosys Wingspan",
    images: ["https://gameconfig.onwingspan.com/Gamification/GetBadgeImage/?AppId=53243&TokenNo=O55WBL7J2F&BadgeCode=51DY31WO61"],
    badgeCode: "51DY31WO61"
  },
  {
    id: "badge-warrior",
    title: "WARRIOR Badge",
    category: "Badges",
    description: "Infosys Wingspan Gamification Recognition for persistence, problem solving, and technical problem completion.",
    issuer: "Infosys Wingspan",
    images: ["https://gameconfig.onwingspan.com/Gamification/GetBadgeImage/?AppId=53243&TokenNo=O55WBL7J2F&BadgeCode=TXEHMYSDEB"],
    badgeCode: "TXEHMYSDEB"
  },
  {
    id: "badge-ace",
    title: "ACE Badge",
    category: "Badges",
    description: "Top Tier Infosys Wingspan Recognition awarded for exceptional performance in technical learning pathways.",
    issuer: "Infosys Wingspan",
    images: ["https://gameconfig.onwingspan.com/Gamification/GetBadgeImage/?AppId=53243&TokenNo=O55WBL7J2F&BadgeCode=5W5G76DYM6"],
    badgeCode: "5W5G76DYM6"
  }
];

export const TIMELINE_DATA: TimelineItem[] = [
  {
    id: "tl-gec",
    year: "2023 – Present",
    title: "B.E. in Electronics & Communication Engineering",
    organization: "Government Engineering College, Dahod",
    role: "Undergraduate Student (Final Year)",
    category: "Education",
    description: "Pursuing B.E. in Electronics & Communication Engineering with active coursework in communication systems, signal processing, embedded systems, microcontrollers, and modern AI application development.",
    tags: ["ECE", "Signal Processing", "Embedded Systems", "Hardware/Software"]
  },
  {
    id: "tl-gsa",
    year: "2024",
    title: "Google Student Ambassador Program",
    organization: "Google",
    role: "Google Student Ambassador",
    category: "Leadership",
    description: "Selected as Google Student Ambassador. Built public speaking confidence, event organizing skills, student community outreach, and peer mentorship around developer technology.",
    tags: ["Leadership", "Google", "Community Outreach", "Webinars"]
  },
  {
    id: "tl-agnirva",
    year: "2024",
    title: "Agnirva Space Internship & Technical Exposure",
    organization: "Agnirva Space",
    role: "Space Tech Enthusiast & Trainee",
    category: "Space Tech",
    description: "Participated in Agnirva Space technology exposure program. Expanded curiosity toward aerospace engineering, satellite communication telemetry, and space-grade electronic systems.",
    tags: ["Space Tech", "Satellites", "Avionics", "Engineering Curiosity"]
  },
  {
    id: "tl-ai-track",
    year: "2024 – Present",
    title: "AI & Digital Solutions Specialization",
    organization: "Self-Directed & Professional Certifications",
    role: "Building Intelligent Digital Solutions",
    category: "Technical",
    description: "Building a strong AI foundation focusing on Python, Machine Learning fundamentals, Convolutional Neural Networks, Large Language Models, prompt engineering, and intelligent hardware integration.",
    tags: ["GenAI", "Python", "ML", "CNNs", "Digital Solutions"]
  }
];

export const ACHIEVEMENTS_DATA: AchievementCard[] = [
  {
    id: "ach-ncc-gold",
    type: "gold",
    icon: "🥇",
    title: "2 Gold Medal Awards in NCC",
    description: "Awarded two Gold Medals for outstanding discipline, leadership, physical endurance, and rifle drill performance in National Cadet Corps (NCC).",
    issuer: "National Cadet Corps (NCC)"
  },
  {
    id: "ach-ncc-silver",
    type: "silver",
    icon: "🥈",
    title: "1 Silver Medal Award in NCC",
    description: "Awarded Silver Medal in NCC for exemplary cadet training, team spirit, and campus leadership.",
    issuer: "National Cadet Corps (NCC)"
  },
  {
    id: "ach-wingspan-ace",
    type: "badge",
    icon: "⚡",
    title: "Infosys Wingspan ACE & Warrior Badges",
    description: "Earned DUELIST, WARRIOR, and ACE top badges on Infosys Wingspan platform for tech mastery.",
    issuer: "Infosys Wingspan"
  }
];

export const AI_GROWTH_TRACK = {
  title: "AI / ML Growth Track & Vision",
  description: "This section highlights my direction toward building intelligent digital solutions. I am actively building my AI foundation through Python, machine learning concepts, prompt engineering, project thinking, and product-oriented technology learning. My long-term goal is to create intelligent systems that connect software, hardware, and human-centered design.",
  pillars: [
    {
      title: "🧠 ML Concepts",
      subtitle: "Foundational Machine Learning Principles",
      details: "Regression, classification, overfitting, train-test split, model evaluation basics, PCA, and decision boundary analysis."
    },
    {
      title: "⚡ GenAI & LLMs",
      subtitle: "Generative AI & Modern AI Pipelines",
      details: "Prompt engineering, LLM integration, multimodal understanding with Gemini, RAG workflows, and productivity applications."
    },
    {
      title: "🚀 Future Direction",
      subtitle: "Intelligent Systems & Automation",
      details: "Intelligent digital solutions, embedded intelligence in ECE microcontrollers, robotics integration, signal processing, and smart hardware-software systems."
    }
  ]
};
