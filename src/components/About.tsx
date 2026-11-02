import React from 'react';
import { 
  Server, 
  Cloud, 
  Database, 
  Layers, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles,
  MapPin,
  Award,
  Terminal,
  ExternalLink
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Server className="w-5 h-5 text-sky-400" />,
      title: 'Backend & Systems',
      description: 'Designing modular REST APIs, decoupled controller-service layers, and performant server architectures using Node.js, Express, Spring Boot, and FastAPI.'
    },
    {
      icon: <Database className="w-5 h-5 text-indigo-400" />,
      title: 'Database Engineering',
      description: 'Structuring normalized relational models, foreign key constraints, indexes, and transactions across PostgreSQL, MySQL, and SQLite with SQLAlchemy ORM.'
    },
    {
      icon: <Cloud className="w-5 h-5 text-cyan-400" />,
      title: 'Cloud & Linux Systems',
      description: 'Applying Red Hat Linux administration skills (RHCSA certified), Google Cloud Shell provisioning, and cloud fundamentals on Google Cloud Platform (GCP).'
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
      title: 'Agile & Code Quality',
      description: 'Practicing Scrum methodology, Jira ticket management, clean Git version control, structured data structures, and automated backend test suites.'
    }
  ];

  return (
    <section id="about" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-sky-400" />
            <span>ENGINEERING BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            About Me & Technical Focus
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A developer mindset rooted in strong computer science fundamentals, data structures, and cloud-native solutions.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="relative group">
              {/* Outer decorative glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-600 rounded-3xl blur-md opacity-40 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative bg-[#0b1120] rounded-3xl border border-white/15 overflow-hidden shadow-2xl">
                {/* Photo with gradient overlay */}
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-900">
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover object-top transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120] via-transparent to-transparent opacity-90"></div>
                  
                  {/* Floating Availability Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0b1120]/80 backdrop-blur-md border border-white/10 text-xs font-mono text-emerald-300 shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Ready for Internships</span>
                  </div>

                  {/* Bottom Portrait Caption */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#070b16]/85 backdrop-blur-md border border-white/10 space-y-1">
                    <div className="text-white font-extrabold text-lg sm:text-xl tracking-tight">
                      {personalInfo.name}
                    </div>
                    <div className="text-xs text-sky-400 font-mono">
                      B.Tech Computer Science & Engineering
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400 pt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>Lovely Professional University, Phagwara, Punjab</span>
                    </div>
                  </div>
                </div>

                {/* Key Quick Badges below photo */}
                <div className="p-5 bg-[#080d1a] border-t border-white/10 grid grid-cols-2 gap-3 text-xs font-mono">
                  <a
                    href="https://www.linkedin.com/posts/sugam20_linux-rhcsa-lpu-activity-7388627491948740608-4GwX"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-red-500/40 hover:bg-slate-900 transition flex items-center gap-2 group/rhcsa focus:outline-none focus:ring-1 focus:ring-red-400"
                    title="View RHCSA Certificate on LinkedIn"
                    aria-label="View Red Hat RHCSA Certificate on LinkedIn"
                  >
                    <Award className="w-4 h-4 text-red-400 shrink-0" />
                    <div>
                      <div className="text-white font-semibold flex items-center gap-1">
                        <span>RHCSA</span>
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover/rhcsa:text-red-400" />
                      </div>
                      <div className="text-[10px] text-slate-400">Red Hat Certified</div>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/posts/sugam20_infosys-cplusplus-learningneverstops-activity-7388623056564301824-YHJY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-900/80 border border-white/5 hover:border-sky-500/40 hover:bg-slate-900 transition flex items-center gap-2 group/inf focus:outline-none focus:ring-1 focus:ring-sky-400"
                    title="View Infosys C++ Certificate on LinkedIn"
                    aria-label="View Infosys C++ Certificate on LinkedIn"
                  >
                    <Terminal className="w-4 h-4 text-sky-400 shrink-0" />
                    <div>
                      <div className="text-white font-semibold flex items-center gap-1">
                        <span>C++ & Python</span>
                        <ExternalLink className="w-3 h-3 text-slate-500 group-hover/inf:text-sky-400" />
                      </div>
                      <div className="text-[10px] text-slate-400">Infosys Certified</div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Engineering Pillars */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Narrative Box */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-white/10 space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2.5">
                <span className="w-2.5 h-6 rounded-full bg-gradient-to-b from-sky-400 to-indigo-600"></span>
                Software Developer & Cloud Enthusiast
              </h3>
              
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Currently pursuing a <strong>B.Tech in Computer Science and Engineering</strong> at <strong>Lovely Professional University (LPU)</strong>, 
                Phagwara, Punjab. My journey centers around understanding how reliable backend systems and cloud platforms scale to meet real-world demands.
              </p>

              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                From developing a full-stack university timetable scheduling platform with automated conflict detection algorithms in 
                <strong> PostgreSQL</strong> and <strong>Node.js</strong>, to building agile project management systems with <strong>FastAPI</strong> and 
                enterprise hotel management applications with <strong>Java Spring Boot</strong>, I focus on writing maintainable, clean, and tested code.
              </p>

              {/* Target Internship Roles */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-2.5">
                <div className="text-xs font-mono uppercase text-sky-400 tracking-wider">Target Internship Roles</div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-sky-500/10 text-sky-300 border border-sky-500/20">
                    Software Development Engineer (SDE) Intern
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    Full-Stack Developer Intern
                  </span>
                  <span className="px-3 py-1 rounded-lg text-xs font-medium bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                    Backend / Cloud Engineer Intern
                  </span>
                </div>
              </div>

              {/* Education Highlights Snippet */}
              <div className="flex items-center gap-4 pt-2 border-t border-white/10">
                <div className="p-3 rounded-xl bg-sky-500/10 border border-sky-500/20 text-sky-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white">Lovely Professional University</div>
                  <div className="text-xs text-slate-400">B.Tech Computer Science & Engineering (2024 – Present) • CGPA 6.5</div>
                </div>
              </div>
            </div>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="glass-panel glass-panel-hover p-5 rounded-2xl border border-white/10 flex flex-col justify-between space-y-3"
                >
                  <div className="space-y-2">
                    <div className="w-10 h-10 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center">
                      {pillar.icon}
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white tracking-tight">
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-1.5 text-[11px] font-mono text-sky-400/90">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified in codebase</span>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
