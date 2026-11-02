import React, { useState } from 'react';
import { 
  ArrowRight, 
  Github, 
  Linkedin, 
  Download, 
  Terminal, 
  Copy, 
  Check, 
  Sparkles, 
  Cloud, 
  Database, 
  Server, 
  Code2
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const [copiedCmd, setCopiedCmd] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'stack' | 'status'>('profile');

  const copyContact = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedCmd(true);
    setTimeout(() => setCopiedCmd(false), 2000);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-sky-500/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading, Subtitle, Intro & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Profile Avatar & Status Badge */}
            <div className="flex items-center gap-4">
              <div className="relative group shrink-0">
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-sky-400 via-cyan-300 to-indigo-600 rounded-full blur-sm opacity-70 group-hover:opacity-100 transition duration-300"></div>
                <img
                  src={personalInfo.avatar}
                  alt={personalInfo.name}
                  className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover object-top border-2 border-[#0b1120] shadow-xl"
                />
                <span className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-emerald-400 border-2 border-[#0b1120]" title="Available for work"></span>
              </div>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-sky-500/30 shadow-sm backdrop-blur-md">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                  </span>
                  <span className="text-xs font-mono font-medium text-sky-300 tracking-wide">
                    B.Tech CSE @ Lovely Professional University
                  </span>
                </div>
                <div className="text-xs text-slate-400 font-mono pl-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  <span>Actively seeking SDE Internships</span>
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-sky-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  Sugam Chaturvedi
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-semibold text-slate-300 tracking-wide flex flex-wrap items-center gap-x-2">
                <span>Computer Science Student</span>
                <span className="text-sky-400 font-bold">•</span>
                <span>Software Developer</span>
                <span className="text-sky-400 font-bold">•</span>
                <span className="text-cyan-400">Cloud Enthusiast</span>
              </p>
            </div>

            {/* Introductory Description */}
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl">
              Aspiring Software Developer and Cloud Engineer building scalable web architectures, 
              robust backend APIs, and conflict-free data engines. Passionate about applying 
              modern engineering practices, clean code, and cloud automation to solve real-world problems.
            </p>

            {/* Key Value Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="glass-panel p-3 rounded-xl border border-white/5">
                  <div className="text-lg sm:text-xl font-extrabold text-white font-mono">{stat.value}</div>
                  <div className="text-xs text-slate-400">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={() => scrollTo('projects')}
                className="group flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/25 hover:shadow-sky-500/40 hover:from-sky-400 hover:to-indigo-500 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-200"
              >
                <span>View Featured Projects</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3 rounded-xl font-semibold bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white border border-white/10 hover:border-sky-500/40 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-200"
              >
                <span>Contact Me</span>
              </button>

              <a
                href={personalInfo.resumePath}
                download="Sugam_Chaturvedi_Resume.pdf"
                className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold bg-slate-900/60 hover:bg-slate-800 text-sky-400 hover:text-sky-300 border border-sky-500/30 hover:border-sky-400/60 focus:outline-none focus:ring-2 focus:ring-sky-400 transition-all duration-200"
                title="Download Sugam's PDF Resume"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>
            </div>

            {/* Social Profiles & Quick Contact */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Profiles:</span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-sky-300 hover:border-sky-500/50 hover:bg-slate-800 transition-all"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-sky-300 hover:border-sky-500/50 hover:bg-slate-800 transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <button
                  onClick={copyContact}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900/90 border border-white/10 text-slate-300 hover:text-sky-300 hover:border-sky-500/50 text-xs font-mono transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedCmd ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
                  <span>{copiedCmd ? 'Email Copied!' : personalInfo.email}</span>
                </button>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Developer Terminal / Code Sandbox Mockup */}
          <div className="lg:col-span-5">
            <div className="relative group">
              {/* Outer decorative gradient border */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-sky-500 via-cyan-400 to-indigo-600 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition duration-500"></div>
              
              <div className="relative bg-[#0b1120] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#080d1a] border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
                    <span className="ml-2 text-xs font-mono text-slate-400 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-sky-400" />
                      sugam@engineer-node: ~
                    </span>
                  </div>

                  {/* Terminal Tab Switchers */}
                  <div className="flex items-center gap-1 bg-slate-900/80 p-0.5 rounded-lg border border-white/5 text-[11px] font-mono" role="tablist">
                    <button
                      role="tab"
                      aria-selected={activeTab === 'profile'}
                      onClick={() => setActiveTab('profile')}
                      className={`px-2 py-0.5 rounded transition focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                        activeTab === 'profile' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      profile.json
                    </button>
                    <button
                      role="tab"
                      aria-selected={activeTab === 'stack'}
                      onClick={() => setActiveTab('stack')}
                      className={`px-2 py-0.5 rounded transition focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                        activeTab === 'stack' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      stack.sh
                    </button>
                    <button
                      role="tab"
                      aria-selected={activeTab === 'status'}
                      onClick={() => setActiveTab('status')}
                      className={`px-2 py-0.5 rounded transition focus:outline-none focus:ring-1 focus:ring-sky-400 ${
                        activeTab === 'status' ? 'bg-sky-500/20 text-sky-300 font-semibold' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      certs.log
                    </button>
                  </div>
                </div>

                {/* Terminal Content Body */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 leading-relaxed overflow-x-auto min-h-[340px]">
                  {activeTab === 'profile' && (
                    <div className="space-y-1.5">
                      <p className="text-slate-500"># Developer Profile & Target Role</p>
                      <p><span className="text-purple-400">const</span> <span className="text-sky-300">developer</span> = &#123;</p>
                      <p className="pl-4"><span className="text-slate-400">name:</span> <span className="text-emerald-300">"Sugam Chaturvedi"</span>,</p>
                      <p className="pl-4"><span className="text-slate-400">degree:</span> <span className="text-emerald-300">"B.Tech Computer Science & Eng"</span>,</p>
                      <p className="pl-4"><span className="text-slate-400">university:</span> <span className="text-emerald-300">"Lovely Professional University"</span>,</p>
                      <p className="pl-4"><span className="text-slate-400">cgpa:</span> <span className="text-amber-300">6.67</span>,</p>
                      <p className="pl-4"><span className="text-slate-400">specialization:</span> [</p>
                      <p className="pl-8 text-cyan-300">"Full-Stack Web Engineering",</p>
                      <p className="pl-8 text-cyan-300">"Distributed Backend Services",</p>
                      <p className="pl-8 text-cyan-300">"Cloud Infrastructure (GCP & Linux)"</p>
                      <p className="pl-4">],</p>
                      <p className="pl-4"><span className="text-slate-400">seeking:</span> <span className="text-emerald-300">"Software Development Internships"</span>,</p>
                      <p className="pl-4"><span className="text-slate-400">contact:</span> <span className="text-sky-300">"sugamchaturvedi038@gmail.com"</span></p>
                      <p>&#125;;</p>
                      <div className="pt-2 flex items-center gap-2 text-slate-500">
                        <span className="text-emerald-400">➜</span>
                        <span>ready for review</span>
                        <span className="inline-block w-2 h-4 bg-sky-400 animate-pulse"></span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'stack' && (
                    <div className="space-y-2">
                      <p className="text-slate-500"># Active Technical Pipeline</p>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-sky-400" />
                          <span className="text-slate-400">Languages:</span>
                          <span className="text-sky-300 font-semibold">C++, Python, JavaScript, Java</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Server className="w-4 h-4 text-emerald-400" />
                          <span className="text-slate-400">Backend:</span>
                          <span className="text-emerald-300">Node.js, Express, Spring Boot, FastAPI</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Database className="w-4 h-4 text-indigo-400" />
                          <span className="text-slate-400">Databases:</span>
                          <span className="text-indigo-300">PostgreSQL, MySQL, SQLite, SQLAlchemy</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Cloud className="w-4 h-4 text-cyan-400" />
                          <span className="text-slate-400">Cloud & OS:</span>
                          <span className="text-cyan-300">Google Cloud Platform, Linux (Red Hat)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-amber-400" />
                          <span className="text-slate-400">Workflow:</span>
                          <span className="text-amber-300">Git, GitHub, Agile, Scrum, Jira, VS Code</span>
                        </div>
                      </div>
                      <div className="mt-3 p-2.5 rounded bg-slate-900/70 border border-white/5 text-[11px] text-slate-400">
                        <span className="text-sky-400 font-bold">$</span> verified on actual codebase projects
                      </div>
                    </div>
                  )}

                  {activeTab === 'status' && (
                    <div className="space-y-2">
                      <p className="text-slate-500"># Verified Credentials & Timeline</p>
                      <div className="space-y-1.5 text-xs">
                        <div className="flex items-center justify-between text-slate-300 pb-1 border-b border-white/5">
                          <span className="text-red-400 font-bold">[RHCSA]</span>
                          <span>Red Hat Certified System Administrator</span>
                          <span className="text-slate-500">Aug 2024</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300 pb-1 border-b border-white/5">
                          <span className="text-sky-400 font-bold">[INFOSYS]</span>
                          <span>Programming Using C++</span>
                          <span className="text-slate-500">Jul 2025</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300 pb-1 border-b border-white/5">
                          <span className="text-emerald-400 font-bold">[SEC]</span>
                          <span>Ethical Hacking</span>
                          <span className="text-slate-500">Jan 2025</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300 pb-1 border-b border-white/5">
                          <span className="text-cyan-400 font-bold">[GCP]</span>
                          <span>Cloud Fundamentals</span>
                          <span className="text-slate-500">Mar 2025</span>
                        </div>
                        <div className="flex items-center justify-between text-slate-300 pb-1 border-b border-white/5">
                          <span className="text-amber-400 font-bold">[ORACLE]</span>
                          <span>Oracle Certification</span>
                          <span className="text-slate-500">Aug 2026</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Terminal Footer Info Bar */}
                <div className="px-4 py-2.5 bg-[#080d1a] border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span>status: 200 OK</span>
                  </div>
                  <span>UTF-8 • Node v24.19.0</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
