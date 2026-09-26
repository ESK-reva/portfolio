export const portfolioData = {
  personal: {
    name: "Eshan S K",
    shortName: "Eshan",
    role: "2nd-Year Computer Science Engineering Student",
    headline: "CSE Student | Building, Learning & Exploring Technology",
    email: "eshansk1457@gmail.com",
    github: "https://github.com/ESK-reva",
    linkedin: {
      isPlaceholder: true,
      label: "LinkedIn Profile",
      statusMessage: "Profile link coming soon (Currently under setup)",
    },
    location: "Karnataka, India",
    focus: [
      "Vibe coding",
      "Building projects",
      "Learning through hands-on development",
      "AI-assisted development"
    ]
  },
  
  about: {
    lead: "I'm a 2nd-year Computer Science Engineering student passionate about learning through hands-on development and exploration.",
    paragraphs: [
      "Rather than focusing purely on theory, I believe the best way to understand technology is to get your hands dirty and build working systems. My journey currently revolves around exploring cybersecurity concepts, engineering modern web applications, and experimenting with hardware and software interfaces.",
      "I actively leverage AI-assisted development as a learning accelerator and productivity tool—helping me reason through architectural decisions, troubleshoot complex bugs, and iterate faster while keeping a deep understanding of what happens under the hood.",
      "I don't claim to be an expert. I am an enthusiastic student who enjoys the process of solving tricky problems, learning continuously, and turning ideas into tangible projects."
    ],
    highlights: [
      {
        title: "Academic Stage",
        description: "2nd-year CSE undergraduate building foundational computer science strength."
      },
      {
        title: "Core Mindset",
        description: "Hands-on builder learning through real problem solving and practical implementation."
      },
      {
        title: "Active Learning",
        description: "Exploring cybersecurity, web systems, and modern AI-assisted engineering workflows."
      }
    ]
  },

  skills: {
    programming: [
      {
        name: "C",
        description: "Foundational low-level systems programming, memory concepts, and algorithms."
      },
      {
        name: "Python",
        description: "Scripting, machine learning pipelines, data processing, and automation."
      },
      {
        name: "Java",
        description: "Object-oriented software design, strong type safety, and core backend logic."
      }
    ],
    interests: [
      {
        name: "Cybersecurity",
        description: "Understanding network principles, security fundamentals, and defensive concepts."
      },
      {
        name: "Web Development",
        description: "Building responsive, modern, user-friendly frontend and backend web applications."
      }
    ]
  },

  projects: [
    {
      id: "notes-app",
      title: "Notes App",
      category: "Full-Stack Web Application",
      description: "A full-stack notes application with functionality for creating, viewing, editing, deleting, and organizing notes.",
      technologies: ["React", "Node.js", "Express", "Database"],
      myContribution: "I worked across the frontend, backend, database integration, API connectivity, and UI. The project involved AI-assisted development for learning, implementation, debugging, and problem solving.",
      highlights: [
        "Complete CRUD operations for seamless note management",
        "REST API connectivity connecting React UI to Express backend",
        "Database integration for data persistence and organization",
        "AI-assisted debugging and architectural structuring"
      ],
      linkType: "Project",
      hasRepo: false
    },
    {
      id: "smart-emergency-response",
      title: "Smart Emergency Response System",
      category: "IoT & Embedded Systems",
      description: "An IoT-based emergency response system designed to detect and respond to emergency situations using connected hardware.",
      technologies: ["IoT", "ESP", "Arduino", "Embedded Programming"],
      myContribution: "I worked on the hardware setup and ESP-based programming, using AI assistance during development and debugging.",
      highlights: [
        "Hardware circuit assembly and sensor interfacing",
        "Microcontroller programming on ESP platform",
        "Automated emergency event detection and alerting logic",
        "AI-assisted firmware troubleshooting and logic verification"
      ],
      linkType: "Project",
      hasRepo: false
    },
    {
      id: "house-rent-prediction",
      title: "House Rent Prediction",
      category: "Machine Learning & Data Science",
      description: "A machine-learning project that analyzes housing data and predicts house rent using regression techniques.",
      technologies: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Machine Learning"],
      myContribution: "I worked on the overall workflow including data preprocessing, exploration, visualization, model development, and evaluation, with AI-assisted learning and debugging.",
      highlights: [
        "Exploratory data analysis & feature visualization",
        "Data cleaning and handling numerical/categorical attributes",
        "Supervised regression model training with Scikit-learn",
        "AI-assisted workflow evaluation and metric interpretation"
      ],
      linkType: "Project",
      hasRepo: false
    }
  ],

  currentlyExploring: [
    {
      title: "Cybersecurity",
      tagline: "Security Fundamentals & Defenses",
      description: "Exploring core networking principles, threat vectors, secure coding practices, and defensive security basics to understand how systems are protected.",
      focus: "Hands-on labs & foundational concepts"
    },
    {
      title: "Web Development",
      tagline: "Full-Stack Architectures & Modern UI",
      description: "Designing responsive, accessible web interfaces and building reliable backend APIs with modern component-driven architectures.",
      focus: "Component design & API connectivity"
    },
    {
      title: "AI-assisted Development",
      tagline: "Learning & Productivity Velocity",
      description: "Using modern AI developer tools as interactive tutors, pairing partners, and debugging assistants to accelerate learning and test hypotheses quickly.",
      focus: "Workflow optimization & problem solving"
    },
    {
      title: "Problem Solving",
      tagline: "Algorithms & Algorithmic Thinking",
      description: "Strengthening foundational problem-solving through algorithmic challenges, data structures, and systematic debugging methods.",
      focus: "Algorithmic thinking & efficiency"
    },
    {
      title: "Building Real-world Projects",
      tagline: "Iterative Hands-on Creation",
      description: "Transforming concepts into functioning codebases, learning to navigate real implementation constraints and edge cases.",
      focus: "End-to-end execution & user utility"
    }
  ],

  terminal: {
    username: "eshan",
    hostname: "developer",
    defaultTab: "whoami",
    commands: {
      "whoami": {
        cmd: "whoami",
        output: [
          "name: Eshan S K",
          "status: 2nd-Year Computer Science Engineering Student",
          "headline: CSE Student | Building, Learning & Exploring Technology",
          "mindset: Hands-on development & continuous learning"
        ]
      },
      "cat interests.txt": {
        cmd: "cat interests.txt",
        output: [
          "cybersecurity",
          "web-development",
          "building-projects",
          "learning-new-things"
        ]
      },
      "cat focus.txt": {
        cmd: "cat focus.txt",
        output: [
          "• Vibe coding & rapid prototyping",
          "• Building real-world projects",
          "• Learning through hands-on development",
          "• AI-assisted development & debugging"
        ]
      },
      "status": {
        cmd: "status",
        output: [
          "[OK] Ready to collaborate and build.",
          "[OK] Exploring cybersecurity & web development.",
          "[OK] Open to developer conversations and student projects."
        ]
      }
    }
  },

  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Exploring", href: "#exploring" },
    { name: "Contact", href: "#contact" }
  ]
};
