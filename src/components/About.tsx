import React from 'react';
import { 
  Server, 
  Cloud, 
  Database, 
  Layers, 
  CheckCircle2, 
  GraduationCap, 
  Sparkles
} from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Server className="w-6 h-6 text-sky-400" />,
      title: 'Backend & System Architecture',
      description: 'Designing modular REST APIs, decoupled controller-service layers, and performant server architectures using Node.js, Express, Spring Boot, and FastAPI.'
    },
    {
      icon: <Database className="w-6 h-6 text-indigo-400" />,
      title: 'Database Engineering',
      description: 'Structuring normalized relational models, foreign key constraints, indexes, and transactions across PostgreSQL, MySQL, and SQLite with SQLAlchemy ORM.'
    },
    {
      icon: <Cloud className="w-6 h-6 text-cyan-400" />,
      title: 'Cloud & Linux Systems',
      description: 'Applying Red Hat Linux administration skills (RHCSA certified), Google Cloud Shell provisioning, and cloud fundamentals on Google Cloud Platform (GCP).'
    },
    {
      icon: <Layers className="w-6 h-6 text-emerald-400" />,
      title: 'Agile Delivery & Code Quality',
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Narrative Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-5">
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

              <div className="p-4 rounded-xl bg-slate-900/80 border border-white/5 space-y-3">
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
          </div>

          {/* Right Engineering Pillars Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="glass-panel glass-panel-hover p-6 rounded-2xl border border-white/10 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-xl bg-slate-900/90 border border-white/10 flex items-center justify-center">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-bold text-white tracking-tight">
                    {pillar.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center gap-1.5 text-xs font-mono text-sky-400/90">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Resume verified</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
