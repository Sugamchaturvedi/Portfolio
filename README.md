# Sugam Chaturvedi — Professional Developer Portfolio

> Modern, responsive, recruiter-ready developer portfolio architected with React, TypeScript, Vite, and Tailwind CSS. Built to highlight software engineering, backend architectures, databases, and cloud competencies.

---

## 🚀 Live Development & Build Commands

This project is built using a modern React + Vite + TypeScript stack with Tailwind CSS.

### Prerequisites
- **Node.js** (v18 or higher; tested on v24)
- **npm** (v9 or higher)

### Installation
```bash
npm install
```

### Start Development Server
```bash
npm run dev
```
The development server will run locally at `http://localhost:3000`.

### Production Build
```bash
npm run build
```
Generates an optimized, minified production build in the `dist/` directory ready for deployment.

### Preview Production Build
```bash
npm run preview
```

---

## 📄 Resume Configuration & Updates

The portfolio features a live PDF resume download button configured across both the desktop navbar, hero section, mobile drawer, and footer.

### Resume File Location:
- The active resume PDF is placed at:
  ```
  public/Sugam_Chaturvedi_Resume.pdf
  ```
- **How to update your resume:**
  Whenever you have an updated PDF from your university or resume builder, simply replace the file named `Sugam_Chaturvedi_Resume.pdf` inside the `public/` directory with your new PDF file.
- The website automatically serves and triggers direct downloads for this file when recruiters click **"Resume"** or **"Download Resume"**.

---

## 📂 Project Architecture

```
Portfolio/
├── public/
│   ├── favicon.svg                   # Custom developer terminal SVG icon
│   └── Sugam_Chaturvedi_Resume.pdf   # Authentic PDF resume
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                # Sticky glassmorphic header + mobile drawer
│   │   ├── Hero.tsx                  # Recruiter-focused hero + interactive terminal mockup
│   │   ├── About.tsx                 # Academic narrative & 4 core engineering pillars
│   │   ├── Skills.tsx                # Filterable skill cards with search & categories
│   │   ├── Projects.tsx              # Featured project spotlight + secondary project cards
│   │   ├── ProjectModal.tsx          # Architecture inspection modal for recruiters
│   │   ├── Certifications.tsx        # Authentic credential cards with issuer verification
│   │   ├── Education.tsx             # LPU B.Tech CSE & Intermediate timeline
│   │   ├── Experience.tsx            # WNS Care Foundation NGO & CyberSmart volunteering
│   │   ├── Contact.tsx               # One-click copy email, social links & contact form
│   │   └── Footer.tsx                # Quick links, copyright, and smooth back-to-top
│   ├── data/
│   │   └── portfolioData.ts          # Centralized, single-source-of-truth data file
│   ├── types/
│   │   └── index.ts                  # TypeScript interfaces and schema models
│   ├── App.tsx                       # Main layout with active section scroll spy
│   ├── main.tsx                      # React root entry point
│   └── index.css                     # Tailwind directives, glassmorphism, & dark mode theme
├── index.html                        # SEO meta tags, OpenGraph data & Google Fonts
├── package.json                      # Scripts and dependencies
├── tailwind.config.js                # Custom deep navy / near-black color palette
├── tsconfig.json                     # Strict TypeScript compiler options
└── vite.config.ts                    # Vite build configuration
```

---

## 🛠️ Featured Projects Included

1. **Smart Classroom & Timetable Scheduler (FEATURED)**
   - *Tech:* Node.js, Express, PostgreSQL, JavaScript, HTML5, CSS3, REST API
   - *Highlights:* Automated heuristic timetable generation, multi-room scheduling, and real-time conflict detection across teachers, classrooms, classes, and sections.
   - *Repository:* [Smart-Classroom-and-Timetable-Scheduler](https://github.com/Sugamchaturvedi/Smart-Classroom-and-Timetable-Scheduler)

2. **DevTrack — Project Management System**
   - *Tech:* React, Vite, FastAPI, Python, SQLAlchemy, SQLite, Tailwind CSS
   - *Highlights:* Workspace ownership, task lifecycle states, protected OAuth2/Bearer endpoints, and automated backend test coverage.

3. **Hotel Management System**
   - *Tech:* Java, Spring Boot, MySQL, JavaScript, HTML5, CSS3
   - *Highlights:* Room inventory management, reservation queues, automated invoice calculation, and core Java data structures (`ArrayList`, `HashMap`, `Queue`, `Stack`).

---

## 🎓 Academic & Credential Integrity

- **University:** Lovely Professional University (LPU), Phagwara, Punjab (B.Tech CSE, 2024 – Present, CGPA: 6.5)
- **Certifications Included:**
  - Red Hat Certified System Administrator (RHCSA) — Red Hat
  - Programming Using C++ — Infosys Wingspan
  - Ethical Hacking
  - Cloud Fundamentals
  - Fundamentals of Data Structures: Learn, Apply and Build Projects
  - Oracle Certification — Oracle
  - Communication and Public Speaking Skills
- *Note:* No fake testimonials, fabricated credentials, or exaggerated claims are included.

---

## 🌐 Deployment Guidelines

### Deploying to Vercel
1. Push this repository to your GitHub profile: `https://github.com/Sugamchaturvedi20/portfolio`
2. Connect your repository on [Vercel](https://vercel.com).
3. Framework preset: **Vite**.
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy!

### Deploying to GitHub Pages
1. In `vite.config.ts`, set `base: '/portfolio/'` (matching your GitHub repository name).
2. Run `npm run build`.
3. Deploy the `dist` folder to your `gh-pages` branch.
