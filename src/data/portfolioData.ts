import { Project, SkillCategory, Certification, EducationItem, Achievement } from '../types';

export const personalInfo = {
  name: 'Sugam Chaturvedi',
  role: 'Computer Science Engineering Student',
  secondaryRoles: ['Aspiring Software Developer', 'Aspiring Cloud Engineer'],
  tagline: 'Building robust full-stack applications, scalable backend systems, and automated cloud workflows.',
  bio: `I am a Computer Science and Engineering student at Lovely Professional University with a deep focus on full-stack development, distributed backend architecture, and cloud technologies. Experienced in building production-ready web services using Node.js, FastAPI, Spring Boot, and PostgreSQL, with recognized hands-on credentials including Red Hat Certified System Administrator (RHCSA) and Infosys C++ certifications. Passionate about solving complex data and scheduling problems, writing clean testable code, and optimizing systems for performance and reliability.`,
  location: 'Phagwara, Punjab, India',
  email: 'sugamchaturvedi038@gmail.com',
  github: 'https://github.com/Sugamchaturvedi20',
  linkedin: 'https://www.linkedin.com/in/sugam20',
  avatar: './sugam-chaturvedi.jpg',
  resumePath: './Sugam_Chaturvedi_Resume.pdf',
  stats: [
    { label: 'Core Projects', value: '3+' },
    { label: 'Certifications', value: '7' },
    { label: 'Current CGPA', value: '6.5' },
    { label: 'Status', value: 'Available for Internships' }
  ]
};

export const projectsData: Project[] = [
  {
    id: 'smart-classroom-scheduler',
    title: 'Smart Classroom & Timetable Scheduler',
    subtitle: 'University-Wide Automated Academic Scheduling Engine',
    featured: true,
    category: 'Full Stack',
    description: 'A full-stack university timetable management system engineered to handle large-scale academic operations. Features automatic timetable compilation, multi-room resource allocation, and a real-time conflict detection engine ensuring zero overlaps across instructors, classrooms, and student batches.',
    technologies: ['Node.js', 'Express', 'PostgreSQL', 'JavaScript', 'HTML5', 'CSS3', 'REST API'],
    features: [
      'Automatic timetable generation algorithm optimizing lecture slots and room capacities',
      'Multi-room & multi-block scheduling with dynamic facility constraints',
      'Real-time conflict detection preventing teacher double-booking and room clashes',
      'Secure role-based authentication and granular permission management',
      'Comprehensive CRUD operations for faculties, courses, departments, and rooms',
      'Analytical dashboard visualizing room occupancy and weekly schedule distributions',
      'Persistent PostgreSQL database layer with relational integrity rules',
      'Database-backed university-wide timetable export and schedule synchronization'
    ],
    architectureHighlights: [
      'Relational schema design with indexing on time-slot and room-id constraints',
      'O(N log N) heuristic conflict verification algorithm for instantaneous feedback',
      'Modular Express router architecture with centralized middleware validation'
    ],
    githubUrl: 'https://github.com/Sugamchaturvedi/Smart-Classroom-and-Timetable-Scheduler',
    hasLiveDemo: false,
    statusBadge: 'Featured Project'
  },
  {
    id: 'devtrack-management',
    title: 'DevTrack — Project Management System',
    subtitle: 'High-Performance Agile Workspace & Task Lifecycle Manager',
    featured: false,
    category: 'Full Stack',
    description: 'An agile project management application delivering workspace isolation, task status lifecycles, and role-based permissions. Built with a reactive frontend and a high-throughput Python FastAPI backend powered by SQLAlchemy ORM.',
    technologies: ['React', 'Vite', 'FastAPI', 'Python', 'SQLAlchemy', 'SQLite', 'Tailwind CSS'],
    features: [
      'User authentication with encrypted credentials and session management',
      'Project ownership model with granular member workspace access',
      'Task management with dynamic status columns (Backlog, In Progress, Review, Done)',
      'Priority assignment (Low, Medium, High, Urgent) with visual indicators',
      'Protected RESTful APIs using OAuth2 / Bearer token security schemes',
      'SQLAlchemy ORM integration with relational mappings and transactions',
      'Configured Cross-Origin Resource Sharing (CORS) for seamless client-server decoupling',
      'Interactive Swagger / OpenAPI documentation auto-generated from endpoints',
      'Automated backend test coverage testing route handlers and business rules'
    ],
    architectureHighlights: [
      'Asynchronous FastAPI route handlers for low-latency request processing',
      'Clean separation of models, schemas, repositories, and API routers',
      'Optimistic UI state updates on client side for responsive task drag-and-drop'
    ],
    githubUrl: 'https://github.com/Sugamchaturvedi20/DevTrack',
    hasLiveDemo: false,
    statusBadge: 'Full-Stack'
  },
  {
    id: 'hotel-management-system',
    title: 'Hotel Management System',
    subtitle: 'Enterprise Hospitality Management & Automated Billing Suite',
    featured: false,
    category: 'Backend / Cloud',
    description: 'A responsive hotel operations and booking system facilitating real-time room inventory management, guest records, automated checkout billing, and revenue analytics. Implements core Java data structures for reservation queues and state caching.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'REST API'],
    features: [
      'Dynamic room availability tracking across multiple tiers (Deluxe, Suite, Standard)',
      'Instantaneous booking reservation and flexible cancellation workflows',
      'Automated invoice calculation with tax breakdowns and discount rules',
      'Payment tracking module documenting transaction records and payment statuses',
      'Customer history registry maintaining past stays, preferences, and contacts',
      'Revenue and occupancy calculation reports for administrative oversight',
      'Spring Boot REST APIs with structured error handling and input validation',
      'Robust MySQL relational schema with foreign key constraints and audit tables',
      'Implementation of core Java data structures (ArrayList, HashMap, Queue, Stack)'
    ],
    architectureHighlights: [
      'Queue-based reservation dispatcher managing concurrent booking requests',
      'HashMap lookups providing O(1) room status and guest session resolution',
      'Layered Spring Boot architecture: Controller, Service, and Repository patterns'
    ],
    githubUrl: 'https://github.com/Sugamchaturvedi20/Hotel-Management-System',
    hasLiveDemo: false,
    statusBadge: 'Enterprise Java'
  }
];

export const skillCategories: SkillCategory[] = [
  {
    id: 'programming',
    name: 'Programming Languages',
    skills: [
      { name: 'C++', level: 'Core / Advanced', icon: 'Code2', description: 'Data structures, algorithms, STL, and memory management; certified by Infosys' },
      { name: 'Python', level: 'Backend & Scripting', icon: 'Terminal', description: 'FastAPI, automation scripts, SQLAlchemy ORM, and data handling' },
      { name: 'JavaScript', level: 'Full Stack', icon: 'FileCode', description: 'ES6+, asynchronous programming, DOM manipulation, Node.js & React' },
      { name: 'Java', level: 'Object-Oriented', icon: 'Coffee', description: 'OOP principles, collections framework (ArrayList, HashMap, Queue, Stack), Spring Boot' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 'Runtime', icon: 'Server', description: 'Event-driven asynchronous server-side development and package ecosystem' },
      { name: 'Express.js', level: 'Web Framework', icon: 'Layers', description: 'RESTful API routing, middleware chaining, and authentication handling' },
      { name: 'Spring Boot', level: 'Enterprise Java', icon: 'Cpu', description: 'Java enterprise service architecture, dependency injection, and REST endpoints' },
      { name: 'FastAPI', level: 'Python Framework', icon: 'Zap', description: 'High-performance asynchronous Python REST APIs with automatic OpenAPI docs' }
    ]
  },
  {
    id: 'web',
    name: 'Web Technologies',
    skills: [
      { name: 'HTML5', level: 'Semantic Markup', icon: 'Layout', description: 'Semantic document structuring, accessibility (a11y), and SEO standards' },
      { name: 'CSS3', level: 'Styling & Layouts', icon: 'Palette', description: 'Flexbox, Grid, CSS animations, responsive media queries, and modern UI' },
      { name: 'React & Vite', level: 'Modern Frontend', icon: 'Atom', description: 'Component architecture, reactive state hooks, and high-speed build tooling' },
      { name: 'Tailwind CSS', level: 'Utility-First UI', icon: 'Sparkles', description: 'Rapid responsive styling, custom themes, dark-mode design systems' }
    ]
  },
  {
    id: 'databases',
    name: 'Databases & ORM',
    skills: [
      { name: 'PostgreSQL', level: 'Relational DB', icon: 'Database', description: 'Complex relational schemas, foreign keys, indexing, and transactional integrity' },
      { name: 'MySQL', level: 'Relational DB', icon: 'Database', description: 'Database normalization, structured queries, stored procedures, and joins' },
      { name: 'SQLite', level: 'Embedded DB', icon: 'HardDrive', description: 'Lightweight zero-configuration local database storage for services and testing' },
      { name: 'SQLAlchemy', level: 'Python ORM', icon: 'Workflow', description: 'Object-relational mapping, query builders, migrations, and relationship models' }
    ]
  },
  {
    id: 'cloud',
    name: 'Cloud & Platforms',
    skills: [
      { name: 'Google Cloud Platform (GCP)', level: 'Cloud Infrastructure', icon: 'Cloud', description: 'Compute Engine, Cloud Storage, IAM policies, and cloud fundamentals' },
      { name: 'Google Cloud Shell', level: 'Cloud CLI', icon: 'TerminalSquare', description: 'Interactive command-line administration, cloud provisioning, and scripting' },
      { name: 'Linux (Red Hat)', level: 'System Administration', icon: 'FolderGit2', description: 'Shell scripting, user privileges, file permissions, and system administration (RHCSA)' },
      { name: 'Git & GitHub', level: 'Version Control', icon: 'GitBranch', description: 'Branching strategies, pull requests, version tracking, and repository workflows' }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Project Management',
    skills: [
      { name: 'VS Code', level: 'Development IDE', icon: 'Code', description: 'Primary developer workspace configured for multi-language workflows and debugging' },
      { name: 'Agile & Scrum', level: 'Methodology', icon: 'CheckCircle2', description: 'Iterative sprint cycles, user stories, standups, and incremental delivery' },
      { name: 'Jira', level: 'Project Tracking', icon: 'Kanban', description: 'Backlog grooming, issue tracking, velocity tracking, and sprint boards' },
      { name: 'Problem-Solving & Team Player', level: 'Soft Skills', icon: 'Users', description: 'Analytical reasoning, effective technical communication, and active adaptability' }
    ]
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'rhcsa',
    title: 'Red Hat Certified System Administrator (RHCSA)',
    issuer: 'Red Hat',
    date: 'August 2024',
    status: 'Completed',
    badgeColor: 'border-red-500/30 bg-red-950/20 text-red-300',
    skillsCovered: ['Linux Shell', 'User & Permission Management', 'Storage & Filesystems', 'Service Deployment', 'System Security'],
    certificateUrl: 'https://www.linkedin.com/posts/sugam20_linux-rhcsa-lpu-activity-7388627491948740608-4GwX'
  },
  {
    id: 'infosys-cpp',
    title: 'Programming Using C++',
    issuer: 'Infosys (Springboard / Wingspan)',
    date: 'July 2025',
    status: 'Completed',
    badgeColor: 'border-sky-500/30 bg-sky-950/20 text-sky-300',
    skillsCovered: ['C++ Fundamentals', 'Object-Oriented Programming', 'Pointers & Memory', 'Data Structures', 'Algorithms'],
    certificateUrl: 'https://www.linkedin.com/posts/sugam20_infosys-cplusplus-learningneverstops-activity-7388623056564301824-YHJY'
  },
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking',
    issuer: 'Specialized Cybersecurity Training',
    date: 'January 2025',
    status: 'Completed',
    badgeColor: 'border-emerald-500/30 bg-emerald-950/20 text-emerald-300',
    skillsCovered: ['Network Reconnaissance', 'Vulnerability Assessment', 'Web Application Security', 'Penetration Testing Basics'],
    certificateUrl: 'https://lnkd.in/p/dcRJNByk'
  },
  {
    id: 'cloud-fundamentals',
    title: 'Cloud Fundamentals',
    issuer: 'Cloud Technical Training',
    date: 'March 2025',
    status: 'Completed',
    badgeColor: 'border-cyan-500/30 bg-cyan-950/20 text-cyan-300',
    skillsCovered: ['Cloud Architecture', 'Compute & Storage Services', 'IAM & Security', 'Scalability & High Availability'],
    certificateUrl: 'https://lnkd.in/p/dxfp5SpD'
  },
  {
    id: 'dsa-fundamentals',
    title: 'Fundamentals of Data Structures: Learn, Apply and Build Projects',
    issuer: 'Technical Training & Project Lab',
    date: 'June–July 2026',
    status: 'Completed',
    badgeColor: 'border-indigo-500/30 bg-indigo-950/20 text-indigo-300',
    skillsCovered: ['Arrays & Strings', 'Linked Lists', 'Stacks & Queues', 'Trees & Graphs', 'Algorithm Complexity (Big O)'],
    certificateUrl: 'https://lnkd.in/p/dRPjR3aE'
  },
  {
    id: 'oracle-cert',
    title: 'Oracle Certification',
    issuer: 'Oracle',
    date: 'August 2026',
    status: 'Completed',
    badgeColor: 'border-amber-500/30 bg-amber-950/20 text-amber-300',
    skillsCovered: ['Relational Database Systems', 'SQL Queries & Optimization', 'Database Architecture', 'Data Integrity'],
    certificateUrl: 'https://www.linkedin.com/posts/sugam20_oracle-ai-database-certified-foundations-activity-7496938816214249472-P1ga'
  },
  {
    id: 'public-speaking',
    title: 'Communication and Public Speaking Skills',
    issuer: 'Professional Development Program',
    date: 'July 2024',
    status: 'Completed',
    badgeColor: 'border-purple-500/30 bg-purple-950/20 text-purple-300',
    skillsCovered: ['Technical Presentations', 'Team Communication', 'Stakeholder Alignment', 'Professional Articulation'],
    certificateUrl: 'https://lnkd.in/p/d_r4abQ8'
  }
];

export const educationData: EducationItem[] = [
  {
    id: 'lpu-btech',
    degree: 'Bachelor of Technology (B.Tech) — Computer Science and Engineering',
    institution: 'Lovely Professional University',
    location: 'Phagwara, Punjab, India',
    duration: 'August 2024 – Present',
    grade: 'CGPA: 6.5',
    current: true,
    details: [
      'Core coursework: Data Structures & Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, Computer Networks.',
      'Active focus on full-stack development, software engineering practices, and cloud computing principles.',
      'Hands-on laboratory projects spanning C++, Python, Java Spring Boot, and PostgreSQL systems.'
    ]
  },
  {
    id: 'intermediate-education',
    degree: 'Intermediate / Senior Secondary Education (Class XII)',
    institution: 'Senior Secondary School Education',
    location: 'India',
    duration: 'Completed',
    details: [
      'Stream: Science and Mathematics (Physics, Chemistry, Mathematics, and Computer Science).',
      'Developed strong foundational mathematical problem-solving skills and fundamentals of computer programming.'
    ]
  }
];

export const achievementsData: Achievement[] = [
  {
    id: 'wns-care',
    title: 'NGO Social Impact Contribution',
    organization: 'WNS Care Foundation',
    date: 'October 2025',
    role: 'Community Volunteer & Technology Contributor',
    description: 'Contributed to grassroots community empowerment initiatives, assisting in educational outreach and supporting digital literacy programs organized by the foundation.',
    highlights: [
      'Supported digital literacy drives for underprivileged learners',
      'Assisted in coordination of community awareness sessions',
      'Demonstrated collaborative adaptability in social impact settings'
    ]
  },
  {
    id: 'cybersmart',
    title: 'CyberSmart Awareness Volunteering',
    organization: 'CyberSmart Initiative',
    date: '2024 – 2025',
    role: 'Cybersecurity Awareness Volunteer',
    description: 'Actively volunteered in peer-led digital safety programs, guiding students and participants on cybersecurity hygiene, phishing prevention, and safe internet practices.',
    highlights: [
      'Educated peer groups on credential safety and two-factor authentication',
      'Shared practical guidelines on identifying phishing attacks and digital scams',
      'Promoted cyber ethics and data privacy awareness across student networks'
    ]
  }
];

